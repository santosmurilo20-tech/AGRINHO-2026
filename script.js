// ==================== MENU MOBILE ====================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ==================== DARK MODE ====================
const themeToggle = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// ==================== MOCK DATA (com conteúdo completo) ====================
const noticias = [
  {
    id: 1,
    categoria: "Biodiversidade",
    titulo: "Biodiversidade: o patrimônio natural que sustenta a vida",
    imagem: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    resumo: "Descubra como a biodiversidade influencia diretamente a qualidade de vida, economia e equilíbrio dos ecossistemas.",
    conteudo: `
      <p>A biodiversidade é a variedade de vida na Terra, incluindo todas as espécies de plantas, animais, fungos e microrganismos, além dos ecossistemas que eles formam.</p>
      <p>Segundo a ONU, estamos perdendo espécies a uma taxa 1.000 vezes maior que a natural. A conservação da biodiversidade não é apenas uma questão ambiental — é essencial para a segurança alimentar, medicamentos e regulação climática.</p>
      <h3>Por que isso importa?</h3>
      <p>Florestas tropicais, recifes de coral e manguezais são verdadeiros "pulmões" e "farmácias" do planeta. Sem eles, a humanidade enfrenta riscos graves de colapso ecológico.</p>
    `
  },
  {
    id: 2,
    categoria: "Meio Ambiente",
    titulo: "Brasil possui uma das maiores biodiversidades do mundo",
    imagem: "https://images.unsplash.com/photo-1511497584788-876760111969",
    resumo: "O país abriga milhares de espécies animais e vegetais distribuídas em diferentes biomas.",
    conteudo: `
      <p>O Brasil é considerado um dos 17 países megadiversos do mundo. A Amazônia, o Cerrado, a Mata Atlântica e o Pantanal guardam uma riqueza incalculável de vida.</p>
      <p>Apenas na Amazônia, estima-se que existam mais de 3 milhões de espécies de insetos e cerca de 2.500 espécies de árvores.</p>
    `
  },
  {
    id: 3,
    categoria: "Sustentabilidade",
    titulo: "Por que a biodiversidade é importante para a humanidade?",
    imagem: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    resumo: "Ecossistemas equilibrados fornecem serviços essenciais para a sobrevivência humana.",
    conteudo: `
      <p>Polinização, purificação de água, controle de pragas e estabilização climática são apenas alguns dos serviços ecossistêmicos que dependem da biodiversidade.</p>
      <p>Estima-se que 75% das culturas alimentares dependem de polinizadores.</p>
    `
  },
  {
    id: 4,
    categoria: "Conservação",
    titulo: "Desmatamento ameaça espécies nativas no Brasil",
    imagem: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    resumo: "A destruição de habitats é o principal fator da perda acelerada de biodiversidade.",
    conteudo: `
      <p>Nos últimos anos, o desmatamento na Amazônia e Cerrado tem crescido de forma preocupante. Muitas espécies estão à beira da extinção.</p>
    `
  },
  {
    id: 5,
    categoria: "Ecologia",
    titulo: "Boas práticas para preservar a biodiversidade",
    imagem: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    resumo: "Reflorestamento, consumo consciente e políticas públicas são fundamentais.",
    conteudo: `
      <p>Atitudes individuais como reduzir o consumo de carne, reciclar e apoiar marcas sustentáveis fazem grande diferença.</p>
    `
  },
  {
    id: 6,
    categoria: "Pesquisa",
    titulo: "Conservação garante serviços ecossistêmicos essenciais",
    imagem: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    resumo: "Áreas protegidas são vitais para manter o equilíbrio ambiental.",
    conteudo: `
      <p>Parques nacionais e reservas extrativistas não só protegem espécies como geram empregos e turismo sustentável.</p>
    `
  }
];

// ==================== RENDERIZAÇÃO ====================
const feed = document.getElementById("news-feed");
const modal = document.getElementById("article-modal");
const modalImage = document.getElementById("modal-image");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");

function renderNoticias(lista) {
  feed.innerHTML = "";
  
  lista.forEach(noticia => {
    const card = document.createElement("article");
    card.classList.add("news-card");
    
    card.innerHTML = `
      <img src="${noticia.imagem}" alt="${noticia.titulo}">
      <div class="news-content">
        <span class="category">${noticia.categoria}</span>
        <h3>${noticia.titulo}</h3>
        <p>${noticia.resumo}</p>
        <span class="read-more">Ler matéria completa →</span>
      </div>
    `;

    card.addEventListener("click", () => abrirModal(noticia));
    feed.appendChild(card);
  });
}

// ==================== MODAL ====================
function abrirModal(noticia) {
  modalImage.src = noticia.imagem;
  modalCategory.textContent = noticia.categoria;
  modalTitle.textContent = noticia.titulo;
  modalContent.innerHTML = noticia.conteudo;
  modal.style.display = "flex";
}

// Fechar modal
document.querySelector(".close-modal").addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// ==================== BOTÃO HERO ====================
document.getElementById("hero-read").addEventListener("click", () => {
  abrirModal(noticias[0]);
});

// ==================== BUSCA APRIMORADA ====================
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const termo = searchInput.value.toLowerCase().trim();
  
  const filtradas = noticias.filter(noticia => 
    noticia.titulo.toLowerCase().includes(termo) ||
    noticia.categoria.toLowerCase().includes(termo) ||
    noticia.resumo.toLowerCase().includes(termo) ||
    (noticia.conteudo && noticia.conteudo.toLowerCase().includes(termo))
  );
  
  renderNoticias(filtradas);
});

// ==================== FILTROS POR CATEGORIA ====================
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    
    const filtradas = category === "all" 
      ? noticias 
      : noticias.filter(n => n.categoria === category);
    
    renderNoticias(filtradas);
  });
});

// Inicialização
renderNoticias(noticias);