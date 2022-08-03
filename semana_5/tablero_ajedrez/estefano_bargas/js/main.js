window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".board");
   
    for(let i = 0; i <= 63; i++) {
        const cell = document.createElement("div");
        const index = Math.floor(i + i/8); // numero de celda + numero de fila

        cell.classList.add(isEven(index) ? "white" : "black");
        container.append(cell);
    }
});

function isEven(n) {
    return n % 2 === 0;
}

/* 
    Se deben colorear las celdas intercaladamente, esto se hace
    dependiendo si son celdas pares o impares. Ademas por cada fila
    se debe colorear al revés de la fila previa, esto se toma en cuenta
    sumando una unidad cada vez que se cambia de fila.
*/