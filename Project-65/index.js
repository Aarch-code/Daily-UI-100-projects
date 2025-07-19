const noteInput = document.getElementById('noteInput');
  const notesContainer = document.getElementById('notesContainer');

  // Load notes from localStorage
  function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
      const noteDiv = document.createElement('div');
      noteDiv.className = 'note';
      noteDiv.innerHTML = `<p>${note}</p>
        <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>`;
      notesContainer.appendChild(noteDiv);
    });
  }

  // Add a new note
  function addNote() {
    const noteText = noteInput.value.trim();
    if (!noteText) return;

    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    loadNotes();
  }

  // Delete a note
  function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
  }

  // Initialize
  loadNotes();