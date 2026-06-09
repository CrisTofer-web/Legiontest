document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi traditionnel du formulaire

            // Dans un vrai scénario, vous enverriez ces données à un serveur
            // Par exemple: fetch('votre-api-endpoint', { method: 'POST', body: new FormData(this) })
            // Pour l'instant, on simule une réponse.

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Simuler une requête réussie
                formMessage.textContent = 'Merci pour votre message ! Nous vous recontacterons bientôt.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';

                // Réinitialiser le formulaire
                contactForm.reset();
            } else {
                // Afficher une erreur si des champs sont vides (même si HTML required le gère déjà)
                formMessage.textContent = 'Veuillez remplir tous les champs du formulaire.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }

            // Cacher le message après quelques secondes
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Smooth scrolling pour les liens de navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
