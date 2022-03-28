async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value.trim();

    const post_text = document
      .querySelector('textarea[name="post_text"]')
      .value.trim();

    if (post_text) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          post_text,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }

  document
    .querySelector('.post-form')
    .addEventListener('submit', postFormHandler);
