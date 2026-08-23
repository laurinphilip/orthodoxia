# Orthodoxia – vollständige GitHub-Pages-App

Orthodoxia ist eine zweisprachige, installierbare Website für iPhone, Android und Computer. Sie benötigt keinen Server, keine Datenbank und keinen App Store. Alle Dateien können unverändert in ein GitHub-Repository geladen und mit GitHub Pages veröffentlicht werden.

## Was bereits enthalten ist

- Deutsch und Englisch mit sofortigem Sprachwechsel
- 29 ausführliche Glaubensartikel
- 20 Gebete für Alltag, Fürbitte und sakramentale Vorbereitung
- 29 ausgewählte Heilige
- Monatskalender mit orthodoxer Pascha-Berechnung
- davon abhängige Termine wie Große Fastenzeit, Palmsonntag, Himmelfahrt und Pfingsten
- neuer und alter Kalender für feste Feste
- allgemeine Fastenhinweise
- Volltextsuche über Artikel, Gebete und Heilige
- Favoriten und persönliche Notizen
- Export und Import einer Datensicherung
- heller und dunkler Modus sowie drei Textgrößen
- Offline-Funktion nach dem ersten vollständigen Laden
- eigenes App-Symbol und Darstellung ohne Safari-Leisten nach der Installation
- responsive Bedienung für iPhone, iPad und Computer

Wichtig: Kalender- und Fastenangaben sind allgemeine Orientierung. Verbindlich sind der Kalender und die seelsorgliche Praxis der eigenen orthodoxen Gemeinde.

## Die Ordnerstruktur

Nach dem Entpacken muss dein Repository so aussehen:

    orthodoxia/
    ├── index.html
    ├── manifest.webmanifest
    ├── sw.js
    ├── offline.html
    ├── og.png
    ├── robots.txt
    ├── README.md
    ├── .nojekyll
    ├── css/
    │   └── style.css
    ├── icons/
    │   ├── icon.svg
    │   ├── icon-192.png
    │   ├── icon-512.png
    │   └── apple-touch-icon.png
    └── js/
        ├── content.js
        ├── prayers.js
        ├── saints.js
        ├── calendar.js
        ├── app-core.js
        ├── views.js
        └── app.js

Entscheidend ist: **index.html** muss direkt auf der ersten Ebene des Repositorys liegen. Sie darf nicht noch in einem zusätzlichen Ordner namens github-pages oder Orthodoxia liegen.

## Schritt 1: ZIP-Datei entpacken

1. Lade **Orthodoxia-GitHub-Pages.zip** herunter.
2. Öffne auf deinem Mac den Ordner Downloads.
3. Doppelklicke auf die ZIP-Datei.
4. Öffne den neu entstandenen Ordner Orthodoxia-GitHub-Pages.
5. Darin müssen direkt index.html, og.png, die Ordner css, icons, js und die übrigen Dateien liegen.

## Schritt 2: Neues Repository bei GitHub erstellen

