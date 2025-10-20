        function showHide() {
            const article = document.getElementById("citation");
            article.classList.toggle("hidden");
        }

        document.addEventListener("DOMContentLoaded", () => {
            const bouton = document.getElementById("button");
            bouton.addEventListener("click", showHide);
        });