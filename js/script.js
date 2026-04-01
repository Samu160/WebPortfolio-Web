// Language Dictionary
const translations = {
    "en": {
        "nav-home": "Home",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "hero-badge": "English & Spanish Services",
        "hero-title": "Modernize Your Business.",
        "hero-subtitle": "At Dev Studio Bolivia, we transform the way businesses connect with their customers. We offer custom web development, intelligent chatbots, and digital solutions designed specifically for your business.",
        "hero-cta-1": "See Our Work",
        "hero-cta-2": "Contact Us",
        "port-title": "Our Projects",
        "port-subtitle": "A showcase of the stunning websites we've tailored to our clients' unique needs.",
        "proj-1-desc": "A local consulting business specializing in the Spanish community. They struggled with accepting forms from various sources. We built a site with a unified form, reducing their channels to one.",
        "proj-2-desc": "A portfolio website showcasing cloud engineering skills, featuring a live visitor counter utilizing an AWS serverless backend.",
        "proj-3-desc": "A sleek website for a salon in Bolivia that includes a direct WhatsApp connection, allowing customers to instantly message the store.",
        "proj-4-desc": "A modern, fully responsive web application built with premium aesthetics in mind. It showcases the best practices of modern interactive design.",
        "contact-title": "Get in Touch",
        "contact-subtitle": "Reach out to us directly via WhatsApp or Facebook.",
        "contact-wa-title": "WhatsApp",
        "contact-wa-desc": "Message us directly for a quick response.",
        "contact-wa-btn": "Chat on WhatsApp",
        "contact-fb-title": "Facebook",
        "contact-fb-desc": "Visit our Business Page and follow our updates.",
        "contact-fb-btn": "Visit Facebook Page"
    },
    "es": {
        "nav-home": "Inicio",
        "nav-portfolio": "Portafolio",
        "nav-contact": "Contacto",
        "hero-badge": "Servicios en Español e Inglés",
        "hero-title": "Moderniza tu Negocio.",
        "hero-subtitle": "En Dev Studio Bolivia, transformamos la manera en que los negocios se conectan con sus clientes. Ofrecemos desarrollo web personalizado, chatbots inteligentes y soluciones digitales diseñadas especialmente para tu negocio.",
        "hero-cta-1": "Ver Nuestro Trabajo",
        "hero-cta-2": "Contáctanos",
        "port-title": "Nuestros Proyectos",
        "port-subtitle": "Una muestra de los increíbles sitios web que hemos diseñado a la medida de las necesidades únicas de nuestros clientes.",
        "proj-1-desc": "Una empresa de consultoría local enfocada en la comunidad hispana. Tenían problemas para aceptar formularios de diversas fuentes. Creamos un sitio con un formulario unificado, reduciendo sus canales a uno.",
        "proj-2-desc": "Un sitio de portafolio que demuestra habilidades de ingeniería en la nube, con un contador de visitas en vivo usando un backend serverless de AWS.",
        "proj-3-desc": "Un sitio web elegante para un salón en Bolivia que incluye una conexión directa a WhatsApp, permitiendo a los clientes comunicarse al instante con la tienda.",
        "proj-4-desc": "Una aplicación web moderna y totalmente responsiva, construida con estética premium. Destaca las mejores prácticas de diseño interactivo moderno.",
        "contact-title": "Ponte en Contacto",
        "contact-subtitle": "Comunícate con nosotros directamente por WhatsApp o Facebook.",
        "contact-wa-title": "WhatsApp",
        "contact-wa-desc": "Envíanos un mensaje para una respuesta rápida.",
        "contact-wa-btn": "Contactar por WhatsApp",
        "contact-fb-title": "Facebook",
        "contact-fb-desc": "Visita nuestra página de negocios y síguenos.",
        "contact-fb-btn": "Visitar Página de Facebook"
    }
}

// Interactivity & Scroll Reveals
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => scrollObserver.observe(el));

// Language Toggle Logic
const langBtn = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'es';

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
    localStorage.setItem('lang', lang);
}

// Initial Call
applyLanguage(currentLang);

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    applyLanguage(currentLang);
});

// Mobile Menu Logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
