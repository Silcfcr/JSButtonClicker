function login(element) {
    console.log("I'm clicking")
    if (element.innerText === "Login") {
        element.innerText = "Log Out";
    } else {
        element.innerText = "Login";
    }  
}

function addOne(element) {
    console.log("Adding One");
    element.innerText = "One like Added";
}

function remove(element) {
    console.log("Removed");
    element.remove();
}