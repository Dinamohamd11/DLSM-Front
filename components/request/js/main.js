let Seftysheet = document.getElementById("Seftysheet");
let all = document.getElementsByClassName("all");
let SelectTrans = document.getElementById("SelectTrans");
function flip() {
    document.getElementById("dangerous").value == 1
        ? (document.getElementById("dangerous").value = 0)
        : (document.getElementById("dangerous").value = 1);

    if (Seftysheet.classList.contains("d-none")) Seftysheet.classList.remove("d-none");
    else Seftysheet.classList.add("d-none");
}
function flip_Custom() {
    document.getElementById("CustomsClearness").value == 1
        ? (document.getElementById("CustomsClearness").value = 0)
        : (document.getElementById("CustomsClearness").value = 1);
    console.log(document.getElementById("CustomsClearness").value);
}
function flip_Trucking() {
    document.getElementById("Trucking").value == 1
        ? (document.getElementById("Trucking").value = 0)
        : (document.getElementById("Trucking").value = 1);
    console.log(document.getElementById("Trucking").value);
}
for (let i = 0; i < all.length; i++)
    if (!all[i].classList.contains("d-none")) all[i].classList.add("d-none");

function Dtrans() {
    let tranChoose = "";
    let ch = SelectTrans.value;
    if (ch == 1) {
        tranChoose = "wild";
        document.getElementById("sea").classList.add("d-none");
        document.getElementById("X-sea").classList.remove("d-none");
    } else if (ch == 2) {
        tranChoose = "sea";
        document.getElementById("X-sea").classList.add("d-none");
        document.getElementById("sea").classList.remove("d-none");
    } else if (ch == 3) {
        tranChoose = "air";
        document.getElementById("sea").classList.add("d-none");
        document.getElementById("X-sea").classList.remove("d-none");
    } else return;
    for (let i = 0; i < all.length; i++)
        if (!all[i].classList.contains("d-none")) all[i].classList.add("d-none");
    for (let i = 0; i < all.length; i++)
        if (all[i].classList.contains(tranChoose)) all[i].classList.remove("d-none");
}

