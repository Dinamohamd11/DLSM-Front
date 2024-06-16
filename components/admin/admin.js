async function Shipping() {
    document.getElementById("scrollme").innerHTML = `
    <table class="table">
        <thead>
            <tr id="thead">
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    `;
    const response = await fetch(`${localStorage.getItem('API')}/shipping_companies`);
    var data = await response.json();
    let cartona = `
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Website</th>
    <th scope="col">PhoneNumber</th>
    <th scope="col">Address</th>
    <th scope="col">BusinessHistory</th>
    <th scope="col">BusinessHours</th>
    <th scope="col">Created_at</th>
    <th scope="col">Update_at</th>
    `;
    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < data.length; i++) {
        carton += `
    <tr> 
        <th scope="row">${data[i].Name}</th>
        <td>${data[i].Email}</td>
        <td>${data[i].Website}</td>
        <td>${data[i].PhoneNumber}</td>
        <td>${data[i].Address}</td>
        <td>${data[i].BusinessHistory}</td>
        <td>${data[i].BusinessHours}</td>
        <td>${data[i].created_at}</td>
        <td>${data[i].updated_at}</td>
    </tr>`;
    }
    document.getElementById("tbody").innerHTML = carton;
}
async function Factory() {
    document.getElementById("scrollme").innerHTML = `
    <table class="table">
        <thead>
            <tr id="thead">
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    `;
    const Allresponse = await fetch(`${localStorage.getItem('API')}/All_Clients`);
    var Alldata = await Allresponse.json();
    let cartona = `
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Website</th>
    <th scope="col">PhoneNumber</th>
    <th scope="col">Address</th>
    <th scope="col">CountryDealing</th>
    <th scope="col">CountryTarget</th>
    <th scope="col">Created_at</th>
    <th scope="col">Update_at</th>
    `;
    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < Alldata.length; i++) {
        if (Alldata[i].TypeOfClient == 3) {
            carton += `
                <tr> 
                    <th scope="row">${Alldata[i].Name}</th>
                    <td>${Alldata[i].Email}</td>
                    <td>${Alldata[i].Website}</td>
                    <td>${Alldata[i].PhoneNumber}</td>
                    <td>${Alldata[i].Address}</td>
                    <td>${Alldata[i].CountryDealing}</td>
                    <td>${Alldata[i].CountryTarget}</td>
                    <td>${Alldata[i].created_at}</td>
                    <td>${Alldata[i].updated_at}</td>
                </tr>`;
        }
    }
    document.getElementById("tbody").innerHTML = carton;
}
async function Clients() {
    document.getElementById("scrollme").innerHTML = `
    <table class="table">
        <thead>
            <tr id="thead">
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    `;
    const Allresponse = await fetch(`${localStorage.getItem('API')}/All_Clients`);
    var data = await Allresponse.json();
    let cartona = `
    <th scope="col">Name</th>
    <th scope="col">Email</th>

    <th scope="col">SSN</th>
    <th scope="col">PhoneNumber</th>

    <th scope="col">Nationality</th>
  
    `;
    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].TypeOfClient == 1) {
            carton += `
    <tr> 
        <th scope="row">${data[i].Name}</th>
        <td>${data[i].Email}</td>
  
        <td>${data[i].SSN}</td>
              <td>${data[i].PhoneNumber}</td>

        <td>${data[i].Nationality}</td>
    </tr>`;
        }
    }
    document.getElementById("tbody").innerHTML = carton;
}

