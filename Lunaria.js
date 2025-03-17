document.addEventListener("DOMContentLoaded", function () {
    // Creazione dinamica della navbar
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.innerHTML = `
        <a href="#home">Home</a>
        <a href="#prodotti">Prodotti</a>
        <a href="#chi-siamo">Chi Siamo</a>
        <a href="#contattami">Contattami</a>
    `;
    document.body.prepend(navbar);

    // Aggiunta del titolo "Lunaria Candele" sotto la navbar
    const title = document.createElement("h1");
    title.classList.add("lunaria-title");
    title.textContent = "Lunaria Candele";
    document.body.insertBefore(title, document.body.firstChild.nextSibling);

    // Creazione dinamica delle sezioni
    const content = `
        <header id="home" class="hero-section">
            <h1>Lunaria</h1>
            <p>Candele artigianali per un'atmosfera unica.</p>
        </header>

        <section id="prodotti" class="product-section">
            <h2>I Nostri Prodotti</h2>
            <div class="product-container">
                <div class="product-card"> <img src="candle.png" alt="Candela 1"><p>Candela in cera di soia in barattolo di vetro con coperchio in legno.</p></div>
                <div class="product-card"> <img src="candle2.png" alt="Candela 2"><p>Candela artigianale in ceramica con fiori secchi incorporati.</p></div>
                <div class="product-card"> <img src="candle3.png" alt="Candela 3"><p>Candela di lusso in contenitore nero opaco con dettagli dorati.</p></div>
            </div>
        </section>

        <section id="chi-siamo" class="about-section">
            <h2>Chi Siamo</h2>
            <p>Lunaria è un brand dedicato alla creazione di candele artigianali di alta qualità.</p>
        </section>

        <section id="contattami" class="contact-section">
            <h2>Contattami</h2>
            <form class="contact-form">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Messaggio:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit">Invia</button>
            </form>
        </section>

        <footer>
            <p>Seguici sui social</p>
            <div class="social-icons">
                <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
                <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
                <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML("beforeend", content);

    // Rimuovere il testo "Scroll Down" e "Scroll Back"
    const scrollDownText = document.querySelector("#scroll-text");
    const scrollBackText = document.querySelector("#scroll-back");
    if (scrollDownText) scrollDownText.remove();
    if (scrollBackText) scrollBackText.remove();

    // Smooth scroll per i link della navbar
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animazioni GSAP per le card dei prodotti
    gsap.from(".product-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".product-section",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });
});