1. Öffne [github.com](https://github.com) und melde dich an.
2. Klicke oben rechts auf das Pluszeichen.
3. Klicke auf **New repository**.
4. Trage bei **Repository name** zum Beispiel orthodoxia ein.
5. Trage als Beschreibung zum Beispiel Bilingual Orthodox Christian web app ein.
6. Wähle **Public**. Mit GitHub Free muss das Repository öffentlich sein, damit GitHub Pages daraus eine Website veröffentlicht.
7. Aktiviere **Add a README file** nicht; eine fertige README.md ist bereits im Projekt.
8. Klicke auf **Create repository**.

GitHubs offizielle Anleitung dazu: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Schritt 3: Alle Dateien hochladen

Dies ist einfacher und sicherer, als jede Code-Datei einzeln zu kopieren.

1. Öffne im neuen Repository den Reiter **Code**.
2. Klicke auf **Add file**.
3. Klicke auf **Upload files**.
4. Öffne parallel im Finder den entpackten Ordner.
5. Markiere **den gesamten Inhalt innerhalb des Ordners**: index.html, css, icons, js und alle übrigen Dateien.
6. Ziehe die markierten Dateien in das Upload-Feld von GitHub.
7. Kontrolliere, ob GitHub auch die Unterordner css, icons und js anzeigt.
8. Trage unten bei der Commit-Nachricht zum Beispiel Orthodoxia App hinzufügen ein.
9. Klicke auf **Commit changes**.

Nach dem Upload muss index.html direkt in der Hauptansicht des Repositorys sichtbar sein.

### Wenn du die Dateien wirklich einzeln anlegen möchtest

Für reine Textdateien geht auch:

1. **Add file → Create new file**
2. In das Namensfeld den vollständigen Pfad schreiben, zum Beispiel css/style.css.
3. Den Inhalt aus der entsprechenden Datei einfügen.
4. **Commit changes** anklicken.

Die drei PNG-Dateien im Ordner icons sind Binärdateien und müssen über **Upload files** hochgeladen werden. Sie lassen sich nicht sinnvoll als Text kopieren.

## Schritt 4: GitHub Pages einschalten

1. Öffne im Repository den Reiter **Settings**.
2. Klicke links im Bereich **Code and automation** auf **Pages**.
3. Wähle unter **Build and deployment** bei **Source** den Punkt **Deploy from a branch**.
4. Wähle bei **Branch** main.
5. Wähle daneben **/(root)**.
6. Klicke auf **Save**.
7. Warte einige Minuten.
8. Lade die Seite **Settings → Pages** erneut. Dort erscheint anschließend **Visit site**.

GitHub nennt für Veröffentlichungen eine mögliche Wartezeit von bis zu zehn Minuten. Die offiziellen aktuellen Schritte stehen unter [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Deine Adresse lautet normalerweise:

    https://DEIN-GITHUB-NAME.github.io/orthodoxia/

Wenn dein Repository anders heißt, ersetzt du orthodoxia durch diesen Namen.

## Schritt 5: Auf dem iPhone als App installieren

1. Öffne die veröffentlichte Adresse unbedingt in **Safari**.
2. Tippe auf das **Teilen-Symbol**. Je nach Safari-Darstellung findest du es unten oder im Menü.
3. Scrolle nach unten und wähle **Zum Home-Bildschirm**.
4. Aktiviere **Als Web-App öffnen**, falls diese Auswahl angezeigt wird.
5. Tippe oben rechts auf **Hinzufügen**.

Nun liegt Orthodoxia mit eigenem Symbol auf dem Home-Bildschirm und öffnet sich wie eine App. Apples aktuelle Anleitung findest du unter [Turn a website into an app in Safari on iPhone](https://support.apple.com/guide/iphone/iphea86e5236/ios).

## Schritt 6: Offline-Funktion prüfen

1. Öffne die App mit Internetverbindung.
2. Öffne einmal die Bereiche Start, Kalender, Glaubenswissen, Gebete und Heilige.
3. Schließe die App vollständig.
4. Aktiviere testweise den Flugmodus.
5. Öffne Orthodoxia erneut.

Die Grundfunktionen und alle mitgelieferten Texte müssen weiterhin verfügbar sein. Favoriten und Notizen werden ausschließlich im Browser-Speicher dieses Geräts abgelegt.

## Inhalte verändern

### Glaubensartikel

Öffne **js/content.js**. Jeder Artikel besitzt:

- id: interne, einmalige Bezeichnung
- category: basics, worship, life oder church
- title: deutscher und englischer Titel
- summary: Kurzbeschreibung
- paragraphs: Textabschnitte
- points: kurze Merksätze
- scripture: Bibelstellen

Ändere immer beide Sprachfelder de und en, damit der Sprachwechsel vollständig bleibt.

### Gebete

Öffne **js/prayers.js**. Die Kategorien sind daily, traditional, intercession und sacraments.

### Heilige

Öffne **js/saints.js**. month und day sind das kirchliche feste Datum. Bei aktiviertem alten Kalender verschiebt die App dieses Datum automatisch auf das entsprechende bürgerliche Datum.

### Design

Farben, Abstände und Schriftarten befinden sich ganz oben in **css/style.css**. Die wichtigsten Farben sind:

- --wine: dunkles liturgisches Rot
- --gold: Goldton
- --paper: Hintergrund
- --surface: Karten und Flächen
- --ink: Textfarbe

## Sehr wichtig bei späteren Updates

Wenn du Dateien veränderst, erhöhe zusätzlich oben in **sw.js** die Versionsnummer.

Vorher:

    const CACHE_NAME = "orthodoxia-v1.0.0";

Danach zum Beispiel:

    const CACHE_NAME = "orthodoxia-v1.0.1";

Dadurch lädt die installierte App die neue Version und löscht den alten Offline-Cache.

Anschließend:

1. Geänderte Dateien bei GitHub öffnen.
2. Auf das Stiftsymbol klicken.
3. Änderungen einfügen.
4. **Commit changes** anklicken.
5. Einige Minuten warten.
6. Die App auf dem iPhone einmal mit Internetverbindung öffnen.

## Datensicherung

Unter **Meine Inhalte** gibt es:

- **Sicherung exportieren**: lädt eine JSON-Datei mit Favoriten, Notizen und Einstellungen herunter.
- **Sicherung importieren**: stellt diese Daten auf demselben oder einem anderen Gerät wieder her.
- **Lokale Daten löschen**: entfernt Favoriten und Notizen erst nach einer Bestätigung.

Die Sicherungsdatei enthält persönliche Notizen. Teile sie nur mit Personen, die diese Notizen sehen dürfen.

## Häufige Fehler

### Die Website zeigt nur eine 404-Seite

- Prüfe, ob index.html wirklich direkt im Hauptordner liegt.
- Prüfe unter **Settings → Pages**, ob main und /(root) ausgewählt sind.
- Warte bis zu zehn Minuten und lade dann neu.

### Das Design fehlt

Prüfe, ob die Datei exakt unter css/style.css liegt. Groß- und Kleinschreibung ist bei GitHub wichtig.

### Buttons funktionieren nicht

Prüfe, ob alle sieben Dateien aus dem Ordner js hochgeladen wurden und ihre Namen unverändert sind.

### Das App-Symbol fehlt

Prüfe den Ordner icons und installiere die Web-App anschließend erneut auf dem Home-Bildschirm.

### Änderungen erscheinen nicht

1. Erhöhe CACHE_NAME in sw.js.
2. Öffne die Website erneut mit Internet.
3. Warte kurz und starte die App noch einmal.
4. Falls nötig: Home-Bildschirm-App löschen und erneut hinzufügen. Notizen vorher exportieren.

## Technische Hinweise

- Die App verwendet nur HTML, CSS und JavaScript.
- Es gibt keinen Build-Schritt und keine Abhängigkeiten.
- Alle Pfade sind relativ und funktionieren deshalb auch unter einer Repository-Adresse wie /orthodoxia/.
- Die Navigation verwendet URL-Fragmente wie #calendar; dadurch sind keine zusätzlichen Weiterleitungen nötig.
- manifest.webmanifest steuert Name, Farben und App-Symbole.
- sw.js speichert die App-Dateien für die Offline-Nutzung.
- .nojekyll verhindert eine unnötige Jekyll-Verarbeitung durch GitHub Pages.
- Es gibt keine Analyse-, Werbe- oder Trackingdienste.
