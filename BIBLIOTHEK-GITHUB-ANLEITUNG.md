# Orthodoxia: Bibliothek der Heiligen bei GitHub einfügen

Dieses Paket ergänzt die vorhandene Orthodoxia-App um eine vollständig gestaltete, zweisprachige Bibliothek mit 28 historischen Schriften: 15 deutsche und 13 englische Werke beziehungsweise Predigten.

Die Bibliothek enthält eine eigene Navigation, einen Hinweis auf der Startseite, Themenfilter, Sprachfilter, Volltextsuche, Sortierung, direkte PDF- und Leselinks, transparente Quellenangaben, eine persönliche Leseliste und eine Offline-Einbindung der Bibliotheksoberfläche.

## Variante A: Das fertige Gesamtpaket hochladen

Diese Variante ist am einfachsten, wenn du keine eigenen Änderungen an den vorhandenen Orthodoxia-Dateien erhalten musst.

1. Lade `Orthodoxia-mit-Heiligenbibliothek.zip` herunter.
2. Öffne auf deinem Mac den Ordner `Downloads`.
3. Doppelklicke auf die ZIP-Datei.
4. Öffne den entstandenen Ordner.
5. Überprüfe, dass du darin direkt `index.html`, `sw.js`, `css`, `js`, `books` und `icons` siehst.
6. Öffne dein Orthodoxia-Repository auf GitHub.
7. Öffne den Reiter `Code`.
8. Klicke auf `Add file` und anschließend auf `Upload files`.
9. Ziehe den gesamten **Inhalt** des entpackten Ordners in das Upload-Feld. Ziehe nicht bloß den darüberliegenden Ordner hinein.
10. Überprüfe, dass `index.html` direkt im Hauptverzeichnis liegt.
11. Schreibe als Commit-Nachricht beispielsweise `Heiligenbibliothek hinzufügen`.
12. Klicke auf `Commit changes`.
13. Warte, bis GitHub Pages neu veröffentlicht hat.
14. Öffne die Website und lade sie vollständig neu.

Wenn du deine bereits veränderten Dateien unbedingt behalten möchtest, verwende stattdessen Variante B.

## Variante B: Nur die Bibliothek in deine vorhandene App einbauen

Du brauchst zwei neue Dateien und zwei kleine Anpassungen an bestehenden Dateien:

```text
css/library.css       neu
js/library.js         neu
index.html            ergänzen
sw.js                 ergänzen
```

### Schritt 1: Gestaltungsdatei anlegen

1. Öffne dein GitHub-Repository.
2. Klicke auf `Add file` → `Create new file`.
3. Schreibe in das Feld für den Dateinamen:

   ```text
   css/library.css
   ```

4. Öffne im entpackten Paket die Datei `css/library.css` mit TextEdit, Visual Studio Code oder einem anderen Texteditor.
5. Drücke `⌘A`, anschließend `⌘C`.
6. Klicke in das große Codefeld auf GitHub und drücke `⌘V`.
7. Klicke auf `Commit changes` und bestätige.

GitHub erkennt durch den Schrägstrich automatisch, dass die Datei in den vorhandenen Ordner `css` gehört.

### Schritt 2: Bibliotheksdatei anlegen

1. Klicke erneut auf `Add file` → `Create new file`.
2. Schreibe als Dateinamen:

   ```text
   js/library.js
   ```

3. Öffne im entpackten Paket die Datei `js/library.js`.
4. Kopiere ihren vollständigen Inhalt mit `⌘A` und `⌘C`.
5. Füge ihn auf GitHub mit `⌘V` ein.
6. Klicke auf `Commit changes`.

In dieser Datei stehen alle Bücher, Beschreibungen, Kategorien, PDF-Adressen, Übersetzungen und Funktionen.

### Schritt 3: index.html oben ergänzen

1. Öffne in GitHub die Datei `index.html`.
2. Klicke auf das Stiftsymbol `Edit this file`.
3. Drücke `⌘F` und suche:

   ```html
   <link rel="stylesheet" href="./css/style.css" />
   ```

