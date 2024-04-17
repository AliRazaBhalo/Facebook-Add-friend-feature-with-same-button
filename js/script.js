let istatus = document.querySelector(".status");
let btn = document.querySelector("#btn");
let a = 0;
btn.style.color = "#fff";
// istatus.style.backgroundColor = "red";
btn.addEventListener("click", () => {
    if (a == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "rgb(0, 198, 11)";
        btn.innerHTML = "Unfriend";
        btn.style.backgroundColor = "red";
        a = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "rgb(63, 232, 63)";

        a = 0;
    }

});