document.addEventListener('DOMContentLoaded', () => {
    const input         = document.querySelector('#item');
    const btnAgregar    = document.querySelector('#agregar');
    const btnTitulo     = document.querySelector('#titulo');
    const btnSeparador  = document.querySelector('#separador');
    const btnLimpiar    = document.querySelector('#limpiar');
    const lista         = document.querySelector('#contenedor');

    let listado = window.localStorage.getItem('lista');
    listado = JSON.parse(listado)

    if (listado == null)
        listado = []
    else 
        for (const valor of listado)
            lista.innerHTML += `<li> ${valor}</li>`;
    
    function agregarItem(valor, lista) {
        lista.innerHTML += `<li> ${valor}</li>`
        listado.push(valor);
        window.localStorage.setItem('lista', JSON.stringify(listado))
    }
    
    btnAgregar.addEventListener('click', () => {
        if (input.value != '')
            agregarItem(input.value, lista);
    });
    
    btnLimpiar.addEventListener('click', () => {
        localStorage.removeItem("lista");
        listado = [];
        lista.innerHTML = ""; 
    });

    btnTitulo.addEventListener('click', () => {
        if (input.value != '')
            agregarItem("<h2>" + input.value + "</h2>", lista);
    });

    btnSeparador.addEventListener('click', () => agregarItem("<hr>", lista));
});