4. Setze direkt darunter:

   ```html
   <link rel="stylesheet" href="./css/library.css" />
   ```

Das Ergebnis muss so aussehen:

```html
<link rel="stylesheet" href="./css/style.css" />
<link rel="stylesheet" href="./css/library.css" />
```

### Schritt 4: index.html unten ergänzen

1. Bleibe in `index.html`.
2. Suche:

   ```html
   <script src="./js/views.js"></script>
   ```

3. Füge direkt darunter ein:

   ```html
   <script src="./js/library.js"></script>
   ```

Die Reihenfolge am Ende der Datei muss so aussehen:

```html
<script src="./js/content.js"></script>
<script src="./js/prayers.js"></script>
<script src="./js/saints.js"></script>
<script src="./js/calendar.js"></script>
<script src="./js/app-core.js"></script>
<script src="./js/views.js"></script>
<script src="./js/library.js"></script>
<script src="./js/app.js"></script>
```

`library.js` muss nach `views.js`, aber vor `app.js` stehen. Sonst kann die neue Bibliothek nicht korrekt registriert werden.

4. Klicke auf `Commit changes`.

### Schritt 5: Offline-Datei sw.js ergänzen

1. Öffne `sw.js` und klicke auf das Stiftsymbol.
2. Suche die erste Zeile:

   ```js
   const CACHE_NAME = "orthodoxia-v1.0.0";
   ```

3. Ersetze sie durch:

   ```js
   const CACHE_NAME = "orthodoxia-v1.1.0-heiligenbibliothek";
   ```

Wenn deine Versionsnummer bereits anders lautet, wähle einfach eine neue, noch nicht verwendete Bezeichnung.

4. Suche:

   ```js
   "./css/style.css",
   ```

5. Ergänze direkt darunter:

   ```js
   "./css/library.css",
   ```

6. Suche:

   ```js
   "./js/views.js",
   ```

7. Ergänze direkt darunter:

   ```js
   "./js/library.js",
   ```

8. Suche zusätzlich diesen Abschnitt:

   ```js
   if (event.request.mode === "navigate") {
   ```

9. Ersetze ihn durch:

   ```js
   const requestUrl = new URL(event.request.url);
   const isPdfDocument = /\.pdf$/i.test(requestUrl.pathname);

   if (event.request.mode === "navigate" && !isPdfDocument) {
   ```

Dadurch öffnen sich selbst hochgeladene PDF-Dateien wirklich als PDF, anstatt versehentlich wieder die Startseite der App zu zeigen.

10. Klicke auf `Commit changes`.

Die geänderte Cache-Version ist wichtig: Ohne neue Versionsnummer zeigt eine bereits installierte App unter Umständen weiterhin die alte Fassung an.

## Eigene PDF-Dateien hochladen

Die enthaltene Bibliothek funktioniert sofort mit externen PDF- und Leselinks. Eigene Dateien musst du nicht hochladen.

Wenn du eine PDF-Datei rechtmäßig selbst veröffentlichen darfst:

1. Lade die PDF-Datei zunächst auf deinen Mac herunter.
2. Benenne sie eindeutig und ohne Leerzeichen, beispielsweise:

   ```text
   athanasius-menschwerdung.pdf
   ```

3. Öffne dein Repository auf GitHub.
4. Erstelle bei Bedarf über `Add file` → `Create new file` zuerst die Datei:

   ```text
   books/de/README.md
   ```

   Für englische Texte entsprechend:

   ```text
   books/en/README.md
   ```

5. Öffne im Repository den Ordner `books`, anschließend `de` oder `en`.
6. Klicke in diesem Ordner auf `Add file` → `Upload files`.
7. Ziehe die PDF-Datei in das Feld.
8. Klicke auf `Commit changes`.
9. Öffne anschließend `js/library.js`.
10. Suche nach dem passenden Buch, beispielsweise:

    ```js
    id: "de-athanasius-menschwerdung"
    ```

11. Suche in diesem Bucheintrag:

    ```js
    // localPdf: "./books/de/athanasius-menschwerdung.pdf",
    ```

