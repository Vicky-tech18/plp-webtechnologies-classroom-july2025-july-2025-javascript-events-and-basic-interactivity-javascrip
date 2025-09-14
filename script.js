// Part 1
document.getElementById("msgBtn").addEventListener("click", ()=>{
    document.getElementById("output").textContent = "You Clicked The Button";
});

// Part 2
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");
});

// my count game
let count = 0;
document.getElementById("countBtn").addEventListener("click",()=>{
    count ++;
    document.getElementById("countDisplay").textContent = count;
});

// Part 3

document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById(`password`).value.trim();
    let msg = document.getElementById("formMsg");

    if (name === "" || email === "" || password === ""){
        msg.textContent = "All fields are required.";
        msg.style.color = "red";
        return;
    }

    // here i set the email format but it's giving me issues
    // let emailPattern = /^[^ ]+@[^ ]+\[a-z]{2,10}$/;
    
    //  if (!email.match(emailPattern))  {
    //     msg.textContent = "Enter a valid Email Address";
    //     msg.style.color = "red";
    //     return;
    // }

    // here i set the password lenght
    if(password.length < 6){
        msg.textContent = "Password must be at least 6 characters";
        msg.style.ccolor = "red";
        return;
    }


// Submit Success
msg.textContent = "Form is submitted successfully!";
msg.style.color = "green";
})