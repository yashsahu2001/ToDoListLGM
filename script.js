// Select the elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Ignore empty tasks

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input field

    // Add event listener to the delete button
    const deleteButton = li.querySelector('.deleteButton');
    deleteButton.addEventListener('click', deleteTask);
}

// Function to delete a task
function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
}

// Add event listener to the Add button
addButton.addEventListener('click', addTask);

// Listen for "Enter" key press in the input field
taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
