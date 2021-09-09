let likes = 14;
let likes2 = 38



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
    let addedlikes = likes;
    element.innerText = `${addedlikes} likes`;
    likes += 1
}

function addOne2(element) {
    console.log("Adding One");
    let addedlikes = likes2;
    element.innerText = `${addedlikes} likes`;
    likes2 += 1
}

function remove(element) {
    console.log("Removed");
    element.remove();
}

