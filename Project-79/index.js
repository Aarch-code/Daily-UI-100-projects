function toggle(checkbox) {
      const li = checkbox.parentElement;
      li.classList.toggle('checked', checkbox.checked);
    }