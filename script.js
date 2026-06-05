// Menu Mobile
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => navMenu.classList.toggle("active"));

// Dark Mode
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

// Mock Data
const noticias = [ /* mesmo array que você enviou, mantido */ 
  { categoria: "Biodiversidade", titulo: "O que é biodiversidade?", imagem: "https://images.unsplash.com/photo-1473773508845-188df298d2d1", resumo: "A biodiversidade representa toda a variedade de espécies e ecossistemas existentes no planeta.", texto: "Lorem ipsum dolor sit amet..." },
  { categoria: "Meio Ambiente", titulo: "Brasil possui uma das maiores biodiversidades do mundo", imagem: "https://images.unsplash.com/photo-1511497584788-876760111969", resumo: "O país abriga milhares de espécies animais e vegetais distribuídas em diferentes biomas." },
  { categoria: "Sustentabilidade", titulo: "Por que a biodiversidade é importante?", imagem: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", resumo: "Ecossistemas equilibrados fornecem água limpa, alimentos, medicamentos e estabilidade climática." },
  { categoria: "Conservação", titulo: "Desmatamento ameaça espécies nativas", imagem: "https://images.unsplash.com/photo-1448375240586-882707db888b", resumo: "A destruição de habitats naturais está entre os principais fatores da perda de biodiversidade." },
  { categoria: "Ecologia", titulo: "Boas práticas para preservar a biodiversidade", imagem: "https://images.unsplash.com/photo-1466611653911-95081537e5b7", resumo: "Reflorestamento, combate à poluição e agricultura sustentável ajudam na preservação ambiental." },
  { categoria: "Pesquisa", titulo: "Conservação garante serviços ecossistêmicos", imagem: "https://images.unsplash.com/photo-1426604966848-d7adac402bff", resumo: "Áreas protegidas contribuem para a manutenção dos recursos naturais essenciais à vida." }
];

// Render Cards
function createCard(noticia) {
  const card = document.createElement("article");
  card.className = "news-card";
  card.innerHTML = `
    <img src="${noticia.imagem}" alt="${noticia.titulo}">
    <div class="news-content">
      <span class="category">${noticia.categoria}</span>
      <h3>${noticia.titulo}</h3>
      <p>${noticia.resumo}</p>
      <div class="meta">
        <span>8 min</span>
        <span>12 Jun 2026</span>
      </div>
    </div>
  `;
  card.addEventListener("click", () => openModal(noticia));
  return card;
}

function renderFeed(containerId, lista) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  lista.forEach(item => container.appendChild(createCard(item)));
}

// Modal
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

function openModal(noticia) {
  document.getElementById("modal-image").src = noticia.imagem;
  document.getElementById("modal-category").textContent = noticia.categoria;
  document.getElementById("modal-title").textContent = noticia.titulo;
  document.getElementById("modal-text").textContent = noticia.resumo + " " + (noticia.texto || "Esta matéria completa está em desenvolvimento. Acompanhe o EcoNews para mais conteúdo de impacto.");
  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Filtros
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    const filtered = category === "all" ? noticias : noticias.filter(n => n.categoria === category);
    renderFeed("news-feed", filtered);
  });
});

// Search
document.getElementById("search").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = noticias.filter(n => 
    n.titulo.toLowerCase().includes(term) || 
    n.categoria.toLowerCase().includes(term)
  );
  renderFeed("news-feed", filtered);
});

// Trending (mostra 3 primeiras)
renderFeed("trending-feed", noticias.slice(0, 3));
renderFeed("news-feed", noticias);

// Back to Top
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 600 ? "flex" : "none";
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Newsletter fake
function subscribe() {
  const email = document.getElementById("email").value;
  if (email) alert("✅ Obrigado! Você agora recebe as melhores notícias ambientais.");
}