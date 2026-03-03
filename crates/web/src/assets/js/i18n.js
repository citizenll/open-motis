// ── i18n core module ────────────────────────────────────────
//
// Single entry point for all translations. Uses i18next under the hood.
// English is loaded eagerly; other locales are lazy-loaded on demand.
//
// Exports:
//   locale       – reactive Preact signal for current locale
//   t(key, opts) – global translation function for imperative DOM code
//   useTranslation(ns) – Preact hook that subscribes to locale signal
//   setLocale(lng)     – switch language, persist to localStorage
//   init()             – initialise i18next, load English bundles
//   translateStaticElements(root) – translate static data-i18n elements/attrs

import { signal, useComputed } from "@preact/signals";
import i18next from "i18next";

var STORAGE_KEY = "moltis-locale";
var initPromise = null;
var SUPPORTED_LOCALES = new Set(["en", "fr", "zh"]);
export var supportedLocales = Object.freeze(["en", "fr", "zh"]);

function normalizeLocaleTag(value) {
	if (!value) return "en";
	var tag = String(value).trim().replace("_", "-");
	if (!tag) return "en";
	var idx = tag.indexOf("-");
	if (idx !== -1) {
		tag = tag.slice(0, idx);
	}
	return tag.toLowerCase();
}

function resolveSupportedLocale(value) {
	var normalized = normalizeLocaleTag(value);
	if (SUPPORTED_LOCALES.has(normalized)) return normalized;
	return "en";
}

export function getPreferredLocale() {
	var stored = localStorage.getItem(STORAGE_KEY);
	if (stored) {
		return resolveSupportedLocale(stored);
	}
	return resolveSupportedLocale(navigator.language || "en");
}

// ── Locale signal ───────────────────────────────────────────
// Reactive — Preact components that read locale.value will re-render
// when the language changes.
export var locale = signal(getPreferredLocale());

// ── Namespace registry ──────────────────────────────────────
// Maps namespace name → lazy loader. English bundles are loaded eagerly
// at init(); other locales load on demand via setLocale().
var namespaces = {
	common: (lng) => import(`./locales/${lng}/common.js`),
	errors: (lng) => import(`./locales/${lng}/errors.js`),
	settings: (lng) => import(`./locales/${lng}/settings.js`),
	agents: (lng) => import(`./locales/${lng}/agents.js`),
	providers: (lng) => import(`./locales/${lng}/providers.js`),
	chat: (lng) => import(`./locales/${lng}/chat.js`),
	onboarding: (lng) => import(`./locales/${lng}/onboarding.js`),
	login: (lng) => import(`./locales/${lng}/login.js`),
	crons: (lng) => import(`./locales/${lng}/crons.js`),
	mcp: (lng) => import(`./locales/${lng}/mcp.js`),
	skills: (lng) => import(`./locales/${lng}/skills.js`),
	channels: (lng) => import(`./locales/${lng}/channels.js`),
	hooks: (lng) => import(`./locales/${lng}/hooks.js`),
	projects: (lng) => import(`./locales/${lng}/projects.js`),
	images: (lng) => import(`./locales/${lng}/images.js`),
	metrics: (lng) => import(`./locales/${lng}/metrics.js`),
	networkAudit: (lng) => import(`./locales/${lng}/networkAudit.js`),
	pwa: (lng) => import(`./locales/${lng}/pwa.js`),
	sessions: (lng) => import(`./locales/${lng}/sessions.js`),
	logs: (lng) => import(`./locales/${lng}/logs.js`),
	terminal: (lng) => import(`./locales/${lng}/terminal.js`),
};

// ── Load all namespace bundles for a language ───────────────
function loadLanguage(lng) {
	var keys = Object.keys(namespaces);
	var promises = keys.map((ns) =>
		namespaces[ns](lng)
			.then((mod) => {
				i18next.addResourceBundle(lng, ns, mod.default || mod, true, true);
			})
			.catch((err) => {
				console.warn(`[i18n] failed to load ${lng}/${ns}`, err);
			}),
	);
	return Promise.all(promises);
}

function applyDocumentLocale(lng) {
	if (typeof document === "undefined" || !document.documentElement) return;
	document.documentElement.lang = lng || "en";
}

// ── Public API ──────────────────────────────────────────────

/**
 * Initialise i18next with English bundles.
 * Call once at app startup before any t() calls.
 */
export function init() {
	if (initPromise) return initPromise;
	initPromise = i18next
		.init({
			lng: locale.value,
			fallbackLng: "en",
			defaultNS: "common",
			ns: Object.keys(namespaces),
			interpolation: {
				escapeValue: false, // Preact / DOM handles escaping
			},
			resources: {},
		})
		.then(() => loadLanguage("en"))
		.then(() => {
			// If the detected locale isn't English, load it too.
			if (locale.value !== "en") {
				return loadLanguage(locale.value);
			}
		})
		.then(() => {
			// Ensure i18next is set to the detected locale after bundles load.
			if (i18next.language !== locale.value) {
				return i18next.changeLanguage(locale.value);
			}
		})
		.then(() => {
			applyDocumentLocale(locale.value);
		});
	return initPromise;
}

