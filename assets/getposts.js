

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
  let arrays = Object.entries(posts)
    //console.log(arrays[0][0])
    let template = ""
    for (i = 0; i <= 5; i++) {
        template += `

             <div class='my-2 d-flex'>
             <div class='col-md-9'>
              <p>
              <img
                      class="anc imagu"
                      src="${arrays[i][1].imagenPost}"
                      alt
                    >
                <a class="fw-bold text-decoration-none text-dark" href=""
                  >${arrays[i][1].autor}</a>
                
                <span class="text-muted">in</span
                ><a class="fw-bold text-decoration-none text-dark" href="">
                  Medium</a
                >
                · <span class="text-muted">${arrays[i][1].fechaCreacion}</span>
              </p>
              <a class="fs-4 text-decoration-none text-dark fw-bold" href="listpost.html?idpost=${arrays[i][0]}"
                >${arrays[i][1].titulo}</a
              >
              <a class ="text-decoration-none" href='listpost.html?idpost=${arrays[i][0]}'>
              <p class="card-text text-muted fs-6">
              ${arrays[i][1].abstract}
              </p>
              </a>
              <p class="card-text">
                <small class="text-muted"
                  ><span> ${arrays[i][1].tiempoLectura} </span
                  ><button class="fondo border-0 text-muted">
                    Working Class</button
                  ><span> · Popular on Medium</span>
                </small><button class="btnfn border-0 ms-5"></button>
              </p>
              </div>

              <img
                  class="ms-2 img-fluid "
                  src="${arrays[i][1].imagenPost}"
                  
                  alt=""
                  />
                  </div>
            `
      
    }
    // let template = ""
  // for (post in posts) {
    
  //   template += `

  //            <div class='my-2 d-flex'>
  //            <div class='col-md-9'>
  //             <p>
  //             <img
  //                     class="anc imagu"
  //                     src="${posts[post].imagenPost}"
  //                     alt
  //                   >
  //               <a class="fw-bold text-decoration-none text-dark" href=""
  //                 >${posts[post].autor}</a>
                
  //               <span class="text-muted">in</span
  //               ><a class="fw-bold text-decoration-none text-dark" href="">
  //                 Medium</a
  //               >
  //               · <span class="text-muted">${posts[post].fechaCreacion}</span>
  //             </p>
  //             <a class="fs-4 text-decoration-none text-dark fw-bold" href="listpost.html?idpost=${post}"
  //               >${posts[post].titulo}</a
  //             >
  //             <a class ="text-decoration-none" href='listpost.html?idpost=${post}'>
  //             <p class="card-text text-muted fs-6">
  //             ${posts[post].abstract}
  //             </p>
  //             </a>
  //             <p class="card-text">
  //               <small class="text-muted"
  //                 ><span> ${posts[post].tiempoLectura} </span
  //                 ><button class="fondo border-0 text-muted">
  //                   Working Class</button
  //                 ><span> · Popular on Medium</span>
  //               </small><button class="btnfn border-0 ms-5"></button>
  //             </p>
  //             </div>

  //             <img
  //                 class="ms-2 img-fluid "
  //                 src="${posts[post].imagenPost}"
                  
  //                 alt=""
  //                 />
  //                 </div>
  //           `
  // }
  document.querySelector(".posts").innerHTML = template;

};

getposts(callBack);

// window.addEventListener('scroll',()=>{
//   if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight-1.5){
//   console.log(window.scrollY + window.innerHeight)
//   console.log(document.documentElement.scrollHeight-1.5)
//     getposts(callBack);}
//   }
// )