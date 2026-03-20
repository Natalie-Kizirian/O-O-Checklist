const allToDoItems = document.querySelectorAll(".todo-item");
const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
allToDoItems.forEach((task, index) => {
  const checkBtn = task.querySelector(".check-btn");
  const noteBtn = task.querySelector(".note-btn");
  const input = task.querySelector(".note-input");
  const finalSpan = task.querySelector(".note-final");
  const errorBtn = task.querySelector(".error-btn");

  const taskKey = `task_${index}`;

  const saveState = () => {
    const state = {
      error: errorBtn.classList.contains("error-checked"),
      check: checkBtn.classList.contains("checked"),
      note: input.value.trim(),
    };
    localStorage.setItem(taskKey, JSON.stringify(state));
  };
  const saved = JSON.parse(localStorage.getItem(taskKey));

  if (saved) {
    errorBtn.classList.toggle("error-checked", saved.error);
    checkBtn.classList.toggle("checked", saved.check);
    if (saved.note) {
      input.value = saved.note;
      finalSpan.innerText = `(${saved.note})`;
      noteBtn.textContent = "Delete";
    }
  }

  noteBtn.addEventListener("click", () => {
    if (noteBtn.innerText === "Delete") {
      input.value = "";
      finalSpan.innerText = "";
      noteBtn.innerText = "Note";
      saveState();
    } else {
      noteBtn.style.display = "none";
      input.style.display = "inline";
      input.focus();
    }
  });

  input.addEventListener("blur", () => {
    input.style.display = "none";
    if (input.value.trim() !== "") {
      finalSpan.innerText = `(${input.value})`;
      noteBtn.innerText = "Delete";
      noteBtn.style.display = "inline";
    } else {
      noteBtn.innerText = "Note";
      noteBtn.style.display = "inline";
    }
    saveState();
  });

  // Text edit
  finalSpan.addEventListener("click", () => {
    finalSpan.textContent = "";
    input.style.display = "inline";
    input.focus();
  });

  //error Btn
  errorBtn.addEventListener("click", () => {
    errorBtn.classList.toggle("error-checked");
    checkBtn.classList.remove("checked");
    saveState();
  });

  //Checkbox
  checkBtn.addEventListener("click", () => {
    checkBtn.classList.toggle("checked");
    errorBtn.classList.remove("error-checked");
    saveState();
  });
});

