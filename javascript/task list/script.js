 function addTask() {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim();
      if (taskText !== '') {
        // Create list item
        const li = document.createElement('li');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
          if (this.checked) {
            span.classList.add('completed');
          } else {
            span.classList.remove('completed');
          }
        });

        // Create text span
        const span = document.createElement('span');
        span.textContent = taskText;
        span.style.marginLeft = '8px';

        // Append checkbox and text to list item
        li.appendChild(checkbox);
        li.appendChild(span);

        // Add list item to task list
        document.getElementById('taskList').appendChild(li);
        input.value = '';
      }
    }

    function removeTasks() {
      document.getElementById('taskList').innerHTML = '';
    }