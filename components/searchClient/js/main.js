(function FUN() {
    const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get("id");
    postData = {
        id: urlParams.get("id"),
        TypeOfClient: 4,
    };

    const apiUrl = `${localStorage.getItem("API")}/myData`;
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    };
    fetch(apiUrl, requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.log(postData);
            if (postData.TypeOfClient == 4) {
                document.getElementById("MyDATA").innerHTML = `
                      <div class="d-flex">
                          <span>Name:</span>
                          <h6 id="Name" class="text-capitalize">${data.Name}</h6>
                          </div>
                      <div class="d-flex  ">
                          <span>Email:</span>
                          <h6 id="Email"class="text-capitalize">${data.Email}</h6>
                      </div>
                      <div class="d-flex ">
                          <span>Phone:</span>
                          <h6 id="PhoneNumber">${data.PhoneNumber}</h6>
                      </div>
  
                      <div class="d-flex ">
                          <span>Address:</span>
                          <h6 id="Address"class="text-capitalize">${data.Address}</h6>
                      </div>
                      <div class="d-flex ">
                          <span>Website:</span>
                          <h6 id="Website">${data.Website}</h6>
                      </div>
                     
                      `;

                document.getElementById("Track").innerText = "Shipping Company";
                document.getElementById("Namee").innerText = data.Name;
                document.getElementById("AddAgent").classList.remove("d-none");
                document.getElementById("ShippingOnly").classList.remove("d-none");

                let Newdata = fetch(`${localStorage.getItem("API")}/ShippingAgent/${data.id}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((Newdata) => {
                        document.getElementById("TotalAgent").innerText = Newdata.length;
                    });
                let alldata = fetch(`${localStorage.getItem("API")}/NumberOfOffers/${data.id}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((Newdata) => {
                        console.log(Newdata);
                        document.getElementById("TotalOffer").innerText = Newdata[0].offer_count;
                    });
            }
        });
})();
