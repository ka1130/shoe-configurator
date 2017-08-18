(function() {
    document.addEventListener("DOMContentLoaded", function(event) {

        const shoeImg = document.getElementById("shoe-img").children[0];
        const radioColor = document.getElementsByName("color");

        const toeImg = document.getElementById("toe-img").children[0];
        const radioToe = document.getElementsByName("toe");


        function changeColor(event) {
            event.preventDefault();
            shoeImg.src = "img/" + this.dataset.img;
        }

        function changeToe(event) {
            event.preventDefault();
            toeImg.src = "img/" + this.dataset.img;
        }

        for (let i = 0; i < radioColor.length; i++) {
            radioColor[i].addEventListener("change", changeColor, false);
        }

        for (let i = 0; i < radioToe.length; i++) {
            radioToe[i].addEventListener("change", changeToe, false);
        }

    });
})();