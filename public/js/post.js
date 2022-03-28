const deletePostBtn = document.querySelectorAll('.delete-post-btn');

// CREATE a post
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
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

// DELETE a post
async function deleteFormHandler(e) {
  e.preventDefault();

  // const id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];

  const id = e.currentTarget.dataset.post;

  const response = await fetch(`/api/posts/${id}`, {
    method: 'delete',
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

if (deletePostBtn) {
  for (let i = 0; i < deletePostBtn.length; i++) {
    deletePostBtn[i].addEventListener('click', deleteFormHandler);
  }
}

document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);
