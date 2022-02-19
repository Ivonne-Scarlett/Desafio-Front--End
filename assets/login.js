let botonLogin = document.querySelector("#loginButton")

botonLogin.addEventListener("click" ,()=>{

    let email = document.querySelector('#email').value    
    let password = document.querySelector('#password').value
    
    
    const user = {
        email:email,
        password:password
    }

    fetch('http://localhost:8080/auth/login',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then((resp)=>resp.json())
    
    .then((data)=>{
        const token = data.token
        console.log('succes:',data)
        
        //location.replace('index.html')
    })

    .catch(error =>{
        console.log(error)
    })

})

module.exports = token

