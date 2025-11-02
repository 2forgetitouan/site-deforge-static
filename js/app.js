// ========================================
// Initialisation des blobs animés
// ========================================
function initBlobs() {
  const blobs = document.querySelectorAll(".blob");
  blobs.forEach((blob) => {
    const top = Math.random() * 80;
    const left = Math.random() * 80;
    blob.style.top = `${top}%`;
    blob.style.left = `${left}%`;
  });
}

// ========================================
// Définition des routes/pages
// ========================================
const routes = {
  accueil: `
    <div class="content page-accueil fade-in">
      <div class="hero-section">
        <h1 class="hero-title">Bienvenue sur deforge.me</h1>
        <p class="hero-subtitle">Hub centralisé pour mes projets, outils et expérimentations</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Projets Actifs</h3>
          <p>Découvrez mes sous-sites fonctionnels : trackers, outils Wake-on-LAN et plus</p>
          <a href="#projets" class="feature-link">Explorer →</a>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">💡</div>
          <h3>Blog & Notes</h3>
          <p>Idées, réflexions et remarques sur mes projets et expérimentations</p>
          <a href="#blog" class="feature-link">Lire →</a>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">👤</div>
          <h3>À Propos</h3>
          <p>En savoir plus sur moi et mes centres d'intérêt</p>
          <a href="#apropos" class="feature-link">Découvrir →</a>
        </div>
      </div>
    </div>
  `,
  
  apropos: `
    <div class="content page-apropos fade-in">
      <h1 class="page-title">À Propos</h1>
      
      <div class="about-content">
        <div class="about-section">
          <h2>Qui suis-je ?</h2>
          <p>Je m’appelle Titouan, né en 2008. Actuellement en Bac Pro CIEL, je me passionne pour l’informatique,
          le réseau, Linux, l’électronique et la cybersécurité. J’aime comprendre comment les choses
          fonctionnent, expérimenter, apprendre en pratiquant et explorer des domaines techniques par 
          curiosité et envie de progresser.
          Mon objectif est de développer mes compétences, mener des projets concrets et évoluer dans le 
          monde de la tech.
          Ce site sert de hub centralisé pour mes différentes créations et expérimentations.</p>
        </div>
        
        <div class="about-section">
          <h2>Ma Mission</h2>
          <p><strong>deforge.me</strong> est un espace pour rassembler au même endroit les outils open source 
          que je trouve intéressants, les idées que je teste, les scripts que j'utilise, et les projets 
          que je partage dans le domaine du développement web et des technologies.</p>
        </div>
        
        <div class="about-section">
          <h2>Compétences & Intérêts</h2>
          <div class="skills-tags">
            <span class="skill-tag">Linux/Bash</span>
            <span class="skill-tag">HTML/CSS</span>
            <span class="skill-tag">Intelligence Artificielle</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">Réseau/Web</span>
            <span class="skill-tag">Automatisation</span>
            <span class="skill-tag">Recherche de Pannes</span>
            <span class="skill-tag">Micro-Soudure</span>
            <span class="skill-tag">Open Source</span>
          </div>
        </div>
        
        <div class="about-section">
          <h2>Philosophie</h2>
          <p>Je crois au partage des connaissances et à la puissance de l'open source.
          Tous mes projets sont développés avec l'objectif d'être utiles, simples d'utilisation 
          et accessibles à tous.</p>
        </div>
      </div>
    </div>
  `,
  
  projets: `
    <div class="content page-projets fade-in">
      <h1 class="page-title">Mes Projets</h1>
      <p class="page-subtitle">Découvrez mes sous-sites et outils fonctionnels</p>
      
      <div class="projects-grid">
        <div class="project-card active">
          <div class="project-header">
            <div class="project-icon">📺</div>
            <div class="project-status">En ligne</div>
          </div>
          <h3>Wiflix Tracker</h3>
          <p class="project-description">
            Suivez en temps réel les nouveaux domaines de Wiflix. 
            Cet outil surveille automatiquement les changements de domaine et vous tient informé.
          </p>
          <div class="project-meta">
            <span class="tech-tag">Web Scraping</span>
            <span class="tech-tag">Monitoring</span>
          </div>
          <a href="https://wiflix.deforge.me" target="_blank" rel="noopener noreferrer" class="project-link">
            Visiter wiflix.deforge.me →
          </a>
        </div>
        
        <div class="project-card active">
          <div class="project-header">
            <div class="project-icon">💻</div>
            <div class="project-status">En ligne</div>
          </div>
          <h3>Wake-on-LAN</h3>
          <p class="project-description">
            Allumez vos ordinateurs à distance facilement grâce à la technologie Wake-on-LAN. 
            Interface simple et intuitive pour gérer vos machines.
          </p>
          <div class="project-meta">
            <span class="tech-tag">Réseau</span>
            <span class="tech-tag">IoT</span>
          </div>
          <a href="https://wol.deforge.me" target="_blank" rel="noopener noreferrer" class="project-link">
            Visiter wol.deforge.me →
          </a>
        </div>
        
        <div class="project-card coming-soon">
          <div class="project-header">
            <div class="project-icon">🔧</div>
            <div class="project-status coming">Bientôt</div>
          </div>
          <h3>Futurs Projets</h3>
          <p class="project-description">
            D'autres outils et projets sont en cours de développement. 
            Restez connectés pour découvrir de nouvelles fonctionnalités !
          </p>
          <div class="project-meta">
            <span class="tech-tag">En développement</span>
          </div>
        </div>
      </div>
    </div>
  `,
  
  blog: `
    <div class="content page-blog fade-in">
      <h1 class="page-title">Notes & Réflexions</h1>
      <p class="page-subtitle">Idées, expériences et remarques sur mes projets</p>
      
      <div class="blog-list">
        <article class="blog-post">
          <div class="blog-date">Novembre 2025</div>
          <h2>Lancement de deforge.me</h2>
          <p>
            Après plusieurs mois de réflexion, je lance enfin deforge.me comme hub centralisé 
            pour tous mes projets. L'objectif est de créer un espace unifié où je peux partager 
            mes créations et expérimentations.
          </p>
          <p>
            Les premiers projets mis en ligne sont le Wiflix Tracker et l'outil Wake-on-LAN, 
            deux solutions que j'utilise régulièrement et qui peuvent être utiles à d'autres.
          </p>
        </article>
        
        <article class="blog-post">
          <div class="blog-date">Juin 2025</div>
          <h2>Débuts du projet</h2>
          <p>
            Création initiale du concept deforge.me. L'idée est de rassembler tous mes outils 
            et projets dispersés en un seul endroit accessible et bien organisé.
          </p>
        </article>
        
        <article class="blog-post future">
          <div class="blog-date">À venir</div>
          <h2>Futures fonctionnalités</h2>
          <p>
            Prochainement, j'envisage d'ajouter :
          </p>
          <ul>
            <li>Un espace collaboratif pour partager des ressources</li>
            <li>Un forum de discussion autour de mes projets</li>
            <li>Des tutoriels et guides d'utilisation</li>
            <li>Une API publique pour certains outils</li>
          </ul>
        </article>
      </div>
    </div>
  `,
  
  contact: `
    <div class="content page-contact fade-in">
      <h1 class="page-title">Contact</h1>
      <p class="page-subtitle">Une question ? Une suggestion ? N'hésitez pas à me contacter</p>
      
      <div class="contact-container">
        <div class="contact-info">
          <h3>Me contacter</h3>
          <p>Utilisez le formulaire ci-contre pour m'envoyer un message. 
          Je m'efforcerai de répondre dans les plus brefs délais.</p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>Via le formulaire de contact</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">💬</div>
              <div>
                <h4>Réseaux</h4>
                <p>Retrouvez-moi sur GitHub</p>
              </div>
            </div>
          </div>
        </div>
        
        <form id="contact-form" class="contact-form" action="https://formspree.io/f/xgvyryzd" method="POST" autocomplete="off">
          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="votre@email.com" required>
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Votre message..." rows="6" required></textarea>
          </div>
          
          <button type="submit" class="submit-btn">
            <span>Envoyer le message</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  `
};

