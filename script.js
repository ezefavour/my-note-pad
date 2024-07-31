const notesContanier = document.querySelector(".note-contaner")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box");
function showNotes(){
    notesContanier.innerHTML = localStorage.getItem("notes")
}
showNotes()

function updateStorage(){
    localStorage.setItem("notes", notesContanier.innerHTML)
}
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true")
    img.src = "delete.png";
    notesContanier.appendChild(inputBox).appendChild(img);

})
notesContanier.addEventListener("click",  function(e) {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt =>{
            nt.onKeyup = function(){
                updateStorage()
            }
        })
    }
})
document.addEventListener("keydown", event =>{
    if(event.key === "enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }
})





































// const heading = document.getElementById("heading")
// const username_input = document.getElementById("username-input")
// username_input.addEventListener("input", function(e){
//     heading.innerText = "hello " + e.target.value + ", how are you?"
// })


// .addEventListener('DOMContentLoaded', function() {
//     // Smooth scrolling
//     const links = document.querySelectorAll('nav ul li a');
//     for (const link of links) {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
//             window.scrollTo({
//                 top: targetElement.offsetTop,
//                 behavior: 'smooth'
//             });
//         });
//     }

//     // Form validation
//     const form = document.querySelector('form');
//     form.addEventListener('submit', function(e) {
//         const name = form.querySelector('input[name="name"]');
//         const email = form.querySelector('input[name="email"]');
//         const message = form.querySelector('textarea[name="message"]');
//         let valid = true;

//         // Clear previous error messages
//         form.querySelectorAll('.error').forEach(el => el.remove());

//         // Validate name
//         if (name.value.trim() === '') {
//             valid = false;
//             showError(name, 'Name is required.');
//         }

//         // Validate email
//         if (email.value.trim() === '') {
//             valid = false;
//             showError(email, 'Email is required.');
//         } else if (!validateEmail(email.value)) {
//             valid = false;
//             showError(email, 'Email is not valid.');
//         }

//         // Validate message
//         if (message.value.trim() === '') {
//             valid = false;
//             showError(message, 'Message is required.');
//         }

//         if (!valid) {
//             e.preventDefault();
//         }
//     });

//     function showError(input, message) {
//         const error = document.createElement('div');
//         error.className = 'error';
//         error.style.color = 'red';
//         error.textContent = message;
//         input.parentNode.insertBefore(error, input.nextSibling);
//     }

//     function validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     }
// });

