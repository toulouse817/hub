// --- 0. TEMA ---
function toggleTheme() { document.body.classList.toggle('dark-mode'); }

// --- 1. NAVEGACIÓN ---
function switchTab(sectionId, btnElement) {
    document.querySelectorAll('.project-section').forEach(s => s.classList.remove('active-section'));
    document.getElementById(sectionId).classList.add('active-section');
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active-tab'));
    btnElement.classList.add('active-tab');
}

// --- 2. PORTAFOLIO ---
function filterProjects(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'block' : 'none';
    });
}

// --- 3. LANDING TIMER ---
setInterval(() => {
    const now = new Date();
    // Simular cuenta atrás constante para demostración
    const hours = 23 - now.getHours();
    const mins = 59 - now.getMinutes();
    const secs = 59 - now.getSeconds();
    const timerEl = document.getElementById('countdown');
    if (timerEl) {
        timerEl.innerText = 
            `${String(hours).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    }
}, 1000);

// --- 4. TIENDA MODAL ---
let cartCount = 0;
const modal = document.getElementById('cart-modal');
const modalProdName = document.getElementById('modal-product-name');

function openModal(prodName) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    modalProdName.innerText = prodName;
    modal.classList.add('show');
}

function closeModal() {
    modal.classList.remove('show');
}

// Cerrar modal si se hace clic fuera
window.onclick = function(event) {
    if (event.target == modal) closeModal();
}