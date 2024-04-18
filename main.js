// tab
$( function() {
    $( "#tabs" ).tabs();
  } );

  let row3 = document.getElementById('row3')
  let row33 = document.getElementById('row33')
  let row333 = document.getElementById('row333')
  let viewmore = document.getElementById('vmore')

viewmore.addEventListener('click',()=>{
  row3.style.display = "block";
  row33.style.display = "block";
  row333.style.display = "block";
})

let scrolldown = document.querySelector('.scrolldown')

setTimeout(() => {
  scrolldown.style.display="block"
}, 2500);

// typejs

var typed = new Typed('#element', {
  strings: ["I'm Vikram", "I'm Front End Developer"],
  typeSpeed: 100,
  loop:true
});

// email js

let formbtn =document.getElementById("formbtn");
let formname = document.getElementById("formname");
let email = document.getElementById("formemail");
let phone = document.getElementById("formnum");
let subject =  document.getElementById("formsub");
let message =  document.getElementById("formmsg");

formbtn.addEventListener("click",()=>{
  if(formname.value=='',email.value==''){
    alert('Name & Email cannot be blank.')
  }
  else{
    emailjs.send("service_wbi1sia","template_7rzh3xf",{
    from_name: formname.value,
    email: email.value,
    phone_number: phone.value,
    subject: subject.value,
    message: message.value,
    }).then(()=>{
        alert("Your message send successfully ☺")
    })
  }
  
})

AOS.init();