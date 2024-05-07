let newsLetterForm = document.getElementById("newsLetterForm");

function checkEmailAddress(event) {
    if (newsLetterForm.emailAddress.value === "" || newsLetterForm.emailConfirm.value === "") {
        alert("Email addresses cannot be empty");
        console.log("address emtpty")
        event.preventDefault();
    }
    
    if (newsLetterForm.emailAddress.value != newsLetterForm.emailConfirm.value) {
        alert("Email addresses do not match");
        console.log("addressse do not match")
        event.preventDefault();
    }

    return;
}

console.log("news letter is" + newsLetterForm)

newsLetterForm.addEventListener("submit", checkEmailAddress);