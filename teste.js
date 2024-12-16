function verGit() {
    window.open("https://github.com/yodinhabanana", "_blank"); 
}

function verInsta() {
    window.open("https://www.instagram.com/marplucas/", "_blank");
}

function sobreLinguagens(linguagem) {
    switch (linguagem) {
        case "C++":
            document.getElementById("resultado").innerHTML = `<h2>Possuo conhecimentos em ${linguagem} na parte de desenvolvimento de softwares e lógica de programação básica`;
            break;
        case "JavaScript":
            document.getElementById("resultado").innerHTML = `<h2>Possuo conhecimentos básicos em ${linguagem}</h2>`;
            break;
        case "HTML":
            document.getElementById("resultado").innerHTML = `<h2>Utilizo ${linguagem} para desenvolvimento WEB. </h2>`;
            break;
    }
}