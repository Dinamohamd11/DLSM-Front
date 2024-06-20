(function FUN() {
  const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get("id");
  postData = {
    // id: JSON.parse(localStorage.getItem("Search_User")),
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
            document.getElementById("TotalOffer").innerText = Newdata;
          });
      }
    });
})();

function EDIT() {
  postData = {
    id: JSON.parse(localStorage.getItem("CurrentUser")).id,
    TypeOfClient: JSON.parse(localStorage.getItem("CurrentUser")).typeOfClient,
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
      if (postData.TypeOfClient == 1) {
        // Client (USER)
        document.getElementById("MyDATA").innerHTML = `
                    <div class="d-flex 1">
                        <span>Name:</span>
                    </div>
                    <div class="d-flex  ">
                        <span>Email:</span>
                    </div>
                    <div class="d-flex ">
                        <span>Phone:</span>
                    </div>
                    <div class="d-flex ">
                        <span>Nationality:</span>
                    </div>
                    <div class="d-flex ">
                        <span>SSN:</span>
                    </div>`;

        document.getElementById("MyINPUTS").innerHTML = `
                    <div class="d-flex my-2  ">
                        <input type="text" class="form-control mt-2 rounded-0 ms-2" Name="Name" id="Name"
                            style="height:20px" />
                    </div>
                    <div class="d-flex my-2  ">
                        <input type="email" class="form-control mt-2 rounded-0 ms-2" Name="Email" id="Email"
                            style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="PhoneNumber"
                            id="PhoneNumber" style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-2 rounded-0 ms-2" Name="Nationality"
                            id="Nationality" style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="SSN" id="SSN"
                            style="height:20px" />
                    </div>`;
        document.getElementById("Namee").innerText = data.Name;
      } else if (postData.TypeOfClient == 2) {
        // Client (USER)
        document.getElementById("MyDATA").innerHTML = `
                    <div class="d-flex 2">
                        <span>Name:</span>
                    </div>
                    <div class="d-flex  ">
                        <span>Email:</span>
                    </div>
                    <div class="d-flex ">
                        <span>Phone:</span>
                    </div>
                    <div class="d-flex ">
                        <span>Address:</span>
                    </div>
                    <div class="d-flex ">
                        <span>Website:</span>
                    </div>
                    <div class="d-flex ">
                        <span>BusinessHistory:</span>
                    </div>
                    <div class="d-flex ">
                        <span>BusinessHours:</span>
                    </div>`;
        document.getElementById("MyINPUTS").innerHTML =
          `
                    <div class="d-flex my-2  ">
                        <input type="text" class="form-control mt-2 rounded-0 ms-2" Name="Name" id="Name"
                            style="height:20px" value= ` +
          data.Name +
          `  />
                    </div>
                    <div class="d-flex my-2  ">
                        <input type="email" class="form-control mt-2 rounded-0 ms-2" Name="Email" id="Email"
                            style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="PhoneNumber"
                            id="PhoneNumber" style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-2 rounded-0 ms-2" Name="Address"
                            id="Address" style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="Website" id="Website"
                            style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                    <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="BusinessHistory" id="BusinessHistory"
                        style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="BusinessHours" id="BusinessHours"
                            style="height:20px" />
                    </div>
                    `;

        document.getElementById("Namee").innerText = data.Name;
        document.getElementById("AddAgent").classList.add("d-none");
      } else if (postData.TypeOfClient == 3) {
        // Client (USER)
        document.getElementById("MyDATA").innerHTML = `
                    <div class="d-flex 3">
                        <span>Name:</span>
                    </div>
                    <div class="d-flex  ">
                        <span>Email:</span>
                    </div>
                    <div class="d-flex ">
                        <span>Phone:</span>
                    </div>
                    <div class="d-flex ">
                        <span>Address:</span>
                    </div>
                    <div class="d-flex ">
                        <span>Website:</span>
                    </div>
                    <div class="d-flex ">
                        <span>CountryDealing:</span>
                    </div>
                    <div class="d-flex ">
                        <span>CountryTarget:</span>
                    </div>`;
        document.getElementById("MyINPUTS").innerHTML =
          `
                    <div class="d-flex my-2  ">
                        <input type="text" class="form-control mt-2 rounded-0 ms-2" Name="Name" id="Name"
                            style="height:20px" value= ` +
          data.Name +
          `  />
                    </div>
                    <div class="d-flex my-2  ">
                        <input type="email" class="form-control mt-2 rounded-0 ms-2" Name="Email" id="Email"
                            style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="PhoneNumber"
                            id="PhoneNumber" style="height:20px" />
                    </div>
                     <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-2 rounded-0 ms-2" Name="Address"
                            id="Address" style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="Website" id="Website"
                            style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="CountryDealing" id="CountryDealing"
                            style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="CountryTarget" id="CountryTarget"
                            style="height:20px" />
                    </div>
        
                    `;

        document.getElementById("Namee").innerText = data.Name;
        document.getElementById("AddAgent").classList.add("d-none");
      } else if (postData.TypeOfClient == 4) {
        // Shipping
        document.getElementById("MyDATA").innerHTML = `
                    <div class="d-flex mb-2">
                        <span>Name:</span>
                        </div>
                    <div class="d-flex mb-2">
                        <span>Email:</span>
                    </div>
                    <div class="d-flex  mb-3">
                        <span>Phone:</span>
                    </div>
                    <div class="d-flex  mb-3">
                        <span>Address:</span>
                    </div>
                    <div class="d-flex  mb-3">
                        <span>Website:</span>
                    </div>
                    <div class="d-flex  mb-2">
                        <span>BusinessHours:</span>
                    </div>
                    <div class="d-flex mb-3">
                        <span>BusinessHistory:</span>
                    </div>
                    `;
        document.getElementById("MyINPUTS").innerHTML =
          `
                    <div class="d-flex my-2  ">
                        <input type="text" class="form-control mt-2 rounded-0 ms-2 ps-2" Name="Name" id="Name"
                            style="height:20px" value= ` +
          data.Name +
          `  />
                    </div>
                    <div class="d-flex my-2  ">
                        <input type="email" class="form-control mt-2 rounded-0 ms-2 ps-2" Name="Email" id="Email"
                            style="height:20px" value= ` +
          data.Email +
          ` />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2 ps-2" Name="PhoneNumber"
                            id="PhoneNumber" style="height:20px" value= ` +
          data.PhoneNumber +
          ` />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-2 rounded-0 ms-2 ps-2" Name="Address"
                            id="Address" style="height:20px"  value= ` +
          data.Address +
          ` />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2 ps-2" Name="Website" id="Website"
                            style="height:20px"  value= ` +
          data.Website +
          ` />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2 ps-2" Name="BusinessHours" id="BusinessHours"
                            style="height:20px" value= ` +
          data.BusinessHours +
          `   />
                    </div>
                 
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2 ps-2" Name="BusinessHistory" id="BusinessHistory"
                            style="height:20px" value= ` +
          data.BusinessHistory +
          `
                     />
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
      } else if (postData.TypeOfClient == 6) {
        // Agent
        document.getElementById("MyDATA").innerHTML = `
                    <div class="d-flex 6">
                        <span>Name:</span>
                    </div>
                    <div class="d-flex  ">
                        <span>Email:</span>
                    </div>
                    <div class="d-flex ">
                        <span>Phone:</span>
                    </div>
                    `;
        document.getElementById("MyINPUTS").innerHTML =
          `
                    <div class="d-flex my-2  ">
                        <input type="text" class="form-control mt-2 rounded-0 ms-2" Name="Name" id="Name"
                            style="height:20px" value= ` +
          data.Name +
          `  />
                    </div>
                    <div class="d-flex my-2  ">
                        <input type="email" class="form-control mt-2 rounded-0 ms-2" Name="Email" id="Email"
                            style="height:20px" />
                    </div>
                    <div class="d-flex my-2 ">
                        <input type="text" class="form-control mt-1 rounded-0 ms-2" Name="PhoneNumber"
                            id="PhoneNumber" style="height:20px" />
                    </div>
                    `;
        document.getElementById("Track").innerText = "Agent";
        document.getElementById("Namee").innerText = data.Name;

        let Newdata = fetch(`${localStorage.getItem("API")}/ShippingAgent/${data.id}`)
          .then((response) => {
            return response.json();
          })
          .then((Newdata) => {
            document.getElementById("TotalAgent").innerText = Newdata.length;
          });
      }
    });
  document.getElementById("HOME").classList.add("d-none");
  document.getElementById("SaveEdit").classList.remove("d-none");
}

function LOGOUT() {
  localStorage.removeItem("CurrentUser");
  location.href = "http://127.0.0.1:5502/components/login/login.html";
}

function SAVE() {
  postData = {
    id: JSON.parse(localStorage.getItem("CurrentUser")).id,
    TypeOfClient: JSON.parse(localStorage.getItem("CurrentUser")).typeOfClient,
  };
  const apiUrl = `${localStorage.getItem("API")}/myData-edit/${postData.id}/${postData.TypeOfClient}`;
  if (postData.TypeOfClient == 1)
    AllData = {
      Name: document.getElementById("Name").value,
      Email: document.getElementById("Email").value,
      PhoneNumber: document.getElementById("PhoneNumber").value,
      SSN: document.getElementById("SSN").value,
      Nationality: document.getElementById("Nationality").value,
    };
  else if (postData.TypeOfClient == 2)
    AllData = {
      Name: document.getElementById("Name").value,
      Email: document.getElementById("Email").value,
      PhoneNumber: document.getElementById("PhoneNumber").value,
      Website: document.getElementById("Website").value,
      Address: document.getElementById("Address").value,
      BusinessHistory: document.getElementById("BusinessHistory").value,
      BusinessHours: document.getElementById("BusinessHours").value,
    };
  else if (postData.TypeOfClient == 3)
    AllData = {
      Name: document.getElementById("Name").value,
      Email: document.getElementById("Email").value,
      PhoneNumber: document.getElementById("PhoneNumber").value,
      Website: document.getElementById("Website").value,
      Address: document.getElementById("Address").value,
      CountryDealing: document.getElementById("CountryDealing").value,
      CountryTarget: document.getElementById("CountryTarget").value,
    };
  else if (postData.TypeOfClient == 4)
    AllData = {
      Name: document.getElementById("Name").value,
      Email: document.getElementById("Email").value,
      PhoneNumber: document.getElementById("PhoneNumber").value,
      Website: document.getElementById("Website").value,
      Address: document.getElementById("Address").value,
      BusinessHistory: document.getElementById("BusinessHistory").value,
      BusinessHours: document.getElementById("BusinessHours").value,
    };
  else if (postData.TypeOfClient == 6)
    AllData = {
      Name: document.getElementById("Name").value,
      Email: document.getElementById("Email").value,
      PhoneNumber: document.getElementById("PhoneNumber").value,
    };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(AllData),
  };
  fetch(apiUrl, requestOptions).then((response) => {
    console.log(response);
    document.getElementById("HOME").classList.remove("d-none");
    document.getElementById("SaveEdit").classList.add("d-none");
    location.href = "http://127.0.0.1:5502/components/myprofile/myprofile.html";
  });
}

async function SendPost() {
  data = {
    data: document.getElementById("post_text").value,
    shipping_companies_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
  };
  console.log(data);
  const apiUrl = `${localStorage.getItem("API")}/posts-create`;
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
    });
}
var FeedBtn = document.getElementById("FeedBtn");
function FeedBack() {
  var show = document.getElementById("ShowFeed");

  if (show.classList.contains("d-none")) {
    show.classList.remove("d-none");
  } else {
    show.classList.add("d-none");
  }
}
(function ayhaga() {
  // let id = JSON.parse(localStorage.getItem("Search_User"));
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log(id);
  let Newdata = fetch(`${localStorage.getItem("API")}/feedback/avg-rate/${JSON.parse(id)}`)
    .then((response) => {
      return response.json();
    })
    .then((Newdata) => {
      console.log(Newdata);
      let stars_avg;
      if (Newdata == -47) {
        stars_avg = `
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        document.getElementById("Stars-Avg").innerHTML = stars_avg;
        if (stars_avg == undefined) document.getElementById("Stars-Avg").innerHTML = "";
        return;
      }
      let parsedNumber = parseFloat(Newdata.average_rate);
      console.log(Math.round(parsedNumber * 10) / 10);
      if (Math.round(parsedNumber * 10) / 10 == NaN) document.getElementById("TotalRate").innerHTML = "0";
      else Math.round(parsedNumber * 10) / 10;
      if (Newdata.average_rate < 0.5)
        stars_avg = `
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
      else if (Newdata.average_rate >= 0.5 && Newdata.average_rate < 1)
        stars_avg = `
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
      else if (Newdata.average_rate >= 1 && Newdata.average_rate < 1.5)
        stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
      else if (Newdata.average_rate >= 1.5 && Newdata.average_rate < 2)
        stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
      else if (Newdata.average_rate >= 2 && Newdata.average_rate < 2.5)
        stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
      else if (Newdata.average_rate >= 2.5 && Newdata.average_rate < 3)
        stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
      else if (Newdata.average_rate >= 3 && Newdata.average_rate < 3.5)
        stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
      else if (Newdata.average_rate >= 3.5 && Newdata.average_rate < 4)
        stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
      else if (Newdata.average_rate >= 4 && Newdata.average_rate < 4.5)
        stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
      else if (Newdata.average_rate >= 4.5 && Newdata.average_rate < 5)
        stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
            `;
      else if (Newdata.average_rate == 5)
        stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
            `;
      document.getElementById("Stars-Avg").innerHTML = stars_avg;
      if (stars_avg == undefined) document.getElementById("Stars-Avg").innerHTML = "";
    });
})();