async function ExportImport() {
    document.getElementById("scrollme").innerHTML = `
    <table class="table">
        <thead>
            <tr id="thead">
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    `;
    const Allresponse = await fetch(`${localStorage.getItem('API')}/All_Clients`);
    var data = await Allresponse.json();
    let cartona = `
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">PhoneNumber</th>
    <th scope="col">Address</th>
    <th scope="col">Website</th>
    <th scope="col">TaxCard</th>
    <th scope="col">CommercialRecord</th>
    <th scope="col">IndustrialRecord</th>
    <th scope="col">CountryDealing</th>
    <th scope="col">CountryTarget</th>
    `;
    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].TypeOfClient == 2) {
            carton += `
                <tr> 
                    <th scope="row">${data[i].Name}</th>
                    <td>${data[i].Email}</td>
                    <td>${data[i].PhoneNumber}</td>
                    <td>${data[i].Address}</td>
                    <td>${data[i].Website}</td>
                    <td>${data[i].TaxCard}</td>
                    <td>${data[i].CommercialRecord}</td>
                    <td>${data[i].IndustrialRecord}</td>
                    <td>${data[i].CountryDealing}</td>
                    <td>${data[i].CountryTarget}</td>
                </tr>`;
        }
    }
    document.getElementById("tbody").innerHTML = carton;
}

async function Requests() {
    document.getElementById("scrollme").innerHTML = `
    <div class="buttonAdmin pt-3"> 
        <button class = "btn "onclick="DHL()">DHL</button>
        <button class = "btn "onclick="Wild()">International ( Wild )</button>
        <button class = "btn "onclick="Sea()">International ( Sea )</button>
        <button class = "btn "onclick="Air()">International ( Air )</button>
        <button class = "btn "onclick="Local()">Local</button>
    </div>
      <table class="table mt-4">
        <thead>
            <tr id="thead">
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
      </table>
    `;
}
async function DHL() {
    const response = await fetch(`${localStorage.getItem('API')}/requests`);
    var data = await response.json();
    let cartona = `
    <th scope="col">Location</th>
    <th scope="col">Destination</th>
    <th scope="col">Comment</th>
    <th scope="col">GoodsType</th>
    `;
    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].TypeOfRequest == 1) {
            carton += `
    <tr> 
        <th scope="row">${data[i].Location}</th>
        <td>${data[i].Destination}</td>
        <td>${data[i].Comment}</td>
        <td>${data[i].GoodsType}</td>
    </tr>`;
        }
    }
    document.getElementById("tbody").innerHTML = carton;
}

async function Wild() {
    const response = await fetch(`${localStorage.getItem('API')}/requests`);
    var data = await response.json();
    let cartona = `
    <th scope="col">Location</th>
    <th scope="col">Destination</th>
    <th scope="col">Comment</th>
    <th scope="col">GoodsType</th>
    <th scope="col">Width</th>
    <th scope="col">Height</th>
    <th scope="col">Weight</th>
    <th scope="col">Length</th>
    <th scope="col">TypesOfTruck</th>
    <th scope="col">WeightOfSingleCarton</th>
    `;
    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].TypeOfInternational == 1) {
            carton += `
                <tr> 
                     <th scope="row">${data[i].Location}</th>
                     <td>${data[i].Destination}</td>
                     <td>${data[i].Comment}</td>
                     <td>${data[i].GoodsType}</td>
                     <td>${data[i].Width}</td>
                     <td>${data[i].Height}</td>
                     <td>${data[i].Weight}</td>
                     <td>${data[i].Length}</td>
                     <td>${data[i].TypesOfTruck}</td>
                     <td>${data[i].WeightOfSingleCarton}</td>
                </tr>`;
        }
    }
    document.getElementById("tbody").innerHTML = carton;
}

async function Sea() {
    const response = await fetch(`${localStorage.getItem('API')}/requests`);
    var data = await response.json();
    let cartona = `
    <th scope="col">Location</th>
    <th scope="col">Destination</th>
    <th scope="col">Comment</th>
    <th scope="col">GoodsType</th>
    <th scope="col">Weight</th>
    <th scope="col">Length</th>
    <th scope="col">Width</th>
    <th scope="col">Height</th>
    <th scope="col">ContainerTypeAndSize</th>
    <th scope="col">NumberOfContainer</th>
    `;
    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].TypeOfInternational == 2) {
            carton += `
    <tr> 
                     <th scope="row">${data[i].Location}</th>
                     <td>${data[i].Destination}</td>
                     <td>${data[i].Comment}</td>
                     <td>${data[i].GoodsType}</td>
                     <td>${data[i].Weight}</td>
                     <td>${data[i].Length}</td>
                     <td>${data[i].Width}</td>
                     <td>${data[i].Height}</td>
                     <td>${data[i].ContainerTypeAndSize}</td>
                     <td>${data[i].NumberOfContainer}</td>
    </tr>`;
        }
    }
    document.getElementById("tbody").innerHTML = carton;
}

