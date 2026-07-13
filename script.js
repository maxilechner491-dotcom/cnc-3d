<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Individuelle 3D-Schriftzüge, Wandlogos und Dekoration – präzise gefertigt nach deinen Vorstellungen." />
    <title>FORMSTARK — 3D Schriftzüge</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Montserrat:wght@500;600;700&family=Open+Sans:wght@400;600;700&family=Mansalva&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <a href="#home" class="brand" aria-label="FORMSTARK Startseite">FORM<span>STARK</span></a>
      <button class="menu-toggle" aria-label="Menü öffnen" aria-expanded="false"><i></i><i></i></button>
      <nav class="nav" aria-label="Hauptnavigation">
        <a href="#home">Home</a><a href="#wandgestaltung">Wandgestaltung</a><a href="#inspiration">Inspiration</a><a href="#anfrage">Anfrage</a><a href="#ueber-uns">Über uns</a>
        <a href="#konfigurator" class="nav-cta">Jetzt konfigurieren <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="hero-copy reveal">
          <p class="eyebrow">3D-DESIGN · INDIVIDUELL GEFERTIGT</p>
          <h1>Deine Idee.<br /><em>Präzise</em> in Form.</h1>
          <p class="intro">Individuelle 3D-Schriftzüge, Logos und Wandobjekte – entwickelt für Räume mit Charakter.</p>
          <div class="hero-actions"><a class="button button-dark" href="#konfigurator">Schriftzug konfigurieren <span>→</span></a><a class="text-link" href="#inspiration">Projekte entdecken <span>↓</span></a></div>
        </div>
        <div class="hero-visual reveal">
          <div class="hero-image"><img src="assets/porsche-schriftzug.png" alt="Schwarzer 3D-Schriftzug an einer weißen Wand" /></div>
          <div class="measure measure-x">320 MM MAX. DRUCKFLÄCHE</div><div class="measure measure-y">01 / 03</div>
        </div>
      </section>

      <section class="stats section-pad">
        <p class="eyebrow">WAS UNS AUSMACHT</p>
        <div class="stat-grid"><article><b>01</b><h3>Einzelstücke</h3><p>Jeder Schriftzug wird für dich geplant und gefertigt.</p></article><article><b>02</b><h3>Made to last</h3><p>Hochwertige Filamente für ein dauerhaft schönes Ergebnis.</p></article><article><b>03</b><h3>Präzise gefertigt</h3><p>Saubere Konturen und ein Finish, das überzeugt.</p></article><article><b>04</b><h3>Persönlich</h3><p>Von der Idee bis zum fertigen Objekt an deiner Seite.</p></article></div>
      </section>

      <section class="manifesto section-pad" id="wandgestaltung">
        <div class="section-heading"><p class="eyebrow">WANDGESTALTUNG</p><h2>Mehr als nur<br /><em>Buchstaben.</em></h2></div>
        <div class="manifesto-copy"><p>Ein Name an der Kinderzimmertür. Ein Logo, das deine Marke im Raum verankert. Oder ein Objekt, das einfach Freude macht.</p><a href="#konfigurator" class="text-link">Möglichkeiten entdecken <span>→</span></a></div>
        <div class="possibilities"><span>Schriftzüge</span><span>Wandlogos</span><span>Hausnummern</span><span>Symbole</span><span>Firmenlogos</span><span>Flaggen</span><span>Dekoration</span><span>Sonderanfertigungen</span></div>
      </section>

      <section class="gallery section-pad" id="inspiration">
        <div class="section-top"><div><p class="eyebrow">INSPIRATION</p><h2>Für Räume,<br />die <em>bleiben.</em></h2></div><a href="#anfrage" class="text-link">Eigene Idee anfragen <span>→</span></a></div>
        <div class="project-grid"><article class="project project-main"><img src="assets/porsche-schriftzug.png" alt="Porsche 3D-Schriftzug" /><div><p>01 · Wandlogo</p><h3>Porsche</h3><span>Schwarz · PLA · Korean New</span></div></article><article class="project project-placeholder"><div class="shape shape-circle">M</div><div><p>02 · Schriftzug</p><h3>Dein Projekt</h3><span>Farbe · Material · Schriftart</span></div></article><article class="project project-placeholder warm"><div class="shape shape-word">hello</div><div><p>03 · Wandgestaltung</p><h3>Dein Projekt</h3><span>Farbe · Material · Schriftart</span></div></article></div>
      </section>

      <section class="config-section section-pad" id="konfigurator">
        <div class="section-top config-heading"><div><p class="eyebrow">KONFIGURATOR</p><h2>Mach es<br /><em>zu deinem.</em></h2></div><p>Wähle Schrift, Größe und Material. Deine Vorschau und der Preis passen sich direkt an.</p></div>
        <div class="configurator">
          <div class="config-controls">
            <div class="control-block"><label for="textInput"><span>01</span> Dein Text</label><input id="textInput" maxlength="28" value="Dein Moment" aria-label="Gewünschter Text" /><small id="charCount">11 / 28 Zeichen</small></div>
            <div class="control-block"><label for="fontSelect"><span>02</span> Schriftart</label><select id="fontSelect" aria-label="Schriftart auswählen"></select><div class="alphabet" id="alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 · Ä Ö Ü ä ö ü ß · ! ? &amp; +</div></div>
            <div class="control-block"><label><span>03</span> Höhe</label><div class="size-options" id="sizeOptions"></div><small id="sizeHint">Höhe der Großbuchstaben</small></div>
            <div class="control-block"><label><span>04</span> Farbe</label><div class="swatches"><button class="swatch active" data-color="#171717" aria-label="Schwarz" title="Schwarz"></button><button class="swatch white" data-color="#f7f6f2" aria-label="Weiß" title="Weiß"></button></div></div>
            <div class="control-block"><label><span>05</span> Einsatzbereich</label><div class="toggle-options"><button class="active" data-area="Innenbereich">Innenbereich</button><button data-area="Außenbereich">Außenbereich <small>+ wetterfest</small></button></div></div>
          </div>
          <div class="preview-panel">
            <div class="preview-top"><span>LIVE-VORSCHAU</span><span id="fitStatus" class="fit-status">● Passt auf das Druckbett</span></div>
            <div class="preview-stage"><div class="preview-text" id="previewText">Dein Moment</div><div class="preview-shadow" id="previewShadow">Dein Moment</div><div class="wall-note">VORSCHAU · NICHT MASSSTABSGETREU</div></div>
            <div class="dimensions"><div><span>BREITE</span><b id="widthMeasure">— mm</b></div><div><span>HÖHE</span><b id="heightMeasure">— mm</b></div><div><span>DRUCKBETT</span><b>320 × 320 mm</b></div></div>
            <div class="price-row"><div><span>AB</span><b id="price">29,00 €</b><small id="priceDetail">inkl. MwSt. · Innenbereich</small></div><button id="addToCart" class="button button-dark">In den Warenkorb <span>→</span></button></div>
            <p class="bed-warning" id="bedWarning" hidden>Dieser Schriftzug überschreitet die Druckfläche. Bitte wähle eine kleinere Höhe oder sende uns eine Anfrage für eine mehrteilige Fertigung.</p>
          </div>
        </div>
      </section>

      <section class="process section-pad"><p class="eyebrow">SO ENTSTEHT DEIN STÜCK</p><div class="process-grid"><div><b>01</b><h3>Konfigurieren</h3><p>Du bringst deine Vorstellung in Form.</p></div><div><b>02</b><h3>Prüfen</h3><p>Wir prüfen Details und Machbarkeit.</p></div><div><b>03</b><h3>Fertigen</h3><p>Dein Objekt wird Schicht für Schicht gefertigt.</p></div><div><b>04</b><h3>Freuen</h3><p>Sicher verpackt kommt es bei dir an.</p></div></div></section>

      <section class="about section-pad" id="ueber-uns"><div class="about-number">FORM<br />IST<br /><em>HALTUNG.</em></div><div><p class="eyebrow">ÜBER UNS</p><h2>Von der Idee<br />an die <em>Wand.</em></h2><p class="intro">Wir lieben die Verbindung aus digitaler Präzision und Objekten, die man sehen und fühlen kann. Mit unserem 3D-Drucker fertigen wir deine Gestaltungsidee sorgfältig und ressourcenschonend vor Ort.</p><a href="#anfrage" class="button button-outline">Mehr über uns <span>→</span></a></div></section>

      <section class="contact section-pad" id="anfrage"><div><p class="eyebrow">ANFRAGE</p><h2>Etwas anderes<br />im <em>Sinn?</em></h2><p>Du hast ein Logo, eine Skizze oder eine besondere Idee? Erzähl uns davon.</p></div><form id="contactForm"><div class="form-row"><label>Name<input name="name" required placeholder="Dein Name" /></label><label>E-Mail<input name="email" type="email" required placeholder="name@email.de" /></label></div><label>Telefon <small>(optional)</small><input name="phone" type="tel" placeholder="Deine Telefonnummer" /></label><label>Nachricht<textarea name="message" required placeholder="Erzähl uns von deinem Projekt …"></textarea></label><button class="button button-light" type="submit">Anfrage vorbereiten <span>→</span></button><p class="form-status" id="formStatus" aria-live="polite"></p></form></section>
    </main>
    <footer><a href="#home" class="brand">FORM<span>STARK</span></a><span>INDIVIDUELLER 3D-DRUCK · DEUTSCHLAND</span><a href="mailto:maxi@lachter.de">maxi@lachter.de</a></footer>
    <div class="toast" id="toast" role="status">Zum Warenkorb hinzugefügt</div>
    <script src="script.js"></script>
  </body>
</html>
