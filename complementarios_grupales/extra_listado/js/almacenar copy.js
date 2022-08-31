document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#agregar");
    const container = document.querySelector("#contenedor");
    
    button.addEventListener("click", (e) => {
        const previousValue = localStorage.getItem('input-list');
        localStorage.setItem('input-list', ((previousValue === null) ? "" : previousValue + ",") + input);

        const input = document.querySelector("#item").value;
        container.innerHTML +=
        ` 
          <div class="row border rounded-3 bg-white">
            <div class="container">
              <p class="m-0">${input}</p>
            </div>
          </div>
        `
        
    });
});