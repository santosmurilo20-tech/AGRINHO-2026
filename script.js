// MENU MOBILE

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// DARK MODE

const themeToggle = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark"){
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        themeToggle.textContent = "☀️";
    }else{
        localStorage.setItem("theme","light");
        themeToggle.textContent = "🌙";
    }
});


// MOCK DATABASE

const noticias = [
{
    categoria:"Biodiversidade",
    titulo:"O que é biodiversidade?",
    imagem:"https://images.unsplash.com/photo-1473773508845-188df298d2d1",
    resumo:"A biodiversidade representa toda a variedade de espécies e ecossistemas existentes no planeta."
},
{
    categoria:"Meio Ambiente",
    titulo:"Brasil possui uma das maiores biodiversidades do mundo",
    imagem:"https://images.unsplash.com/photo-1511497584788-876760111969",
    resumo:"O país abriga milhares de espécies animais e vegetais distribuídas em diferentes biomas."
},
{
    categoria:"Sustentabilidade",
    titulo:"Por que a biodiversidade é importante?",
    imagem:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    resumo:"Ecossistemas equilibrados fornecem água limpa, alimentos, medicamentos e estabilidade climática."
},
{
    categoria:"Conservação",
    titulo:"Desmatamento ameaça espécies nativas",
    imagem:"https://images.unsplash.com/photo-1448375240586-882707db888b",
    resumo:"A destruição de habitats naturais está entre os principais fatores da perda de biodiversidade."
},
{
    categoria:"Ecologia",
    titulo:"Boas práticas para preservar a biodiversidade",
    imagem:"https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    resumo:"Reflorestamento, combate à poluição e agricultura sustentável ajudam na preservação ambiental."
},
{
    categoria:"Pesquisa",
    titulo:"Conservação garante serviços ecossistêmicos",
    imagem:"https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    resumo:"Áreas protegidas contribuem para a manutenção dos recursos naturais essenciais à vida."
}
];


// RENDERIZAÇÃO

const feed = document.getElementById("news-feed");

noticias.forEach(noticia => {

    const card = document.createElement("article");

    card.classList.add("news-card");

    card.innerHTML = `
        <img src="${noticia.imagem}" alt="${noticia.titulo}">
        <div class="news-content">
            <span class="news-category">${noticia.categoria}</span>
            <h3>${noticia.titulo}</h3>
            <p>${noticia.resumo}</p>
        </div>
    `;

    feed.appendChild(card);

});