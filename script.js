  const items = document.querySelectorAll('.item');
    let dragItem = null;

    // Add dragstart event listener to each cube
    items.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        dragItem = e.target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
      });
    });

    // Add dragover event listener to the items container
    document.querySelector('.items').addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    // Add drop event listener to the items container
    document.querySelector('.items').addEventListener('drop', (e) => {
      e.preventDefault();
      if (dragItem) {
        dragItem.innerHTML = e.dataTransfer.getData('text/html');
        dragItem = null;
      }
    });
