function mostrarMenu(seccion) {
  const menuComida = document.getElementById('menuComida');
  const menuBebidas = document.getElementById('menuBebidas');

  if (seccion === 'comida') {
    menuComida.style.display = 'block';
    menuBebidas.style.display = 'none';
  } else if (seccion === 'bebidas') {
    menuComida.style.display = 'none';
    menuBebidas.style.display = 'block';
  }
}

// ---------------------------
// Modal de información de platos
// ---------------------------
function mostrarModal(titulo, imagen, descripcion, precio) {
  document.getElementById("modalTitulo").textContent = titulo;
  document.getElementById("modalImagen").src = imagen;
  document.getElementById("modalDescripcion").textContent = descripcion;
  document.getElementById("modalPrecio").textContent = precio;

  document.getElementById("modalPlato").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modalPlato").style.display = "none";
}

// Cerrar modal si se hace clic afuera
window.onclick = function(event) {
  let modal = document.getElementById("modalPlato");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

