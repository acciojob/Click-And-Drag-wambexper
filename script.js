// Your code here.

    const itemsContainer = document.querySelector(".items");
    let isDragging = false;
    let startPositionX;
    let scrollLeft;

    itemsContainer.addEventListener("mousedown", (e) => {
      isDragging = true;
      startPositionX = e.pageX - itemsContainer.offsetLeft;
      scrollLeft = itemsContainer.scrollLeft;
      itemsContainer.classList.add("active");
    });

    itemsContainer.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - itemsContainer.offsetLeft;
      const walk = (x - startPositionX) * 2; // Adjust drag speed here
      itemsContainer.scrollLeft = scrollLeft - walk;
    });

    itemsContainer.addEventListener("mouseup", () => {
      isDragging = false;
      itemsContainer.classList.remove("active");
    });

    itemsContainer.addEventListener("mouseleave", () => {
      isDragging = false;
      itemsContainer.classList.remove("active");
    });
  