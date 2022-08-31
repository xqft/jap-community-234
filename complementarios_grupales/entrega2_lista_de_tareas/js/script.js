let arr = [];

function HTMLContent(titulo, descripcion) {
  return `<div class="col">
        <div class="card text-white bg-dark mb-3">
            <div class="card-header m-0">
                <div class="d-flex flex-row-reverse bd-highlight">
                    <div class="p-2 bd-highlight"> <button class="btn btn-outline-danger" type="button"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path
                                    d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z">
                                </path>
                                <path fill-rule="evenodd"
                                    d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z">
                                </path>
                            </svg></button></div>
                    <div class="p-2 bd-highlight"> <button class="btn btn-outline-success" type="button"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path
                                    d="M17.28 9.28a.75.75 0 00-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l6.5-6.5z">
                                </path>
                                <path fill-rule="evenodd"
                                    d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z">
                                </path>
                            </svg></button></div>
                    <div class="p-2 bd-highlight"> <button class="btn btn-outline-warning" type="button"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path
                                    d="M13 17.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-8.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z">
                                </path>
                                <path fill-rule="evenodd"
                                    d="M9.836 3.244c.963-1.665 3.365-1.665 4.328 0l8.967 15.504c.963 1.667-.24 3.752-2.165 3.752H3.034c-1.926 0-3.128-2.085-2.165-3.752L9.836 3.244zm3.03.751a1 1 0 00-1.732 0L2.168 19.499A1 1 0 003.034 21h17.932a1 1 0 00.866-1.5L12.866 3.994z">
                                </path>
                            </svg></button></div>
                    <div class="p-2 bd-highlight"> <button class="btn btn-outline-primary" type="button"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill-rule="evenodd"
                                    d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z">
                                </path>
                            </svg> </button></div>
                </div>
            </div>
            <div class="card-body pt-0">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${descripcion}</p>
            </div>
        </div>
        </div> `;
}

/* const btnImportant = document.querySelector("#btnImportant"); */

/* ------------------------------------ */

document.addEventListener("DOMContentLoaded", function () {
  const containerJs = document.querySelector("#containerJs");
  const btnAdd = document.querySelector("#btnAdd");
  const inptTitle = document.querySelector("#inptTitle");
  const txtDescription = document.querySelector("#txtDescription");
  arr = JSON.parse(localStorage.getItem("tareas"));
  for (const tarea of arr) {
    containerJs.innerHTML += HTMLContent(tarea.titulo, tarea.descripcion);
  }

  btnAdd.addEventListener("click", function () {
    if (inptTitle.value != "") {
      containerJs.innerHTML += HTMLContent(
        inptTitle.value,
        txtDescription.value
      );
      const objTarea = {};
      objTarea.titulo = inptTitle.value;
      objTarea.descripcion = txtDescription.value;
      arr.push(objTarea);
      localStorage.setItem("tareas", JSON.stringify(arr));
      inptTitle.value = "";
      txtDescription.value = "";
    } else {
      /* inptTitle.classList.add("was-validated"); */
      alert("Ingrese un título");
    }
  });
});
