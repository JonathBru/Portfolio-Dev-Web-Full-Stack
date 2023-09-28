
function createModal(modalId, modalTitle, modalImage1, modalImage2, text1, text2, link) {
    const modalContainer = document.getElementById("modalContainer");

    const modal = document.createElement("div");
    modal.id = modalId;
    modal.className = "modal";

    const modalContent = `
        <div class="modal-content">
                <div class="modal-container">
                    <span class="close-modal" onclick="closeModal('${modalId}')">&times;</span>
                    <h2>${modalTitle}</h2>
                    <div class="modal-images">
                        <img src="${modalImage1}" alt="${modalTitle} Image 1">
                        <img src="${modalImage2}" alt="${modalTitle} Image 2">
                    </div>
                    <div class="modal-text">
                        <div class="Tech-modal">
                            <h3>Technologies</h3>
                            <p>${text1}</p>
                        </div>
                        <div class="mission">
                            <h3>Réalisation</h3>    
                            <p>${text2}</p>
                            <a href="${link}" target="_blank" class="modal-link">Voir le projet</a>
                        </div>
                    </div>

                </div>
        </div>
    `;

    modal.innerHTML = modalContent;

    modalContainer.appendChild(modal);
}

// Appeler createModal pour chaque modale avec des données différentes
createModal("booki1", "Modale Booki", "images/modale-images/booki-1.png", "images/modale-images/booki-2.png", "HTML/CSS", "Projet réalisé dans le cadre de ma formation OpenClassrooms de développeur Full-stack.<br>Mise en place d'une interface responsive pour le site web Booki.","https://github.com/JonathBru/JonathBru-BRU_JONATHAN_2_DOSSIERP2_022023");
createModal("sophie1", "Modale Sophie Bluel", "images/modale-images/sophiebluel1.png", "images/modale-images/sophiebluel2.jpg", "HTML/CSS/JavaScript", "Projet réalisé dans le cadre de ma formation OpenClassrooms de développeur Full-stack.<br>Création du Front-end d'un site vitrine, conprenant les liaisons avec une API côté Front.","https://github.com/JonathBru/P3");
createModal("carducci1", "Modale Nina Carducci", "images/modale-images/carducci-1.png", "images/modale-images/carducci-2.jpg", "HTML/CSS/JavaScript/Bootstrap<br>LightHouse/Purgecss/Gimp", "Projet réalisé dans le cadre de ma formation OpenClassrooms de développeur Full-stack.<br>Optimisation d'un site web préexistant, en therme de SEO, GreenCode, et Performance.","https://github.com/JonathBru/nina-carducciP5");
createModal("kasa1", "Front-end du site Kasa avec React", "images/modale-images/kasa-1.png", "images/modale-images/kasa-2.png", "React/SCSS/HTML", "Projet de la formation OpenClassrooms.<br>Réalisation d'un site de location d'hebergement sous React.<br>L'arborescence sous forme de composants React à été utilisé pour rendre le code modulable.","https://github.com/JonathBru/P6_OpenClassRooms");


let isModalOpen = false;

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    modal.classList.remove("modal-close");
    modal.classList.add("modal-open");

    isModalOpen = true;
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.classList.remove("modal-open");
    modal.classList.add("modal-close");


    isModalOpen = false;
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal-target");
        openModal(modalId);
    });
});

function closeAnywhereModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                const modalId = modal.id;
                closeModal(modalId);
            }
        });
    });
}

closeAnywhereModal();

