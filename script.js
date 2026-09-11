/* =========================================
   SISTEMA DE ABAS
========================================= */

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");


function activateTab(tab) {

    const targetId = tab.dataset.tab;


    // Remove o estado ativo de todas as abas
    tabs.forEach(item => {

        item.classList.remove("active");

        item.setAttribute("aria-selected", "false");

    });


    // Ativa a aba escolhida
    tab.classList.add("active");

    tab.setAttribute("aria-selected", "true");


    // Esconde todos os conteúdos
    contents.forEach(content => {

        content.hidden = true;

        content.classList.remove("active");

    });


    // Exibe o conteúdo correspondente
    const targetContent = document.getElementById(targetId);

    if (targetContent) {

        targetContent.hidden = false;

        targetContent.classList.add("active");

    }

}


/* Clique nas abas */

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        activateTab(tab);

        document.querySelector(".main-content").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   NAVEGAÇÃO POR TECLADO
========================================= */

tabs.forEach((tab, index) => {

    tab.addEventListener("keydown", event => {

        let newIndex = index;


        if (event.key === "ArrowRight") {

            newIndex = (index + 1) % tabs.length;

        }


        if (event.key === "ArrowLeft") {

            newIndex =
                (index - 1 + tabs.length) % tabs.length;

        }


        if (event.key === "Home") {

            newIndex = 0;

        }


        if (event.key === "End") {

            newIndex = tabs.length - 1;

        }


        if (newIndex !== index) {

            event.preventDefault();

            tabs[newIndex].focus();

            activateTab(tabs[newIndex]);

        }

    });

});


/* =========================================
   FAQ
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem =
            question.parentElement;

        const isOpen =
            currentItem.classList.contains("open");


        // Fecha todos os outros
        document.querySelectorAll(".faq-item")
            .forEach(item => {

                item.classList.remove("open");

                const button =
                    item.querySelector(".faq-question");

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });


        // Abre o atual caso estivesse fechado
        if (!isOpen) {

            currentItem.classList.add("open");

            question.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});


/* =========================================
   ACESSIBILIDADE
========================================= */

tabs.forEach(tab => {

    tab.setAttribute("tabindex", "0");

});


/* =========================================
   BOTÃO "EXPLORAR"
========================================= */

const heroButton =
    document.querySelector(".hero-button");


if (heroButton) {

    heroButton.addEventListener("click", event => {

        event.preventDefault();

        document.querySelector("#conteudo")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


/* =========================================
   ANIMAÇÃO INICIAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});

