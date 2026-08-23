(function () {
  "use strict";

  const bi = (de, en) => ({ de, en });

  const ui = {
    brandSubtitle: bi("Glaube im Alltag", "Faith in daily life"),
    sidebarQuote: bi("„Betet ohne Unterlass.“", "“Pray without ceasing.”"),
    localOnly: bi("Favoriten und Notizen bleiben ausschließlich auf diesem Gerät.", "Favorites and notes remain only on this device."),
    close: bi("Schließen", "Close"),
    home: bi("Start", "Home"), calendar: bi("Kalender", "Calendar"), learn: bi("Glaubenswissen", "Learn"),
    prayers: bi("Gebete", "Prayers"), saints: bi("Heilige", "Saints"), notes: bi("Meine Inhalte", "My content"),
    settings: bi("Einstellungen", "Settings"), search: bi("Suche", "Search"), all: bi("Alle", "All"),
    favorites: bi("Favoriten", "Favorites"), personalNotes: bi("Notizen", "Notes"), save: bi("Speichern", "Save"),
    saved: bi("Gespeichert", "Saved"), remove: bi("Entfernen", "Remove"), open: bi("Öffnen", "Open"),
    read: bi("Lesen", "Read"), pray: bi("Beten", "Pray"), noResults: bi("Keine passenden Inhalte gefunden.", "No matching content found."),
    updatedOffline: bi("Offline-Inhalte sind bereit.", "Offline content is ready."),
    categories: {
      basics: bi("Grundlagen", "Foundations"), worship: bi("Gottesdienst", "Worship"),
      life: bi("Geistliches Leben", "Spiritual life"), church: bi("Kirche & Geschichte", "Church & history")
    }
  };

  const articles = [
    {
      id: "orthodox-church", category: "basics",
      title: bi("Was ist die Orthodoxe Kirche?", "What is the Orthodox Church?"),
      summary: bi("Eine erste Orientierung zu Glaube, Geschichte und kirchlicher Gemeinschaft.", "A first orientation to the faith, history, and communion of the Church."),
      paragraphs: [
        bi("Die Orthodoxe Kirche versteht sich nicht als eine später entstandene Richtung des Christentums, sondern als die fortdauernde Gemeinschaft der apostolischen Kirche. Ihr Glaube wird in der Heiligen Schrift, der lebendigen Überlieferung, den ökumenischen Konzilien, der Liturgie und dem Zeugnis der Heiligen bewahrt.", "The Orthodox Church understands herself not as a later branch of Christianity but as the continuing communion of the apostolic Church. Her faith is preserved in Holy Scripture, living Tradition, the Ecumenical Councils, the liturgy, and the witness of the saints."),
        bi("Sie besteht aus selbstverwalteten Ortskirchen, die denselben Glauben und dieselben Sakramente teilen. Einheit bedeutet daher nicht eine einzige Kultur oder Sprache. Griechische, arabische, slawische, rumänische, georgische und viele weitere Traditionen bilden gemeinsam eine Kirche.", "She consists of self-governing local churches that share the same faith and sacraments. Unity therefore does not mean one culture or language. Greek, Arab, Slavic, Romanian, Georgian, and many other traditions together form one Church.")
      ],
      points: [bi("apostolischer Glaube", "apostolic faith"), bi("Einheit in Eucharistie und Lehre", "unity in Eucharist and doctrine"), bi("Vielfalt kirchlicher Kulturen", "diversity of church cultures")],
      scripture: "Apg 2,42 · 1 Tim 3,15"
    },
    {
      id: "trinity", category: "basics",
      title: bi("Die Heilige Dreifaltigkeit", "The Holy Trinity"),
      summary: bi("Ein Gott in drei Personen: Vater, Sohn und Heiliger Geist.", "One God in three Persons: Father, Son, and Holy Spirit."),
      paragraphs: [
        bi("Christen glauben an den einen Gott, der ewig als Vater, Sohn und Heiliger Geist lebt. Die drei göttlichen Personen sind nicht drei Götter und nicht drei Rollen einer einzigen Person. Sie besitzen ein göttliches Wesen und sind doch wirklich voneinander unterschieden.", "Christians believe in the one God who eternally lives as Father, Son, and Holy Spirit. The three divine Persons are neither three gods nor three roles played by one person. They possess one divine essence and are nevertheless truly distinct."),
        bi("Die Dreifaltigkeit ist kein Rätsel, das der Verstand vollständig auflösen könnte. Sie ist das Geheimnis des göttlichen Lebens, in das der Mensch durch Christus und im Heiligen Geist aufgenommen wird. Darum ist die trinitarische Lehre unmittelbar mit Gebet, Taufe und Liturgie verbunden.", "The Trinity is not a puzzle the mind can completely solve. It is the mystery of divine life into which the human person is received through Christ and in the Holy Spirit. Trinitarian doctrine is therefore inseparable from prayer, baptism, and liturgy.")
      ],
      points: [bi("ein göttliches Wesen", "one divine essence"), bi("drei ewige Personen", "three eternal Persons"), bi("Quelle allen Lebens und aller Liebe", "source of all life and love")],
      scripture: "Mt 28,19 · 2 Kor 13,13"
    },
    {
      id: "jesus-christ", category: "basics",
      title: bi("Jesus Christus", "Jesus Christ"),
      summary: bi("Wahrer Gott und wahrer Mensch, Retter und Herr.", "True God and true man, Savior and Lord."),
      paragraphs: [
        bi("Jesus Christus ist der ewige Sohn und das Wort Gottes, das um unseres Heiles willen Mensch wurde. Er nahm unsere menschliche Natur vollständig an, ohne aufzuhören Gott zu sein. In seiner einen Person sind göttliche und menschliche Natur unvermischt, unverwandelt, ungeteilt und ungetrennt vereint.", "Jesus Christ is the eternal Son and Word of God who became man for our salvation. He fully assumed our human nature without ceasing to be God. In his one Person the divine and human natures are united without confusion, change, division, or separation."),
        bi("Durch sein Leben, seinen Tod am Kreuz, seine Auferstehung und Himmelfahrt hat Christus Sünde und Tod besiegt. Erlösung ist nicht nur die Aufhebung einer Schuld, sondern Heilung, Befreiung und die Wiederherstellung der Gemeinschaft mit Gott.", "Through his life, death on the Cross, Resurrection, and Ascension, Christ conquered sin and death. Salvation is not only the cancellation of a debt but healing, liberation, and the restoration of communion with God.")
      ],
      points: [bi("der ewige Sohn Gottes", "the eternal Son of God"), bi("vollkommen göttlich und vollkommen menschlich", "fully divine and fully human"), bi("Sieger über Sünde und Tod", "victor over sin and death")],
      scripture: "Joh 1,1–14 · Phil 2,5–11"
    },
    {
      id: "holy-spirit", category: "basics",
      title: bi("Der Heilige Geist", "The Holy Spirit"),
      summary: bi("Der Herr und Lebensspender, der die Kirche heiligt.", "The Lord and Giver of Life who sanctifies the Church."),
      paragraphs: [
        bi("Der Heilige Geist ist wahrer Gott und die dritte Person der Heiligen Dreifaltigkeit. Er geht ewig vom Vater aus, ruht auf dem Sohn und wird durch den Sohn in die Welt gesandt. An Pfingsten wurde er der Kirche in besonderer Weise geschenkt.", "The Holy Spirit is true God and the third Person of the Holy Trinity. He eternally proceeds from the Father, rests upon the Son, and is sent into the world through the Son. At Pentecost he was given to the Church in a particular way."),
        bi("Der Geist macht Christus in der Kirche gegenwärtig, schenkt Gaben, führt zur Wahrheit und verwandelt das Leben der Gläubigen. Sein Wirken zeigt sich nicht vor allem in außergewöhnlichen Gefühlen, sondern in wachsender Liebe, Demut, Geduld, Reinheit und Treue.", "The Spirit makes Christ present in the Church, gives gifts, guides into truth, and transforms the lives of believers. His work is shown not mainly in extraordinary feelings but in growing love, humility, patience, purity, and faithfulness.")
      ],
      points: [bi("wahrer Gott", "true God"), bi("in Taufe und Myronsalbung geschenkt", "given in Baptism and Chrismation"), bi("Frucht des Geistes im täglichen Leben", "fruit of the Spirit in daily life")],
      scripture: "Joh 15,26 · Apg 2,1–4 · Gal 5,22–23"
    },
    {
      id: "scripture-tradition", category: "basics",
      title: bi("Schrift und Heilige Tradition", "Scripture and Holy Tradition"),
      summary: bi("Die Bibel lebt in der betenden und lehrenden Gemeinschaft der Kirche.", "The Bible lives within the praying and teaching communion of the Church."),
      paragraphs: [
        bi("Die Heilige Schrift steht im Herzen des orthodoxen Lebens. Sie wird in jedem Gottesdienst gelesen, besungen und ausgelegt. Zugleich ist die Bibel nicht außerhalb der Kirche entstanden: Die apostolische Gemeinschaft verkündete den Glauben, feierte die Eucharistie und erkannte in diesem Leben die biblischen Bücher als verbindlich.", "Holy Scripture stands at the heart of Orthodox life. It is read, sung, and interpreted in every service. At the same time, the Bible did not arise outside the Church: the apostolic community proclaimed the faith, celebrated the Eucharist, and within this life recognized the biblical books as authoritative."),
        bi("Heilige Tradition bedeutet nicht eine Sammlung beliebiger alter Gewohnheiten. Sie ist das vom Heiligen Geist getragene Leben der Kirche: Schrift, Glaubensregel, Konzilien, Liturgie, Kirchenväter, Ikonen und das beständige Zeugnis der Heiligen gehören zusammen. Menschliche Bräuche können sich ändern; der apostolische Glaube bleibt.", "Holy Tradition is not a collection of arbitrary old customs. It is the Spirit-bearing life of the Church: Scripture, the rule of faith, councils, liturgy, Fathers, icons, and the enduring witness of the saints belong together. Human customs may change; the apostolic faith remains.")
      ],
      points: [bi("Schrift als Wort Gottes", "Scripture as the word of God"), bi("Tradition als lebendiges Gedächtnis", "Tradition as living memory"), bi("Auslegung im Leben der Kirche", "interpretation within the life of the Church")],
      scripture: "2 Thess 2,15 · 2 Tim 3,14–17"
    },
    {
      id: "salvation-theosis", category: "basics",
      title: bi("Erlösung und Vergöttlichung", "Salvation and Theosis"),
      summary: bi("In Christus geheilt werden und an Gottes Leben teilhaben.", "To be healed in Christ and participate in the life of God."),
      paragraphs: [
        bi("Die Orthodoxie beschreibt Erlösung häufig als Heilung und Vereinigung mit Gott. Der Mensch wurde nach Gottes Bild geschaffen, ist aber durch Sünde und Tod verwundet. Christus nimmt unsere Natur an, erneuert sie und eröffnet den Weg zurück zur Gemeinschaft mit Gott.", "Orthodoxy often describes salvation as healing and union with God. The human person was created in God’s image but is wounded by sin and death. Christ assumes our nature, renews it, and opens the way back to communion with God."),
        bi("Diese Teilhabe am göttlichen Leben heißt Theosis oder Vergöttlichung. Der Mensch wird nicht zu einem zweiten Gott und verliert nicht seine Geschöpflichkeit. Aus Gnade wird er vielmehr dem ähnlich, der Gott von Natur aus ist. Dieser Weg umfasst Glauben, Umkehr, Sakramente, Gebet, Askese und tätige Liebe.", "This participation in divine life is called theosis or deification. The human person does not become another God or cease to be a creature. Rather, by grace one becomes like what God is by nature. This path includes faith, repentance, the sacraments, prayer, ascetic struggle, and active love.")
      ],
      points: [bi("Heilung des ganzen Menschen", "healing of the whole person"), bi("Teilhabe durch Gnade", "participation by grace"), bi("lebenslanger Weg der Umkehr", "lifelong path of repentance")],
      scripture: "2 Petr 1,4 · 2 Kor 3,18"
    },
    {
      id: "church-body", category: "church",
      title: bi("Die Kirche als Leib Christi", "The Church as the Body of Christ"),
      summary: bi("Mehr als eine Organisation: eine eucharistische Gemeinschaft in Christus.", "More than an organization: a Eucharistic communion in Christ."),
      paragraphs: [
        bi("Die Kirche ist der Leib Christi, dessen Haupt Christus selbst ist. Sie ist sichtbar in den örtlichen Gemeinden, ihren Bischöfen, Priestern, Diakonen und Gläubigen, und zugleich ein geistliches Geheimnis. Göttliche Heiligkeit und menschliche Schwäche begegnen sich in ihr.", "The Church is the Body of Christ, whose head is Christ himself. She is visible in local communities, their bishops, priests, deacons, and faithful, yet is also a spiritual mystery. Divine holiness and human weakness meet within her."),
        bi("Die Einheit der Kirche wird besonders in der Eucharistie sichtbar: Viele empfangen von einem Brot und werden als ein Leib gesammelt. Diese Einheit ist Gabe und Aufgabe. Sie verlangt denselben apostolischen Glauben, Gemeinschaft der Sakramente und die konkrete Liebe untereinander.", "The unity of the Church becomes especially visible in the Eucharist: many receive from one Bread and are gathered as one Body. This unity is both gift and task. It requires the same apostolic faith, communion in the sacraments, and concrete love for one another.")
      ],
      points: [bi("Christus ist das Haupt", "Christ is the head"), bi("der Bischof dient der sichtbaren Einheit", "the bishop serves visible unity"), bi("Eucharistie sammelt die Gemeinde", "the Eucharist gathers the community")],
      scripture: "1 Kor 10,16–17 · Eph 1,22–23"
    },
    {
      id: "holy-mysteries", category: "worship",
      title: bi("Die Heiligen Mysterien", "The Holy Mysteries"),
      summary: bi("Gott schenkt seine Gnade durch sichtbare Zeichen und das Leben der Kirche.", "God gives his grace through visible signs and the life of the Church."),
      paragraphs: [
        bi("In den Heiligen Mysterien – oft Sakramente genannt – wirkt Christus selbst durch den Heiligen Geist. Wasser, Öl, Brot, Wein, Handauflegung und das gesprochene Wort werden nicht als bloße Symbole verstanden. Durch sie wird Gottes heilendes Handeln konkret empfangen.", "In the Holy Mysteries—often called sacraments—Christ himself acts through the Holy Spirit. Water, oil, bread, wine, the laying on of hands, and the spoken word are not understood as mere symbols. Through them God’s healing action is concretely received."),
        bi("Häufig werden sieben Mysterien aufgezählt: Taufe, Myronsalbung, Eucharistie, Beichte, Ehe, Weihe und Krankensalbung. Die Orthodoxie begrenzt Gottes sakramentales Wirken jedoch nicht auf eine Zahl. Das ganze Leben der Kirche soll von der Gegenwart Gottes durchdrungen sein.", "Seven Mysteries are commonly listed: Baptism, Chrismation, Eucharist, Confession, Marriage, Ordination, and Anointing of the Sick. Orthodoxy does not, however, limit God’s sacramental action to a number. The whole life of the Church is meant to be permeated by God’s presence.")
      ],
      points: [bi("Christus ist der Handelnde", "Christ is the one who acts"), bi("Materie kann Träger der Gnade sein", "matter can bear grace"), bi("Empfang verlangt Glauben und Umkehr", "reception calls for faith and repentance")],
      scripture: "Joh 3,5 · Jak 5,14–15"
    },
    {
      id: "baptism-chrismation", category: "worship",
      title: bi("Taufe und Myronsalbung", "Baptism and Chrismation"),
      summary: bi("Neugeburt in Christus und Gabe des Heiligen Geistes.", "New birth in Christ and the gift of the Holy Spirit."),
      paragraphs: [
        bi("In der Taufe wird ein Mensch dreimal in Wasser eingetaucht – im Namen des Vaters, des Sohnes und des Heiligen Geistes. Er wird mit Christi Tod und Auferstehung verbunden, von Sünde gereinigt und in den Leib der Kirche aufgenommen.", "In Baptism a person is immersed three times—in the name of the Father, the Son, and the Holy Spirit. The person is joined to Christ’s death and Resurrection, cleansed from sin, and received into the Body of the Church."),
        bi("Unmittelbar danach folgt gewöhnlich die Myronsalbung. Der Neugetaufte wird mit heiligem Myron gesalbt und empfängt das Siegel der Gabe des Heiligen Geistes. Auch Kinder empfangen danach die Eucharistie; christliches Leben ist von Anfang an vollständige Gemeinschaft, die später bewusst vertieft wird.", "Chrismation normally follows immediately. The newly baptized person is anointed with holy chrism and receives the seal of the gift of the Holy Spirit. Children also receive the Eucharist afterward; Christian life is full communion from the beginning, later deepened consciously.")
      ],
      points: [bi("dreifaches Untertauchen", "threefold immersion"), bi("Teilnahme an Tod und Auferstehung Christi", "participation in Christ’s death and Resurrection"), bi("Siegel des Heiligen Geistes", "seal of the Holy Spirit")],
      scripture: "Röm 6,3–4 · Apg 2,38"
    },
    {
      id: "eucharist", category: "worship",
      title: bi("Die Heilige Eucharistie", "The Holy Eucharist"),
      summary: bi("Leib und Blut Christi, Mittelpunkt des kirchlichen Lebens.", "The Body and Blood of Christ, center of the Church’s life."),
      paragraphs: [
        bi("In der Göttlichen Liturgie bringt die Kirche Brot und Wein dar und bittet den Vater, den Heiligen Geist herabzusenden. Die Gaben werden wahrhaft Leib und Blut Christi. Die Orthodoxie versucht dieses Geheimnis nicht auf einen technischen Augenblick oder eine rein menschliche Erklärung zu reduzieren.", "In the Divine Liturgy the Church offers bread and wine and asks the Father to send down the Holy Spirit. The gifts truly become the Body and Blood of Christ. Orthodoxy does not reduce this mystery to a technical instant or a merely human explanation."),
        bi("Die Kommunion ist zugleich persönliche Begegnung mit Christus und sichtbares Zeichen voller kirchlicher Einheit. Deshalb ist sie grundsätzlich getauften orthodoxen Christen vorbehalten, die sich entsprechend ihrer Gemeindepraxis vorbereitet haben. Besucher sind zur Liturgie herzlich willkommen, gehen aber nicht ohne Rücksprache zur Kommunion.", "Communion is both a personal encounter with Christ and the visible sign of full ecclesial unity. For this reason it is ordinarily reserved for baptized Orthodox Christians who have prepared according to their parish practice. Visitors are warmly welcome at the Liturgy but do not approach Communion without guidance.")
      ],
      points: [bi("wirkliche Gabe Christi", "Christ’s real gift"), bi("Danksagung und Opfer", "thanksgiving and offering"), bi("Zeichen voller Kirchengemeinschaft", "sign of full Church communion")],
      scripture: "Joh 6,53–56 · 1 Kor 11,23–29"
    },
    {
      id: "confession", category: "worship",
      title: bi("Beichte und Umkehr", "Confession and Repentance"),
      summary: bi("Sünde ehrlich vor Gott bringen und Heilung empfangen.", "Bringing sin honestly before God and receiving healing."),
      paragraphs: [
        bi("Umkehr bedeutet mehr als Schuldgefühl. Das griechische Wort metanoia beschreibt eine Erneuerung des Denkens und eine Wendung des ganzen Lebens zu Gott. In der Beichte bekennt der Christ seine Sünden vor Christus in Gegenwart eines Priesters.", "Repentance means more than feeling guilty. The Greek word metanoia describes a renewal of the mind and a turning of one’s whole life toward God. In Confession the Christian acknowledges sins before Christ in the presence of a priest."),
        bi("Der Priester ist Zeuge, Seelsorger und Diener der Vergebung, nicht ein Richter, vor dem man sich verstecken muss. Aufrichtigkeit, konkrete Benennung und der Wille zur Veränderung sind wichtiger als perfekte Formulierungen. Häufigkeit und Vorbereitung werden am besten mit dem eigenen Priester besprochen.", "The priest is a witness, pastor, and minister of forgiveness—not a judge from whom one must hide. Honesty, concrete acknowledgment, and a desire to change matter more than perfect wording. Frequency and preparation are best discussed with one’s own priest.")
      ],
      points: [bi("ehrliche Selbstprüfung", "honest self-examination"), bi("Vergebung durch Christus", "forgiveness through Christ"), bi("Heilung und neuer Anfang", "healing and a new beginning")],
      scripture: "Joh 20,22–23 · Jak 5,16"
    },
    {
      id: "divine-liturgy", category: "worship",
      title: bi("Die Göttliche Liturgie", "The Divine Liturgy"),
      summary: bi("Der gemeinsame Weg von Verkündigung und Opfer zur Kommunion.", "The common journey from proclamation and offering to Communion."),
      paragraphs: [
        bi("Die Göttliche Liturgie ist der zentrale Gottesdienst der Orthodoxen Kirche. In der Liturgie der Katechumenen hört die Gemeinde Lesungen aus Apostel und Evangelium, singt Psalmen und betet Fürbitten. Danach folgt die Liturgie der Gläubigen mit Großem Einzug, Glaubensbekenntnis, Anaphora und Kommunion.", "The Divine Liturgy is the central service of the Orthodox Church. In the Liturgy of the Catechumens the community hears readings from the Apostle and Gospel, sings psalms, and offers intercessions. The Liturgy of the Faithful follows with the Great Entrance, Creed, Anaphora, and Communion."),
        bi("Die Gläubigen stehen nicht als Zuschauer vor einer Aufführung. Sie antworten, singen, bekreuzigen sich, verneigen sich und bringen ihr ganzes Leben als Dankopfer dar. Lokale Bräuche unterscheiden sich; ein Besucher darf ruhig beobachten und muss nicht jede Bewegung nachahmen.", "The faithful do not stand as spectators before a performance. They respond, sing, make the sign of the Cross, bow, and offer their whole lives in thanksgiving. Local customs differ; a visitor may quietly observe and need not imitate every movement.")
      ],
      points: [bi("Verkündigung des Wortes", "proclamation of the Word"), bi("Anaphora und Herabrufung des Geistes", "Anaphora and invocation of the Spirit"), bi("Kommunion und Sendung in die Welt", "Communion and mission into the world")],
      scripture: "Lk 24,30–35 · Apg 2,42"
    },
    {
      id: "icons", category: "worship",
      title: bi("Ikonen und Verehrung", "Icons and Veneration"),
      summary: bi("Heilige Bilder bezeugen, dass das Wort wirklich Fleisch geworden ist.", "Holy images witness that the Word truly became flesh."),
      paragraphs: [
        bi("Ikonen werden nicht als Götter verehrt und nicht angebetet. Anbetung gebührt allein dem dreieinigen Gott. Die Ehre, die einer Ikone erwiesen wird, gilt der dargestellten Person. Ein Kuss oder eine Verneigung ist eine leibliche Form von Liebe und Respekt.", "Icons are not worshiped as gods. Adoration belongs to the Triune God alone. The honor shown to an icon passes to the person depicted. A kiss or bow is a bodily expression of love and respect."),
        bi("Die Möglichkeit christlicher Ikonen gründet in der Menschwerdung: Der unsichtbare Sohn Gottes wurde sichtbar und berührbar. Ikonen sind daher nicht bloße Dekoration, sondern bildhafte Verkündigung. Ihre geregelte Sprache will nicht fotografischen Realismus, sondern die verwandelte Schöpfung zeigen.", "The possibility of Christian icons is grounded in the Incarnation: the invisible Son of God became visible and tangible. Icons are therefore not mere decoration but proclamation in images. Their disciplined language seeks not photographic realism but the transfigured creation.")
      ],
      points: [bi("Anbetung allein für Gott", "worship for God alone"), bi("Verehrung gilt der dargestellten Person", "veneration passes to the person depicted"), bi("Bekenntnis der Menschwerdung", "confession of the Incarnation")],
      scripture: "Joh 1,14 · Kol 1,15"
    },
    {
      id: "theotokos", category: "basics",
      title: bi("Die Gottesgebärerin", "The Theotokos"),
      summary: bi("Warum Maria in der Orthodoxie Theotokos genannt und hoch verehrt wird.", "Why Mary is called Theotokos and highly honored in Orthodoxy."),
      paragraphs: [
        bi("Maria wird Theotokos – Gottesgebärerin oder Gottesmutter – genannt, weil der von ihr geborene Jesus eine einzige göttliche Person ist. Der Titel schützt vor allem die Wahrheit über Christus: Der Sohn Marias ist nicht ein bloßer Mensch neben dem Sohn Gottes, sondern das fleischgewordene Wort.", "Mary is called Theotokos—God-bearer or Mother of God—because the Jesus born from her is one divine Person. The title primarily protects the truth about Christ: Mary’s Son is not a merely human person alongside the Son of God but the Word made flesh."),
        bi("Die Kirche ehrt Maria als die höchste unter den Heiligen und als Vorbild des freien Gehorsams: „Mir geschehe nach deinem Wort.“ Sie wird um Fürbitte gebeten, aber niemals als Göttin verstanden. Jede echte Verehrung der Theotokos führt zu ihrem Sohn.", "The Church honors Mary as the highest among the saints and as the model of free obedience: “Let it be to me according to your word.” She is asked for intercession but never regarded as a goddess. Every authentic veneration of the Theotokos leads to her Son.")
      ],
      points: [bi("Titel bekennt die Einheit Christi", "the title confesses Christ’s unity"), bi("höchste unter den Heiligen", "highest among the saints"), bi("Fürsprecherin, nicht Göttin", "intercessor, not a goddess")],
      scripture: "Lk 1,26–49 · Joh 2,1–11"
    },
    {
      id: "saints-intercession", category: "basics",
      title: bi("Heilige und Fürbitte", "Saints and Intercession"),
      summary: bi("Die Gemeinschaft in Christus endet nicht mit dem Tod.", "Communion in Christ does not end with death."),
      paragraphs: [
        bi("Heilige sind Menschen, in denen die Gnade Christi sichtbar geworden ist. Sie werden nicht als fehlerlose Supermenschen verehrt, sondern als Zeugen dafür, was Gottes Liebe in einem bereiten Menschen wirken kann. Ihre Lebensgeschichten sind sehr verschieden: Märtyrer, Bischöfe, Mönche, Eltern, Herrscher und Arme finden sich darunter.", "Saints are people in whom the grace of Christ has become visible. They are not honored as flawless superhumans but as witnesses to what God’s love can accomplish in a willing person. Their lives are very different: martyrs, bishops, monks, parents, rulers, and the poor are among them."),
        bi("Wenn Orthodoxe einen Heiligen um Gebet bitten, ersetzen sie Christus nicht. Wie Christen auf Erden füreinander beten, so bittet die Kirche auch jene um Fürbitte, die in Christus leben. Jede Fürbitte richtet sich letztlich an Gott, den Geber aller Gnade.", "When Orthodox Christians ask a saint for prayer, they do not replace Christ. Just as Christians on earth pray for one another, the Church also asks the intercession of those alive in Christ. Every intercession is ultimately directed to God, the giver of all grace.")
      ],
      points: [bi("Zeugen der verwandelnden Gnade", "witnesses of transforming grace"), bi("Gemeinschaft der Lebenden und Verstorbenen", "communion of living and departed"), bi("Christus bleibt der einzige Erlöser", "Christ remains the only Savior")],
      scripture: "Hebr 12,1 · Offb 5,8"
    },
    {
      id: "prayer", category: "life",
      title: bi("Was ist Gebet?", "What Is Prayer?"),
      summary: bi("Begegnung, Aufmerksamkeit und Antwort auf Gottes Gegenwart.", "Encounter, attention, and response to God’s presence."),
      paragraphs: [
        bi("Gebet ist nicht nur das Aussprechen von Wünschen. Es ist das bewusste Stehen vor Gott – mit Dank, Lob, Reue, Bitte und manchmal schweigend. Gott muss nicht informiert oder überredet werden; im Gebet wird vielmehr das menschliche Herz für seine Gegenwart geöffnet.", "Prayer is not merely voicing requests. It is consciously standing before God—with thanksgiving, praise, repentance, petition, and sometimes silence. God need not be informed or persuaded; rather, in prayer the human heart is opened to his presence."),
        bi("Ein fester Rhythmus am Morgen und Abend hilft, doch die Regel soll dem Menschen dienen und unter seelsorglicher Führung wachsen. Kurze, aufmerksame Gebete sind oft besser als viele Worte ohne Sammlung. Zerstreuung ist kein Grund aufzugeben: Man kehrt ruhig zu den Worten und zu Gott zurück.", "A regular morning and evening rhythm helps, but the rule should serve the person and grow under pastoral guidance. Short, attentive prayers are often better than many words without recollection. Distraction is no reason to give up: one calmly returns to the words and to God.")
      ],
      points: [bi("mit Aufmerksamkeit vor Gott stehen", "stand attentively before God"), bi("regelmäßig und ehrlich beten", "pray regularly and honestly"), bi("bei Zerstreuung ruhig zurückkehren", "return calmly when distracted")],
      scripture: "Mt 6,6–13 · Phil 4,6–7"
    },
    {
      id: "jesus-prayer", category: "life",
      title: bi("Das Jesusgebet", "The Jesus Prayer"),
      summary: bi("„Herr Jesus Christus, Sohn Gottes, erbarme dich meiner.“", "“Lord Jesus Christ, Son of God, have mercy on me.”"),
      paragraphs: [
        bi("Das Jesusgebet verbindet das Bekenntnis zu Christus mit der Bitte um Erbarmen. Es kann langsam und aufmerksam wiederholt werden, im stillen Gebet oder während einfacher Tätigkeiten. Eine Gebetsschnur kann helfen, die Aufmerksamkeit zu sammeln; sie ist kein magischer Gegenstand und kein Leistungsmesser.", "The Jesus Prayer joins confession of Christ with a plea for mercy. It may be repeated slowly and attentively in silent prayer or during simple activities. A prayer rope can help gather attention; it is neither a magical object nor a measure of achievement."),
        bi("Die tieferen Formen des Herzensgebets gehören unter die Begleitung eines erfahrenen geistlichen Vaters oder einer geistlichen Mutter. Anfänger brauchen keine Atemtechniken oder besonderen inneren Bilder. Nüchternheit, Demut, Teilnahme am kirchlichen Leben und Beharrlichkeit sind der sichere Weg.", "The deeper forms of prayer of the heart belong under the guidance of an experienced spiritual father or mother. Beginners need no breathing techniques or special mental images. Sobriety, humility, participation in Church life, and perseverance are the safe path.")
      ],
      points: [bi("Christusbekenntnis und Bitte um Erbarmen", "confession of Christ and plea for mercy"), bi("ohne innere Bilder", "without mental images"), bi("geistliche Begleitung bei vertiefter Praxis", "spiritual guidance for deeper practice")],
      scripture: "Lk 18,13 · Phil 2,9–11"
    },
    {
      id: "fasting", category: "life",
      title: bi("Fasten", "Fasting"),
      summary: bi("Freiheit lernen, das Herz auf Gott richten und mit Bedürftigen teilen.", "Learning freedom, turning the heart to God, and sharing with those in need."),
      paragraphs: [
        bi("Orthodoxes Fasten betrifft gewöhnlich bestimmte Speisen, soll aber den ganzen Menschen verwandeln. Ohne Gebet, Umkehr, Vergebung und Almosen wird die bloße Ernährungsregel leer. Ziel ist nicht Selbstbestrafung, sondern Freiheit von Gewohnheiten, die uns beherrschen.", "Orthodox fasting usually concerns certain foods but is meant to transform the whole person. Without prayer, repentance, forgiveness, and almsgiving, dietary rules become empty. The goal is not self-punishment but freedom from habits that dominate us."),
        bi("Die konkrete Fastenregel hängt von Gesundheit, Alter, Arbeit, Schwangerschaft und seelsorglicher Situation ab. Wer neu ist, krank ist oder eine Essstörung kennt, sollte nicht eigenmächtig eine strenge Regel übernehmen, sondern mit Priester und gegebenenfalls Arzt sprechen. Diese App zeigt nur allgemeine Kalendertage.", "The concrete fasting rule depends on health, age, work, pregnancy, and pastoral circumstances. Anyone new to fasting, ill, or affected by an eating disorder should not adopt a strict rule independently but should speak with a priest and, when appropriate, a doctor. This app shows only general calendar days.")
      ],
      points: [bi("Fasten, Gebet und Almosen gehören zusammen", "fasting, prayer, and almsgiving belong together"), bi("keine geistliche Selbstdarstellung", "no spiritual display"), bi("Regel an die Person anpassen", "adapt the rule to the person")],
      scripture: "Mt 6,16–18 · Jes 58,6–10"
    },
    {
      id: "almsgiving", category: "life",
      title: bi("Nächstenliebe und Almosen", "Love of Neighbor and Almsgiving"),
      summary: bi("Der Glaube wird in konkreter Barmherzigkeit sichtbar.", "Faith becomes visible in concrete mercy."),
      paragraphs: [
        bi("Die Liebe zu Gott kann nicht von der Liebe zum Mitmenschen getrennt werden. Almosen bedeuten mehr als gelegentlich Geld zu geben. Zeit, Aufmerksamkeit, Gastfreundschaft, Fürsprache und der Schutz von Schwachen gehören ebenfalls dazu.", "Love of God cannot be separated from love of neighbor. Almsgiving means more than occasionally giving money. Time, attention, hospitality, advocacy, and protection of the vulnerable also belong to it."),
        bi("Christliche Hilfe achtet die Würde des Empfängers und sucht nicht Bewunderung. Sie fragt zugleich nach den Ursachen von Not und nach gerechten Beziehungen. Fasten schafft Raum zum Teilen: Was wir freiwillig nicht verbrauchen, kann anderen dienen.", "Christian help honors the dignity of the recipient and does not seek admiration. It also asks about the causes of need and about just relationships. Fasting creates room for sharing: what we voluntarily do not consume can serve others.")
      ],
      points: [bi("Christus im Bedürftigen begegnen", "meet Christ in the person in need"), bi("diskret und respektvoll helfen", "help discreetly and respectfully"), bi("Gerechtigkeit und Barmherzigkeit verbinden", "join justice and mercy")],
      scripture: "Mt 25,31–46 · Jak 2,14–17"
    },
    {
      id: "church-year", category: "worship",
      title: bi("Das orthodoxe Kirchenjahr", "The Orthodox Church Year"),
      summary: bi("Christi Heilshandeln im Rhythmus von Festen, Fasten und Gedenken.", "Christ’s saving work in the rhythm of feasts, fasts, and commemorations."),
      paragraphs: [
        bi("Das Kirchenjahr beginnt am 1. September. Sein Mittelpunkt ist Pascha, das Fest der Auferstehung Christi. Um Pascha ordnen sich die Große Fastenzeit, die Heilige Woche, die österliche Freudenzeit, Himmelfahrt und Pfingsten. Daneben prägen die großen Christus- und Marienfeste den Jahreslauf.", "The Church year begins on September 1. Its center is Pascha, the feast of Christ’s Resurrection. Around Pascha are ordered Great Lent, Holy Week, the Paschal season, Ascension, and Pentecost. The great feasts of Christ and the Theotokos also shape the year."),
        bi("Manche orthodoxe Kirchen feiern feste Feste nach dem revidierten julianischen beziehungsweise gregorianischen Kalender, andere nach dem alten julianischen Kalender. Dadurch können feste Daten derzeit dreizehn Tage auseinanderliegen. Die Pascha-Berechnung wird davon gesondert behandelt.", "Some Orthodox churches celebrate fixed feasts according to the Revised Julian or Gregorian calendar, while others use the old Julian calendar. Fixed dates may therefore presently differ by thirteen days. The calculation of Pascha is treated separately.")
      ],
      points: [bi("Pascha ist der Mittelpunkt", "Pascha is the center"), bi("Feste machen Heilsgeschichte gegenwärtig", "feasts make salvation history present"), bi("alter und neuer Kalender betreffen feste Daten", "old and new calendars affect fixed dates")],
      scripture: "Röm 14,5–6 · Kol 2,16–17"
    },
    {
      id: "monasticism", category: "life",
      title: bi("Mönchtum", "Monasticism"),
      summary: bi("Ein Leben der ungeteilten Hingabe an Gott zum Dienst an der ganzen Kirche.", "A life of undivided dedication to God in service to the whole Church."),
      paragraphs: [
        bi("Orthodoxe Mönche und Nonnen versprechen gewöhnlich Ehelosigkeit, Besitzlosigkeit und Gehorsam. Sie fliehen nicht aus Verachtung vor der Welt, sondern suchen die Heilung des Herzens und tragen die Welt im Gebet vor Gott. Klöster sind Orte der Liturgie, Gastfreundschaft, Arbeit und geistlichen Begleitung.", "Orthodox monks and nuns normally promise celibacy, poverty, and obedience. They do not flee from contempt for the world but seek the healing of the heart and carry the world before God in prayer. Monasteries are places of liturgy, hospitality, work, and spiritual guidance."),
        bi("Das Mönchtum ist keine höhere Menschenklasse. Ehe und Mönchtum sind verschiedene Wege, auf denen dieselbe Berufung zur Heiligkeit gelebt wird. Die radikale Einfachheit der Mönche erinnert alle Christen daran, dass das Reich Gottes das letzte Ziel des Lebens ist.", "Monasticism is not a higher class of human beings. Marriage and monasticism are different paths on which the same call to holiness is lived. The radical simplicity of monks reminds all Christians that the Kingdom of God is life’s ultimate goal.")
      ],
      points: [bi("Gebet, Arbeit und Gastfreundschaft", "prayer, work, and hospitality"), bi("geistliche Elternschaft", "spiritual parenthood"), bi("Zeichen des kommenden Reiches", "sign of the coming Kingdom")],
      scripture: "Mt 19,21 · 1 Kor 7,32–35"
    },
    {
      id: "death-resurrection", category: "basics",
      title: bi("Tod, Gericht und Auferstehung", "Death, Judgment, and Resurrection"),
      summary: bi("Christliche Hoffnung ruht auf der Auferstehung des Leibes und dem Leben der kommenden Welt.", "Christian hope rests on the resurrection of the body and the life of the age to come."),
      paragraphs: [
        bi("Der Tod ist nach orthodoxem Verständnis ein Feind und eine Folge der gefallenen Welt, nicht Gottes ursprüngliches Ziel für den Menschen. Christus ist freiwillig in den Tod hinabgestiegen und hat ihn von innen überwunden. Deshalb trauert die Kirche wirklich, aber nicht ohne Hoffnung.", "In Orthodox understanding death is an enemy and a consequence of the fallen world, not God’s original purpose for humanity. Christ freely entered death and conquered it from within. The Church therefore truly mourns, but not without hope."),
        bi("Die Kirche erwartet die Wiederkunft Christi, die Auferstehung aller Menschen und das endgültige Gericht. Das Gericht offenbart die Wahrheit unseres Lebens im Licht der göttlichen Liebe. Spekulationen über genaue Abläufe sollen nicht von Umkehr, Gebet für die Verstorbenen und dem Vertrauen auf Gottes Gerechtigkeit und Barmherzigkeit ablenken.", "The Church awaits Christ’s return, the resurrection of all people, and the final judgment. Judgment reveals the truth of our lives in the light of divine love. Speculation about exact sequences should not distract from repentance, prayer for the departed, and trust in God’s justice and mercy.")
      ],
      points: [bi("Christus hat den Tod besiegt", "Christ has conquered death"), bi("Auferstehung des ganzen Menschen", "resurrection of the whole person"), bi("Wachsamkeit statt Spekulation", "watchfulness rather than speculation")],
      scripture: "1 Kor 15,20–28 · Joh 5,28–29"
    },
    {
      id: "councils", category: "church",
      title: bi("Die sieben ökumenischen Konzilien", "The Seven Ecumenical Councils"),
      summary: bi("Wie die Kirche den apostolischen Glauben gegen Irrlehren formulierte.", "How the Church articulated the apostolic faith against error."),
      paragraphs: [
        bi("Die ersten sieben ökumenischen Konzilien fanden zwischen 325 und 787 statt. Sie bekannten die volle Gottheit des Sohnes und des Heiligen Geistes, klärten die Einheit der göttlichen und menschlichen Naturen Christi und verteidigten die Verehrung heiliger Ikonen.", "The first seven Ecumenical Councils met between 325 and 787. They confessed the full divinity of the Son and Holy Spirit, clarified the union of Christ’s divine and human natures, and defended the veneration of holy icons."),
        bi("Konzilien erfinden keine neue Offenbarung. Ihre Autorität liegt darin, dass die ganze Kirche in ihnen den überlieferten apostolischen Glauben erkennt. Lehre dient dabei dem Heil: Wenn Christus nicht wahrer Gott und wahrer Mensch ist, kann er Gott und Mensch nicht wirklich vereinen.", "Councils do not invent new revelation. Their authority lies in the whole Church recognizing within them the apostolic faith handed down. Doctrine serves salvation: if Christ is not true God and true man, he cannot truly unite God and humanity.")
      ],
      points: [bi("Nizäa I: Gottheit des Sohnes", "Nicaea I: divinity of the Son"), bi("Chalcedon: zwei Naturen in einer Person", "Chalcedon: two natures in one Person"), bi("Nizäa II: heilige Ikonen", "Nicaea II: holy icons")],
      scripture: "Apg 15,1–29 · Jud 3"
    },
    {
      id: "apostolic-succession", category: "church",
      title: bi("Bischöfe und apostolische Sukzession", "Bishops and Apostolic Succession"),
      summary: bi("Der apostolische Dienst wird in der Kirche durch Handauflegung weitergegeben.", "Apostolic ministry is handed on in the Church through the laying on of hands."),
      paragraphs: [
        bi("Die Apostel setzten durch Gebet und Handauflegung Bischöfe und andere Diener ein. Apostolische Sukzession bezeichnet diese geschichtliche Kontinuität der Weihe. Sie ist jedoch keine bloße Liste gültiger Handauflegungen, sondern muss mit dem apostolischen Glauben und der kirchlichen Gemeinschaft verbunden bleiben.", "The Apostles appointed bishops and other ministers through prayer and the laying on of hands. Apostolic succession names this historical continuity of ordination. It is not merely a list of valid hand-layings but must remain joined to apostolic faith and ecclesial communion."),
        bi("Der Bischof ist nicht Eigentümer seiner Diözese, sondern Diener ihrer Einheit und Lehrer des Glaubens. Priester leiten Gemeinden in seinem Auftrag; Diakone dienen an Altar und Volk. Alle Ämter existieren zum Aufbau des Leibes Christi, nicht zur persönlichen Macht.", "A bishop is not the owner of his diocese but the servant of its unity and teacher of the faith. Priests lead communities on his behalf; deacons serve at the altar and among the people. Every ministry exists to build up the Body of Christ, not for personal power.")
      ],
      points: [bi("Kontinuität durch Weihe", "continuity through ordination"), bi("Treue zum apostolischen Glauben", "faithfulness to apostolic faith"), bi("Amt als Dienst", "ministry as service")],
      scripture: "1 Tim 4,14 · Tit 1,5–9"
    },
    {
      id: "sin-passions", category: "life",
      title: bi("Sünde und Leidenschaften", "Sin and the Passions"),
      summary: bi("Sünde als Trennung und Krankheit erkennen, ohne die Verantwortung zu leugnen.", "Recognizing sin as separation and sickness without denying responsibility."),
      paragraphs: [
        bi("Sünde ist das Verfehlen der von Gott geschenkten Bestimmung und eine freiwillige Abwendung von der Liebe. Sie hat rechtliche Folgen, wird in der Orthodoxie aber häufig auch als Krankheit beschrieben. Diese Sprache entschuldigt das Böse nicht; sie zeigt, dass der Sünder zugleich verantwortlich und heilungsbedürftig ist.", "Sin is missing the purpose given by God and a voluntary turning away from love. It has juridical consequences, but Orthodoxy also often describes it as illness. This language does not excuse evil; it shows that the sinner is both responsible and in need of healing."),
        bi("Leidenschaften sind gute menschliche Kräfte, die ungeordnet und versklavend geworden sind – etwa Hunger als Maßlosigkeit oder Selbstachtung als Stolz. Askese will diese Kräfte nicht zerstören, sondern in ihre rechte Richtung bringen. Wachsamkeit beginnt damit, Gedanken früh zu bemerken, statt erst gegen fertige Gewohnheiten zu kämpfen.", "The passions are good human powers that have become disordered and enslaving—for example hunger becoming gluttony or self-respect becoming pride. Ascetic struggle seeks not to destroy these powers but to redirect them rightly. Watchfulness begins by noticing thoughts early rather than fighting only fully formed habits.")
      ],
      points: [bi("Verantwortung und Heilung", "responsibility and healing"), bi("Gedanken früh erkennen", "recognize thoughts early"), bi("Tugend als geordnete Kraft", "virtue as rightly ordered power")],
      scripture: "Röm 7,15–25 · Jak 1,14–15"
    },
    {
      id: "virtues", category: "life",
      title: bi("Tugenden und geistliches Wachstum", "Virtues and Spiritual Growth"),
      summary: bi("Gnade wird in beständigen Gewohnheiten der Liebe wirksam.", "Grace becomes active in steady habits of love."),
      paragraphs: [
        bi("Tugenden sind keine Sammlung äußerer Höflichkeitsregeln. Sie sind geheilte Kräfte der Seele: Demut, Liebe, Keuschheit, Mut, Geduld, Freigebigkeit und Nüchternheit machen den Menschen fähig, frei und wahrhaftig zu handeln.", "Virtues are not a collection of external rules of politeness. They are healed powers of the soul: humility, love, chastity, courage, patience, generosity, and sobriety make a person able to act freely and truthfully."),
        bi("Geistliches Wachstum geschieht durch Gottes Gnade und menschliche Mitwirkung. Kleine treue Schritte sind nachhaltiger als kurze Phasen religiöser Begeisterung. Der Vergleich mit anderen führt leicht zu Stolz oder Verzweiflung; der Maßstab ist Christus und der konkrete nächste Schritt der Umkehr.", "Spiritual growth takes place through God’s grace and human cooperation. Small faithful steps are more lasting than brief periods of religious enthusiasm. Comparing oneself with others easily leads to pride or despair; the measure is Christ and the concrete next step of repentance.")
      ],
      points: [bi("Gnade und freie Mitwirkung", "grace and free cooperation"), bi("kleine beständige Schritte", "small steady steps"), bi("Liebe als Ziel aller Tugend", "love as the goal of every virtue")],
      scripture: "2 Petr 1,5–8 · 1 Kor 13,1–13"
    },
    {
      id: "visit-liturgy", category: "worship",
      title: bi("Zum ersten Mal in der Liturgie", "Your First Divine Liturgy"),
      summary: bi("Eine praktische und entspannte Orientierung für Besucher.", "A practical and reassuring orientation for visitors."),
      paragraphs: [
        bi("Komm möglichst einige Minuten früher, kleide dich sauber und zurückhaltend und stelle dich an einen Platz, von dem aus du gut beobachten kannst. Du musst keine Kerze kaufen, keine Ikone küssen und nicht jede Verneigung mitmachen. Ruhiges, respektvolles Dabeisein ist vollkommen in Ordnung.", "Arrive a few minutes early if possible, dress neatly and modestly, and stand where you can observe comfortably. You do not have to buy a candle, kiss an icon, or copy every bow. Quiet and respectful presence is completely fine."),
        bi("Gehe nicht zur Kommunion, solange du nicht orthodox getauft und entsprechend vorbereitet bist. In manchen Gemeinden wird am Ende gesegnetes Brot an alle verteilt; frage im Zweifel eine vertraute Person. Nach dem Gottesdienst kannst du den Priester kurz begrüßen und um einen Termin für ein ruhiges Gespräch bitten.", "Do not approach Communion unless you are baptized Orthodox and properly prepared. In some parishes blessed bread is shared with everyone at the end; ask a trusted person when uncertain. After the service you may briefly greet the priest and ask for a separate time to talk." )
      ],
      points: [bi("beobachten ist erlaubt", "it is fine to observe"), bi("Kommunion nur nach kirchlicher Vorbereitung", "Communion only after ecclesial preparation"), bi("lokale Bräuche freundlich erfragen", "ask kindly about local customs")],
      scripture: "Ps 95,6 · 1 Kor 14,40"
    },
    {
      id: "cross-prostrations", category: "worship",
      title: bi("Kreuzzeichen, Verneigungen und Niederwerfungen", "The Sign of the Cross, Bows, and Prostrations"),
      summary: bi("Warum der Leib am Gebet teilnimmt.", "Why the body participates in prayer."),
      paragraphs: [
        bi("Beim orthodoxen Kreuzzeichen werden gewöhnlich Daumen, Zeige- und Mittelfinger als Bekenntnis zur Dreifaltigkeit zusammengelegt; die beiden übrigen Finger erinnern an die zwei Naturen Christi. Die Hand bewegt sich von der Stirn zur Brust und von der rechten zur linken Schulter.", "For the Orthodox sign of the Cross, the thumb, index, and middle finger are commonly joined as a confession of the Trinity; the other two fingers recall Christ’s two natures. The hand moves from the forehead to the chest and from the right shoulder to the left."),
        bi("Verneigungen und Niederwerfungen drücken Ehrfurcht, Reue und Hingabe aus. Sie sind keine sportliche Leistung. An Sonntagen und in der österlichen Zeit werden große Niederwerfungen liturgisch meist vermieden, während sie in der Großen Fastenzeit häufiger vorkommen. Lokale Praxis kann variieren.", "Bows and prostrations express reverence, repentance, and surrender. They are not athletic achievements. Full prostrations are generally avoided liturgically on Sundays and in the Paschal season, while they are more frequent during Great Lent. Local practice may vary.")
      ],
      points: [bi("der Leib betet mit", "the body prays too"), bi("Zeichen fasst den Glauben zusammen", "the sign summarizes the faith"), bi("ohne Zwang und Selbstdarstellung", "without compulsion or display")],
      scripture: "1 Kor 6,19–20 · Phil 2,10"
    },
    {
      id: "spiritual-guidance", category: "life",
      title: bi("Geistliche Begleitung", "Spiritual Guidance"),
      summary: bi("Warum persönlicher Rat durch einen Priester oder erfahrenen Begleiter wichtig ist.", "Why personal counsel from a priest or experienced guide matters."),
      paragraphs: [
        bi("Bücher und Apps können informieren, aber sie kennen weder deine Lebensgeschichte noch deine Gemeinde. Ein Priester hilft, eine Gebets- und Fastenregel realistisch aufzubauen, die Sakramente vorzubereiten und schwierige Gewissensfragen ohne vorschnelle Allgemeinrezepte zu klären.", "Books and apps can inform, but they know neither your life story nor your parish. A priest helps build a realistic prayer and fasting rule, prepare for the sacraments, and address difficult questions of conscience without hasty universal formulas."),
        bi("Gehorsam in der Orthodoxie ist kein Freibrief für Kontrolle oder Missbrauch. Gesunde geistliche Begleitung respektiert Freiheit, Verantwortung und Grenzen und führt zu Christus, nicht zur Abhängigkeit von der Persönlichkeit eines Menschen. Bei eindeutig schädlichem Verhalten ist weiterer Rat einzuholen.", "Obedience in Orthodoxy is not a license for control or abuse. Healthy spiritual guidance respects freedom, responsibility, and boundaries and leads to Christ, not dependence on someone’s personality. Clearly harmful behavior calls for further counsel.")
      ],
      points: [bi("persönlich statt nur allgemein", "personal rather than merely general"), bi("Freiheit und Verantwortung achten", "respect freedom and responsibility"), bi("Ziel ist Christus", "the goal is Christ")],
      scripture: "Spr 11,14 · 1 Petr 5,2–3"
    }
  ];

  window.ORTHODOXIA_DATA = { bi, ui, articles };
})();
