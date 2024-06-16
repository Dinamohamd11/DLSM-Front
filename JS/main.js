var navbar = document.getElementById("Nav-Bar");
var ToHome = document.getElementById("ToHome");
var searchTop = document.getElementById("search-top");
var searchInput = document.getElementById("search-input");
var clos = document.getElementById("clos");
var list_search = document.getElementById("list-search");
let isClicked = true;
let showHide = function () {
    if (isClicked) {
        searchTop.classList.add("top-0");
        list_search.classList.remove("d-none");
        isClicked = false;
    } else {
        searchTop.classList.remove("top-0");
        list_search.classList.add("d-none");
        isClicked = true;
    }
};
window.onscroll = function () {
    if (window.scrollY > 50) {
        navbar.classList.add("headerfixed");
        ToHome.classList.remove("d-none");
    } else {
        navbar.classList.remove("headerfixed");
        ToHome.classList.add("d-none");
    }
};
ToHome.addEventListener("click", function () {
    window.scroll({
        top: 0,
    });
});
searchInput.addEventListener("keyup", function () {
    const apiUrl = `${localStorage.getItem("API")}/shipping-search`;
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: searchInput.value,
        }),
    };
    fetch(apiUrl, requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let cartona = "";
            for (let i = 0; i < data.length; i++) {
                cartona += `<li class="list-group-item" style="cursor:pointer" onclick="GoToSearch(${i})">${data[i].Name}</li>`;
            }
            list_search.innerHTML = cartona;
        });
});
function GoToSearch(id) {
    window.location.href =
        "http://127.0.0.1:5502/components/searchProfile/searchProfile.html?id=" + (id + 1);
}
