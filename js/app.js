const photo = document.getElementById("photo");
const counter = document.getElementById("counter");
const memoryText = document.getElementById("memoryText");
const secretBtn = document.getElementById("secretBtn");

if (photo) {

    const photos = [
        "assets/fotos/foto1.jpg",
        "assets/fotos/foto2.jpg",
        "assets/fotos/foto3.jpg",
        "assets/fotos/foto4.jpg",
        "assets/fotos/foto5.jpg",
        "assets/fotos/foto6.jpg",
        "assets/fotos/foto7.jpg",
        "assets/fotos/foto8.jpg",
        "assets/fotos/foto9.jpg",
        "assets/fotos/foto10.jpg",
        "assets/fotos/foto11.jpg",
        "assets/fotos/foto12.jpg"
    ];

    const frases = [
        "Cada momento registrado com você se tornou uma das minhas lembranças favoritas.",
        "Há dias que passam. Há dias que permanecem.",
        "Você está em todos os que permaneceram.",
        "Algumas fotografias guardam imagens. Estas guardam sentimentos.",
        "Entre tantas lembranças da vida, essas sempre me levam até você.",
        "O tempo passou. A vontade de viver tudo outra vez não.",
        "Cada foto conta uma história. Minha favorita continua sendo nós.",
        "Há memórias que envelhecem. As minhas com você apenas ganham valor.",
        "Se felicidade pudesse ser arquivada, ela provavelmente teria essa forma.",
        "Eu poderia esquecer a data, mas nunca esqueceria como me senti naquele dia.",
        "Talvez sejam apenas fotos. Mas para mim são pequenos pedaços da eternidade.",
        "Chegamos ao fim do álbum. Mas ainda existe uma última coisa que eu queria te mostrar."
    ];

    let current = 0;
    let unlocked = false;

    function updateAlbum() {

        photo.classList.remove("fade");

        void photo.offsetWidth;

        photo.classList.add("fade");

        photo.src = photos[current];

        counter.textContent =
            `${String(current + 1).padStart(2, "0")} / 12`;

        memoryText.textContent = frases[current];

        if (current === 11 && !unlocked) {

            unlocked = true;

            secretBtn.style.display = "inline-block";

            secretBtn.classList.add("fade");
        }
    }

    photo.addEventListener("click", () => {

        if (current < photos.length - 1) {

            current++;

            updateAlbum();
        }
    });

    updateAlbum();
}

/* PÁGINA SECRETA */

const secretLines = document.querySelectorAll(".secret-line");

if (secretLines.length > 0) {

    secretLines.forEach((line, index) => {

        setTimeout(() => {

            line.classList.add("show");

        }, 1500 * index);

    });
}

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(!href) return;

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = href;

        }, 500);

    });

});