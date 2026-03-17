function irPagina(pagina) {
    window.location.href = pagina;
}

function mostrarFormulario() {
    const form = document.getElementById("formulario");
    form.classList.toggle("oculto");
}

function agregarProducto() {

    const nombre = document.getElementById("nombre").value;
    const unidad = document.getElementById("unidad").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;

    if (nombre === "" || unidad === "" || precio === "" || cantidad === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    const tabla = document.getElementById("tablaProductos").getElementsByTagName("tbody")[0];

    const fila = tabla.insertRow();

    fila.insertCell(0).innerText = nombre;
    fila.insertCell(1).innerText = unidad;
    fila.insertCell(2).innerText = "$" + precio;
    fila.insertCell(3).innerText = cantidad;

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("unidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";

    alert("Producto agregado correctamente");
}