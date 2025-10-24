class MainHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `<header class="header">
            <div class="container">
            <!-- Logo (left) -->
            <a href="#hero" class="header-logo-link">
                <img src="./assets/images/logo.png" alt="Logo" class="header-logo">
            </a>

            <!-- Navigation (right) -->
            <nav class="nav">
                <ul class="nav-links" id="primary-navigation">
                <li><a href="#projects">Projects</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="#footer">Contact</a></li>
                <li><a href="./assets/Anastasis_Marinos_CV.pdf" target="_blank" rel="noopener">CV</a></li>
                </ul>
            </nav>
        </header>`
    }
}

class MainFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `<footer class="footer" id="footer">
            <div class="container">
                <div class="footer-left">
                <p>© 2025 Anastasis Marinos.</p>
                <p>All rights reserved.</p>
                </div>
                <div class="footer-center">
                <div class="icons-container">
                    <a href="https://anastasismarinos.itch.io" target="_blank" rel="noopener" aria-label="Itch.io">
                    <i class="fab fa-itch-io"></i>
                    </a>
                    <a href="https://github.com/AnastasisMarinos" target="_blank" rel="noopener" aria-label="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/anastasis-marinos-229a73261" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                </div>
                </div>
                <div class="footer-right">
                <form action="https://formspree.io/f/xanovkyp" method="POST" class="contact-form">
                    <input type="email" name="email" placeholder="im.cool@mail.com" required>
                    <textarea name="message" placeholder="Cool message..." required></textarea>
                    <button type="submit">Contact Me!</button>
                </form>
            </div>
        </footer>`
    }
}

customElements.define('main-header', MainHeader)
customElements.define('main-footer', MainFooter)
