(function () {
  "use strict";
  const bi = (de, en) => ({ de, en });
  const prayers = [
    {
      id: "morning", category: "daily",
      title: bi("Morgengebet", "Morning Prayer"),
      occasion: bi("Zum Beginn des Tages", "At the beginning of the day"),
      body: bi("Herr, ich danke Dir, dass Du mich diesen neuen Tag sehen lässt. Erleuchte meinen Verstand, bewahre mein Herz und leite meine Schritte. Hilf mir, jedem Menschen mit Geduld zu begegnen, meine Aufgaben treu zu erfüllen und in allem Deinen Willen zu suchen. Wenn ich falle, richte mich wieder auf; wenn ich Gutes tue, bewahre mich vor Stolz. Durch die Gebete der Gottesgebärerin und aller Heiligen, erbarme Dich meiner und rette mich. Amen.", "Lord, I thank You for allowing me to see this new day. Enlighten my mind, guard my heart, and guide my steps. Help me meet every person with patience, fulfill my duties faithfully, and seek Your will in all things. If I fall, raise me again; if I do good, preserve me from pride. Through the prayers of the Theotokos and all the saints, have mercy on me and save me. Amen."),
      source: bi("Freies persönliches Gebet", "Original personal prayer")
    },
    {
      id: "evening", category: "daily",
      title: bi("Abendgebet", "Evening Prayer"),
      occasion: bi("Zum Abschluss des Tages", "At the close of the day"),
      body: bi("Herr Jesus Christus, nimm meinen Dank für alles Gute dieses Tages an. Vergib mir, wo ich in Gedanken, Worten oder Taten gesündigt und andere verletzt habe. Segne alle, denen ich heute begegnet bin, besonders jene, die leiden oder einsam sind. Schenke mir eine friedliche Nacht, bewahre mich vor allem Bösen und lehre mich, morgen neu in Deiner Gegenwart zu beginnen. Denn Du bist barmherzig und menschenliebend. Amen.", "Lord Jesus Christ, receive my thanks for every good thing in this day. Forgive me wherever I sinned in thought, word, or deed and hurt others. Bless everyone I met today, especially those who suffer or are lonely. Grant me a peaceful night, preserve me from every evil, and teach me to begin anew tomorrow in Your presence. For You are merciful and love mankind. Amen."),
      source: bi("Freies persönliches Gebet", "Original personal prayer")
    },
    {
      id: "trisagion", category: "traditional",
      title: bi("Trisagion", "Trisagion Prayers"),
      occasion: bi("Beginn einer Gebetsregel", "Beginning a prayer rule"),
      body: bi("Heiliger Gott, heiliger Starker, heiliger Unsterblicher, erbarme Dich unser. (dreimal)\n\nEhre sei dem Vater und dem Sohn und dem Heiligen Geist, jetzt und immerdar und von Ewigkeit zu Ewigkeit. Amen.\n\nAllheilige Dreifaltigkeit, erbarme Dich unser. Herr, reinige uns von unseren Sünden. Gebieter, vergib unsere Verfehlungen. Heiliger, suche uns heim und heile unsere Schwachheiten um Deines Namens willen.\n\nHerr, erbarme Dich. (dreimal)", "Holy God, Holy Mighty, Holy Immortal, have mercy on us. (three times)\n\nGlory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.\n\nAll-holy Trinity, have mercy on us. Lord, cleanse us from our sins. Master, pardon our transgressions. Holy One, visit and heal our infirmities for Your name’s sake.\n\nLord, have mercy. (three times)"),
      source: bi("Traditionelles Gebet; Übersetzungen unterscheiden sich", "Traditional prayer; translations vary")
    },
    {
      id: "our-father", category: "traditional",
      title: bi("Vaterunser", "The Lord’s Prayer"),
      occasion: bi("Zu jeder Zeit", "At any time"),
      body: bi("Vater unser im Himmel, geheiligt werde Dein Name. Dein Reich komme. Dein Wille geschehe, wie im Himmel, so auf Erden. Unser tägliches Brot gib uns heute. Und vergib uns unsere Schuld, wie auch wir vergeben unseren Schuldigern. Und führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen. Amen.", "Our Father, who art in heaven, hallowed be Thy name. Thy kingdom come. Thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen."),
      source: bi("Matthäus 6,9–13", "Matthew 6:9–13")
    },
    {
      id: "jesus-prayer-short", category: "daily",
      title: bi("Jesusgebet", "The Jesus Prayer"),
      occasion: bi("Kurzes Gebet im Alltag", "A short prayer throughout the day"),
      body: bi("Herr Jesus Christus, Sohn Gottes, erbarme Dich meiner, des Sünders.\n\nSprich das Gebet ruhig und ohne Eile. Kehre nach Ablenkungen einfach zu den Worten zurück. Besondere Atemübungen oder innere Bilder sind nicht nötig.", "Lord Jesus Christ, Son of God, have mercy on me, a sinner.\n\nSay the prayer calmly and without haste. After distractions, simply return to the words. Special breathing exercises or mental images are not needed."),
      source: bi("Traditionelles Herzensgebet", "Traditional prayer of the heart")
    },
    {
      id: "heavenly-king", category: "traditional",
      title: bi("Himmlischer König", "O Heavenly King"),
      occasion: bi("Anrufung des Heiligen Geistes", "Invocation of the Holy Spirit"),
      body: bi("Himmlischer König, Tröster, Geist der Wahrheit, der Du überall bist und alles erfüllst, Schatzkammer der Güter und Spender des Lebens: Komm und nimm Wohnung in uns, reinige uns von allem Makel und rette, Du Gütiger, unsere Seelen.", "O Heavenly King, Comforter, Spirit of Truth, who are everywhere present and fill all things, Treasury of blessings and Giver of Life: come and abide in us, cleanse us from every impurity, and save our souls, O Good One."),
      source: bi("Traditionelles orthodoxes Gebet", "Traditional Orthodox prayer")
    },
    {
      id: "theotokos-rejoice", category: "traditional",
      title: bi("Gottesgebärerin, Jungfrau, freue dich", "Rejoice, O Virgin Theotokos"),
      occasion: bi("Bitte um die Fürbitte der Gottesmutter", "Asking the intercession of the Mother of God"),
      body: bi("Gottesgebärerin, Jungfrau, freue dich, begnadete Maria, der Herr ist mit dir. Gesegnet bist du unter den Frauen, und gesegnet ist die Frucht deines Leibes; denn du hast den Retter unserer Seelen geboren.", "Rejoice, O Virgin Theotokos, Mary full of grace, the Lord is with you. Blessed are you among women, and blessed is the fruit of your womb, for you have borne the Savior of our souls."),
      source: bi("Traditionelles orthodoxes Gebet", "Traditional Orthodox prayer")
    },
    {
      id: "guardian-angel", category: "intercession",
      title: bi("Gebet zum Schutzengel", "Prayer to the Guardian Angel"),
      occasion: bi("Um Schutz und Führung", "For protection and guidance"),
      body: bi("Heiliger Engel, den Gott zu meinem Schutz bestellt hat: Bleibe bei mir auf meinem Weg. Bewahre mich vor den Täuschungen des Bösen, erinnere mich an Gottes Gebote und hilf mir, nach einem Fall schnell umzukehren. Bitte Christus, unseren Gott, mir ein reines Herz, einen nüchternen Verstand und ein friedliches Ende zu schenken. Amen.", "Holy angel appointed by God to guard me: remain with me on my way. Preserve me from the deceits of evil, remind me of God’s commandments, and help me repent quickly after a fall. Ask Christ our God to grant me a pure heart, a sober mind, and a peaceful end. Amen."),
      source: bi("Freies Gebet nach orthodoxer Tradition", "Original prayer after Orthodox tradition")
    },
    {
      id: "before-meal", category: "daily",
      title: bi("Vor dem Essen", "Before a Meal"),
      occasion: bi("Dank vor einer Mahlzeit", "Thanksgiving before a meal"),
      body: bi("Aller Augen warten auf Dich, Herr, und Du gibst ihnen Speise zur rechten Zeit. Du öffnest Deine Hand und erfüllst alles Lebendige mit Wohlgefallen. Segne diese Speise und alle, die sie bereitet haben, und denke an jene, denen heute das Nötige fehlt. Amen.", "The eyes of all look to You, O Lord, and You give them their food in due season. You open Your hand and satisfy every living thing. Bless this food and all who prepared it, and remember those who lack what they need today. Amen."),
      source: bi("Nach Psalm 145", "After Psalm 145")
    },
    {
      id: "after-meal", category: "daily",
      title: bi("Nach dem Essen", "After a Meal"),
      occasion: bi("Dank nach einer Mahlzeit", "Thanksgiving after a meal"),
      body: bi("Wir danken Dir, Christus, unser Gott, dass Du uns mit Deinen irdischen Gaben gesättigt hast. Entziehe uns auch nicht Dein himmlisches Reich, sondern bleibe bei uns, bewahre uns im Frieden und lehre uns, Deine Gaben mit anderen zu teilen. Amen.", "We thank You, O Christ our God, for satisfying us with Your earthly gifts. Do not deprive us of Your heavenly Kingdom, but remain with us, preserve us in peace, and teach us to share Your gifts with others. Amen."),
      source: bi("Nach traditionellem Tischgebet", "After a traditional table prayer")
    },
    {
      id: "before-study", category: "daily",
      title: bi("Vor Arbeit oder Lernen", "Before Work or Study"),
      occasion: bi("Für Aufmerksamkeit und Redlichkeit", "For attention and integrity"),
      body: bi("Herr, Quelle aller Weisheit, erleuchte meinen Verstand und ordne meine Gedanken. Befreie mich von Trägheit, Angst und Eitelkeit. Hilf mir, aufmerksam, ehrlich und geduldig zu arbeiten, das Gelernte zum Guten zu gebrauchen und meine Mitmenschen nicht aus dem Blick zu verlieren. Segne den Anfang, den Verlauf und die Vollendung dieses Werkes. Amen.", "Lord, Source of all wisdom, enlighten my mind and order my thoughts. Free me from laziness, fear, and vanity. Help me work attentively, honestly, and patiently, use what I learn for good, and not lose sight of my neighbor. Bless the beginning, course, and completion of this work. Amen."),
      source: bi("Freies persönliches Gebet", "Original personal prayer")
    },
    {
      id: "travel", category: "intercession",
      title: bi("Vor einer Reise", "Before a Journey"),
      occasion: bi("Um Bewahrung unterwegs", "For protection while traveling"),
      body: bi("Herr Jesus Christus, begleite uns auf diesem Weg. Schenke den Fahrenden Aufmerksamkeit und Besonnenheit, bewahre alle Reisenden vor Gefahr und führe uns in Frieden an unser Ziel. Lass uns unterwegs hilfsbereit, geduldig und dankbar bleiben. Durch die Fürbitten des heiligen Nikolaus und aller Heiligen, erbarme Dich unser. Amen.", "Lord Jesus Christ, accompany us on this journey. Grant drivers attention and good judgment, preserve all travelers from danger, and lead us to our destination in peace. Keep us helpful, patient, and thankful on the way. Through the intercessions of Saint Nicholas and all the saints, have mercy on us. Amen."),
      source: bi("Freies Gebet nach orthodoxer Tradition", "Original prayer after Orthodox tradition")
    },
    {
      id: "sickness", category: "intercession",
      title: bi("In Krankheit", "In Sickness"),
      occasion: bi("Für einen kranken Menschen", "For someone who is ill"),
      body: bi("Herr, Arzt unserer Seelen und Leiber, sieh in Deiner Barmherzigkeit auf Deinen Diener / Deine Dienerin [Name]. Lindere Schmerzen, schenke Kraft und führe die Hände aller, die medizinisch und pflegerisch helfen. Gib Geduld in der Unsicherheit und bewahre vor Verzweiflung. Wenn es Deinem Willen entspricht, richte zur Gesundheit auf; in allem schenke Deine tröstende Gegenwart. Amen.", "Lord, Physician of our souls and bodies, look in Your mercy upon Your servant [name]. Ease pain, grant strength, and guide the hands of all who provide medical and nursing care. Give patience amid uncertainty and preserve from despair. If it is Your will, restore health; in all things grant Your comforting presence. Amen."),
      source: bi("Freies Fürbittgebet", "Original intercessory prayer")
    },
    {
      id: "departed", category: "intercession",
      title: bi("Für Verstorbene", "For the Departed"),
      occasion: bi("Zum Gedenken an Entschlafene", "In remembrance of those who have fallen asleep"),
      body: bi("Gedenke, Herr, Deines entschlafenen Dieners / Deiner entschlafenen Dienerin [Name]. Vergib alle freiwilligen und unfreiwilligen Verfehlungen und schenke Ruhe an einem Ort des Lichtes, der Erquickung und des Friedens, wo Schmerz, Trauer und Seufzen entflohen sind. Tröste alle Trauernden in der Hoffnung auf die Auferstehung. Denn Du bist das Leben und die Auferstehung. Amen.", "Remember, O Lord, Your departed servant [name]. Forgive every voluntary and involuntary transgression and grant rest in a place of light, refreshment, and peace, where pain, sorrow, and sighing have fled away. Comfort all who mourn in the hope of the Resurrection. For You are the Life and the Resurrection. Amen."),
      source: bi("Nach orthodoxer Gedächtnisbitte", "After an Orthodox memorial petition")
    },
    {
      id: "repentance", category: "daily",
      title: bi("Gebet der Umkehr", "Prayer of Repentance"),
      occasion: bi("Nach einem Fall oder zur Gewissenserforschung", "After a fall or during self-examination"),
      body: bi("Barmherziger Herr, ich habe gegen Dich und meinen Nächsten gesündigt. Ich beschönige meine Schuld nicht und vertraue doch auf Deine größere Barmherzigkeit. Zeige mir, was ich wiedergutmachen muss, gib mir Mut zur Beichte und Kraft, die nächste Versuchung früher zu erkennen. Erneuere in mir einen festen Geist und lehre mich, anderen so zu vergeben, wie ich Vergebung erbitte. Amen.", "Merciful Lord, I have sinned against You and my neighbor. I do not excuse my fault, yet I trust in Your greater mercy. Show me what I must make right, give me courage for Confession, and strength to recognize the next temptation sooner. Renew a steadfast spirit within me and teach me to forgive others as I ask forgiveness. Amen."),
      source: bi("Freies persönliches Gebet", "Original personal prayer")
    },
    {
      id: "thanksgiving", category: "daily",
      title: bi("Dankgebet", "Prayer of Thanksgiving"),
      occasion: bi("Für empfangene Wohltaten", "For blessings received"),
      body: bi("Ehre sei Dir, o Gott, für sichtbare und verborgene Gaben: für das Leben, für Menschen, die mich tragen, für jede Gelegenheit zur Umkehr und für Hoffnung mitten in Schwierigkeiten. Lass mich Deine Wohltaten nicht als selbstverständlich nehmen. Lehre mich, dankbar zu empfangen, großzügig weiterzugeben und auch dann auf Dich zu vertrauen, wenn ich Deinen Weg noch nicht verstehe. Amen.", "Glory to You, O God, for gifts seen and unseen: for life, for people who support me, for every opportunity to repent, and for hope in the midst of difficulty. Do not let me take Your blessings for granted. Teach me to receive gratefully, give generously, and trust You even when I do not yet understand Your way. Amen."),
      source: bi("Freies persönliches Gebet", "Original personal prayer")
    },
    {
      id: "peace", category: "intercession",
      title: bi("Für Frieden", "For Peace"),
      occasion: bi("In Krieg, Feindschaft und gesellschaftlicher Unruhe", "In war, hostility, and social unrest"),
      body: bi("König des Friedens, bringe Kriege, Gewalt und Hass zum Ende. Schütze die Wehrlosen, tröste die Trauernden, heile die Verwundeten und führe die Verantwortlichen zu Wahrheit und Gerechtigkeit. Bewahre auch uns vor Gleichgültigkeit und Feindbildern. Gib uns Mut, Frieden zu stiften, ohne das Leid der Opfer zu verschweigen. Denn Du bist unser Friede. Amen.", "King of Peace, bring wars, violence, and hatred to an end. Protect the defenseless, comfort those who mourn, heal the wounded, and lead those in authority toward truth and justice. Preserve us also from indifference and hatred of others. Give us courage to make peace without silencing the suffering of victims. For You are our peace. Amen."),
      source: bi("Freies Fürbittgebet", "Original intercessory prayer")
    },
    {
      id: "before-confession", category: "sacraments",
      title: bi("Vor der Beichte", "Before Confession"),
      occasion: bi("Zur ehrlichen Vorbereitung", "For honest preparation"),
      body: bi("Herr Jesus Christus, vertreibe Angst, Scham und Selbstrechtfertigung aus meinem Herzen. Schenke mir, meine Sünden ehrlich zu erkennen und ohne Ausreden auszusprechen. Lass mich weder verzweifeln noch die Schuld verharmlosen, sondern Deiner heilenden Vergebung vertrauen. Gib Deinem Priester Weisheit und mir den Willen, den empfangenen Rat treu umzusetzen. Amen.", "Lord Jesus Christ, drive fear, shame, and self-justification from my heart. Grant me to recognize my sins honestly and speak them without excuses. Let me neither despair nor minimize my fault, but trust Your healing forgiveness. Give wisdom to Your priest and give me the will to carry out faithfully the counsel I receive. Amen."),
      source: bi("Freies Vorbereitungsgebet", "Original prayer of preparation")
    },
    {
      id: "before-communion", category: "sacraments",
      title: bi("Kurzes Gebet vor der Kommunion", "Short Prayer Before Communion"),
      occasion: bi("Zusätzlich zur Gebetsregel der Gemeinde", "In addition to the parish prayer rule"),
      body: bi("Herr Jesus Christus, ich bin nicht würdig, dass Du unter das Dach meiner Seele eingehst. Doch weil Du barmherzig bist, wage ich mich Dir zu nahen. Reinige mich, versöhne mich mit meinen Nächsten und lass mir Deine heiligen Gaben nicht zum Gericht, sondern zur Heilung von Seele und Leib, zur Gemeinschaft mit Dir und zum ewigen Leben gereichen. Amen.", "Lord Jesus Christ, I am not worthy that You should enter beneath the roof of my soul. Yet because You are merciful, I dare to draw near. Cleanse me, reconcile me with my neighbors, and let Your holy Gifts be for me not unto judgment but for the healing of soul and body, communion with You, and eternal life. Amen."),
      source: bi("Kurzes freies Gebet; die gemeindliche Vorbereitung bleibt maßgeblich", "Short original prayer; the parish rule of preparation remains authoritative")
    },
    {
      id: "after-communion", category: "sacraments",
      title: bi("Kurzes Dankgebet nach der Kommunion", "Short Thanksgiving After Communion"),
      occasion: bi("Zusätzlich zu den Dankgebeten der Gemeinde", "In addition to the parish thanksgiving prayers"),
      body: bi("Ich danke Dir, Herr, dass Du mich Deiner heiligen und lebenspendenden Gaben gewürdigt hast. Bewahre die empfangene Gnade in mir. Heile, was verwundet ist, stärke, was schwach ist, und lass mein Denken, Reden und Handeln heute von Deiner Gegenwart zeugen. Bleibe bei mir und führe mich in Dein Reich. Amen.", "I thank You, Lord, for making me worthy to receive Your holy and life-giving Gifts. Preserve the grace received within me. Heal what is wounded, strengthen what is weak, and let my thoughts, words, and actions today bear witness to Your presence. Remain with me and lead me into Your Kingdom. Amen."),
      source: bi("Kurzes freies Dankgebet", "Short original thanksgiving prayer")
    }
  ];

  window.ORTHODOXIA_PRAYERS = prayers;
})();
