let template = ""
let indice = 0
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
  let post = Object.entries(posts).reverse()
    for (i = indice; i <= indice + 5; i++) {
        template += `

             <div class='my-2 d-flex cards'>
             <div class='col-md-9'>
              <p>
              <img
                      class="anc imagu"
                      src="${post[i][1].imagenPost}"
                      alt
                    >
                <a class="fw-bold text-decoration-none text-dark" href=""
                  >${post[i][1].autor}</a>
                
                <span class="text-muted">in</span
                ><a class="fw-bold text-decoration-none text-dark" href="">
                  Medium</a
                >
                · <span class="text-muted">${post[i][1].fechaCreacion}</span>
              </p>
              <a class="fs-4 text-decoration-none text-dark fw-bold" href="listpost.html?idpost=${post[i][0]}"
                >${post[i][1].titulo}</a
              >
              <a class ="text-decoration-none" href='listpost.html?idpost=${post[i][0]}'>
              <p class="card-text text-muted fs-6">
              ${post[i][1].abstract}
              </p>
              </a>
              <p class="card-text">
                <small class="text-muted"
                  ><span> ${post[i][1].tiempoLectura} </span
                  ><button class="fondo border-0 text-muted">
                    Working Class</button
                  ><span> · Popular on Medium</span>
                </small><button class="btnfn border-0 ms-5"></button>
              </p>
              </div>

              <img
                  class="ms-2 img-fluid "
                  src="${post[i][1].imagenPost}"
                  
                  alt=""
                  />
                  </div>
            `
    }
   
  document.querySelector(".posts").innerHTML = template;
  indice = document.querySelectorAll('.posts .cards').length-1

};

getposts(callBack);

//Aqui se realiza el scroll
window.addEventListener('scroll',()=>{
  if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight-1){
    getposts(callBack)
  }
})