const formulario = document.getElementById('formulario-auto');
const listaAutos = document.getElementById('autos-lista');
let autos = [];

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = document.getElementById('anio').value;
    const precio = document.getElementById('precio').value;

    const nuevoAuto = {
        marca,
        modelo,
        anio,
        precio
    };

    autos.push(nuevoAuto);
    mostrarAutos();
    formulario.reset();
});

function mostrarAutos() {
    listaAutos.innerHTML = '';

    autos.forEach(auto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${auto.marca} ${auto.modelo}</h3>
            <p>Año: ${auto.anio}</p>
            <p>Precio: $${auto.precio}</p>
        `;
        listaAutos.appendChild(card);
    });
}