function SendReq() {
    if (document.getElementById("req_type").value == 1) {
        // DHL
        data = {
            req_type: document.getElementById("req_type").value,
            Location: document.getElementById("Location").value,
            Destination: document.getElementById("Destination").value,
            Location2: document.getElementById("Location2").value,
            Destination2: document.getElementById("Destination2").value,
            Comment: document.getElementById("Comment").value,
            GoodsType: document.getElementById("GoodsType").value,
            client_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
        };
        console.log(data);
        const apiUrl = `${localStorage.getItem('API')}/requests-create`;
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(apiUrl, requestOptions)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                location.href = "http://127.0.0.1:5502/components/myRequest/myRequest.html";
            });
    } else if (document.getElementById("req_type").value == 2) {
        //International
        if (document.getElementById("SelectTrans").value == 1) {
            //WILD
            data = {
                req_type: document.getElementById("req_type").value,
                Location: document.getElementById("Location").value,
                Destination: document.getElementById("Destination").value,
                Location2: document.getElementById("Location2").value,
                Destination2: document.getElementById("Destination2").value,
                Comment: document.getElementById("Comment").value,
                GoodsType: document.getElementById("GoodsType").value,
                client_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
                Weight: document.getElementById("Weight").value,
                Length: document.getElementById("Length").value,
                Width: document.getElementById("Width").value,
                Height: document.getElementById("Height").value,
                Transport: document.getElementById("SelectTrans").value,
                TypesOfTruck: document.getElementById("TypesOfTruck").value,
                WeightOfSingleCarton: document.getElementById("WeightOfSingleCarton").value,
                CustomsClearness: document.getElementById("CustomsClearness").value,
                Tracking: document.getElementById("Trucking").value,
                // ContainerTypeAndSize: document.getElementById('ContainerTypeAndSize').value,
                // NumberOfContainer: document.getElementById('NumberOfContainer').value,
                // NumberOfCartons: document.getElementById('NumberOfCartons').value,
            };
            console.log(data);
            const apiUrl = `${localStorage.getItem('API')}/requests-create`;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(apiUrl, requestOptions)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    location.href = "http://127.0.0.1:5502/components/myRequest/myRequest.html";
                });
        } else if (document.getElementById("SelectTrans").value == 2) {
            //WILD
            data = {
                req_type: document.getElementById("req_type").value,
                Location: document.getElementById("Location").value,
                Destination: document.getElementById("Destination").value,
                Location2: document.getElementById("Location2").value,
                Destination2: document.getElementById("Destination2").value,
                Comment: document.getElementById("Comment").value,
                GoodsType: document.getElementById("GoodsType").value,
                client_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
                Weight: document.getElementById("Weight").value,
                Length: document.getElementById("Length").value,
                Width: document.getElementById("Width").value,
                Height: document.getElementById("Height").value,
                Transport: document.getElementById("SelectTrans").value,
                CustomsClearness: document.getElementById("CustomsClearness").value,
                Tracking: document.getElementById("Trucking").value,
                //TypesOfTruck: document.getElementById('TypesOfTruck').value,
                //WeightOfSingleCarton: document.getElementById('WeightOfSingleCarton').value,
                ContainerTypeAndSize: document.getElementById("ContainerTypeAndSize").value,
                NumberOfContainer: document.getElementById("NumberOfContainer").value,
                // NumberOfCartons: document.getElementById('NumberOfCartons').value,
            };
            console.log(data);
            const apiUrl = `${localStorage.getItem('API')}/requests-create`;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(apiUrl, requestOptions)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    location.href = "http://127.0.0.1:5502/components/myRequest/myRequest.html";
                });
        } else if (document.getElementById("SelectTrans").value == 3) {
            //AIR
            data = {
                req_type: document.getElementById("req_type").value,
                Location: document.getElementById("Location").value,
                Destination: document.getElementById("Destination").value,
                Location2: document.getElementById("Location2").value,
                Destination2: document.getElementById("Destination2").value,
                Comment: document.getElementById("Comment").value,
                GoodsType: document.getElementById("GoodsType").value,
                client_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
                Weight: document.getElementById("Weight").value,
                Length: document.getElementById("Length").value,
                Width: document.getElementById("Width").value,
                Height: document.getElementById("Height").value,
                Transport: document.getElementById("SelectTrans").value,
                CustomsClearness: document.getElementById("CustomsClearness").value,
                Tracking: document.getElementById("Trucking").value,
                //TypesOfTruck: document.getElementById('TypesOfTruck').value,
                WeightOfSingleCarton: document.getElementById("WeightOfSingleCarton").value,
                //ContainerTypeAndSize: document.getElementById('ContainerTypeAndSize').value,
                //NumberOfContainer: document.getElementById('NumberOfContainer').value,
                NumberOfCartons: document.getElementById("NumberOfCartons").value,
            };
            console.log(data);
            const apiUrl = `${localStorage.getItem('API')}/requests-create`;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(apiUrl, requestOptions)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    location.href = "http://127.0.0.1:5502/components/myRequest/myRequest.html";
                });
        }
        console.log(data);
    } else if (document.getElementById("req_type").value == 3) {
        // LOCAL
        data = {
            req_type: document.getElementById("req_type").value,
            Location: document.getElementById("Location").value,
            Destination: document.getElementById("Location").value,
            Location2: document.getElementById("Location2").value,
            Destination2: document.getElementById("Destination2").value,
            Comment: document.getElementById("Comment").value,
            GoodsType: document.getElementById("GoodsType").value,
            Weight: document.getElementById("Weight").value,
            Safety:
                document.getElementById("dangerous").value == 1
                    ? document.getElementById("Safety")
                    : "   ",
            client_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
        };
        const apiUrl = `${localStorage.getItem('API')}/requests-create`;
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(apiUrl, requestOptions)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                location.href = "http://127.0.0.1:5502/components/myRequest/myRequest.html";
            });
    }
}
(function CountryF() {
    let cartona = '<option class="d-none" value="0">Select Your Country</option>';
    fetch("https://countriesnow.space/api/v0.1/countries")
        .then((response) => {
            return response.json();
        })
        .then(({ data }) => {
            for (let i = 0; i < data.length; i++) {
                cartona += `<option name = "${data[i].country}"value="${data[i].country}" id="${data[i].country}" onclick="city()">${data[i].country}</option>`;
            }
            document.getElementById("Location").innerHTML = cartona;
        });
})();
(function CountryT() {
    let cartona = '<option class="d-none" value="0">Select Your Country</option>';
    fetch("https://countriesnow.space/api/v0.1/countries")
        .then((response) => {
            return response.json();
        })
        .then(({ data }) => {
            for (let i = 0; i < data.length; i++) {
                cartona += `<option name = "${data[i].country}"value="${data[i].country}" id="${data[i].country}" onclick="city()">${data[i].country}</option>`;
            }
            document.getElementById("Destination").innerHTML = cartona;
        });
})();