// ========================================
// Gestion du routing et de la navigation
// ========================================
function renderRoute() {
  const hash = location.hash.replace('#', '') || 'accueil';
  const mainContent = document.getElementById('main-content');
  
  // Ajouter une animation de fade out
  mainContent.style.opacity = '0';
  
  setTimeout(() => {
    // Charger le nouveau contenu
    mainContent.innerHTML = routes[hash] || routes['accueil'];
    
    // Faire défiler vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Animation de fade in
    setTimeout(() => {
      mainContent.style.opacity = '1';
    }, 50);
    
    // Mettre à jour la navigation active
    updateActiveNav(hash);
    
    // Gérer les événements spécifiques aux pages
    handlePageEvents(hash);
  }, 150);
}

function updateActiveNav(currentHash) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    if (href === currentHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function handlePageEvents(hash) {
  // Gestion du formulaire de contact
  if (hash === "contact") {
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Envoi en cours...</span>';
        submitBtn.disabled = true;
        
        const formData = new FormData(form);
        
        try {
          const res = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
          });
          
          if (res.ok) {
            showPopup("✓ Message envoyé ! Merci pour votre contact.", true);
            form.reset();
          } else {
            showPopup("✗ Erreur lors de l'envoi du message.", false);
          }
        } catch (error) {
          showPopup("✗ Erreur de connexion. Veuillez réessayer.", false);
        } finally {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }
      });
    }
  }
}

// ========================================
// Fonction d'affichage des notifications
// ========================================
function showPopup(message, success) {
  // Supprimer les popups existants
  const existingPopups = document.querySelectorAll('.notification-popup');
  existingPopups.forEach(p => p.remove());
  
  const popup = document.createElement("div");
  popup.className = 'notification-popup';
  popup.textContent = message;
  popup.style.cssText = `
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    background: ${success ? 'linear-gradient(135deg, #0077ff, #0055cc)' : 'linear-gradient(135deg, #ff3333, #cc0000)'};
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    font-weight: 600;
    opacity: 0;
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(popup);
  
  // Animation d'entrée
  setTimeout(() => {
    popup.style.opacity = '1';
    popup.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);
  
  // Animation de sortie
  setTimeout(() => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(-50%) translateY(-20px)';
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}

// ========================================
// Gestion du menu mobile
// ========================================
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Fermer le menu lors du clic sur un lien
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
}

// ========================================
// Animation au scroll
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observer les éléments avec animation
  document.querySelectorAll('.feature-card, .project-card, .blog-post').forEach(el => {
    observer.observe(el);
  });
}

// ========================================
// Initialisation au chargement de la page
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initBlobs();
  initMobileMenu();
  renderRoute();
  
  // Réinitialiser les animations au changement de page
  window.addEventListener('hashchange', () => {
    renderRoute();
    setTimeout(initScrollAnimations, 200);
  });
  
  // Initialiser les animations de scroll après le premier rendu
  setTimeout(initScrollAnimations, 200);
});
