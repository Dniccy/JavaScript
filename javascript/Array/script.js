let array = [];

    function updateDisplay() {
      const display = document.getElementById('arrayDisplay');
      display.textContent = array.join(', ');
    }

    function addElement() {
      const input = document.getElementById('arrayInput');
      if (input.value.trim()) {
        array.push(input.value.trim());
        input.value = '';
        updateDisplay();
      }
    }

    function removeElement() {
      array.pop();
      updateDisplay();
    }

    function reverseArray() {
      array.reverse();
      updateDisplay();
    }

    function clearArray() {
      array = [];
      updateDisplay();
    }