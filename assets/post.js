const token = localStorage.getItem('token')

let botonCrear = document.querySelector("#buttonCrear")
botonCrear.addEventListener("click", () =>{
    if(token == null){
        alert('You need to login to post')
        location.replace('login.html')
        return
    }
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
        fetch("https://apibackend-nice-toucan-ik.mybluemix.net/posts", 
        {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}` 
            },
            body: JSON.stringify(newPost),
        })
        .then((resp) => {
            if(resp.ok == false){
                alert('Session expired')
                location.replace('login.html')
                return
             }
            location.replace("/index.html")
        })
        .catch(error =>{
            console.log(error)
        })
    }else{
        alert("Hay espacios vacios")
    }
})