/**
 * Global translation function for imperative DOM code.
 *   t("common:actions.save")
 *   t("errors:usageLimitReached.title", { planType: "free" })
 *
 * Namespace can be specified with colon prefix or via the `ns` option.
 */
export function t(key, opts) {
	return i18next.t(key, opts);
}

export function hasTranslation(key, opts) {
	return i18next.exists(key, opts);
}

/**
 * Preact hook — returns { t, locale } that triggers re-render on locale change.
 *
 * Usage:
 *   var { t } = useTranslation("settings");
 *   return html`<h2>${t("identity.title")}</h2>`;
 */
export function useTranslation(ns) {
	// Reading locale.value inside useComputed creates a reactive dependency.
	// When locale changes, the computed re-evaluates and Preact re-renders.
	var bound = useComputed(() => {
		var _lng = locale.value; // subscribe to signal
		void _lng;
		return {
			t: (key, opts) => {
				var options = opts ? Object.assign({ ns: ns }, opts) : { ns: ns };
				return i18next.t(key, options);
			},
			locale: locale.value,
		};
	});
	return bound.value;
}

/**
 * Switch the active locale. Lazy-loads the bundle if needed, persists
 * to localStorage, and triggers a re-render of all subscribed components.
 */
export function setLocale(lng) {
	var normalized = resolveSupportedLocale(lng);
	localStorage.setItem(STORAGE_KEY, normalized);
	return loadLanguage(normalized).then(() =>
		i18next.changeLanguage(normalized).then(() => {
			locale.value = normalized;
			applyDocumentLocale(normalized);
			// Re-translate any static data-i18n elements.
			translateStaticElements(document.documentElement);
			window.dispatchEvent(new CustomEvent("moltis:locale-changed", { detail: { locale: normalized } }));
		}),
	);
}

function applyStaticTranslation(el, key, attrName) {
	if (!key) return;
	var translated = i18next.t(key);
	// Only update if i18next returned a real translation (not the key itself).
	if (!(translated && translated !== key)) return;
	if (attrName) {
		el.setAttribute(attrName, translated);
		return;
	}
	el.textContent = translated;
}

/**
 * Translate static data-i18n markers under `root`.
 *
 * Supported markers:
 * - `data-i18n="ns:key"`: set element textContent
 * - `data-i18n-title="ns:key"`: set `title` attribute
 * - `data-i18n-placeholder="ns:key"`: set `placeholder` attribute
 * - `data-i18n-aria-label="ns:key"`: set `aria-label` attribute
 */
export function translateStaticElements(root) {
	if (!root) return;
	var elements = root.querySelectorAll("[data-i18n],[data-i18n-title],[data-i18n-placeholder],[data-i18n-aria-label]");
	for (var el of elements) {
		applyStaticTranslation(el, el.getAttribute("data-i18n"));
		applyStaticTranslation(el, el.getAttribute("data-i18n-title"), "title");
		applyStaticTranslation(el, el.getAttribute("data-i18n-placeholder"), "placeholder");
		applyStaticTranslation(el, el.getAttribute("data-i18n-aria-label"), "aria-label");
	}
}

var literalMatcherCache = new Map();
var skipClosestSelector = "code,pre,textarea,input,[contenteditable='true'],.skill-body-md,.terminal-output";

