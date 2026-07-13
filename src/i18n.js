(function () {
  const DEFAULT_LOCALE = "de";
  const SUPPORTED_LOCALES = ["en", "de"];

  function normalizeLocale(locale) {
    const value = String(locale || "").toLowerCase();
    return SUPPORTED_LOCALES.includes(value) ? value : DEFAULT_LOCALE;
  }

  function getLocale() {
    const params = new URLSearchParams(window.location.search);
    return normalizeLocale(params.get("lang"));
  }

  function getCopy(locale = getLocale()) {
    const normalizedLocale = normalizeLocale(locale);
    const copy = window.HwWorkshopCopy || {};
    return copy[normalizedLocale] || copy[DEFAULT_LOCALE] || {};
  }

  function applyDocument(pageName, locale = getLocale()) {
    const copy = getCopy(locale);
    const title = copy.meta && copy.meta[`${pageName}Title`];

    document.documentElement.lang = copy.meta?.htmlLang || normalizeLocale(locale);

    if (title) {
      document.title = title;
    }
  }

  function localizeHref(href, locale = getLocale()) {
    if (!href || isExternalHref(href)) {
      return href;
    }

    const [pathAndQuery, hash = ""] = href.split("#");
    const [path, search = ""] = pathAndQuery.split("?");
    const params = new URLSearchParams(search);
    params.set("lang", normalizeLocale(locale));

    return `${path}?${params.toString()}${hash ? `#${hash}` : ""}`;
  }

  function localeUrl(locale) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", normalizeLocale(locale));

    return `${currentFileName(url)}${url.search}${url.hash}`;
  }

  function currentFileName(url) {
    const parts = url.pathname.split("/");
    return parts[parts.length - 1] || "index.html";
  }

  function isExternalHref(href) {
    return /^(https?:|mailto:|tel:|#)/i.test(href);
  }

  window.HwI18n = {
    DEFAULT_LOCALE,
    SUPPORTED_LOCALES,
    applyDocument,
    getCopy,
    getLocale,
    localeUrl,
    localizeHref,
    normalizeLocale
  };
})();
