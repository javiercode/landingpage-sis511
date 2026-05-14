document.addEventListener("DOMContentLoaded", () => {

    console.log("Landing Page ISI-511 cargada correctamente");

    const cards = document.querySelectorAll(".tema-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            alert(
                "Tema seleccionado:\n\n" +
                card.querySelector("h3").innerText
            );

        });

    });

});