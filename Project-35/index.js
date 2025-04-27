function addComment() {
    const commentText = document.getElementById('commentInput').value;
    if (commentText.trim() !== "") {
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
      commentDiv.textContent = commentText;
      document.getElementById('comments').appendChild(commentDiv);
      document.getElementById('commentInput').value = "";
    }
  }