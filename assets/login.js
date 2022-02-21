let botonLogin = document.querySelector("#loginButton")

botonLogin.addEventListener("click" ,()=>{

    let email = document.querySelector('#email').value    
    let password = document.querySelector('#password').value
    
    
    const user = {
        email:email,
        password:password
    }

    fetch('https://apibackend-smart-panda-xb.mybluemix.net/auth/login',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then((resp)=>resp.json())
    
    .then((data)=>{
        console.log('succes:',data.token)
        localStorage.setItem('token',data.token)
        console.log(data)
        if(data.ok == false) {
            alert('Invalid Credentials')
            return
        }
        location.replace('index.html')
    })

    .catch(error =>{
        console.log(error)
    })

})



