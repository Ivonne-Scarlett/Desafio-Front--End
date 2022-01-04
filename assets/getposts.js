const getposts = (callback) => {
  fetch(
    "https://desafio-front-end-ea066-default-rtdb.firebaseio.com/posts/.json"
  )
    .then((obj) => {
      return obj.json();
    })
    .then((resp) => {
      callback(resp);
    });
};

const callBack = (posts) => {
  console.log(posts);
  let template = "";
  for (post in posts) {
    console.log(post);
    console.log(posts[post].imagenPost)
    template += `
              <p>
              <img
                      class="anc imagu"
                      src="${posts[post].imagenPost}"
                      alt
                    >
                <a class="fw-bold text-decoration-none text-dark" href=""
                  >${posts[post].autor}</a>
                
                <span class="text-muted">in</span
                ><a class="fw-bold text-decoration-none text-dark" href="">
                  Medium</a
                >
                · <span class="text-muted">${posts[post].fechaCreacion}</span>
              </p>
              <a class="fs-4 text-decoration-none text-dark fw-bold" href=""
                >${posts[post].titulo}</a
              >
              <p class="card-text text-muted fs-6">
              ${posts[post].abstract}
              </p>
              <p class="card-text">
                <small class="text-muted"
                  ><span> ${posts[post].tiempoLectura} </span
                  ><button class="fondo border-0 text-muted">
                    Working Class</button
                  ><span> · Popular on Medium</span>
                </small><button class="btnfn border-0 ms-5"></button>
              </p>
        
            `
  }
  document.querySelector(".posts").innerHTML = template;
};

getposts(callBack);
