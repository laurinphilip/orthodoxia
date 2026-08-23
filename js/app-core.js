(function () {
  "use strict";

  const D = window.ORTHODOXIA_DATA;
  const prayers = window.ORTHODOXIA_PRAYERS || [];
  const saints = window.ORTHODOXIA_SAINTS || [];
  const C = window.ORTHODOXIA_CALENDAR;
  const storageKey = "orthodoxia-state-v1";

  const defaults = {
    lang: "de",
    calendar: "new",
    theme: "system",
    font: "normal",
    favorites: [],
    notes: {},
    selectedDate: C.iso(new Date()),
    calendarCursor: C.iso(new Date()),
    lastOpened: null
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return Object.assign({}, defaults, saved, {
        favorites: Array.isArray(saved.favorites) ? saved.favorites : [],
        notes: saved.notes && typeof saved.notes === "object" ? saved.notes : {}
      });
    } catch (_error) {
      return Object.assign({}, defaults);
    }
  }

  const state = loadState();
  const filters = { learn: "all", prayers: "all", saints: "all", notes: "all" };
  let toastTimer;

  const icons = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M16 3v4M8 3v4M3 10h18"></path></svg>',
    learn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22Z"></path><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22Z"></path></svg>',
    prayers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 3.5 12 6l2.5-2.5"></path><path d="M12 6v15"></path><path d="M7 10h10"></path><path d="M5.5 21h13"></path></svg>',
    saints: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="6" r="3.5"></circle><path d="M5 21c.4-5 2.7-8 7-8s6.6 3 7 8"></path><path d="M8 2.5C9 1.5 10.4 1 12 1s3 .5 4 1.5"></path></svg>',
    notes: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14v18H5z"></path><path d="M8 8h8M8 12h8M8 16h5"></path></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m16.5 16.5 4 4"></path></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path></svg>'
  };

  const routes = [
    { id: "home", label: D.ui.home, icon: icons.home },
    { id: "calendar", label: D.ui.calendar, icon: icons.calendar },
    { id: "learn", label: D.ui.learn, icon: icons.learn, count: D.articles.length },
    { id: "prayers", label: D.ui.prayers, icon: icons.prayers, count: prayers.length },
    { id: "saints", label: D.ui.saints, icon: icons.saints, count: saints.length },
    { id: "notes", label: D.ui.notes, icon: icons.notes }
  ];

  function t(value) {
    if (value && typeof value === "object" && ("de" in value || "en" in value)) return value[state.lang] || value.de || value.en;
    return value == null ? "" : String(value);
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function parseDate(value) {
    const parts = String(value).split("-").map(Number);
    return C.makeDate(parts[0], parts[1], parts[2]);
  }

  function formatDate(date, options) {
    const locale = state.lang === "de" ? "de-DE" : "en-GB";
    return new Intl.DateTimeFormat(locale, Object.assign({ timeZone: "UTC" }, options || { weekday: "long", day: "numeric", month: "long", year: "numeric" })).format(date);
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function contentKey(type, id) {
    return type + ":" + id;
  }

  function isFavorite(type, id) {
    return state.favorites.includes(contentKey(type, id));
  }

  function toggleFavorite(type, id) {
    const key = contentKey(type, id);
    state.favorites = isFavorite(type, id) ? state.favorites.filter((item) => item !== key) : state.favorites.concat(key);
    saveState();
    toast(isFavorite(type, id) ? (state.lang === "de" ? "Zu Favoriten hinzugefügt" : "Added to favorites") : (state.lang === "de" ? "Aus Favoriten entfernt" : "Removed from favorites"));
  }

  function getItem(type, id) {
    const collection = type === "article" ? D.articles : type === "prayer" ? prayers : saints;
    return collection.find((item) => item.id === id);
  }

  function getItemTitle(key) {
    const parts = key.split(":");
    const item = getItem(parts[0], parts.slice(1).join(":"));
    return item ? t(item.title || item.name) : key;
  }

  function favoriteButton(type, id) {
    const active = isFavorite(type, id);
    const label = active ? (state.lang === "de" ? "Favorit entfernen" : "Remove favorite") : (state.lang === "de" ? "Als Favorit speichern" : "Save as favorite");
    return '<button class="favorite-button' + (active ? " active" : "") + '" type="button" data-favorite="' + esc(type) + '" data-id="' + esc(id) + '" aria-label="' + esc(label) + '" title="' + esc(label) + '"><span aria-hidden="true">' + (active ? "♥" : "♡") + "</span></button>";
  }

  function toast(message) {
    const el = document.getElementById("toast");
    clearTimeout(toastTimer);
    el.textContent = message;
    el.classList.add("show");
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2300);
  }

  function noteEditor(type, id) {
    const key = contentKey(type, id);
    const value = state.notes[key] || "";
    return '<section class="personal-note"><label for="item-note">' + (state.lang === "de" ? "Meine persönliche Notiz" : "My personal note") + '</label><textarea id="item-note" placeholder="' + (state.lang === "de" ? "Gedanken, Fragen oder Merksätze …" : "Thoughts, questions, or key ideas…") + '">' + esc(value) + '</textarea><div class="dialog-actions"><button class="button small" type="button" data-save-note="' + esc(key) + '">' + t(D.ui.save) + '</button><button class="button secondary small" type="button" data-favorite="' + esc(type) + '" data-id="' + esc(id) + '">' + (isFavorite(type, id) ? (state.lang === "de" ? "Favorit entfernen" : "Remove favorite") : (state.lang === "de" ? "Als Favorit speichern" : "Save favorite")) + "</button></div></section>";
  }

  function openItem(type, id) {
    const item = getItem(type, id);
    if (!item) return;
    state.lastOpened = contentKey(type, id);
    saveState();
    let html = "";
    if (type === "article") {
      html += '<p class="dialog-kicker">' + esc(t(D.ui.categories[item.category])) + "</p>";
      html += "<h2>" + esc(t(item.title)) + "</h2>";
      html += '<p class="dialog-summary">' + esc(t(item.summary)) + "</p>";
      html += '<div class="article-body">';
      item.paragraphs.forEach(function (paragraph) { html += "<p>" + esc(t(paragraph)) + "</p>"; });
      html += "<h3>" + (state.lang === "de" ? "Auf einen Blick" : "At a glance") + "</h3><ul class=\"key-points\">";
      item.points.forEach(function (point) { html += "<li>" + esc(t(point)) + "</li>"; });
      html += "</ul><blockquote>" + esc(item.scripture) + "</blockquote></div>";
    } else if (type === "prayer") {
      html += '<p class="dialog-kicker">' + esc(t(item.occasion)) + "</p>";
      html += "<h2>" + esc(t(item.title)) + "</h2>";
      html += '<div class="prayer-body">' + esc(t(item.body)) + "</div>";
      html += '<p class="dialog-summary">' + esc(t(item.source)) + "</p>";
    } else {
      html += '<p class="dialog-kicker">' + esc(t(item.epithet)) + "</p>";
      html += "<h2>" + esc(t(item.name)) + "</h2>";
      html += '<p class="dialog-summary">' + esc(t(item.region)) + " · " + esc(item.century) + " " + (state.lang === "de" ? "Jahrhundert" : "century") + "</p>";
      html += '<div class="article-body"><p>' + esc(t(item.bio)) + "</p></div>";
      const feastDate = C.makeDate(new Date().getUTCFullYear(), item.month, item.day);
      html += '<blockquote>' + (state.lang === "de" ? "Gedenktag: " : "Feast day: ") + esc(formatDate(feastDate, { day: "numeric", month: "long" })) + (state.calendar === "old" ? (state.lang === "de" ? " (kirchliches Datum, alter Kalender)" : " (ecclesiastical date, old calendar)") : "") + "</blockquote>";
    }
    html += noteEditor(type, id);
    document.getElementById("dialog-content").innerHTML = html;
    const dialog = document.getElementById("content-dialog");
    if (!dialog.open) dialog.showModal();
  }

  function applyTheme() {
    let theme = state.theme;
    if (theme === "system") theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    const scale = state.font === "large" ? "1.1" : state.font === "small" ? ".93" : "1";
    document.documentElement.style.setProperty("--text-scale", scale);
    document.documentElement.lang = state.lang;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#1c1816" : "#6f1827");
  }

  function currentRoute() {
    const route = location.hash.replace(/^#/, "").split("/")[0] || "home";
    return routes.some(function (item) { return item.id === route; }) ? route : "home";
  }

  function navLink(route, mobile) {
    const active = currentRoute() === route.id;
    return '<a class="nav-link' + (active ? " active" : "") + '" href="#' + route.id + '" data-route="' + route.id + '"' + (active ? ' aria-current="page"' : "") + ">" + route.icon + "<span>" + esc(t(route.label)) + "</span>" + (!mobile && route.count ? '<span class="nav-count">' + route.count + "</span>" : "") + "</a>";
  }

  function updateChrome() {
    routes.forEach(function (route) {
      if (route.id === "learn") route.count = D.articles.length;
      if (route.id === "prayers") route.count = prayers.length;
      if (route.id === "saints") route.count = saints.length;
    });
    document.getElementById("side-nav").innerHTML = routes.map(function (route) { return navLink(route, false); }).join("");
    document.getElementById("drawer-nav").innerHTML = routes.map(function (route) { return navLink(route, false); }).join("");
    document.getElementById("bottom-nav").innerHTML = routes.slice(0, 4).concat(routes[5]).map(function (route) { return navLink(route, true); }).join("");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.dataset.i18n;
      if (D.ui[key]) el.textContent = t(D.ui[key]);
    });
    document.getElementById("language-toggle").textContent = state.lang === "de" ? "EN" : "DE";
    const today = new Date();
    document.getElementById("today-line").textContent = formatDate(today);
    const route = routes.find(function (item) { return item.id === currentRoute(); });
    document.getElementById("page-title").textContent = t(route.label);
  }

  function closeDrawer() {
    document.getElementById("mobile-drawer").classList.remove("open");
    document.getElementById("mobile-drawer").setAttribute("aria-hidden", "true");
    document.getElementById("drawer-backdrop").hidden = true;
    document.getElementById("mobile-menu").setAttribute("aria-expanded", "false");
  }

  function openDrawer() {
    document.getElementById("mobile-drawer").classList.add("open");
    document.getElementById("mobile-drawer").setAttribute("aria-hidden", "false");
    document.getElementById("drawer-backdrop").hidden = false;
    document.getElementById("mobile-menu").setAttribute("aria-expanded", "true");
  }

  function render() {
    updateChrome();
    const route = currentRoute();
    const renderer = OA.views && OA.views[route];
    document.getElementById("main-content").innerHTML = renderer ? renderer() : OA.views.home();
    OA.bindView(route);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function saveNote(key) {
    const textarea = document.getElementById("item-note");
    if (!textarea) return;
    const value = textarea.value.trim();
    if (value) state.notes[key] = value;
    else delete state.notes[key];
    saveState();
    toast(t(D.ui.saved));
  }

  function handleClick(event) {
    const favorite = event.target.closest("[data-favorite]");
    if (favorite) {
      event.preventDefault();
      event.stopPropagation();
      toggleFavorite(favorite.dataset.favorite, favorite.dataset.id);
      if (document.getElementById("content-dialog").open) openItem(favorite.dataset.favorite, favorite.dataset.id);
      else render();
      return;
    }
    const opener = event.target.closest("[data-open]");
    if (opener) {
      openItem(opener.dataset.open, opener.dataset.id);
      return;
    }
    const saveButton = event.target.closest("[data-save-note]");
    if (saveButton) {
      saveNote(saveButton.dataset.saveNote);
      return;
    }
    const chip = event.target.closest("[data-filter]");
    if (chip) {
      filters[chip.dataset.filter] = chip.dataset.value;
      render();
      return;
    }
    if (event.target.closest("[data-open-settings]")) OA.openSettings();
  }

  function bindGlobal() {
    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", function () { closeDrawer(); render(); });
    document.getElementById("language-toggle").addEventListener("click", function () {
      state.lang = state.lang === "de" ? "en" : "de";
      saveState();
      render();
    });
    document.getElementById("settings-button").addEventListener("click", OA.openSettings);
    document.getElementById("search-button").addEventListener("click", OA.openSearch);
    document.getElementById("mobile-menu").addEventListener("click", openDrawer);
    document.getElementById("drawer-close").addEventListener("click", closeDrawer);
    document.getElementById("drawer-backdrop").addEventListener("click", closeDrawer);
    if (window.matchMedia) window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () { if (state.theme === "system") applyTheme(); });
  }

  function init() {
    applyTheme();
    bindGlobal();
    if (!location.hash) history.replaceState(null, "", "#home");
    render();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").catch(function () {});
    }
  }

  const OA = {
    C, D, filters, icons, prayers, routes, saints, state,
    applyTheme, closeDrawer, contentKey, esc, favoriteButton, formatDate,
    getItem, getItemTitle, init, isFavorite, openItem, parseDate, render,
    saveState, t, toast, toggleFavorite, views: {}
  };
  window.OA = OA;
})();
