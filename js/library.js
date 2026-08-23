(function () {
  "use strict";

  const A = window.OA;
  if (!A || !A.views) return;

  const bi = function (de, en) { return { de: de, en: en }; };
  const BKV = "https://bkv.unifr.ch";
  const GUTENBERG = "https://www.gutenberg.org";
  const FATHERS = "https://www.tertullian.org/fathers/";

  const categories = {
    doctrine: bi("Glaube & Lehre", "Faith & doctrine"),
    prayer: bi("Gebet & geistliches Leben", "Prayer & spiritual life"),
    monastic: bi("Mönchtum & Askese", "Monasticism & asceticism"),
    catechesis: bi("Katechese & Sakramente", "Catechesis & sacraments"),
    pastoral: bi("Hirtenamt & Kirche", "Pastoral life & Church"),
    letters: bi("Briefe & Homilien", "Letters & homilies"),
    icons: bi("Ikonen & Verehrung", "Icons & veneration")
  };

  const books = [
    {
      id: "de-athanasius-menschwerdung", language: "de", category: "doctrine", edition: "BKV · 1917",
      title: bi("Über die Menschwerdung des Logos", "On the Incarnation of the Word"),
      author: bi("Hl. Athanasius der Große", "St Athanasius the Great"),
      description: bi("Warum der Sohn Gottes Mensch wurde und wie Christus Tod und Vergänglichkeit überwindet.", "Why the Son of God became man and how Christ overcomes death and corruption."),
      source: BKV + "/works/cpg-2091/versions/uber-die-menschwerdung-des-logos-und-dessen-leibliche-erscheinung-unter-uns-bkv",
      pdf: BKV + "/files/uber-die-menschwerdung-des-logos-und-dessen-leibliche-erscheinung-unter-uns-bkv/related_files/%C3%9Cber%20die%20Menschwerdung%20des%20Logos%20und%20dessen%20leibliche%20Erscheinung%20unter%20uns%20%28BKV%29_deutsch_95.pdf",
      // localPdf: "./books/de/athanasius-menschwerdung.pdf",
      rights: "bkv"
    },
    {
      id: "de-athanasius-antonius", language: "de", category: "monastic", edition: "BKV · 1917",
      title: bi("Das Leben des heiligen Antonius", "The Life of Saint Antony"),
      author: bi("Hl. Athanasius der Große", "St Athanasius the Great"),
      description: bi("Die klassische Lebensbeschreibung des Wüstenvaters Antonius über Gebet, Kampf und Hingabe.", "The classic life of the desert father Antony on prayer, spiritual struggle, and surrender to God."),
      source: BKV + "/works/cpg-2101/versions/leben-des-heiligen-antonius-bkv",
      pdf: BKV + "/files/leben-des-heiligen-antonius-bkv/related_files/Leben%20des%20heiligen%20Antonius%20%28BKV%29_deutsch_19.pdf",
      rights: "bkv"
    },
    {
      id: "de-chrysostomus-priestertum", language: "de", category: "pastoral", edition: "BKV · 1916",
      title: bi("Über das Priestertum", "On the Priesthood"),
      author: bi("Hl. Johannes Chrysostomos", "St John Chrysostom"),
      description: bi("Über Verantwortung, Demut und die geistliche Würde des priesterlichen Dienstes.", "On responsibility, humility, and the spiritual dignity of priestly ministry."),
      source: BKV + "/works/cpg-4316/versions/uber-das-priestertum-bkv",
      pdf: BKV + "/files/uber-das-priestertum-bkv/related_files/%C3%9Cber%20das%20Priestertum%20%28BKV%29_deutsch_211.pdf",
      rights: "bkv"
    },
    {
      id: "de-damaskus-orthodoxer-glaube", language: "de", category: "doctrine", edition: "BKV · 1923",
      title: bi("Genaue Darlegung des orthodoxen Glaubens", "An Exact Exposition of the Orthodox Faith"),
      author: bi("Hl. Johannes von Damaskus", "St John of Damascus"),
      description: bi("Eine grundlegende Darstellung von Dreifaltigkeit, Schöpfung, Menschwerdung und kirchlichem Glauben.", "A foundational account of the Trinity, creation, the Incarnation, and the faith of the Church."),
      source: BKV + "/works/cpg-8043/versions/genaue-darlegung-des-orthodoxen-glaubens-bkv",
      pdf: BKV + "/files/genaue-darlegung-des-orthodoxen-glaubens-bkv/related_files/Genaue%20Darlegung%20des%20orthodoxen%20Glaubens%20%28BKV%29_deutsch_137.pdf",
      rights: "bkv"
    },
    {
      id: "de-nyssa-katechese", language: "de", category: "catechesis", edition: "BKV · 1927",
      title: bi("Die große Katechese", "The Great Catechism"),
      author: bi("Hl. Gregor von Nyssa", "St Gregory of Nyssa"),
      description: bi("Ein zusammenhängender Zugang zu Glauben, Menschwerdung, Taufe und Auferstehung.", "A coherent introduction to faith, the Incarnation, Baptism, and the Resurrection."),
      source: BKV + "/works/cpg-3150/versions/grosse-katechese-bkv",
      pdf: BKV + "/files/grosse-katechese-bkv/related_files/Gro%C3%9Fe%20Katechese%20%28BKV%29_deutsch_160.pdf",
      rights: "bkv"
    },
    {
      id: "de-nyssa-vaterunser", language: "de", category: "prayer", edition: "BKV · 1927",
      title: bi("Das Gebet des Herrn", "On the Lord’s Prayer"),
      author: bi("Hl. Gregor von Nyssa", "St Gregory of Nyssa"),
      description: bi("Geistliche Auslegung des Vaterunsers als Weg der Annäherung an Gott.", "A spiritual interpretation of the Lord’s Prayer as a path toward communion with God."),
      source: BKV + "/works/cpg-3160/versions/das-gebet-des-herrn-bkv",
      rights: "bkv"
    },
    {
      id: "de-kyrill-taufkatechesen", language: "de", category: "catechesis", edition: "BKV · 1922",
      title: bi("Katechesen an die Täuflinge", "Catechetical Lectures"),
      author: bi("Hl. Kyrill von Jerusalem", "St Cyril of Jerusalem"),
      description: bi("Historische Unterweisungen für Menschen, die sich auf Taufe und kirchliches Leben vorbereiten.", "Historic instruction for those preparing for Baptism and life in the Church."),
      source: BKV + "/works/cpg-3585/versions/katechesen-an-die-tauflinge-bkv",
      pdf: BKV + "/files/katechesen-an-die-tauflinge-bkv/related_files/Katechesen%20an%20die%20T%C3%A4uflinge%20%28BKV%29_deutsch_136.pdf",
      rights: "bkv"
    },
    {
      id: "de-kyrill-mystagogie", language: "de", category: "catechesis", edition: "BKV · 1922",
      title: bi("Mystagogische Katechesen", "Mystagogical Catecheses"),
      author: bi("Hl. Kyrill von Jerusalem", "St Cyril of Jerusalem"),
      description: bi("Einführung in die Geheimnisse von Taufe, Salbung und Eucharistie.", "An introduction to the mysteries of Baptism, anointing, and the Eucharist."),
      source: BKV + "/works/cpg-3586/versions/mystagogische-katechesen-an-die-neugetauften-bkv",
      pdf: BKV + "/files/mystagogische-katechesen-an-die-neugetauften-bkv/related_files/Mystagogische%20Katechesen%20an%20die%20Neugetauften%20%28BKV%29_deutsch_135.pdf",
      rights: "bkv"
    },
    {
      id: "de-basilius-hexaemeron", language: "de", category: "doctrine", edition: "BKV · 1925",
      title: bi("Homilien über das Hexaemeron", "Homilies on the Hexaemeron"),
      author: bi("Hl. Basilius der Große", "St Basil the Great"),
      description: bi("Predigten über die Schöpfung und die Weisheit Gottes in der sichtbaren Welt.", "Homilies on creation and the wisdom of God revealed in the visible world."),
      source: BKV + "/works/cpg-2835/versions/homilien-uber-das-hexaemeron-bkv",
      pdf: BKV + "/files/homilien-uber-das-hexaemeron-bkv/related_files/Homilien%20%C3%BCber%20das%20Hexaemeron%20%28BKV%29_deutsch_142%20%281%29.pdf",
      rights: "bkv"
    },
    {
      id: "de-ignatius-sieben-briefe", language: "de", category: "letters", edition: "BKV · 1918",
      title: bi("Die sieben Briefe", "The Seven Epistles"),
      author: bi("Hl. Ignatius von Antiochien", "St Ignatius of Antioch"),
      description: bi("Frühchristliche Zeugnisse über Eucharistie, Bischofsamt, Einheit und die Nachfolge Christi.", "Early Christian witnesses to the Eucharist, episcopal ministry, unity, and discipleship."),
      source: BKV + "/works/cpg-1025/versions/die-sieben-briefe-des-ignatius-von-antiochien-bkv",
      pdf: BKV + "/files/die-sieben-briefe-des-ignatius-von-antiochien-bkv/related_files/Die%20sieben%20Briefe%20des%20Ignatius%20von%20Antiochien%20%28BKV%29_deutsch_121.pdf",
      rights: "bkv"
    },
    {
      id: "de-polykarp-philipper", language: "de", category: "letters", edition: "BKV · 1918",
      title: bi("Brief an die Philipper", "Epistle to the Philippians"),
      author: bi("Hl. Polykarp von Smyrna", "St Polycarp of Smyrna"),
      description: bi("Ein apostolisches Zeugnis über Treue, Gerechtigkeit und das Leben nach dem Evangelium.", "An apostolic witness to faithfulness, righteousness, and life according to the Gospel."),
      source: BKV + "/works/cpg-1040/versions/der-brief-des-polykarp-von-smyrna-an-die-gemeinde-von-philippi-bkv",
      rights: "bkv"
    },
    {
      id: "de-irenaeus-haeresien", language: "de", category: "doctrine", edition: "BKV · 1912",
      title: bi("Gegen die Häresien", "Against Heresies"),
      author: bi("Hl. Irenäus von Lyon", "St Irenaeus of Lyon"),
      description: bi("Verteidigung des apostolischen Glaubens gegenüber gnostischen und anderen Irrlehren.", "A defense of the apostolic faith against Gnostic and other false teachings."),
      source: BKV + "/works/cpg-1306/versions/gegen-die-haresien-bkv",
      rights: "bkv"
    },
    {
      id: "de-irenaeus-verkuendigung", language: "de", category: "catechesis", edition: "BKV · 1912",
      title: bi("Erweis der apostolischen Verkündigung", "The Proof of the Apostolic Preaching"),
      author: bi("Hl. Irenäus von Lyon", "St Irenaeus of Lyon"),
      description: bi("Eine kompakte Darstellung der Heilsgeschichte und des von den Aposteln empfangenen Glaubens.", "A concise account of salvation history and the faith received from the apostles."),
      source: BKV + "/works/cpg-1307/versions/erweis-der-apostolischen-verkundigung-bkv",
      pdf: BKV + "/files/erweis-der-apostolischen-verkundigung-bkv/related_files/Erweis%20der%20apostolischen%20Verk%C3%BCndigung%20%28BKV%29_deutsch_31.pdf",
      rights: "bkv"
    },
    {
      id: "de-cyprian-vaterunser", language: "de", category: "prayer", edition: "BKV · 1918",
      title: bi("Über das Gebet des Herrn", "On the Lord’s Prayer"),
      author: bi("Hl. Cyprian von Karthago", "St Cyprian of Carthage"),
      description: bi("Eine frühe Auslegung des Vaterunsers über Versöhnung, Demut und gemeinsames Beten.", "An early exposition of the Lord’s Prayer on reconciliation, humility, and common prayer."),
      source: BKV + "/works/cpl-43/versions/uber-das-gebet-des-herrn-bkv",
      pdf: BKV + "/files/uber-das-gebet-des-herrn-bkv/related_files/%C3%9Cber%20das%20Gebet%20des%20Herrn%20%28BKV%29_deutsch_105.pdf",
      rights: "bkv"
    },
    {
      id: "de-makarios-homilien", language: "de", category: "monastic", edition: "BKV · 1913",
      title: bi("Fünfzig geistliche Homilien", "Fifty Spiritual Homilies"),
      author: bi("Traditionell dem hl. Makarios zugeschrieben", "Traditionally attributed to St Macarius"),
      description: bi("Texte über das innere Gebet und die Verwandlung des Herzens; die historische Zuschreibung ist umstritten.", "Texts on inward prayer and the transformation of the heart; the historical attribution is disputed."),
      source: BKV + "/works/cpg-2411/versions/funfzig-geistliche-homilien-bkv",
      rights: "bkv"
    },
    {
      id: "en-damascus-holy-images", language: "en", category: "icons", edition: "Project Gutenberg",
      title: bi("Über heilige Bilder", "On Holy Images"),
      author: bi("Hl. Johannes von Damaskus", "St John of Damascus"),
      description: bi("Klassische Verteidigung heiliger Ikonen und der christlichen Bilderverehrung.", "A classic defense of sacred icons and the Christian veneration of holy images."),
      source: GUTENBERG + "/ebooks/49917",
      pdf: GUTENBERG + "/ebooks/49917.pdf.images",
      rights: "gutenberg"
    },
    {
      id: "en-athanasius-incarnation", language: "en", category: "doctrine", edition: "BKV online",
      title: bi("Über die Menschwerdung", "On the Incarnation of the Word"),
      author: bi("Hl. Athanasius der Große", "St Athanasius the Great"),
      description: bi("Englische historische Übersetzung über die Menschwerdung und den Sieg Christi über den Tod.", "A historic English translation on the Incarnation and Christ’s victory over death."),
      source: BKV + "/works/cpg-2091/versions/incarnation-of-the-word",
      rights: "bkv"
    },
    {
      id: "en-athanasius-antony", language: "en", category: "monastic", edition: "BKV online",
      title: bi("Das Leben des heiligen Antonius", "The Life of Antony"),
      author: bi("Hl. Athanasius der Große", "St Athanasius the Great"),
      description: bi("Die englische Fassung der bekannten Lebensbeschreibung des Wüstenvaters Antonius.", "The English version of the famous life of Antony, father of the desert monks."),
      source: BKV + "/works/cpg-2101/versions/the-life-of-antony",
      rights: "bkv"
    },
    {
      id: "en-ignatius-epistles", language: "en", category: "letters", edition: "BKV online",
      title: bi("Briefe des Ignatius", "Epistles of Ignatius"),
      author: bi("Hl. Ignatius von Antiochien", "St Ignatius of Antioch"),
      description: bi("Briefe eines frühen Märtyrerbischofs über Christus, kirchliche Einheit und Eucharistie.", "Letters of an early martyr-bishop on Christ, the unity of the Church, and the Eucharist."),
      source: BKV + "/works/cpg-1025/versions/epistles-of-ignatius",
      rights: "bkv"
    },
    {
      id: "en-chrysostom-priesthood", language: "en", category: "pastoral", edition: "BKV online",
      title: bi("Über das christliche Priestertum", "Treatise Concerning the Christian Priesthood"),
      author: bi("Hl. Johannes Chrysostomos", "St John Chrysostom"),
      description: bi("Ein klassischer englischer Zugang zum Dienst, zur Verantwortung und zur Demut des Priesters.", "A classic English account of priestly ministry, responsibility, and humility."),
      source: BKV + "/works/cpg-4316/versions/treatise-concerning-the-christian-priesthood",
      rights: "bkv"
    },
    {
      id: "en-irenaeus-heresies", language: "en", category: "doctrine", edition: "BKV online",
      title: bi("Gegen die Häresien", "Against Heresies"),
      author: bi("Hl. Irenäus von Lyon", "St Irenaeus of Lyon"),
      description: bi("Historische englische Übersetzung zur Bewahrung und Weitergabe des apostolischen Glaubens.", "A historic English translation on preserving and handing down the apostolic faith."),
      source: BKV + "/works/cpg-1306/versions/against-heresies",
      rights: "bkv"
    },
    {
      id: "en-irenaeus-proof", language: "en", category: "catechesis", edition: "Early Church Texts",
      title: bi("Erweis der apostolischen Verkündigung", "The Proof of the Apostolic Preaching"),
      author: bi("Hl. Irenäus von Lyon", "St Irenaeus of Lyon"),
      description: bi("Englische historische Übersetzung einer kompakten apostolischen Glaubensdarstellung.", "A historic English translation of a concise exposition of the apostolic faith."),
      source: FATHERS + "irenaeus_02_proof.htm",
      rights: "source-public"
    },
    {
      id: "en-cyril-christ-one", language: "en", category: "doctrine", edition: "Early Church Texts",
      title: bi("Dass Christus einer ist", "That Christ Is One"),
      author: bi("Hl. Kyrill von Alexandria", "St Cyril of Alexandria"),
      description: bi("Eine patristische Darstellung der Einheit der Person Jesu Christi.", "A patristic exposition of the unity of the person of Jesus Christ."),
      source: FATHERS + "cyril_christ_is_one_01_text.htm",
      rights: "source-public"
    },
    {
      id: "en-chrysostom-lazarus-1", language: "en", category: "letters", edition: "Discourse I",
      title: bi("Lazarus und der reiche Mann · I", "Lazarus and the Rich Man · I"),
      author: bi("Hl. Johannes Chrysostomos", "St John Chrysostom"),
      description: bi("Erste Predigt über Barmherzigkeit, Reichtum und die Verantwortung gegenüber Armen.", "First discourse on mercy, wealth, and responsibility toward those in need."),
      source: FATHERS + "chrysostom_four_discourses_01_discourse1.htm",
      rights: "source-public"
    },
    {
      id: "en-chrysostom-lazarus-2", language: "en", category: "letters", edition: "Discourse II",
      title: bi("Lazarus und der reiche Mann · II", "Lazarus and the Rich Man · II"),
      author: bi("Hl. Johannes Chrysostomos", "St John Chrysostom"),
      description: bi("Zweite Predigt über Umkehr, Trost und das rechte Verständnis von Besitz.", "Second discourse on repentance, consolation, and a right understanding of possessions."),
      source: FATHERS + "chrysostom_four_discourses_02_discourse2.htm",
      rights: "source-public"
    },
    {
      id: "en-chrysostom-lazarus-3", language: "en", category: "letters", edition: "Discourse III",
      title: bi("Lazarus und der reiche Mann · III", "Lazarus and the Rich Man · III"),
      author: bi("Hl. Johannes Chrysostomos", "St John Chrysostom"),
      description: bi("Dritte Predigt über Nächstenliebe, Gottes Gericht und praktische Verantwortung.", "Third discourse on love of neighbor, God’s judgment, and practical responsibility."),
      source: FATHERS + "chrysostom_four_discourses_03_discourse3.htm",
      rights: "source-public"
    },
    {
      id: "en-chrysostom-lazarus-4", language: "en", category: "letters", edition: "Discourse IV",
      title: bi("Lazarus und der reiche Mann · IV", "Lazarus and the Rich Man · IV"),
      author: bi("Hl. Johannes Chrysostomos", "St John Chrysostom"),
      description: bi("Vierte Predigt über den geistlichen Gebrauch des Besitzes und die Sorge für andere.", "Fourth discourse on the spiritual use of possessions and care for others."),
      source: FATHERS + "chrysostom_four_discourses_04_discourse4.htm",
      rights: "source-public"
    },
    {
      id: "en-ambrose-letters", language: "en", category: "letters", edition: "Letters I–X",
      title: bi("Briefe des heiligen Ambrosius", "Letters of Saint Ambrose"),
      author: bi("Hl. Ambrosius von Mailand", "St Ambrose of Milan"),
      description: bi("Historische englische Übersetzung ausgewählter Briefe über Kirche und christliches Leben.", "A historic English translation of selected letters on the Church and Christian life."),
      source: FATHERS + "ambrose_letters_01_letters01_10.htm",
      rights: "source-public"
    }
  ];

  const symbols = {
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22Z"></path><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22Z"></path></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m16.2 16.2 4.3 4.3"></path></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg>',
    bookmark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"></path></svg>',
    cross: '<svg viewBox="0 0 80 100" aria-hidden="true"><path d="M40 8v84M26 24h28M16 45h48M24 76l32-11"></path><path d="M20 8h40M31 92h18"></path></svg>'
  };

  const selection = { category: "all", language: "all", favorites: false, query: "", sort: "recommended" };
  A.state.libraryFavorites = Array.isArray(A.state.libraryFavorites) ? A.state.libraryFavorites : [];
  A.D.ui.library = bi("Bibliothek", "Library");
  A.icons.library = symbols.book;
  A.libraryBooks = books;
  A.routes.splice(A.routes.length - 1, 0, { id: "library", label: A.D.ui.library, icon: symbols.book, count: books.length });

  function translate(de, en) {
    return A.state.lang === "de" ? de : en;
  }

  function normalize(value) {
    return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function favorite(book) {
    return A.state.libraryFavorites.includes(book.id);
  }

  function visibleBooks() {
    const items = books.filter(function (book) {
      if (selection.category !== "all" && book.category !== selection.category) return false;
      if (selection.language !== "all" && book.language !== selection.language) return false;
      if (selection.favorites && !favorite(book)) return false;
      return true;
    });
    if (selection.sort === "title") items.sort(function (left, right) { return A.t(left.title).localeCompare(A.t(right.title), A.state.lang); });
    if (selection.sort === "author") items.sort(function (left, right) { return A.t(left.author).localeCompare(A.t(right.author), A.state.lang); });
    return items;
  }

  function sourceLabel(book) {
    if (book.rights === "gutenberg") return translate("Gutenberg-Lizenz beachten", "Gutenberg licence applies");
    if (book.rights === "source-public") return translate("Quelle: frei ausgewiesen", "Source labels text as public domain");
    return translate("Historische BKV-Ausgabe", "Historic BKV edition");
  }

  function bookCard(book) {
    const marked = favorite(book);
    const link = book.localPdf || book.pdf || book.source;
    const isPdf = Boolean(book.localPdf || book.pdf);
    const searchable = normalize(A.t(book.title) + " " + A.t(book.author) + " " + A.t(book.description) + " " + A.t(categories[book.category]));
    const saveText = marked ? translate("Aus Leseliste entfernen", "Remove from reading list") : translate("Zur Leseliste hinzufügen", "Add to reading list");

    return '<article class="library-card" data-library-search="' + A.esc(searchable) + '">' +
      '<div class="library-card-spine library-spine-' + A.esc(book.category) + '" aria-hidden="true"></div>' +
      '<div class="library-card-body"><div class="library-card-top"><span class="library-language">' + (book.language === "de" ? translate("Deutsch", "German") : translate("Englisch", "English")) + '</span>' +
      '<button class="library-bookmark' + (marked ? " is-saved" : "") + '" type="button" data-library-bookmark="' + A.esc(book.id) + '" aria-pressed="' + marked + '" aria-label="' + A.esc(saveText) + '" title="' + A.esc(saveText) + '">' + symbols.bookmark + '</button></div>' +
      '<p class="library-book-author">' + A.esc(A.t(book.author)) + '</p><h3 class="library-book-title">' + A.esc(A.t(book.title)) + '</h3>' +
      '<p class="library-book-description">' + A.esc(A.t(book.description)) + '</p>' +
      '<div class="library-book-meta"><span>' + A.esc(A.t(categories[book.category])) + '</span><span>' + A.esc(book.edition) + '</span></div>' +
      '<div class="library-book-actions"><a class="library-open-button" href="' + A.esc(link) + '" target="_blank" rel="noopener noreferrer">' +
      (isPdf ? translate("PDF öffnen", "Open PDF") : translate("Online lesen", "Read online")) + symbols.arrow + '</a>' +
      '<a class="library-source-link" href="' + A.esc(book.source) + '" target="_blank" rel="noopener noreferrer">' + translate("Quelle", "Source") + '</a></div>' +
      '<p class="library-rights-note">' + A.esc(sourceLabel(book)) + '</p></div></article>';
  }

  function categoryButtons() {
    let html = '<button class="library-chip' + (selection.category === "all" ? " is-active" : "") + '" type="button" data-library-category="all">' + translate("Alle Themen", "All topics") + '</button>';
    Object.keys(categories).forEach(function (key) {
      html += '<button class="library-chip' + (selection.category === key ? " is-active" : "") + '" type="button" data-library-category="' + key + '">' + A.esc(A.t(categories[key])) + '</button>';
    });
    return html;
  }

  function libraryView() {
    const german = books.filter(function (book) { return book.language === "de"; }).length;
    const english = books.length - german;
    const authors = new Set(books.map(function (book) { return book.author.en; })).size;
    const items = visibleBooks();
    const saved = A.state.libraryFavorites.length;

    let html = '<section class="library-hero"><div class="library-hero-copy"><p class="library-kicker">' + translate("Aus der Überlieferung der Kirche", "From the living tradition of the Church") +
      '</p><h2>' + translate("Bibliothek der Heiligen", "Library of the Saints") + '</h2><p class="library-introduction">' +
      translate("Entdecke Schriften der Kirchenväter: über Christus, Gebet, das geistliche Leben und den Glauben der Kirche.", "Discover the writings of the Church Fathers on Christ, prayer, the spiritual life, and the faith of the Church.") +
      '</p><div class="library-statistics"><span><strong>' + books.length + '</strong>' + translate("Schriften", "writings") + '</span><span><strong>' + authors + '</strong>' +
      translate("Kirchenväter", "Church Fathers") + '</span><span><strong>DE · EN</strong>' + translate("zwei Sprachen", "two languages") + '</span></div></div>' +
      '<div class="library-hero-art" aria-hidden="true"><div class="library-hero-frame">' + symbols.cross + '</div></div></section>';

    html += '<section class="library-controls" aria-label="' + translate("Bibliothek filtern", "Filter library") + '"><label class="library-search-field">' + symbols.search +
      '<input id="library-search" type="search" autocomplete="off" value="' + A.esc(selection.query) + '" placeholder="' +
      translate("Titel, Heilige oder Themen suchen …", "Search titles, saints, or topics…") + '" aria-label="' + translate("Bücher durchsuchen", "Search books") + '"></label>' +
      '<div class="library-control-row"><div class="library-language-switch" aria-label="' + translate("Sprache wählen", "Choose language") + '">' +
      ['all', 'de', 'en'].map(function (value) { return '<button class="library-language-button' + (selection.language === value ? ' is-active' : '') + '" type="button" data-library-language="' + value + '">' + (value === 'all' ? translate('Alle', 'All') : value.toUpperCase()) + '</button>'; }).join('') +
      '</div><button class="library-reading-list' + (selection.favorites ? ' is-active' : '') + '" type="button" data-library-favorites="toggle">' + symbols.bookmark + translate("Leseliste", "Reading list") +
      '<span>' + saved + '</span></button><label class="library-sort"><span>' + translate("Ordnen", "Sort") + '</span><select id="library-sort"><option value="recommended"' + (selection.sort === 'recommended' ? ' selected' : '') + '>' +
      translate("Empfohlen", "Recommended") + '</option><option value="title"' + (selection.sort === 'title' ? ' selected' : '') + '>' + translate("Titel", "Title") +
      '</option><option value="author"' + (selection.sort === 'author' ? ' selected' : '') + '>' + translate("Heilige", "Saint") + '</option></select></label></div>' +
      '<div class="library-categories">' + categoryButtons() + '</div></section>';

    html += '<div class="library-results-header"><div><p class="library-results-kicker">' + translate("Patristische Sammlung", "Patristic collection") + '</p><h3>' +
      (selection.category === "all" ? translate("Die Stimmen der Heiligen", "The voices of the saints") : A.esc(A.t(categories[selection.category]))) +
      '</h3></div><p id="library-result-count" aria-live="polite">' + items.length + ' ' + translate("Schriften", "writings") + '</p></div>';

    html += '<section class="library-grid" id="library-grid">' + items.map(bookCard).join('') + '</section>';
    html += '<div class="library-empty" id="library-empty"' + (items.length ? ' hidden' : '') + '>' + symbols.book + '<h3>' +
      (selection.favorites ? translate("Deine Leseliste ist noch leer", "Your reading list is still empty") : translate("Keine passenden Schriften gefunden", "No matching writings found")) +
      '</h3><p>' + (selection.favorites ? translate("Markiere ein Buch mit dem Lesezeichen, um es hier wiederzufinden.", "Bookmark a book to find it here again.") : translate("Versuche ein anderes Thema, eine andere Sprache oder einen anderen Suchbegriff.", "Try a different topic, language, or search term.")) + '</p></div>';

    html += '<aside class="library-source-panel"><div><p class="library-results-kicker">' + translate("Quellen & verantwortliche Nutzung", "Sources & responsible use") +
      '</p><h3>' + translate("Historische Texte, transparent verlinkt", "Historic texts, transparently sourced") + '</h3><p>' +
      translate("Die Sammlung verweist auf historische Ausgaben der Bibliothek der Kirchenväter, Project Gutenberg und frei ausgewiesene frühchristliche Texte. Externe Texte und PDFs benötigen eine Internetverbindung; selbst hochgeladene Dateien können nach dem ersten Öffnen offline verfügbar sein.", "This collection links to historic editions from the Church Fathers Library, Project Gutenberg, and early Christian texts identified as public domain. External texts and PDFs need an internet connection; self-hosted files may be available offline after their first opening.") +
      '</p></div><div class="library-source-buttons"><a href="' + BKV + '/about/copyrights" target="_blank" rel="noopener noreferrer">' + translate("BKV-Nutzungshinweise", "BKV usage information") +
      '</a><a href="' + GUTENBERG + '/license" target="_blank" rel="noopener noreferrer">' + translate("Gutenberg-Lizenz", "Gutenberg licence") +
      '</a><span>' + german + ' ' + translate("deutsche", "German") + ' · ' + english + ' ' + translate("englische Schriften", "English writings") + '</span></div></aside>';

    return html;
  }

  function applySearch() {
    const query = normalize(selection.query);
    let count = 0;
    document.querySelectorAll("[data-library-search]").forEach(function (card) {
      const visible = !query || card.dataset.librarySearch.includes(query);
      card.hidden = !visible;
      if (visible) count += 1;
    });
    const counter = document.getElementById("library-result-count");
    const empty = document.getElementById("library-empty");
    if (counter) counter.textContent = count + " " + translate("Schriften", "writings");
    if (empty) empty.hidden = count !== 0;
  }

  function bindLibrary() {
    const search = document.getElementById("library-search");
    if (!search) return;

    search.addEventListener("input", function () {
      selection.query = search.value;
      applySearch();
    });

    document.getElementById("library-sort").addEventListener("change", function (event) {
      selection.sort = event.target.value;
      A.render();
    });

    applySearch();
  }

  function handleLibraryClick(event) {
    if (!document.getElementById("library-search")) return;

    const category = event.target.closest("[data-library-category]");
    const language = event.target.closest("[data-library-language]");
    const favorites = event.target.closest("[data-library-favorites]");
    const bookmark = event.target.closest("[data-library-bookmark]");

    if (category) selection.category = category.dataset.libraryCategory;
    else if (language) selection.language = language.dataset.libraryLanguage;
    else if (favorites) selection.favorites = !selection.favorites;
    else if (bookmark) {
      const identifier = bookmark.dataset.libraryBookmark;
      const alreadySaved = A.state.libraryFavorites.includes(identifier);
      A.state.libraryFavorites = alreadySaved ? A.state.libraryFavorites.filter(function (item) { return item !== identifier; }) : A.state.libraryFavorites.concat(identifier);
      A.saveState();
      A.toast(alreadySaved ? translate("Aus der Leseliste entfernt", "Removed from your reading list") : translate("Zur Leseliste hinzugefügt", "Added to your reading list"));
    } else return;

    A.render();
  }

  document.getElementById("main-content").addEventListener("click", handleLibraryClick);

  const previousHome = A.views.home;
  A.views.home = function () {
    const teaser = '<a class="library-home-feature" href="#library"><div><p class="library-kicker">' + translate("Neu in Orthodoxia", "New in Orthodoxia") +
      '</p><h3>' + translate("Die Schriften der Heiligen entdecken", "Discover the writings of the saints") + '</h3><p>' +
      translate("Historische Texte der Kirchenväter auf Deutsch und Englisch – mit Leseliste und direkten Quellen.", "Historic writings of the Church Fathers in German and English—with a reading list and direct sources.") +
      '</p><span>' + translate("Bibliothek öffnen", "Open the library") + ' ' + symbols.arrow + '</span></div><div class="library-home-art" aria-hidden="true">' + symbols.book + '</div></a>';
    return previousHome() + teaser;
  };

  A.views.library = libraryView;
  const previousBind = A.bindView;
  A.bindView = function (route) {
    previousBind(route);
    if (route === "library") bindLibrary();
  };
})();
