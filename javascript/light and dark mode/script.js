// script.js

// Toggle between Light Mode and Cyberpunk Theme
const toggleButton = document.getElementById('toggleThemeBtn');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  // Update button text based on current mode
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = "Switch to Light Mode";
  } else {
    toggleButton.textContent = "Switch to Cyberpunk Mode";
  }
});