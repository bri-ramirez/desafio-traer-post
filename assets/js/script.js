// renderizamos los posts en el DOM
const renderPosts = (posts) => {
  const div = document.getElementById('post-data');
  // limpiamos el div antes de agregar los posts
  div.innerHTML = '';

  // creamos un elemento ul
  const ul = document.createElement('ul');

  // recorremos los posts y los agregamos a la lista
  posts.forEach((post) => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${post.title}</b> <p>${post.body}</p>`;
    // agregamos el li a la lista
    ul.appendChild(li);
  });

  // agregamos la lista al div
  div.appendChild(ul);
};

// renderizamos un error en el DOM
const renderError = (error) => {
  const div = document.getElementById('post-data');
  div.innerHTML = `<p>${error}</p>`;
};

// obtenemos los posts
const getPosts = async () => {
  // try catch para manejar errores
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    renderPosts(data);
  } catch (error) {
    renderError(error);
  }
};
