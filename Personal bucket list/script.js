document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  document.querySelectorAll('.complete-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      const listItem = e.target.parentElement;
      listItem.classList.toggle('completed');
      if (listItem.classList.contains('completed')) {
        e.target.textContent = 'Undo';
      } else {
        e.target.textContent = 'Complete';
      }
    });
  });
  