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
    axios.post("http://localhost:8000/save",credentials);
    console.log('clicked')
    
}