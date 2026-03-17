const allToDoItems = document.querySelectorAll(".todo-item");

allToDoItems.forEach((task) => {
  const checkbox = task.querySelector(".check-btn");
  const noteBtn = task.querySelector(".note-btn");
  const input = task.querySelector(".note-input");
  const finalSpan = task.querySelector(".note-final");
  const errorBtn = task.querySelector(".error-btn");

  noteBtn.addEventListener("click", () => {
    noteBtn.style.display = "none";
    input.style.display = "inline";
    input.focus();
  });

  //Input Button
  input.addEventListener("blur", () => {
    const val = input.value;
    input.style.display = "none";
    if (val !== "") {
      finalSpan.innerText = `(${val})`;
    } else {
      noteBtn.style.display = "inline";
    }
    // saveData();
  });
  // Text edit
  finalSpan.addEventListener("click", () => {
    finalSpan.textContent = "";
    input.style.display = "inline";
    input.focus();
  });

  //X Button
  errorBtn.addEventListener("click", () => {
    errorBtn.classList.toggle("error-checked");
  });
  //Checkbox
  checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("checkbox");
  });
});



// Modal Pop Up
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

//Local Storage

/* function saveData() {
  const data = [];

  allTasks.forEach((item) => {
    const taskData = {
      checked: item.querySelector("input").checked,
      note: item.querySelector(".note-final").innerText,
      isError: item.querySelector(".error-btn").classList.contains("error-checked"),
    };
    data.push(taskData);
  });

  localStorage.setItem("myList", JSON.stringify(data));
}
 */
