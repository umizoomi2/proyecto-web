function irPagina(pagina) {
    window.location.href = pagina;
}

// Simulación de datos
document.getElementById("totalProductos").innerText = 15;
document.getElementById("totalVentas").innerText = 32;
document.getElementById("totalCompras").innerText = 18;
document.getElementById("totalUsuarios").innerText = 5;

function generarReporte() {
    const ventas = 32;
    const total = ventas * 250; // simulación
    document.getElementById("resultadoReporte").innerText =
        "Total estimado de ventas: $" + total;
}