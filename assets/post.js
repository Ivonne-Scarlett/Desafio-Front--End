
let botonCrear = document.querySelector("#buttonCrear")
botonCrear.addEventListener("click", () =>{
    let newTitulo = document.querySelector('#inputTitulo').value    
    let newAbstract = document.querySelector('#inputAbstract').value
    let newAutor = document.querySelector('#inputAutor').value
    let newImgCreacion = document.querySelector('#inputImagenPost').value
    let newTiempoLectura = document.querySelector('#inputTiempoLectura').value
    let newContenidoPost = document.querySelector('#inputContenidoPost').value
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = today.getMonth()
    let yyyy = today.getFullYear();

    let meses = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ]

    let mon = meses[mm]
    today = mon + ' ' + dd + ',' + yyyy;
    // document.write(today);
    if(
        newTitulo != '' &&
        newAbstract != '' &&
        newAutor != '' &&
        newImgCreacion != '' &&
        newTiempoLectura != '' &&
        newContenidoPost != ''
     ){
        let newPost = {
            titulo: newTitulo,
            abstract: newAbstract,
            autor: newAutor,
            imagenPost: newImgCreacion,
            tiempoLectura: newTiempoLectura,
            contenidoPost: newContenidoPost,
            fechaCreacion: today
        }
        console.log(newPost)
        fetch("http://localhost:8080/posts", 
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost),
        })
        .then((resp) => {
            //location.replace("/index.html")
           console.log("SE AGREGO NUEVO POST")
           return resp.json()
        })
        .then((resp) => {
            console.log(resp)
        })
        .catch(error =>{
            console.log(error)
        })
    }else{
        alert("Hay espacios vacios")
    }
})

