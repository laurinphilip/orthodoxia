(function () {
  "use strict";
  const A = window.OA;
  const D = A.D;
  const C = A.C;
  const queries = { learn: "", prayers: "", saints: "" };

  function intro(eyebrow, title, text, action) {
    return '<section class="page-intro"><div><p class="eyebrow">' + A.esc(eyebrow) + "</p><h2>" + A.esc(title) + "</h2><p>" + A.esc(text) + "</p></div>" + (action || "") + "</section>";
  }

  function articleCard(item) {
    return '<article class="card interactive searchable-card" data-open="article" data-id="' + A.esc(item.id) + '" data-search="' + A.esc((A.t(item.title) + " " + A.t(item.summary)).toLowerCase()) + '" tabindex="0" role="button">' +
      A.favoriteButton("article", item.id) +
      '<div class="card-meta"><span class="pill wine">' + A.esc(A.t(D.ui.categories[item.category])) + '</span><span>' + item.paragraphs.length + " " + (A.state.lang === "de" ? "Abschnitte" : "sections") + "</span></div>" +
      "<h3>" + A.esc(A.t(item.title)) + "</h3><p>" + A.esc(A.t(item.summary)) + "</p></article>";
  }

  function prayerCard(item) {
    const labels = {
      daily: A.state.lang === "de" ? "Täglich" : "Daily",
      traditional: A.state.lang === "de" ? "Traditionell" : "Traditional",
      intercession: A.state.lang === "de" ? "Fürbitte" : "Intercession",
      sacraments: A.state.lang === "de" ? "Sakramente" : "Sacraments"
    };
    return '<article class="card interactive searchable-card" data-open="prayer" data-id="' + A.esc(item.id) + '" data-search="' + A.esc((A.t(item.title) + " " + A.t(item.occasion)).toLowerCase()) + '" tabindex="0" role="button">' +
      A.favoriteButton("prayer", item.id) +
      '<div class="icon-tile" aria-hidden="true">☦</div><div class="card-meta"><span class="pill gold">' + A.esc(labels[item.category]) + "</span></div>" +
      "<h3>" + A.esc(A.t(item.title)) + "</h3><p>" + A.esc(A.t(item.occasion)) + "</p></article>";
  }

  function saintCard(item) {
    const period = Number(String(item.century).match(/\d+/)[0]) <= 7 ? "ancient" : Number(String(item.century).match(/\d+/)[0]) >= 18 ? "modern" : "medieval";
    return '<article class="card interactive searchable-card" data-open="saint" data-id="' + A.esc(item.id) + '" data-period="' + period + '" data-search="' + A.esc((A.t(item.name) + " " + A.t(item.epithet) + " " + A.t(item.region)).toLowerCase()) + '" tabindex="0" role="button">' +
      A.favoriteButton("saint", item.id) +
      '<div class="icon-tile" aria-hidden="true">☦</div><div class="card-meta"><span class="pill gold">' + item.day + "." + item.month + '.</span><span>' + A.esc(item.century) + " " + (A.state.lang === "de" ? "Jh." : "c.") + "</span></div>" +
      "<h3>" + A.esc(A.t(item.name)) + "</h3><p>" + A.esc(A.t(item.epithet)) + "</p></article>";
  }

  function filterChips(route, values) {
    return '<div class="chip-row">' + values.map(function (value) {
      return '<button class="chip' + (A.filters[route] === value.id ? " active" : "") + '" type="button" data-filter="' + route + '" data-value="' + value.id + '">' + A.esc(value.label) + "</button>";
    }).join("") + "</div>";
  }

  function searchField(route) {
    return '<label class="inline-search">' + A.icons.search + '<input id="' + route + '-search" type="search" value="' + A.esc(queries[route]) + '" placeholder="' + (A.state.lang === "de" ? "In diesem Bereich suchen …" : "Search this section…") + '" aria-label="' + (A.state.lang === "de" ? "Bereich durchsuchen" : "Search section") + '"></label>';
  }

  function todayUtc() {
    const now = new Date();
    return C.makeDate(now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate());
  }

  function home() {
    const today = todayUtc();
    const info = C.getDayInfo(today, A.state.calendar);
    const next = C.nextMajorFeast(C.addDays(today, 1), A.state.calendar);
    const primaryEvent = info.feasts[0] || info.saints[0];
    const eventTitle = primaryEvent ? A.t(primaryEvent.name) : (A.state.lang === "de" ? "Ein Tag im Kirchenjahr" : "A day in the Church year");
    const eventText = info.feasts.length ? (A.state.lang === "de" ? "Fest- oder Gedenktag im ausgewählten Kalender." : "Feast or commemoration in the selected calendar.") : info.saints.length ? A.t(info.saints[0].epithet) : (A.state.lang === "de" ? "Nimm dir heute einen ruhigen Augenblick für Gebet und Dank." : "Take a quiet moment today for prayer and thanksgiving.");
    const day = today.getUTCDate();
    const month = A.formatDate(today, { month: "short" }).replace(".", "");
    const randomArticle = D.articles[(today.getUTCDate() + today.getUTCMonth()) % D.articles.length];
    const randomPrayer = A.prayers[(today.getUTCDate() + 2 * today.getUTCMonth()) % A.prayers.length];

    let html = '<section class="hero"><div class="hero-copy"><p class="eyebrow">' + (A.state.lang === "de" ? "Dein orthodoxer Begleiter" : "Your Orthodox companion") + "</p><h2>" + (A.state.lang === "de" ? "Glaube, Gebet und Kirchenjahr an einem Ort." : "Faith, prayer, and the Church year in one place.") + "</h2><p>" + (A.state.lang === "de" ? "Lerne in deinem Tempo, bete auch offline und behalte wichtige Gedanken für dich fest." : "Learn at your own pace, pray even offline, and keep meaningful thoughts for yourself.") + '</p><div class="hero-actions"><button class="button light" type="button" data-open="prayer" data-id="morning">' + (A.state.lang === "de" ? "Morgengebet öffnen" : "Open morning prayer") + '</button><a class="button ghost-light" href="#learn">' + (A.state.lang === "de" ? "Glauben entdecken" : "Explore the faith") + '</a></div></div><div class="hero-symbol" aria-hidden="true">☦</div></section>';

    html += '<div class="daily-grid"><article class="card daily-feast"><div class="date-seal"><span>' + A.esc(month) + "</span><strong>" + day + '</strong></div><div><div class="card-meta"><span class="pill gold">' + (A.state.calendar === "old" ? (A.state.lang === "de" ? "Alter Kalender" : "Old calendar") : (A.state.lang === "de" ? "Neuer Kalender" : "New calendar")) + "</span></div><h3>" + A.esc(eventTitle) + "</h3><p>" + A.esc(eventText) + '</p><a class="text-button" href="#calendar">' + (A.state.lang === "de" ? "Tag im Kalender öffnen →" : "Open day in calendar →") + "</a></div></article>";
    html += '<article class="card status-card"><span class="status-dot' + (info.fasting.level === "fast" || info.fasting.level === "partial" ? " fast" : "") + '"></span><div><div class="card-meta">' + (A.state.lang === "de" ? "Fastenhinweis" : "Fasting guidance") + "</div><h3>" + A.esc(A.t(info.fasting.name)) + "</h3><p>" + (A.state.lang === "de" ? "Allgemeine Angabe – die persönliche Regel bitte mit dem Priester klären." : "General indication—discuss your personal rule with your priest.") + "</p></div></article></div>";

    html += '<div class="section-head"><div><h3>' + (A.state.lang === "de" ? "Für heute" : "For today") + "</h3><p>" + (A.state.lang === "de" ? "Ein kleiner Schritt reicht." : "One small step is enough.") + '</p></div></div><section class="grid two">' + articleCard(randomArticle) + prayerCard(randomPrayer) + "</section>";

    if (next) {
      html += '<div class="section-head"><div><h3>' + (A.state.lang === "de" ? "Nächstes großes Fest" : "Next great feast") + '</h3></div><a class="text-button" href="#calendar">' + (A.state.lang === "de" ? "Kalender" : "Calendar") + " →</a></div>";
      html += '<article class="card"><div class="card-meta"><span class="pill wine">' + A.esc(A.formatDate(next.date, { day: "numeric", month: "long" })) + "</span><span>" + next.days + " " + (A.state.lang === "de" ? "Tage" : "days") + "</span></div><h3>" + A.esc(A.t(next.feast.name)) + "</h3><p>" + (A.state.lang === "de" ? "Das Datum wurde nach orthodoxer Pascha-Berechnung und deinem gewählten festen Kalender bestimmt." : "The date is determined from Orthodox Paschal calculation and your selected fixed calendar.") + "</p></article>";
    }

    html += '<div class="section-head"><div><h3>' + (A.state.lang === "de" ? "Schnellzugriff" : "Quick access") + '</h3></div></div><section class="grid four">' +
      '<a class="card interactive" href="#prayers"><div class="icon-tile">☦</div><h3>' + A.t(D.ui.prayers) + "</h3><p>" + A.prayers.length + " " + (A.state.lang === "de" ? "Gebete für Alltag und Gottesdienst." : "prayers for daily and sacramental life.") + "</p></a>" +
      '<a class="card interactive" href="#learn"><div class="icon-tile">A</div><h3>' + A.t(D.ui.learn) + "</h3><p>" + D.articles.length + " " + (A.state.lang === "de" ? "verständliche Einführungen." : "clear introductions.") + "</p></a>" +
      '<a class="card interactive" href="#saints"><div class="icon-tile">✦</div><h3>' + A.t(D.ui.saints) + "</h3><p>" + A.saints.length + " " + (A.state.lang === "de" ? "ausgewählte Lebensgeschichten." : "selected lives and witnesses.") + "</p></a>" +
      '<a class="card interactive" href="#notes"><div class="icon-tile">✎</div><h3>' + A.t(D.ui.notes) + "</h3><p>" + (A.state.lang === "de" ? "Favoriten, Notizen und Sicherung." : "Favorites, notes, and backup.") + "</p></a></section>";
    return html;
  }

  function calendar() {
    const cursor = A.parseDate(A.state.calendarCursor);
    const first = C.makeDate(cursor.getUTCFullYear(), cursor.getUTCMonth() + 1, 1);
    const startOffset = (first.getUTCDay() + 6) % 7;
    const gridStart = C.addDays(first, -startOffset);
    const selected = A.parseDate(A.state.selectedDate);
    const selectedInfo = C.getDayInfo(selected, A.state.calendar);
    const weekdays = A.state.lang === "de" ? ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"] : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const title = A.formatDate(first, { month: "long", year: "numeric" });
    const mode = '<div class="segmented" style="min-width:260px"><button type="button" data-calendar-style="new" class="' + (A.state.calendar === "new" ? "active" : "") + '">' + (A.state.lang === "de" ? "Neuer Kalender" : "New calendar") + '</button><button type="button" data-calendar-style="old" class="' + (A.state.calendar === "old" ? "active" : "") + '">' + (A.state.lang === "de" ? "Alter Kalender" : "Old calendar") + "</button></div>";
    let html = intro(A.state.lang === "de" ? "Feste, Heilige und Fastenzeiten" : "Feasts, saints, and fasting seasons", A.t(D.ui.calendar), A.state.lang === "de" ? "Der Kalender berechnet Pascha und alle davon abhängigen Feste automatisch." : "The calendar automatically calculates Pascha and all dependent feasts.", mode);
    html += '<section class="calendar-layout"><div><div class="calendar-card"><div class="calendar-head"><button class="icon-button" type="button" data-cal-action="prev" aria-label="' + (A.state.lang === "de" ? "Vorheriger Monat" : "Previous month") + '">‹</button><h3>' + A.esc(title) + '</h3><button class="icon-button" type="button" data-cal-action="next" aria-label="' + (A.state.lang === "de" ? "Nächster Monat" : "Next month") + '">›</button></div><div class="calendar-weekdays">' + weekdays.map(function (day) { return "<span>" + day + "</span>"; }).join("") + '</div><div class="calendar-days">';
    for (let i = 0; i < 42; i += 1) {
      const date = C.addDays(gridStart, i);
      const info = C.getDayInfo(date, A.state.calendar);
      const outside = date.getUTCMonth() !== first.getUTCMonth();
      const isSelected = C.sameDate(date, selected);
      const isToday = C.sameDate(date, todayUtc());
      const label = A.formatDate(date) + (info.feasts.length ? ", " + A.t(info.feasts[0].name) : "");
      html += '<button class="calendar-day' + (outside ? " outside" : "") + (isSelected ? " selected" : "") + (isToday ? " today" : "") + '" type="button" data-cal-date="' + C.iso(date) + '" aria-label="' + A.esc(label) + '"><span class="day-number">' + date.getUTCDate() + '</span><span class="day-dots">' + (info.feasts.length ? '<span class="dot"></span>' : "") + (info.fasting.level === "fast" || info.fasting.level === "partial" ? '<span class="dot fast"></span>' : "") + "</span></button>";
    }
    html += '</div><div class="calendar-legend"><span><i class="legend-dot"></i>' + (A.state.lang === "de" ? "Fest/Gedenken" : "Feast/commemoration") + '</span><span><i class="legend-dot fast"></i>' + (A.state.lang === "de" ? "Fastenhinweis" : "Fasting guidance") + '</span><button class="text-button" type="button" data-cal-action="today">' + (A.state.lang === "de" ? "Heute" : "Today") + "</button></div></div></div>";
    html += '<aside class="calendar-card day-panel"><p class="eyebrow">' + (A.state.lang === "de" ? "Ausgewählter Tag" : "Selected day") + "</p><h3>" + A.esc(A.formatDate(selected)) + "</h3>";
    if (A.state.calendar === "old") html += '<p class="card-meta">' + (A.state.lang === "de" ? "Kirchliches Datum: " : "Ecclesiastical date: ") + A.esc(A.formatDate(selectedInfo.ecclesiasticalDate, { day: "numeric", month: "long" })) + "</p>";
    html += '<div class="day-list">';
    selectedInfo.feasts.forEach(function (event) { html += '<div class="day-event"><strong>' + A.esc(A.t(event.name)) + "</strong><small>" + (event.fixed ? (A.state.lang === "de" ? "Fest mit festem Datum" : "Fixed feast") : (A.state.lang === "de" ? "Von Pascha abhängiger Tag" : "Pascha-dependent day")) + "</small></div>"; });
    selectedInfo.saints.forEach(function (saint) { html += '<button class="day-event text-button" type="button" data-open="saint" data-id="' + A.esc(saint.id) + '"><strong>' + A.esc(A.t(saint.name)) + "</strong><small>" + A.esc(A.t(saint.epithet)) + "</small></button>"; });
    html += '<div class="day-event fast"><strong>' + A.esc(A.t(selectedInfo.fasting.name)) + "</strong><small>" + (A.state.lang === "de" ? "Allgemeiner Hinweis; Praxis kann je nach Jurisdiktion und Person abweichen." : "General guidance; practice can vary by jurisdiction and person.") + "</small></div>";
    if (!selectedInfo.feasts.length && !selectedInfo.saints.length) html += '<p class="card-meta">' + (A.state.lang === "de" ? "Kein weiterer Eintrag in dieser kuratierten Auswahl." : "No further entry in this curated selection.") + "</p>";
    html += "</div></aside></section>";
    html += '<p class="card-meta" style="margin-top:1rem">' + (A.state.lang === "de" ? "Hinweis: Der neue/alte Kalender betrifft feste Feste. Pascha wird nach dem in der Orthodoxie verbreiteten julianischen Computus berechnet. Verbindlich ist der Kalender deiner Gemeinde." : "Note: New/old calendar selection concerns fixed feasts. Pascha is calculated using the Julian computus common in Orthodoxy. Your parish calendar is authoritative.") + "</p>";
    return html;
  }

  function learn() {
    const categories = [
      { id: "all", label: A.t(D.ui.all) },
      { id: "basics", label: A.t(D.ui.categories.basics) },
      { id: "worship", label: A.t(D.ui.categories.worship) },
      { id: "life", label: A.t(D.ui.categories.life) },
      { id: "church", label: A.t(D.ui.categories.church) }
    ];
    const selected = A.filters.learn;
    const items = selected === "all" ? D.articles : D.articles.filter(function (item) { return item.category === selected; });
    let html = intro(A.state.lang === "de" ? "Orthodoxie verständlich erklärt" : "Orthodoxy clearly explained", A.t(D.ui.learn), A.state.lang === "de" ? "Kurze, sorgfältige Einführungen – als Ausgangspunkt für Gespräch, Katechese und eigenes Lesen." : "Careful introductions as a starting point for conversation, catechesis, and further reading.");
    html += '<div class="toolbar">' + filterChips("learn", categories) + searchField("learn") + '</div><section class="grid three" id="learn-grid">' + items.map(articleCard).join("") + "</section>" + emptySearch();
    return html;
  }

  function prayersView() {
    const categories = [
      { id: "all", label: A.t(D.ui.all) },
      { id: "daily", label: A.state.lang === "de" ? "Täglich" : "Daily" },
      { id: "traditional", label: A.state.lang === "de" ? "Traditionell" : "Traditional" },
      { id: "intercession", label: A.state.lang === "de" ? "Fürbitte" : "Intercession" },
      { id: "sacraments", label: A.state.lang === "de" ? "Sakramente" : "Sacraments" }
    ];
    const selected = A.filters.prayers;
    const items = selected === "all" ? A.prayers : A.prayers.filter(function (item) { return item.category === selected; });
    let html = intro(A.state.lang === "de" ? "Mit den Worten der Kirche beten" : "Pray with the words of the Church", A.t(D.ui.prayers), A.state.lang === "de" ? "Traditionelle Texte und eigens formulierte kurze Gebete. Die Gebetsregel deiner Gemeinde bleibt maßgeblich." : "Traditional texts and original short prayers. Your parish prayer rule remains authoritative.");
    html += '<div class="toolbar">' + filterChips("prayers", categories) + searchField("prayers") + '</div><section class="grid three" id="prayers-grid">' + items.map(prayerCard).join("") + "</section>" + emptySearch();
    return html;
  }

  function saintsView() {
    const categories = [
      { id: "all", label: A.t(D.ui.all) },
      { id: "ancient", label: A.state.lang === "de" ? "Alte Kirche" : "Early Church" },
      { id: "medieval", label: A.state.lang === "de" ? "Mittelalter" : "Medieval" },
      { id: "modern", label: A.state.lang === "de" ? "Neuzeit" : "Modern" }
    ];
    const selected = A.filters.saints;
    const items = selected === "all" ? A.saints : A.saints.filter(function (item) {
      const century = Number(String(item.century).match(/\d+/)[0]);
      return selected === "ancient" ? century <= 7 : selected === "modern" ? century >= 18 : century > 7 && century < 18;
    });
    let html = intro(A.state.lang === "de" ? "Zeugen der verwandelnden Gnade" : "Witnesses of transforming grace", A.t(D.ui.saints), A.state.lang === "de" ? "28 ausgewählte Heilige aus verschiedenen Jahrhunderten und Regionen der Kirche." : "28 selected saints from different centuries and regions of the Church.");
    html += '<div class="toolbar">' + filterChips("saints", categories) + searchField("saints") + '</div><section class="grid three" id="saints-grid">' + items.map(saintCard).join("") + "</section>" + emptySearch();
    return html;
  }

  function emptySearch() {
    return '<div class="empty-state" id="section-empty" hidden><div class="symbol">☦</div><h3>' + A.t(D.ui.noResults) + "</h3></div>";
  }

  function notesView() {
    const keys = Array.from(new Set(A.state.favorites.concat(Object.keys(A.state.notes))));
    const selected = A.filters.notes;
    const visible = keys.filter(function (key) {
      if (selected === "favorites") return A.state.favorites.includes(key);
      if (selected === "notes") return Boolean(A.state.notes[key]);
      return true;
    });
    const categories = [
      { id: "all", label: A.t(D.ui.all) + " (" + keys.length + ")" },
      { id: "favorites", label: A.t(D.ui.favorites) + " (" + A.state.favorites.length + ")" },
      { id: "notes", label: A.t(D.ui.personalNotes) + " (" + Object.keys(A.state.notes).length + ")" }
    ];
    const actions = '<div class="hero-actions"><button class="button secondary small" type="button" id="export-data">' + (A.state.lang === "de" ? "Sicherung exportieren" : "Export backup") + '</button><label class="button secondary small" for="import-data">' + (A.state.lang === "de" ? "Sicherung importieren" : "Import backup") + '</label><input id="import-data" type="file" accept="application/json" hidden></div>';
    let html = intro(A.state.lang === "de" ? "Nur auf diesem Gerät gespeichert" : "Stored only on this device", A.t(D.ui.notes), A.state.lang === "de" ? "Deine Favoriten und Notizen verlassen das Gerät nicht. Erstelle regelmäßig eine Sicherungsdatei." : "Your favorites and notes do not leave this device. Create a backup file regularly.", actions);
    html += '<div class="toolbar">' + filterChips("notes", categories) + '<button class="text-button" type="button" id="reset-data">' + (A.state.lang === "de" ? "Lokale Daten löschen" : "Clear local data") + "</button></div>";
    if (!visible.length) {
      html += '<div class="empty-state"><div class="symbol">☦</div><h3>' + (A.state.lang === "de" ? "Noch nichts gespeichert" : "Nothing saved yet") + "</h3><p>" + (A.state.lang === "de" ? "Markiere Artikel, Gebete oder Heilige als Favorit oder schreibe eine persönliche Notiz." : "Favorite an article, prayer, or saint, or write a personal note.") + "</p></div>";
      return html;
    }
    html += '<section class="notes-list">';
    visible.forEach(function (key) {
      const parts = key.split(":");
      const type = parts[0];
      const id = parts.slice(1).join(":");
      const item = A.getItem(type, id);
      if (!item) return;
      const label = type === "article" ? A.t(D.ui.learn) : type === "prayer" ? A.t(D.ui.prayers) : A.t(D.ui.saints);
      html += '<article class="note-row"><div><div class="card-meta"><span class="pill wine">' + A.esc(label) + "</span>" + (A.state.favorites.includes(key) ? '<span aria-label="' + A.t(D.ui.favorites) + '">♥</span>' : "") + "</div><h4>" + A.esc(A.t(item.title || item.name)) + "</h4>" + (A.state.notes[key] ? "<p>" + A.esc(A.state.notes[key]) + "</p>" : "") + '</div><div class="note-actions"><button class="button secondary small" type="button" data-open="' + type + '" data-id="' + A.esc(id) + '">' + A.t(D.ui.open) + "</button></div></article>";
    });
    html += "</section>";
    return html;
  }

  function filterCards(route) {
    const input = document.getElementById(route + "-search");
    if (!input) return;
    const query = input.value.trim().toLowerCase();
    queries[route] = input.value;
    let visible = 0;
    document.querySelectorAll(".searchable-card").forEach(function (card) {
      const show = !query || card.dataset.search.includes(query);
      card.hidden = !show;
      if (show) visible += 1;
    });
    document.getElementById("section-empty").hidden = visible !== 0;
  }

  function bindCalendar() {
    document.querySelectorAll("[data-cal-action]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (button.dataset.calAction === "today") {
          const today = todayUtc();
          A.state.selectedDate = C.iso(today);
          A.state.calendarCursor = C.iso(today);
        } else {
          const cursor = A.parseDate(A.state.calendarCursor);
          const amount = button.dataset.calAction === "prev" ? -1 : 1;
          const shifted = C.makeDate(cursor.getUTCFullYear(), cursor.getUTCMonth() + 1 + amount, 1);
          A.state.calendarCursor = C.iso(shifted);
        }
        A.saveState();
        A.render();
      });
    });
    document.querySelectorAll("[data-cal-date]").forEach(function (button) {
      button.addEventListener("click", function () {
        A.state.selectedDate = button.dataset.calDate;
        A.saveState();
        A.render();
      });
    });
    document.querySelectorAll("[data-calendar-style]").forEach(function (button) {
      button.addEventListener("click", function () {
        A.state.calendar = button.dataset.calendarStyle;
        A.saveState();
        A.render();
      });
    });
  }

  function bindNotes() {
    const exportButton = document.getElementById("export-data");
    if (exportButton) exportButton.addEventListener("click", function () {
      const payload = JSON.stringify({ app: "Orthodoxia", version: 1, exportedAt: new Date().toISOString(), data: A.state }, null, 2);
      const url = URL.createObjectURL(new Blob([payload], { type: "application/json" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "orthodoxia-sicherung-" + C.iso(new Date()) + ".json";
      link.click();
      URL.revokeObjectURL(url);
    });
    const importInput = document.getElementById("import-data");
    if (importInput) importInput.addEventListener("change", function () {
      const file = importInput.files && importInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function () {
        try {
          const parsed = JSON.parse(reader.result);
          const incoming = parsed.data || parsed;
          if (!Array.isArray(incoming.favorites) || typeof incoming.notes !== "object") throw new Error("invalid");
          A.state.favorites = incoming.favorites;
          A.state.notes = incoming.notes;
          if (["de", "en"].includes(incoming.lang)) A.state.lang = incoming.lang;
          if (["new", "old"].includes(incoming.calendar)) A.state.calendar = incoming.calendar;
          if (["system", "light", "dark"].includes(incoming.theme)) A.state.theme = incoming.theme;
          if (["small", "normal", "large"].includes(incoming.font)) A.state.font = incoming.font;
          A.saveState();
          A.applyTheme();
          A.toast(A.state.lang === "de" ? "Sicherung importiert" : "Backup imported");
          A.render();
        } catch (_error) {
          alert(A.state.lang === "de" ? "Diese Datei ist keine gültige Orthodoxia-Sicherung." : "This is not a valid Orthodoxia backup.");
        }
      };
      reader.readAsText(file);
    });
    const reset = document.getElementById("reset-data");
    if (reset) reset.addEventListener("click", function () {
      const okay = confirm(A.state.lang === "de" ? "Favoriten und Notizen auf diesem Gerät wirklich löschen?" : "Delete favorites and notes on this device?");
      if (!okay) return;
      A.state.favorites = [];
      A.state.notes = {};
      A.saveState();
      A.render();
    });
  }

  A.bindView = function (route) {
    if (route === "calendar") bindCalendar();
    if (route === "notes") bindNotes();
    if (queries[route] != null) {
      const input = document.getElementById(route + "-search");
      if (input) {
        input.addEventListener("input", function () { filterCards(route); });
        filterCards(route);
      }
    }
    document.querySelectorAll('[data-open][role="button"]').forEach(function (card) {
      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          A.openItem(card.dataset.open, card.dataset.id);
        }
      });
    });
  };

  A.openSettings = function () {
    const lang = A.state.lang;
    const section = function (title, text, controls) { return '<section class="setting-group"><strong>' + title + "</strong><p>" + text + "</p>" + controls + "</section>"; };
    const segmented = function (name, values, current) {
      return '<div class="segmented">' + values.map(function (value) { return '<button type="button" data-setting="' + name + '" data-value="' + value.id + '" class="' + (current === value.id ? "active" : "") + '">' + value.label + "</button>"; }).join("") + "</div>";
    };
    let html = "<h2>" + A.t(D.ui.settings) + "</h2>";
    html += section(lang === "de" ? "Sprache" : "Language", lang === "de" ? "Alle Inhalte sind auf Deutsch und Englisch vorhanden." : "All content is available in German and English.", segmented("lang", [{ id: "de", label: "Deutsch" }, { id: "en", label: "English" }], A.state.lang));
    html += section(lang === "de" ? "Fester Kirchenkalender" : "Fixed Church calendar", lang === "de" ? "Pascha bleibt in beiden Einstellungen nach orthodoxer Berechnung." : "Pascha remains on the Orthodox calculation in both settings.", segmented("calendar", [{ id: "new", label: lang === "de" ? "Neu" : "New" }, { id: "old", label: lang === "de" ? "Alt" : "Old" }], A.state.calendar));
    html += section(lang === "de" ? "Darstellung" : "Appearance", lang === "de" ? "Wähle hell, dunkel oder die Einstellung des Geräts." : "Choose light, dark, or follow the device.", segmented("theme", [{ id: "system", label: lang === "de" ? "System" : "System" }, { id: "light", label: lang === "de" ? "Hell" : "Light" }, { id: "dark", label: lang === "de" ? "Dunkel" : "Dark" }], A.state.theme));
    html += section(lang === "de" ? "Textgröße" : "Text size", lang === "de" ? "Verändert die Lesetexte und Bedienoberfläche." : "Changes reading text and interface size.", segmented("font", [{ id: "small", label: lang === "de" ? "Klein" : "Small" }, { id: "normal", label: lang === "de" ? "Normal" : "Normal" }, { id: "large", label: lang === "de" ? "Groß" : "Large" }], A.state.font));
    html += section(lang === "de" ? "Auf dem iPhone installieren" : "Install on iPhone", lang === "de" ? "Öffne die Seite in Safari und führe diese Schritte aus:" : "Open the site in Safari and follow these steps:", '<ol class="install-steps"><li>' + (lang === "de" ? "Tippe auf das Teilen-Symbol." : "Tap the Share icon.") + "</li><li>" + (lang === "de" ? "Wähle „Zum Home-Bildschirm“." : "Choose “Add to Home Screen.”") + "</li><li>" + (lang === "de" ? "Aktiviere „Als Web-App öffnen“, falls angezeigt." : "Turn on “Open as Web App” if shown.") + "</li><li>" + (lang === "de" ? "Bestätige mit „Hinzufügen“." : "Confirm with “Add.”") + "</li></ol>");
    html += '<section class="setting-group"><p>' + (lang === "de" ? "Orthodoxia ist ein privates Lern- und Gebetswerkzeug. Es ersetzt weder den Priester noch den verbindlichen Kalender und die Praxis deiner Gemeinde." : "Orthodoxia is a private learning and prayer tool. It does not replace your priest or the authoritative calendar and practice of your parish.") + "</p></section>";
    document.getElementById("settings-content").innerHTML = html;
    const dialog = document.getElementById("settings-dialog");
    dialog.showModal();
    dialog.querySelectorAll("[data-setting]").forEach(function (button) {
      button.addEventListener("click", function () {
        A.state[button.dataset.setting] = button.dataset.value;
        A.saveState();
        A.applyTheme();
        dialog.close();
        A.render();
      });
    });
  };

  function searchableContent() {
    return D.articles.map(function (item) { return { type: "article", id: item.id, title: A.t(item.title), description: A.t(item.summary), icon: "A" }; })
      .concat(A.prayers.map(function (item) { return { type: "prayer", id: item.id, title: A.t(item.title), description: A.t(item.occasion), icon: "☦" }; }))
      .concat(A.saints.map(function (item) { return { type: "saint", id: item.id, title: A.t(item.name), description: A.t(item.epithet), icon: "✦" }; }));
  }

  function updateGlobalSearch() {
    const input = document.getElementById("global-search");
    const results = document.getElementById("search-results");
    const query = input.value.trim().toLowerCase();
    const matches = searchableContent().filter(function (item) { return (item.title + " " + item.description).toLowerCase().includes(query); }).slice(0, 30);
    if (!query) {
      results.innerHTML = '<div class="empty-state"><div class="symbol">☦</div><h3>' + (A.state.lang === "de" ? "Wonach möchtest du suchen?" : "What would you like to find?") + "</h3><p>" + D.articles.length + " " + (A.state.lang === "de" ? "Artikel" : "articles") + " · " + A.prayers.length + " " + (A.state.lang === "de" ? "Gebete" : "prayers") + " · " + A.saints.length + " " + (A.state.lang === "de" ? "Heilige" : "saints") + "</p></div>";
      return;
    }
    if (!matches.length) {
      results.innerHTML = '<div class="empty-state"><h3>' + A.t(D.ui.noResults) + "</h3></div>";
      return;
    }
    results.innerHTML = matches.map(function (item) {
      return '<button class="search-result" type="button" data-search-open="' + item.type + '" data-id="' + A.esc(item.id) + '"><span class="type-icon">' + item.icon + "</span><span><strong>" + A.esc(item.title) + "</strong><small>" + A.esc(item.description) + "</small></span></button>";
    }).join("");
    results.querySelectorAll("[data-search-open]").forEach(function (button) {
      button.addEventListener("click", function () {
        document.getElementById("search-dialog").close();
        A.openItem(button.dataset.searchOpen, button.dataset.id);
      });
    });
  }

  A.openSearch = function () {
    const dialog = document.getElementById("search-dialog");
    const input = document.getElementById("global-search");
    input.value = "";
    input.placeholder = A.state.lang === "de" ? "Alles durchsuchen …" : "Search everything…";
    updateGlobalSearch();
    dialog.showModal();
    setTimeout(function () { input.focus(); }, 30);
  };

  document.getElementById("global-search").addEventListener("input", updateGlobalSearch);
  A.views = { home: home, calendar: calendar, learn: learn, prayers: prayersView, saints: saintsView, notes: notesView };
})();