async function Air() {
    const response = await fetch(`${localStorage.getItem('API')}/requests`);
    var data = await response.json();
    let cartona = `
    <th scope="col">Location</th>
    <th scope="col">Destination</th>
    <th scope="col">Comment</th>
    <th scope="col">GoodsType</th>
    <th scope="col">Weight</th>
    <th scope="col">Length</th>
    <th scope="col">Width</th>
    <th scope="col">Height</th>
    <th scope="col">ContainerTypeAndSize</th>
    <th scope="col">NumberOfContainer</th>
    `;
    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].TypeOfInternational == 3) {
            carton += `
    <tr> 
                     <th scope="row">${data[i].Location}</th>
                     <td>${data[i].Destination}</td>
                     <td>${data[i].Comment}</td>
                     <td>${data[i].GoodsType}</td>
                     <td>${data[i].Weight}</td>
                     <td>${data[i].Length}</td>
                     <td>${data[i].Width}</td>
                     <td>${data[i].Height}</td>
                     <td>${data[i].ContainerTypeAndSize}</td>
                     <td>${data[i].NumberOfContainer}</td>
    </tr>`;
        }
    }
    document.getElementById("tbody").innerHTML = carton;
}

async function Local() {
    const response = await fetch(`${localStorage.getItem('API')}/requests`);
    var data = await response.json();
    let cartona = `
    <th scope="col">Country</th>
    <th scope="col">Location</th>
    <th scope="col">Destination</th>
    <th scope="col">GoodsType</th>
    <th scope="col">Weight</th>
    <th scope="col">comment</th>

    `;
    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].TypeOfRequest == 3) {
            carton += `
                        <tr> 
                                        <th scope="row">${data[i].Country}</th>
                                        <td>${data[i].Location}</td>
                                        <td>${data[i].Destination}</td>
                                        <td>${data[i].GoodsType}</td>
                                        <td>${data[i].Weight}</td>
                                        <td>${data[i].comment}</td>
                                    
                        </tr>`;
        }
    }
    document.getElementById("tbody").innerHTML = carton;
}
async function Offers() {
    document.getElementById("scrollme").innerHTML = `
    <table class="table">
        <thead>
            <tr id="thead">
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    `;
    const response = await fetch(`${localStorage.getItem('API')}/offers`);
    var data = await response.json();
    console.log(data);
    let cartona = `
        <th scope="col">Price</th>
        <th scope="col">PL</th>
        <th scope="col">TT</th>
        <th scope="col">FT</th>
        <th scope="col">OF</th>
        <th scope="col">THC</th>
        <th scope="col">ExtraFees</th>
        <th scope="col">PowerPerDay</th>
        <th scope="col">request_id</th>
        `;

    document.getElementById("thead").innerHTML = cartona;
    let carton = ``;
    for (let i = 0; i < data.length; i++) {
        carton += `
                <tr> 
                     <th scope="row">${data[i].Price}</th>
                     <td>${data[i].PL}</td>
                     <td>${data[i].TT}</td>
                     <td>${data[i].FT}</td>
                     <td>${data[i].OF}</td>
                     <td>${data[i].THC}</td>
                     <td>${data[i].ExtraFees}</td>
                     <td>${data[i].PowerPerDay}</td>
                     <td>${data[i].request_id}</td>
                </tr>`;
    }
    document.getElementById("tbody").innerHTML = carton;
}
