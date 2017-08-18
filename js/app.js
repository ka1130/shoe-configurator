(function() {
    document.addEventListener("DOMContentLoaded", function(event) {

        const shoeImg = document.getElementById("shoe-img-container").children[0];
        const toeImg = document.getElementById("shoe-img-container").children[1];
        const soleImg = document.getElementById("shoe-img-container").children[2];

        const radioColor = document.getElementsByName("color");
        const radioToe = document.getElementsByName("toe");
        const radioSole = document.getElementsByName("sole");


        function changeColor(event) {
            event.preventDefault();
            shoeImg.src = "img/" + this.dataset.img;
        }

        function changeToe(event) {
            event.preventDefault();
            toeImg.src = "img/" + this.dataset.img;
        }

        function changeSole(event) {
            event.preventDefault();
            soleImg.src = "img/" + this.dataset.img;
        }

        for (let i = 0; i < radioColor.length; i++) {
            radioColor[i].addEventListener("change", changeColor, false);
        }

        for (let i = 0; i < radioToe.length; i++) {
            radioToe[i].addEventListener("change", changeToe, false);
        }

        for (let i = 0; i < radioSole.length; i++) {
            radioSole[i].addEventListener("change", changeSole, false);
        }

    });
})();