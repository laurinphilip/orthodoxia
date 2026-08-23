(function () {
  "use strict";
  const bi = (de, en) => ({ de, en });
  const dayMs = 86400000;
  const makeDate = (year, month, day) => new Date(Date.UTC(year, month - 1, day, 12));
  const addDays = (date, days) => new Date(date.getTime() + days * dayMs);
  const sameDate = (a, b) => a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate();
  const diffDays = (a, b) => Math.round((Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()) - Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate())) / dayMs);
  const iso = (date) => date.getUTCFullYear() + "-" + String(date.getUTCMonth() + 1).padStart(2, "0") + "-" + String(date.getUTCDate()).padStart(2, "0");

  function julianOffset(year) {
    return Math.floor(year / 100) - Math.floor(year / 400) - 2;
  }

  function orthodoxPascha(year) {
    const a = year % 4;
    const b = year % 7;
    const c = year % 19;
    const d = (19 * c + 15) % 30;
    const e = (2 * a + 4 * b - d + 34) % 7;
    const month = Math.floor((d + e + 114) / 31);
    const day = ((d + e + 114) % 31) + 1;
    return addDays(makeDate(year, month, day), julianOffset(year));
  }

  function ecclesiasticalDate(civilDate, style) {
    return style === "old" ? addDays(civilDate, -julianOffset(civilDate.getUTCFullYear())) : civilDate;
  }

  const fixedFeasts = [
    { month: 1, day: 6, key: "theophany", major: true, name: bi("Theophanie – Taufe des Herrn", "Theophany – Baptism of the Lord") },
    { month: 2, day: 2, key: "meeting", major: true, name: bi("Begegnung des Herrn im Tempel", "Meeting of the Lord in the Temple") },
    { month: 3, day: 25, key: "annunciation", major: true, name: bi("Verkündigung an die Gottesgebärerin", "Annunciation to the Theotokos") },
    { month: 6, day: 24, key: "nativity-forerunner", major: false, name: bi("Geburt Johannes des Täufers", "Nativity of John the Baptist") },
    { month: 6, day: 29, key: "peter-paul", major: false, name: bi("Heilige Apostel Petrus und Paulus", "Holy Apostles Peter and Paul") },
    { month: 8, day: 6, key: "transfiguration", major: true, name: bi("Verklärung des Herrn", "Transfiguration of the Lord") },
    { month: 8, day: 15, key: "dormition", major: true, name: bi("Entschlafung der Gottesgebärerin", "Dormition of the Theotokos") },
    { month: 8, day: 29, key: "beheading", major: false, name: bi("Enthauptung Johannes des Täufers", "Beheading of John the Baptist") },
    { month: 9, day: 8, key: "nativity-theotokos", major: true, name: bi("Geburt der Gottesgebärerin", "Nativity of the Theotokos") },
    { month: 9, day: 14, key: "cross", major: true, name: bi("Erhöhung des kostbaren Kreuzes", "Exaltation of the Precious Cross") },
    { month: 10, day: 1, key: "protection", major: false, name: bi("Schutz der Gottesgebärerin", "Protection of the Theotokos") },
    { month: 11, day: 21, key: "entry-theotokos", major: true, name: bi("Einzug der Gottesgebärerin in den Tempel", "Entry of the Theotokos into the Temple") },
    { month: 12, day: 25, key: "nativity", major: true, name: bi("Geburt unseres Herrn Jesus Christus", "Nativity of Our Lord Jesus Christ") }
  ];

  const movableFeasts = [
    { offset: -70, key: "publican", name: bi("Sonntag des Zöllners und Pharisäers", "Sunday of the Publican and the Pharisee") },
    { offset: -63, key: "prodigal", name: bi("Sonntag des verlorenen Sohnes", "Sunday of the Prodigal Son") },
    { offset: -56, key: "meatfare", name: bi("Sonntag des Weltgerichts", "Sunday of the Last Judgment") },
    { offset: -49, key: "forgiveness", name: bi("Sonntag der Vergebung", "Forgiveness Sunday") },
    { offset: -48, key: "clean-monday", name: bi("Reiner Montag – Beginn der Großen Fastenzeit", "Clean Monday – Beginning of Great Lent") },
    { offset: -8, key: "lazarus", name: bi("Lazarus-Samstag", "Lazarus Saturday") },
    { offset: -7, key: "palm-sunday", name: bi("Palmsonntag – Einzug des Herrn in Jerusalem", "Palm Sunday – Entry of the Lord into Jerusalem"), major: true },
    { offset: -5, key: "bridegroom", name: bi("Großer und Heiliger Dienstag", "Great and Holy Tuesday") },
    { offset: -3, key: "holy-thursday", name: bi("Großer und Heiliger Donnerstag", "Great and Holy Thursday") },
    { offset: -2, key: "holy-friday", name: bi("Großer und Heiliger Freitag", "Great and Holy Friday") },
    { offset: -1, key: "holy-saturday", name: bi("Großer und Heiliger Samstag", "Great and Holy Saturday") },
    { offset: 0, key: "pascha", name: bi("Heiliges Pascha – Auferstehung Christi", "Holy Pascha – Resurrection of Christ"), major: true },
    { offset: 39, key: "ascension", name: bi("Himmelfahrt des Herrn", "Ascension of the Lord"), major: true },
    { offset: 49, key: "pentecost", name: bi("Heiliges Pfingsten", "Holy Pentecost"), major: true },
    { offset: 56, key: "all-saints", name: bi("Sonntag Aller Heiligen", "Sunday of All Saints") }
  ];

  const fixedFasts = [
    { month: 1, day: 5, name: bi("Vorabend der Theophanie", "Eve of Theophany") },
    { month: 8, day: 29, name: bi("Enthauptung Johannes des Täufers", "Beheading of John the Baptist") },
    { month: 9, day: 14, name: bi("Kreuzerhöhung", "Exaltation of the Cross") }
  ];

  function betweenDate(date, start, end) {
    return diffDays(date, start) >= 0 && diffDays(date, end) <= 0;
  }

  function feastEvents(civilDate, style) {
    const events = [];
    const eccles = ecclesiasticalDate(civilDate, style);
    fixedFeasts.forEach((feast) => {
      if (eccles.getUTCMonth() + 1 === feast.month && eccles.getUTCDate() === feast.day) {
        events.push({ ...feast, type: "feast", fixed: true });
      }
    });
    const pascha = orthodoxPascha(civilDate.getUTCFullYear());
    movableFeasts.forEach((feast) => {
      if (sameDate(civilDate, addDays(pascha, feast.offset))) events.push({ ...feast, type: "feast", fixed: false });
    });
    return events;
  }

  function saintEvents(civilDate, style) {
    const eccles = ecclesiasticalDate(civilDate, style);
    return (window.ORTHODOXIA_SAINTS || [])
      .filter((saint) => saint.month === eccles.getUTCMonth() + 1 && saint.day === eccles.getUTCDate())
      .map((saint) => ({ ...saint, type: "saint" }));
  }

  function fastingInfo(civilDate, style) {
    const year = civilDate.getUTCFullYear();
    const pascha = orthodoxPascha(year);
    const offset = diffDays(civilDate, pascha);
    const eccles = ecclesiasticalDate(civilDate, style);
    const eMonth = eccles.getUTCMonth() + 1;
    const eDay = eccles.getUTCDate();
    if ((eMonth === 12 && eDay >= 25) || (eMonth === 1 && eDay <= 4)) {
      return { level: "free", name: bi("Fastenfreie Weihnachtszeit", "Fast-free Nativity season") };
    }
    if ((offset >= -69 && offset <= -63) || (offset >= 0 && offset <= 6) || (offset >= 49 && offset <= 55)) {
      return { level: "free", name: bi("Fastenfreie Woche", "Fast-free week") };
    }
    if (offset >= -55 && offset <= -49) {
      return { level: "partial", name: bi("Butterwoche – traditionell kein Fleisch", "Cheesefare week – traditionally no meat") };
    }
    if (offset >= -48 && offset <= -1) {
      return { level: "fast", name: bi("Große Fastenzeit", "Great Lent") };
    }
    const apostlesStart = addDays(pascha, 57);
    const apostlesEndEccles = makeDate(year, 6, 28);
    const apostlesEndCivil = style === "old" ? addDays(apostlesEndEccles, julianOffset(year)) : apostlesEndEccles;
    if (diffDays(apostlesEndCivil, apostlesStart) >= 0 && betweenDate(civilDate, apostlesStart, apostlesEndCivil)) {
      return { level: "fast", name: bi("Apostelfasten", "Apostles’ Fast") };
    }
    if (eMonth === 8 && eDay >= 1 && eDay <= 14) return { level: "fast", name: bi("Entschlafungsfasten", "Dormition Fast") };
    if ((eMonth === 11 && eDay >= 15) || (eMonth === 12 && eDay <= 24)) return { level: "fast", name: bi("Weihnachtsfasten", "Nativity Fast") };
    const oneDay = fixedFasts.find((item) => item.month === eMonth && item.day === eDay);
    if (oneDay) return { level: "fast", name: oneDay.name };
    const weekday = civilDate.getUTCDay();
    if (weekday === 3 || weekday === 5) return { level: "fast", name: bi("Wöchentlicher Fasttag", "Weekly fast day") };
    return { level: "none", name: bi("Kein allgemeiner Fasttag", "No general fast day") };
  }

  function getDayInfo(civilDate, style) {
    return {
      date: civilDate,
      ecclesiasticalDate: ecclesiasticalDate(civilDate, style),
      feasts: feastEvents(civilDate, style),
      saints: saintEvents(civilDate, style),
      fasting: fastingInfo(civilDate, style),
      pascha: orthodoxPascha(civilDate.getUTCFullYear())
    };
  }

  function nextMajorFeast(fromDate, style) {
    for (let step = 0; step <= 380; step += 1) {
      const date = addDays(fromDate, step);
      const feast = feastEvents(date, style).find((item) => item.major);
      if (feast) return { date, feast, days: step };
    }
    return null;
  }

  window.ORTHODOXIA_CALENDAR = {
    addDays, diffDays, ecclesiasticalDate, fixedFeasts, getDayInfo, iso,
    julianOffset, makeDate, nextMajorFeast, orthodoxPascha, sameDate
  };
})();
