const codigoInput = document.getElementById("codigo");
const nombreInput = document.getElementById("nombre");
const cantidadInput = document.getElementById("cantidad");
const tabla = document.querySelector("#tablaVentas tbody");

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarProducto();
    }

    if (event.key === "Escape") {
        cancelar();
    }
});

function agregarProducto() {

    let codigo = codigoInput.value.trim();
    let nombre = nombreInput.value.trim();
    let cantidad = parseInt(cantidadInput.value);

    if (!codigo || !nombre || cantidad <= 0) {
        alert("Completa todos los campos");
        return;
    }

    let filas = tabla.querySelectorAll("tr");
    let productoEncontrado = false;

    filas.forEach(fila => {
        let codigoTabla = fila.cells[0].textContent;

        if (codigoTabla === codigo) {
            let cantidadActual = parseInt(fila.cells[2].textContent);
            fila.cells[2].textContent = cantidadActual + cantidad; // ✅ ACTUALIZA MISMA FILA
            productoEncontrado = true;
        }
    });

    if (!productoEncontrado) {
        let nuevaFila = tabla.insertRow();
        nuevaFila.insertCell(0).textContent = codigo;
        nuevaFila.insertCell(1).textContent = nombre;
        nuevaFila.insertCell(2).textContent = cantidad;
    }

    limpiarCampos();
}

function cancelar() {
    tabla.innerHTML = "";
    limpiarCampos();
}

function limpiarCampos() {
    codigoInput.value = "";
    nombreInput.value = "";
    cantidadInput.value = 1;
    codigoInput.focus();
}