12. Entferne am Anfang die beiden Schrägstriche:

    ```js
    localPdf: "./books/de/athanasius-menschwerdung.pdf",
    ```

Bei einem anderen Buch ergänzt du dieselbe Zeile vor `rights:` und passt den Dateinamen an:

```js
localPdf: "./books/en/mein-englisches-buch.pdf",
rights: "source-public"
```

13. Klicke auf `Commit changes`.

Die Schaltfläche `PDF öffnen` verweist anschließend auf deine eigene Datei. Die Originalquelle bleibt weiterhin sichtbar.

## Weitere Bücher hinzufügen

Öffne `js/library.js`. Suche den Bereich:

```js
const books = [
```

Füge innerhalb dieser Liste einen zusätzlichen Bucheintrag ein:

```js
{
  id: "de-mein-neues-buch",
  language: "de",
  category: "prayer",
  edition: "Historische Ausgabe",
  title: bi("Deutscher Titel", "English title"),
  author: bi("Hl. Name auf Deutsch", "St Name in English"),
  description: bi(
    "Deutsche Beschreibung des Buches.",
    "English description of the book."
  ),
  source: "https://beispiel.org/offizielle-quellseite",
  pdf: "https://beispiel.org/offizielles-buch.pdf",
  rights: "source-public"
},
```

Verfügbare Kategorien:

```text
doctrine       Glaube und Lehre
prayer         Gebet und geistliches Leben
monastic       Mönchtum und Askese
catechesis     Katechese und Sakramente
pastoral       Hirtenamt und Kirche
letters        Briefe und Homilien
icons          Ikonen und Verehrung
```

Für ein englisches Werk setzt du `language: "en"`. Bei einer eigenen hochgeladenen PDF-Datei ergänzt du `localPdf: "./books/de/dateiname.pdf"` oder `localPdf: "./books/en/dateiname.pdf"`.

Die letzte Eigenschaft in einem Objekt braucht kein Komma. Zwischen zwei Bucheinträgen muss allerdings immer ein Komma stehen.

## Website aktualisieren

1. Warte nach jedem Commit, bis GitHub Pages fertig ist.
2. Öffne die veröffentlichte Website im Browser.
3. Lade die Seite auf dem Mac mit `⌘R` neu.
4. Wenn noch die alte Fassung erscheint, probiere `⌘⇧R`.
5. Schließe eine bereits auf dem iPhone installierte Web-App vollständig und öffne sie erneut.
6. Wird die Bibliothek noch nicht angezeigt, öffne die Website zuerst einmal in Safari und lade sie neu.

## Was online beziehungsweise offline funktioniert

- Bibliotheksoberfläche, Beschreibungen, Suche und Leseliste: nach dem Laden im Offline-Cache verfügbar.
- Externe Bücher und externe PDFs: normalerweise nur mit Internetverbindung verfügbar.
- Eigene, im Repository veröffentlichte PDFs: können nach dem ersten Öffnen vom Service Worker zwischengespeichert werden.
- Die Leseliste wird nur lokal im Browser beziehungsweise in der installierten Web-App gespeichert.

## Quellen und Urheberrecht

Die Bibliothek verlinkt historische Ausgaben. Der Link zu einer externen Quelle bedeutet nicht automatisch, dass jede PDF-Datei in jeder Form ungeprüft gespiegelt werden darf.

- Bibliothek der Kirchenväter: https://bkv.unifr.ch/about/copyrights
- Project Gutenberg: https://www.gutenberg.org/license

Prüfe insbesondere die Rechte an der konkreten Übersetzung, der Ausgabe und der bereitgestellten Datei. Moderne orthodoxe Bücher und Schriften neuerer Heiliger darfst du nicht ohne entsprechende Erlaubnis selbst hochladen. Bei Project Gutenberg müssen die jeweils geltenden Lizenz- und Quellenhinweise erhalten bleiben.

Die fünfzig geistlichen Homilien werden traditionell dem heiligen Makarios zugeschrieben; diese historische Zuschreibung ist wissenschaftlich umstritten und wird deshalb ausdrücklich kenntlich gemacht.
