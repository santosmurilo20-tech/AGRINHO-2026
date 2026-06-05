```javascript
// MENU MOBILE

const hamburger =
document.getElementById("hamburger");

const navMenu =
document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// DARK MODE

const themeToggle =
document.getElementById("theme-toggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkMode =
    document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
    );

    themeToggle.textContent =
    darkMode ? "☀️" : "🌙";

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

// FEED

const feed =
document.getElementById("news-feed");

function renderNoticias(lista){

    feed.innerHTML = "";

    lista.forEach(noticia => {

        const card =
        document.createElement("article");

        card.classList.add("news-card");

        card.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}">

            <div class="news-content">

                <span class="category">
                    ${noticia.categoria}
                </span>

                <h3>
                    ${noticia.titulo}
                </h3>

                <p>
                    ${noticia.resumo}
                </p>

                <span class="read-more">
                    Ler mais →
                </span>

            </div>
        `;

        card.addEventListener("click", () => {

            alert(
                noticia.titulo +
                "\\n\\n" +
                noticia.resumo
            );

        });

        feed.appendChild(card);

    });

}

renderNoticias(noticias);

// PESQUISA

const search =
document.getElementById("search");

search.addEventListener("input", () => {

    const termo =
    search.value.toLowerCase();

    const filtradas =
    noticias.filter(noticia =>

        noticia.titulo
        .toLowerCase()
        .includes(termo)

        ||

        noticia.categoria
        .toLowerCase()
        .includes(termo)
    );

    renderNoticias(filtradas);

});
```
