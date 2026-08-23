(function () {
  "use strict";
  const bi = (de, en) => ({ de, en });
  const saints = [
    {
      id: "john-baptist", month: 1, day: 7, century: "1.",
      name: bi("Heiliger Johannes der Täufer", "Saint John the Baptist"),
      epithet: bi("Prophet und Vorläufer Christi", "Prophet and Forerunner of Christ"),
      region: bi("Judäa", "Judea"),
      bio: bi("Johannes bereitete durch seinen Ruf zur Umkehr den Weg Christi. Er taufte im Jordan und erkannte Jesus als das Lamm Gottes. Wegen seiner furchtlosen Kritik an Herodes wurde er gefangen genommen und enthauptet. Die Kirche ehrt ihn als größten der Propheten und Vorbild mutiger Wahrheit.", "John prepared the way of Christ by calling people to repentance. He baptized in the Jordan and recognized Jesus as the Lamb of God. For fearlessly rebuking Herod, he was imprisoned and beheaded. The Church honors him as the greatest of the prophets and a model of courageous truth.")
    },
    {
      id: "peter", month: 6, day: 29, century: "1.",
      name: bi("Heiliger Apostel Petrus", "Holy Apostle Peter"),
      epithet: bi("Erstberufener unter den Zwölf", "Foremost among the Twelve"),
      region: bi("Galiläa und Rom", "Galilee and Rome"),
      bio: bi("Der Fischer Simon erhielt von Christus den Namen Petrus. Trotz seines dreifachen Verrats wurde er wiederhergestellt und zu einem mutigen Zeugen der Auferstehung. Nach kirchlicher Überlieferung erlitt er in Rom unter Nero den Kreuzestod. Sein Leben zeigt Fall, Umkehr und erneuerte Berufung.", "Simon the fisherman received the name Peter from Christ. Despite denying the Lord three times, he was restored and became a bold witness to the Resurrection. According to Church tradition, he was crucified in Rome under Nero. His life reveals failure, repentance, and a renewed calling.")
    },
    {
      id: "paul", month: 6, day: 29, century: "1.",
      name: bi("Heiliger Apostel Paulus", "Holy Apostle Paul"),
      epithet: bi("Apostel der Völker", "Apostle to the Nations"),
      region: bi("Tarsus und Mittelmeerraum", "Tarsus and the Mediterranean"),
      bio: bi("Paulus verfolgte zunächst die Kirche, begegnete jedoch dem auferstandenen Christus auf dem Weg nach Damaskus. Danach verkündete er das Evangelium im gesamten östlichen Mittelmeerraum und verfasste Briefe, die Teil des Neuen Testaments wurden. In Rom erlitt er der Überlieferung nach den Märtyrertod durch Enthauptung.", "Paul first persecuted the Church but encountered the risen Christ on the road to Damascus. He then proclaimed the Gospel throughout the eastern Mediterranean and wrote letters that became part of the New Testament. According to tradition, he was martyred by beheading in Rome.")
    },
    {
      id: "andrew", month: 11, day: 30, century: "1.",
      name: bi("Heiliger Apostel Andreas", "Holy Apostle Andrew"),
      epithet: bi("Der Erstberufene", "The First-Called"),
      region: bi("Galiläa und Patras", "Galilee and Patras"),
      bio: bi("Andreas war ein Jünger Johannes des Täufers und der erste der späteren Zwölf, der Christus folgte. Er führte seinen Bruder Petrus zu Jesus. Die Überlieferung verbindet seine Mission mit Gebieten rund um das Schwarze Meer und Griechenland; in Patras starb er am Kreuz.", "Andrew was a disciple of John the Baptist and the first of the future Twelve to follow Christ. He brought his brother Peter to Jesus. Tradition connects his mission with lands around the Black Sea and Greece; he died on a cross in Patras.")
    },
    {
      id: "nicholas", month: 12, day: 6, century: "4.",
      name: bi("Heiliger Nikolaus von Myra", "Saint Nicholas of Myra"),
      epithet: bi("Bischof und Wundertäter", "Bishop and Wonderworker"),
      region: bi("Lykien", "Lycia"),
      bio: bi("Nikolaus war Bischof von Myra und wurde wegen seiner barmherzigen Hilfe für Arme und Bedrängte bekannt. Viele Erzählungen berichten von verborgenen Gaben, dem Schutz unschuldig Angeklagter und Hilfe für Menschen in Seenot. Seine Verehrung verbreitete sich in der ganzen christlichen Welt.", "Nicholas was bishop of Myra and became known for merciful help to the poor and distressed. Many accounts tell of secret gifts, defense of the unjustly accused, and aid to those in danger at sea. His veneration spread throughout the Christian world.")
    },
    {
      id: "george", month: 4, day: 23, century: "4.",
      name: bi("Heiliger Großmärtyrer Georg", "Holy Great-Martyr George"),
      epithet: bi("Siegreicher Märtyrer", "Victorious Martyr"),
      region: bi("Kappadokien und Palästina", "Cappadocia and Palestine"),
      bio: bi("Georg wird als römischer Soldat überliefert, der sich während der Christenverfolgung offen zu Christus bekannte und schwere Folter erduldete. Die Drachendarstellung ist ein geistliches Bild des Sieges über das Böse. Er gehört zu den weltweit am stärksten verehrten Märtyrern.", "George is remembered as a Roman soldier who openly confessed Christ during persecution and endured severe torture. The image of the dragon is a spiritual portrayal of victory over evil. He is among the most widely venerated martyrs in the world.")
    },
    {
      id: "demetrius", month: 10, day: 26, century: "4.",
      name: bi("Heiliger Großmärtyrer Demetrios", "Holy Great-Martyr Demetrius"),
      epithet: bi("Schutzpatron von Thessaloniki", "Protector of Thessaloniki"),
      region: bi("Thessaloniki", "Thessaloniki"),
      bio: bi("Demetrios bekannte Christus zur Zeit der römischen Verfolgungen und wurde in Thessaloniki gefangen gehalten und getötet. Über seinem Grab entstand eine bedeutende Kirche. Die Tradition nennt ihn Myrobliten, weil mit seinen Reliquien wohlriechendes Myron verbunden wird.", "Demetrius confessed Christ during the Roman persecutions and was imprisoned and killed in Thessaloniki. A major church arose over his tomb. Tradition calls him the Myrrh-Gusher because fragrant myrrh is associated with his relics.")
    },
    {
      id: "basil", month: 1, day: 1, century: "4.",
      name: bi("Heiliger Basilius der Große", "Saint Basil the Great"),
      epithet: bi("Hierarch, Theologe und Helfer der Armen", "Hierarch, theologian, and helper of the poor"),
      region: bi("Kappadokien", "Cappadocia"),
      bio: bi("Basilius verband tiefe Theologie mit praktischem Dienst. Als Bischof von Cäsarea verteidigte er den Glauben an die Gottheit des Heiligen Geistes. Mit der Basileias schuf er einen großen Komplex für Arme, Kranke und Reisende. Eine Form der Göttlichen Liturgie trägt seinen Namen.", "Basil joined deep theology with practical service. As bishop of Caesarea he defended faith in the divinity of the Holy Spirit. Through the Basileias he created a major complex for the poor, sick, and travelers. A form of the Divine Liturgy bears his name.")
    },
    {
      id: "gregory-theologian", month: 1, day: 25, century: "4.",
      name: bi("Heiliger Gregor der Theologe", "Saint Gregory the Theologian"),
      epithet: bi("Erzbischof von Konstantinopel", "Archbishop of Constantinople"),
      region: bi("Kappadokien und Konstantinopel", "Cappadocia and Constantinople"),
      bio: bi("Gregor von Nazianz war Dichter, Bischof und einer der klarsten Lehrer über die Heilige Dreifaltigkeit. Seine theologischen Reden halfen, den nizänischen Glauben in Konstantinopel wiederherzustellen. Trotz hoher Ämter suchte er immer wieder Stille und zog sich schließlich zurück.", "Gregory of Nazianzus was a poet, bishop, and one of the clearest teachers on the Holy Trinity. His theological orations helped restore Nicene faith in Constantinople. Despite high office he repeatedly sought stillness and eventually withdrew.")
    },
    {
      id: "john-chrysostom", month: 11, day: 13, century: "4.–5.",
      name: bi("Heiliger Johannes Chrysostomos", "Saint John Chrysostom"),
      epithet: bi("Goldmund und Lehrer der Kirche", "Golden-Mouthed teacher of the Church"),
      region: bi("Antiochia und Konstantinopel", "Antioch and Constantinople"),
      bio: bi("Johannes wurde wegen seiner klaren Predigten „Goldmund“ genannt. Als Erzbischof von Konstantinopel kritisierte er Luxus, Machtmissbrauch und Gleichgültigkeit gegenüber Armen. Konflikte am Hof führten zu seinem Exil und Tod. Die am häufigsten gefeierte Göttliche Liturgie trägt seinen Namen.", "John was called “Golden-Mouthed” because of his clear preaching. As archbishop of Constantinople he criticized luxury, abuse of power, and indifference toward the poor. Conflict at court led to exile and death. The most frequently celebrated Divine Liturgy bears his name.")
    },
    {
      id: "athanasius", month: 1, day: 18, century: "4.",
      name: bi("Heiliger Athanasius der Große", "Saint Athanasius the Great"),
      epithet: bi("Verteidiger von Nizäa", "Defender of Nicaea"),
      region: bi("Alexandrien", "Alexandria"),
      bio: bi("Athanasius verteidigte entschieden, dass der Sohn wahrer Gott und eines Wesens mit dem Vater ist. Als Bischof von Alexandrien musste er deshalb mehrfach ins Exil. Seine Schrift über die Menschwerdung erklärt, wie Christus unsere sterbliche Natur erneuert und zur Gemeinschaft mit Gott führt.", "Athanasius firmly defended that the Son is true God and of one essence with the Father. As bishop of Alexandria he was repeatedly exiled for this stand. His work On the Incarnation explains how Christ renews our mortal nature and leads it into communion with God.")
    },
    {
      id: "cyril-alexandria", month: 6, day: 9, century: "5.",
      name: bi("Heiliger Kyrill von Alexandrien", "Saint Cyril of Alexandria"),
      epithet: bi("Lehrer der Einheit Christi", "Teacher of the unity of Christ"),
      region: bi("Alexandrien", "Alexandria"),
      bio: bi("Kyrill lehrte, dass Jesus Christus eine göttliche Person ist, die wahrhaft Mensch wurde. Beim Konzil von Ephesus spielte er eine zentrale Rolle in der Verteidigung des Titels Theotokos für Maria. Seine Christologie prägte die weitere Lehre der Kirche.", "Cyril taught that Jesus Christ is one divine Person who truly became man. At the Council of Ephesus he played a central role in defending the title Theotokos for Mary. His Christology deeply shaped the Church’s later teaching.")
    },
    {
      id: "ephrem", month: 1, day: 28, century: "4.",
      name: bi("Heiliger Ephräm der Syrer", "Saint Ephrem the Syrian"),
      epithet: bi("Diakon, Dichter und Harfe des Geistes", "Deacon, poet, and Harp of the Spirit"),
      region: bi("Nisibis und Edessa", "Nisibis and Edessa"),
      bio: bi("Ephräm lehrte den Glauben in syrischen Hymnen von großer poetischer Kraft. Er verband tiefe Reue mit Staunen über Gottes Barmherzigkeit und die Schönheit der Schöpfung. Das ihm zugeschriebene Fastengebet prägt bis heute die Gottesdienste der Großen Fastenzeit.", "Ephrem taught the faith through Syriac hymns of great poetic power. He joined deep repentance with wonder at God’s mercy and the beauty of creation. The Lenten prayer attributed to him still shapes the services of Great Lent.")
    },
    {
      id: "maximus", month: 1, day: 21, century: "7.",
      name: bi("Heiliger Maximos der Bekenner", "Saint Maximus the Confessor"),
      epithet: bi("Theologe des Willens und der Vergöttlichung", "Theologian of the will and theosis"),
      region: bi("Konstantinopel und Exilgebiete", "Constantinople and lands of exile"),
      bio: bi("Maximos verteidigte, dass Christus einen göttlichen und einen menschlichen Willen besitzt. Weil er einen kaiserlich gestützten Kompromiss ablehnte, wurden ihm Zunge und Hand verstümmelt und er starb im Exil. Seine Schriften verbinden Christologie, Askese, Liturgie und die Vergöttlichung der Schöpfung.", "Maximus defended that Christ possesses both a divine and a human will. For rejecting an imperially backed compromise, his tongue and hand were mutilated and he died in exile. His writings unite Christology, ascetic life, liturgy, and the theosis of creation.")
    },
    {
      id: "john-damascus", month: 12, day: 4, century: "7.–8.",
      name: bi("Heiliger Johannes von Damaskus", "Saint John of Damascus"),
      epithet: bi("Theologe und Verteidiger der Ikonen", "Theologian and defender of icons"),
      region: bi("Damaskus und Mar Saba", "Damascus and Mar Saba"),
      bio: bi("Johannes diente zunächst in der Verwaltung von Damaskus und wurde später Mönch im Kloster Mar Saba. Er ordnete die Lehre der Kirchenväter systematisch und verteidigte heilige Ikonen gegen den Bildersturm. Viele liturgische Hymnen werden mit ihm verbunden.", "John first served in the administration of Damascus and later became a monk at Mar Saba. He systematically presented the teaching of the Fathers and defended holy icons against iconoclasm. Many liturgical hymns are associated with him.")
    },
    {
      id: "mary-egypt", month: 4, day: 1, century: "5.–6.",
      name: bi("Heilige Maria von Ägypten", "Saint Mary of Egypt"),
      epithet: bi("Büßerin in der Wüste", "Penitent of the desert"),
      region: bi("Alexandrien und Jordanwüste", "Alexandria and the Jordan desert"),
      bio: bi("Nach einem von Begierde bestimmten Leben erlebte Maria in Jerusalem eine radikale Umkehr. Sie zog in die Wüste jenseits des Jordan und lebte dort jahrzehntelang in Reue und Gebet. Ihr Leben wird in der Großen Fastenzeit als starkes Zeugnis dafür gelesen, dass kein Mensch ohne Hoffnung ist.", "After a life ruled by desire, Mary experienced radical repentance in Jerusalem. She went into the desert beyond the Jordan and lived there for decades in repentance and prayer. Her life is read during Great Lent as a powerful witness that no person is beyond hope.")
    },
    {
      id: "anthony", month: 1, day: 17, century: "3.–4.",
      name: bi("Heiliger Antonius der Große", "Saint Anthony the Great"),
      epithet: bi("Vater des Mönchtums", "Father of monasticism"),
      region: bi("Ägypten", "Egypt"),
      bio: bi("Antonius hörte das Evangelium vom Verkauf der Güter und nahm es persönlich ernst. Er zog in die ägyptische Wüste, rang im Gebet gegen Versuchungen und wurde geistlicher Vater vieler Menschen. Seine Lebensbeschreibung machte das Wüstenmönchtum im gesamten Reich bekannt.", "Anthony heard the Gospel command to sell possessions and took it personally. He withdrew into the Egyptian desert, struggled against temptations in prayer, and became a spiritual father to many. His Life made desert monasticism known throughout the empire.")
    },
    {
      id: "macarius", month: 1, day: 19, century: "4.",
      name: bi("Heiliger Makarios der Große", "Saint Macarius the Great"),
      epithet: bi("Wüstenvater", "Desert Father"),
      region: bi("Sketische Wüste, Ägypten", "Scetis, Egypt"),
      bio: bi("Makarios lebte in der Wüste von Sketis und wurde wegen seiner Demut, Unterscheidungskraft und Barmherzigkeit gesucht. Die überlieferten Weisungen warnen davor, andere zu richten, und führen zur beständigen Erinnerung an Gott. Seine Gemeinschaft prägte das ägyptische Mönchtum.", "Macarius lived in the desert of Scetis and was sought for his humility, discernment, and mercy. Sayings connected with him warn against judging others and lead toward continual remembrance of God. His community deeply shaped Egyptian monasticism.")
    },
    {
      id: "seraphim", month: 1, day: 2, century: "18.–19.",
      name: bi("Heiliger Seraphim von Sarow", "Saint Seraphim of Sarov"),
      epithet: bi("Freudenreicher Starez", "Joyful elder"),
      region: bi("Sarow und Diwejewo", "Sarov and Diveyevo"),
      bio: bi("Seraphim lebte als Mönch, Einsiedler und geistlicher Vater. Nach langen Jahren der Stille empfing er Ratsuchende mit den Worten „Meine Freude, Christus ist auferstanden!“ Er lehrte, dass das Ziel des christlichen Lebens der Erwerb des Heiligen Geistes ist.", "Seraphim lived as a monk, hermit, and spiritual father. After long years of silence he received visitors with the words, “My joy, Christ is risen!” He taught that the aim of Christian life is the acquisition of the Holy Spirit.")
    },
    {
      id: "silouan", month: 9, day: 24, century: "19.–20.",
      name: bi("Heiliger Siluan vom Athos", "Saint Silouan the Athonite"),
      epithet: bi("Mönch der Liebe zu allen Menschen", "Monk of love for all humanity"),
      region: bi("Russland und Berg Athos", "Russia and Mount Athos"),
      bio: bi("Siluan trat als junger Mann in das russische Panteleimon-Kloster auf dem Athos ein. Er rang tief mit Stolz und Verzweiflung und empfing eine Lehre von Demut und Hoffnung. Sein Gebet weitete sich zu einer leidenschaftlichen Liebe für die ganze Menschheit und sogar für Feinde.", "Silouan entered the Russian monastery of Saint Panteleimon on Mount Athos as a young man. He struggled deeply with pride and despair and received a lesson in humility and hope. His prayer widened into passionate love for all humanity, even for enemies.")
    },
    {
      id: "paisios", month: 7, day: 12, century: "20.",
      name: bi("Heiliger Paisios vom Athos", "Saint Paisios the Athonite"),
      epithet: bi("Mönch und geistlicher Ratgeber", "Monk and spiritual counselor"),
      region: bi("Kappadokien, Griechenland und Athos", "Cappadocia, Greece, and Athos"),
      bio: bi("Paisios lebte an verschiedenen Orten des Heiligen Berges und wurde wegen seiner einfachen, warmen und praktischen geistlichen Ratschläge bekannt. Unzählige Menschen suchten ihn auf. Er betonte demütiges Gebet, Opferbereitschaft und Vertrauen auf Gottes Vorsehung.", "Paisios lived in several places on the Holy Mountain and became known for simple, warm, and practical spiritual counsel. Countless people sought him out. He emphasized humble prayer, self-sacrifice, and trust in God’s providence.")
    },
    {
      id: "porphyrios", month: 12, day: 2, century: "20.",
      name: bi("Heiliger Porphyrios von Kavsokalivia", "Saint Porphyrios of Kavsokalivia"),
      epithet: bi("Starez der Liebe zu Christus", "Elder of love for Christ"),
      region: bi("Griechenland und Athos", "Greece and Mount Athos"),
      bio: bi("Porphyrios kam jung auf den Athos, musste ihn aber aus gesundheitlichen Gründen verlassen. Später diente er jahrzehntelang als Priester und Beichtvater in Athen. Er riet, den Kampf gegen Dunkelheit nicht zum Mittelpunkt zu machen, sondern das Herz durch Liebe zu Christus mit Licht zu erfüllen.", "Porphyrios came to Mount Athos when young but had to leave because of illness. He later served for decades as a priest and confessor in Athens. He advised people not to make the struggle against darkness their center, but to fill the heart with light through love for Christ.")
    },
    {
      id: "nectarios", month: 11, day: 9, century: "19.–20.",
      name: bi("Heiliger Nektarios von Ägina", "Saint Nectarios of Aegina"),
      epithet: bi("Bischof und Wundertäter", "Bishop and wonderworker"),
      region: bi("Thrakien, Ägypten und Ägina", "Thrace, Egypt, and Aegina"),
      bio: bi("Nektarios wurde durch falsche Anschuldigungen aus seinem Amt in Alexandrien gedrängt und trug die Ungerechtigkeit ohne Hass. In Griechenland wirkte er als Lehrer und gründete auf Ägina ein Frauenkloster. Nach seinem Tod verbreitete sich seine Verehrung besonders durch Berichte von Heilungen.", "Nectarios was removed from office in Alexandria through false accusations and bore the injustice without hatred. In Greece he served as a teacher and founded a women’s monastery on Aegina. After his death his veneration spread especially through accounts of healing.")
    },
    {
      id: "herman-alaska", month: 12, day: 13, century: "18.–19.",
      name: bi("Heiliger Herman von Alaska", "Saint Herman of Alaska"),
      epithet: bi("Missionar und Beschützer der Aleuten", "Missionary and protector of the Aleut people"),
      region: bi("Russland und Alaska", "Russia and Alaska"),
      bio: bi("Herman kam mit einer russischen Mission nach Alaska und lebte später einfach auf Spruce Island. Er unterrichtete den Glauben, sorgte für Waisen und verteidigte die indigene Bevölkerung gegen Ausbeutung. Seine Mission verband Verkündigung mit konkreter Gerechtigkeit und barmherziger Nähe.", "Herman came to Alaska with a Russian mission and later lived simply on Spruce Island. He taught the faith, cared for orphans, and defended Indigenous people against exploitation. His mission joined proclamation with concrete justice and merciful presence.")
    },
    {
      id: "constantine", month: 5, day: 21, century: "4.",
      name: bi("Heiliger Kaiser Konstantin", "Saint Constantine the Emperor"),
      epithet: bi("Gleich den Aposteln", "Equal-to-the-Apostles"),
      region: bi("Römisches Reich", "Roman Empire"),
      bio: bi("Konstantin beendete mit Licinius die staatliche Verfolgung der Christen und berief das Konzil von Nizäa ein. Seine Regierungszeit war politisch komplex und nicht frei von schweren Konflikten; die Kirche ehrt besonders seine Rolle bei der Befreiung und öffentlichen Entfaltung des christlichen Glaubens.", "Constantine joined Licinius in ending the state persecution of Christians and convened the Council of Nicaea. His reign was politically complex and not free from grave conflict; the Church especially honors his role in the liberation and public flourishing of the Christian faith.")
    },
    {
      id: "helena", month: 5, day: 21, century: "3.–4.",
      name: bi("Heilige Kaiserin Helena", "Saint Helena the Empress"),
      epithet: bi("Gleich den Aposteln", "Equal-to-the-Apostles"),
      region: bi("Römisches Reich und Heiliges Land", "Roman Empire and Holy Land"),
      bio: bi("Helena, die Mutter Konstantins, förderte Kirchen und karitative Werke. Eine Pilgerreise führte sie ins Heilige Land, wo sie mit der Auffindung des Kreuzes Christi und dem Bau bedeutender Heiligtümer verbunden wird. Sie gilt als Vorbild entschlossener Förderung des Glaubens.", "Helena, mother of Constantine, supported churches and charitable works. A pilgrimage took her to the Holy Land, where she is associated with finding the Cross of Christ and building important shrines. She is remembered as a model of determined support for the faith.")
    },
    {
      id: "ignatius", month: 12, day: 20, century: "1.–2.",
      name: bi("Heiliger Ignatius von Antiochien", "Saint Ignatius of Antioch"),
      epithet: bi("Bischof und Gottesträger", "Bishop and God-bearer"),
      region: bi("Antiochien und Rom", "Antioch and Rome"),
      bio: bi("Ignatius wurde als Gefangener von Antiochien nach Rom gebracht und schrieb unterwegs sieben bedeutende Briefe. Darin bezeugt er die Einheit um den Bischof, die wirkliche Menschwerdung Christi und die Eucharistie als Leib des Herrn. In Rom starb er als Märtyrer.", "Ignatius was taken as a prisoner from Antioch to Rome and wrote seven important letters along the way. They witness to unity around the bishop, Christ’s real Incarnation, and the Eucharist as the Lord’s Body. He died as a martyr in Rome.")
    },
    {
      id: "moses-ethiopian", month: 8, day: 28, century: "4.–5.",
      name: bi("Heiliger Moses der Äthiopier", "Saint Moses the Ethiopian"),
      epithet: bi("Vom Räuber zum Wüstenvater", "From robber to Desert Father"),
      region: bi("Ägypten", "Egypt"),
      bio: bi("Moses führte zunächst eine gewalttätige Räuberbande, suchte dann Zuflucht in einem Kloster und bekehrte sich vollständig. Er wurde für Demut, Gastfreundschaft und seine Weigerung bekannt, andere zu verurteilen. Sein Leben zeigt die radikale verwandelnde Kraft der Umkehr.", "Moses first led a violent band of robbers, then sought refuge in a monastery and was completely converted. He became known for humility, hospitality, and refusal to condemn others. His life reveals the radical transforming power of repentance.")
    },
    {
      id: "xenia", month: 1, day: 24, century: "18.",
      name: bi("Heilige Xenia von Petersburg", "Saint Xenia of Petersburg"),
      epithet: bi("Närrin in Christus", "Fool-for-Christ"),
      region: bi("Sankt Petersburg", "Saint Petersburg"),
      bio: bi("Nach dem frühen Tod ihres Mannes verschenkte Xenia ihren Besitz und lebte als heimatlose Närrin in Christus. Hinter scheinbarer Torheit verbargen sich tiefes Gebet, Demut und Hilfe für Menschen in Not. Bis heute suchen viele an ihrem Grab Trost und Fürbitte.", "After her husband’s early death, Xenia gave away her possessions and lived as a homeless fool-for-Christ. Beneath apparent foolishness were deep prayer, humility, and care for people in need. Many still seek comfort and intercession at her grave.")
    }
  ];

  window.ORTHODOXIA_SAINTS = saints;
})();