(function AllFeedbacks() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  fetch(`${localStorage.getItem("API")}/FeedbackByShippingCompanyId/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((Newdata) => {
      let cartona = ``;
      for (let i = 0; i < Newdata.length; ++i) {
        let stars_avg = "";
        if (Newdata[i].rate < 0.5)
          stars_avg = `
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        else if (Newdata[i].rate >= 0.5 && Newdata[i].rate < 1)
          stars_avg = `
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        else if (Newdata[i].rate >= 1 && Newdata[i].rate < 1.5)
          stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        else if (Newdata[i].rate >= 1.5 && Newdata[i].rate < 2)
          stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        else if (Newdata[i].rate >= 2 && Newdata[i].rate < 2.5)
          stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        else if (Newdata[i].rate >= 2.5 && Newdata[i].rate < 3)
          stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        else if (Newdata[i].rate >= 3 && Newdata[i].rate < 3.5)
          stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        else if (Newdata[i].rate >= 3.5 && Newdata[i].rate < 4)
          stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        else if (Newdata[i].rate >= 4 && Newdata[i].rate < 4.5)
          stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
            `;
        else if (Newdata[i].rate >= 4.5 && Newdata[i].rate < 5)
          stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star-half-stroke text-warning"></i>
            `;
        else if (Newdata[i].rate == 5)
          stars_avg = `
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
            `;

        cartona += `
                <span> ${Newdata[i].client.Name}</span>
                            <div class="info ">
                               ${stars_avg}
                            </div>
                            <p style="border-bottom: 1px solid var(--accent-color);
                                padding: 15px 2px;">${Newdata[i].message}</p>
               `;
      }
      console.log(Newdata);
      document.getElementById("ShowFeed").innerHTML = cartona;
      document.getElementById("TotalFeedback").innerText = Newdata.length;
    });
})();
function NumberOfOffers() {
  let Newdata = fetch(`${localStorage.getItem("API")}/NumberOfOffers/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((Newdata) => {
      document.getElementById("TotalAgent").innerText = Newdata.length;
    });
}
