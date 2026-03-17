// ===== NAVEGACIÓN =====
function irPagina(pagina) {
  window.location.href = pagina;
}

// ===== SIDEBAR TOGGLE =====
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("collapsed");
}

// ===== ACTIVE STATE SIDEBAR =====
function setActive(li) {
  document.querySelectorAll(".sidebar li").forEach(el => el.classList.remove("active"));
  li.classList.add("active");
}

// ===== NOTIFICACIONES =====
function toggleNotif() {
  document.getElementById("notifPanel").classList.toggle("show");
}
document.addEventListener("click", function (e) {
  const panel = document.getElementById("notifPanel");
  if (!e.target.closest(".notif-btn") && !e.target.closest(".notif-panel")) {
    panel.classList.remove("show");
  }
});

// ===== FECHA ACTUAL =====
function mostrarFecha() {
  const ahora = new Date();
  const opciones = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("fecha-actual").textContent =
    ahora.toLocaleDateString("es-MX", opciones);
}
mostrarFecha();

// ===== ANIMACIÓN DE CONTADORES =====
function animarContador(id, destino, prefijo = "", sufijo = "") {
  const el = document.getElementById(id);
  let inicio = 0;
  const duracion = 1200;
  const pasos = 60;
  const incremento = destino / pasos;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    inicio = Math.min(inicio + incremento, destino);
    if (destino >= 1000) {
      el.textContent = prefijo + Math.floor(inicio).toLocaleString("es-MX") + sufijo;
    } else {
      el.textContent = prefijo + Math.floor(inicio) + sufijo;
    }
    if (step >= pasos) clearInterval(timer);
  }, duracion / pasos);
}

animarContador("cnt-productos", 248);
animarContador("cnt-ventas", 37);
animarContador("cnt-ingresos", 15840, "$");
animarContador("cnt-usuarios", 12);

// ===== GRÁFICA DE BARRAS =====
function crearBarras() {
  const datos = [65, 80, 55, 90, 72, 40, 30];
  const max = Math.max(...datos);
  const chart = document.getElementById("barChart");
  chart.innerHTML = "";

  datos.forEach((val, i) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.dataset.val = val;
    bar.style.height = "0px";
    chart.appendChild(bar);

    setTimeout(() => {
      bar.style.height = ((val / max) * 85) + "px";
    }, 100 + i * 80);
  });
}
crearBarras();

// ===== BUSCAR MÓDULOS =====
function buscar(valor) {
  const texto = valor.toLowerCase().trim();
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const nombre = card.querySelector("h3").textContent.toLowerCase();
    if (texto === "" || nombre.includes(texto)) {
      card.classList.remove("oculta");
    } else {
      card.classList.add("oculta");
    }
  });
}

// ===== KEYBOARD NAVIGATION PARA CARDS =====
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("keypress", (e) => {
    if (e.key === "Enter") card.click();
  });
});