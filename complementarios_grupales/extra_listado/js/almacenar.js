document.addEventListener('DOMContentLoaded', () => {
    const btnAgregar    = document.querySelector('#agregar');
    const lista         = document.querySelector('#contenedor');
    const titulo        = document.querySelector('#titulo');
    const grupoTitulo   = document.querySelector('.needs-validation');
    const descripcion   = document.querySelector('#descripcion');

    let listado = window.localStorage.getItem('lista');
    listado = JSON.parse(listado)

    if (listado == null)
        listado = []
    else 
        for (const valor of listado)
            lista.innerHTML += `${valor}`;
    
    function agregarItem(titulo, descripcion, lista) {
        const contenido = `<li><h2>${titulo}</h2> <p>${descripcion}</p></li>`;
        lista.innerHTML += contenido;
        listado.push(contenido);
        window.localStorage.setItem('lista', JSON.stringify(listado))
    }
    
    btnAgregar.addEventListener('click', ()=>{
        if (titulo.value != '')
            agregarItem(titulo.value, descripcion.value, lista);
        else
            grupoTitulo.classList.add("was-validated");
    });
});