function escapeRegex(source) {
	return source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeForMatch(value) {
	if (typeof value !== "string") return "";
	return value
		.trim()
		.replace(/\s+/g, " ");
}

function flattenLeafStrings(obj, prefix, out) {
	if (!(obj && typeof obj === "object")) return;
	for (var key of Object.keys(obj)) {
		var value = obj[key];
		var next = prefix ? `${prefix}.${key}` : key;
		if (value && typeof value === "object" && !Array.isArray(value)) {
			flattenLeafStrings(value, next, out);
			continue;
		}
		if (typeof value === "string") {
			out.push({ key: next, value: value });
		}
	}
}

function buildMatcherForNamespace(ns) {
	if (literalMatcherCache.has(ns)) return literalMatcherCache.get(ns);
	var bundle = i18next.getResourceBundle("en", ns);
	var matcher = {
		exact: new Map(),
		exactNormalized: new Map(),
		patterns: [],
	};
	if (!(bundle && typeof bundle === "object")) {
		literalMatcherCache.set(ns, matcher);
		return matcher;
	}

	var leaves = [];
	flattenLeafStrings(bundle, "", leaves);
	for (var leaf of leaves) {
		var value = leaf.value;
		if (!value) continue;
		var fullKey = `${ns}:${leaf.key}`;
		if (!value.includes("{{")) {
			if (!matcher.exact.has(value)) matcher.exact.set(value, fullKey);
			var normalizedExact = normalizeForMatch(value);
			if (normalizedExact && !matcher.exactNormalized.has(normalizedExact)) {
				matcher.exactNormalized.set(normalizedExact, fullKey);
			}
			continue;
		}
		var names = [];
		var regexSource = "";
		var tokenRe = /{{\s*([^}]+?)\s*}}/g;
		var last = 0;
		var m;
		while ((m = tokenRe.exec(value)) !== null) {
			regexSource += escapeRegex(value.slice(last, m.index));
			regexSource += "(.+?)";
			names.push(String(m[1]).trim());
			last = m.index + m[0].length;
		}
		regexSource += escapeRegex(value.slice(last));
		if (!names.length) continue;
		var normalizedPattern = normalizeForMatch(value);
		var normalizedRegexSource = "";
		last = 0;
		tokenRe.lastIndex = 0;
		while ((m = tokenRe.exec(normalizedPattern)) !== null) {
			normalizedRegexSource += escapeRegex(normalizedPattern.slice(last, m.index));
			normalizedRegexSource += "(.+?)";
			last = m.index + m[0].length;
		}
		normalizedRegexSource += escapeRegex(normalizedPattern.slice(last));
		matcher.patterns.push({
			key: fullKey,
			regex: new RegExp(`^${regexSource}$`),
			normalizedRegex: new RegExp(`^${normalizedRegexSource}$`),
			names: names,
			priority: value.length,
		});
	}

	matcher.patterns.sort((a, b) => b.priority - a.priority);
	literalMatcherCache.set(ns, matcher);
	return matcher;
}

function translateLiteralInNamespace(ns, text) {
	var matcher = buildMatcherForNamespace(ns);
	var exactKey = matcher.exact.get(text);
	var normalizedText = normalizeForMatch(text);
	if (!exactKey && normalizedText) {
		exactKey = matcher.exactNormalized.get(normalizedText);
	}
	if (exactKey) {
		var exactTranslated = i18next.t(exactKey);
		if (exactTranslated && exactTranslated !== exactKey) return exactTranslated;
	}

	for (var pattern of matcher.patterns) {
		var match = text.match(pattern.regex) || (normalizedText ? normalizedText.match(pattern.normalizedRegex) : null);
		if (!match) continue;
		var vars = {};
		for (var i = 0; i < pattern.names.length; i++) {
			vars[pattern.names[i]] = match[i + 1];
		}
		var translated = i18next.t(pattern.key, vars);
		if (translated && translated !== pattern.key) return translated;
	}
	return null;
}

function translateLiteralAcrossNamespaces(text, namespaceList) {
	for (var ns of namespaceList) {
		var translated = translateLiteralInNamespace(ns, text);
		if (translated && translated !== text) return translated;
	}
	return null;
}

function shouldSkipElement(el) {
	if (!el || !el.closest) return false;
	return Boolean(el.closest(skipClosestSelector));
}

/**
 * Translate hard-coded English text in dynamic Preact pages by reverse-matching
 * against English bundles and re-emitting localized strings for the active locale.
 */
export function translateDynamicLiterals(root, namespaceList) {
	if (!root || i18next.language === "en") return;
	var namespacesToUse =
		Array.isArray(namespaceList) && namespaceList.length ? namespaceList : Object.keys(namespaces);

	if (root.nodeType === 1 && !shouldSkipElement(root)) {
		for (var attr of ["title", "placeholder", "aria-label"]) {
			var value = root.getAttribute(attr);
			if (!value) continue;
			var translated = translateLiteralAcrossNamespaces(value, namespacesToUse);
			if (translated && translated !== value) root.setAttribute(attr, translated);
		}
	}

	var nodes = root.querySelectorAll("[title],[placeholder],[aria-label]");
	for (var node of nodes) {
		if (shouldSkipElement(node)) continue;
		for (var attr of ["title", "placeholder", "aria-label"]) {
			var value = node.getAttribute(attr);
			if (!value) continue;
			var translated = translateLiteralAcrossNamespaces(value, namespacesToUse);
			if (translated && translated !== value) node.setAttribute(attr, translated);
		}
	}

	var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
	var current;
	while ((current = walker.nextNode())) {
		var parent = current.parentElement;
		if (!parent || shouldSkipElement(parent)) continue;
		var raw = current.nodeValue;
		if (!raw) continue;
		var trimmed = raw.trim();
		if (!trimmed) continue;
		var translated = translateLiteralAcrossNamespaces(trimmed, namespacesToUse);
		if (!(translated && translated !== trimmed)) continue;
		current.nodeValue = raw.replace(trimmed, translated);
	}
}
