document.getElementById('new-task-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const tasks = document.getElementById('tasks');
    const title = document.getElementById('new-task-title').value;
    const description = document.getElementById('new-task-description').value;

    if (!title) {
        alert('Please enter a title for the task.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.innerHTML = `<span class="task-title">${title}</span><span class="task-description">${description}</span><button class="delete-button">Delete</button>`;

    tasks.appendChild(newTask);

    document.getElementById('new-task-title').value = '';
    document.getElementById('new-task-description').value = '';

    const deleteButton = newTask.querySelector('.delete-button');

    deleteButton.addEventListener('click', function () {
        tasks.removeChild(newTask);
    });
});
