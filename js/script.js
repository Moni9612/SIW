document.addEventListener("DOMContentLoaded", function () {

    const speakerImages = document.querySelectorAll(".speaker-image");

    speakerImages.forEach(function (image) {

        image.addEventListener("click", function () {

            const card = image.closest(".speaker-card");

            document.querySelectorAll(".speaker-card").forEach(function (otherCard) {
                if (otherCard !== card) {
                    otherCard.classList.remove("active");
                }
            });

            card.classList.toggle("active");

        });

        image.addEventListener("keydown", function (event) {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                image.click();
            }

        });

    });

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".speaker-card")) {

            document.querySelectorAll(".speaker-card").forEach(function (card) {
                card.classList.remove("active");
            });

            if (document.activeElement.classList.contains("speaker-image")) {
                document.activeElement.blur();
            }

        }

    });

});
