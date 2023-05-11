// Getting started
const inputField = document.querySelector('.input-field textarea');
const todoLists = document.querySelector('.todoLists');
// const pendingNum = document.querySelector('.pending-num');
// const clearButton = document.querySelector('.clear-button');

// Add task while put value
inputField.addEventListener('keyup', (e) => {
  const inputVal = inputField.value.trim();

  if (e.key === 'Enter' && inputVal.length > 0) {
    const liTag = `        <li class="list">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash"></i>
        </li>`;

    todoLists.insertAdjacentHTML('beforeend', liTag); // inserting litag inside html
    inputField.value = ''; // removing vslu from input field
  }
});
