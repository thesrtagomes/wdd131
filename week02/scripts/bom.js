const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function addChapter() {
  if (input.value.trim() !== "") { //Se o input for diferente de nada
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    input.value = "";
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.focus(); //Para a cursor retornar a área de input automaticamente

    function deleteChapter() {
      list.removeChild(li);
      input.focus();
    }
    deleteButton.addEventListener("click", deleteChapter);
  }
}

button.addEventListener("click", addChapter);
