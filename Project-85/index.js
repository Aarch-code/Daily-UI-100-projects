const totalPages = 10;
  let currentPage = 1;

  const pagination = document.getElementById("pagination");

  function renderPagination() {
    pagination.innerHTML = "";

    function createPageItem(page, text = page, isActive = false, isDisabled = false, isEllipsis = false) {
      const li = document.createElement("li");
      li.textContent = text;
      if (isActive) li.classList.add("active");
      if (isDisabled) li.classList.add("disabled");
      if (isEllipsis) li.classList.add("ellipsis");
      if (!isDisabled && !isEllipsis) {
        li.addEventListener("click", () => {
          currentPage = page;
          renderPagination();
        });
      }
      pagination.appendChild(li);
    }

    // Previous
    createPageItem(currentPage - 1, "Prev", false, currentPage === 1);

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        createPageItem(i, i, i === currentPage);
      }
    } else {
      createPageItem(1, 1, currentPage === 1);

      if (currentPage > 4) {
        createPageItem(null, "...", false, true, true);
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        createPageItem(i, i, i === currentPage);
      }

      if (currentPage < totalPages - 3) {
        createPageItem(null, "...", false, true, true);
      }

      createPageItem(totalPages, totalPages, currentPage === totalPages);
    }

    // Next
    createPageItem(currentPage + 1, "Next", false, currentPage === totalPages);
  }

  renderPagination();