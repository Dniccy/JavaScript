    function addTask() {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');

      // Create task container
      const leftDiv = document.createElement('div');
      leftDiv.className = 'task-left';

      // Checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      // Task text span
      let span = document.createElement('span');
      span.textContent = taskText;

      checkbox.addEventListener('change', () => {
        span.classList.toggle('completed', checkbox.checked);
      });

      leftDiv.appendChild(checkbox);
      leftDiv.appendChild(span);
      li.appendChild(leftDiv);

      // Edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'edit-btn';

      editButton.addEventListener('click', () => {
        if (editButton.textContent === 'Edit') {
          const editInput = document.createElement('input');
          editInput.type = 'text';
          editInput.value = span.textContent;
          editInput.style.flex = '1';
          leftDiv.replaceChild(editInput, span);
          editButton.textContent = 'Save';
        } else {
          const newText = leftDiv.querySelector('input[type="text"]').value;
          span = document.createElement('span');
          span.textContent = newText;
          if (checkbox.checked) {
            span.classList.add('completed');
          }
          leftDiv.replaceChild(span, leftDiv.querySelector('input[type="text"]'));
          editButton.textContent = 'Edit';
        }
      });

      // Delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-btn';
      deleteButton.addEventListener('click', () => {
        li.remove();
      });

      // Append buttons
      li.appendChild(editButton);
      li.appendChild(deleteButton);

      // Add task to list
      document.getElementById('taskList').appendChild(li);
      input.value = '';
    }