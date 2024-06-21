(function Main() {
    document.getElementById("HeaderRequest").innerHTML;
    let { id, TypeOfRequest } = JSON.parse(localStorage.getItem("CurrentReq"));
    console.log(id);
    console.log(TypeOfRequest);
    if (TypeOfRequest == 3) {
        // Local Request
        fetch(`${localStorage.getItem("API")}/requests/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.request) data = data.request;
                else data = data;
                let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
                document.getElementById("NameRequest").innerText = "Local Request";
                document.getElementById("HeaderRequest").innerHTML = `    
        <div class="col-lg-6 ps-5">
          <div class="info ">
           <span>Country:</span>
           <h6>${data.Country}</h6>
       </div>
       <div class="info ">
           <span>Location:</span>
           <h6> ${data.Location}</h6>
       </div>
       <div class="info ">
            <span>Destination:</span>
            <h6> ${data.Destination}</h6>
        </div>
       
        <div class="info ">
        <span>Weight:</span>
        <h6>${data.Weight}</h6>
        </div>
        ${data.Safety != null ? Safe : ""}
        
        <div class="info ">
            <span>Notes:</span>
            <h6>${data.Comment}</h6>
        </div>
       
   </div>
   
   <div class="col-lg-6">
       <div class="imgofer">
           <img src="../../Image/about-img-2-1.jpg">
       </div>
       <div class="info">
           <span>Good Types:</span>
           <h6>${data.GoodsType}</h6>
       </div>
       <div class="info ">
           <span>Prefer Type:</span>
           <h6> Clothes</h6>
       </div>
   
                </div>
                `;
                displayOffer();
            });
    } else if (TypeOfRequest == 2) {
        // International
        fetch(`${localStorage.getItem("API")}/requests/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((alldata) => {
                console.log(alldata);
                let data = alldata;
                if (data.TypeOfInternational == 1) {
                    // WILD
                    let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
                    document.getElementById("NameRequest").innerText =
                        "International (Wild) Request";
                    document.getElementById("HeaderRequest").innerHTML = `    
              <div class="col-lg-6 ps-5">
          
             <div class="info ">
                 <span>Location:</span>
                 <h6> ${data.Location}</h6>
             </div>
             <div class="info ">
                  <span>Destination:</span>
                  <h6> ${data.Destination}</h6>
              </div>
              <div class="info ">
              <span>Weight:</span>
              <h6>${data.Weight}</h6>
              </div>
              <div class="info ">
              <span>Length:</span>
              <h6>${data.Length}</h6>
              </div>
              <div class="info ">
              <span>Height:</span>
              <h6>${data.Height}</h6>
              </div>
              <div class="info ">
              <span>Width:</span>
              <h6>${data.Width}</h6>
              </div>  
              ${data.Safety != null ? Safe : ""}
              
              
              <div class="info ">
                  <span>Notes:</span>
                  <h6>${data.Comment}</h6>
              </div>
             
         </div>
         
         <div class="col-lg-6">
             <div class="imgofer">
                 <img src="../../Image/about-img-2-1.jpg">
             </div>
             <div class="info">
                 <span>Good Types:</span>
                 <h6>${data.GoodsType}</h6>
             </div>
             
             <div class="info ">
             <span>TypesOfTruck:</span>
             <h6>${data.TypesOfTruck}</h6>
         </div>
         
         <div class="info ">
         <span>WeightOfSingleCarton:</span>
         <h6>${data.WeightOfSingleCarton}</h6>
     </div>
         
                      </div>
                      `;
                } else if (data.TypeOfInternational == 2) {
                    // SEA
                    let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
                    document.getElementById("NameRequest").innerText =
                        "International (Sea) Request";
                    document.getElementById("HeaderRequest").innerHTML = `    
              <div class="col-lg-6 ps-5">
          
             <div class="info ">
                 <span>Location:</span>
                 <h6> ${data.Location}</h6>
             </div>
             <div class="info ">
                  <span>Destination:</span>
                  <h6> ${data.Destination}</h6>
              </div>
              <div class="info ">
              <span>Weight:</span>
              <h6>${data.Weight}</h6>
              </div>
              <div class="info ">
              <span>Length:</span>
              <h6>${data.Length}</h6>
              </div>
              <div class="info ">
              <span>Height:</span>
              <h6>${data.Height}</h6>
              </div>
              <div class="info ">
              <span>Width:</span>
              <h6>${data.Width}</h6>
              </div>  
              ${data.Safety != null ? Safe : ""}
              
              
              <div class="info ">
                  <span>Notes:</span>
                  <h6>${data.Comment}</h6>
              </div>
             
         </div>
         
         <div class="col-lg-6">
             <div class="imgofer">
                 <img src="../../Image/about-img-2-1.jpg">
             </div>
             <div class="info">
                 <span>Good Types:</span>
                 <h6>${data.GoodsType}</h6>
             </div>
             
             <div class="info ">
             <span>ContainerTypeAndSize:</span>
             <h6>${data.ContainerTypeAndSize}</h6>
         </div>
         
         <div class="info ">
         <span>NumberOfContainer:</span>
         <h6>${data.NumberOfContainer}</h6>
     </div>
         
                      </div>
                      `;
                } else if (data.TypeOfInternational == 3) {
                    // AIR
                    let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
                    document.getElementById("NameRequest").innerText =
                        "International (Air) Request";
                    document.getElementById("HeaderRequest").innerHTML = `    
              <div class="col-lg-6 ps-5">
          
             <div class="info ">
                 <span>Location:</span>
                 <h6> ${data.Location}</h6>
             </div>
             <div class="info ">
                  <span>Destination:</span>
                  <h6> ${data.Destination}</h6>
              </div>
              <div class="info ">
              <span>Weight:</span>
              <h6>${data.Weight}</h6>
              </div>
              <div class="info ">
              <span>Length:</span>
              <h6>${data.Length}</h6>
              </div>
              <div class="info ">
              <span>Height:</span>
              <h6>${data.Height}</h6>
              </div>
              <div class="info ">
              <span>Width:</span>
              <h6>${data.Width}</h6>
              </div>  
              ${data.Safety != null ? Safe : ""}
              
              
              <div class="info ">
                  <span>Notes:</span>
                  <h6>${data.Comment}</h6>
              </div>
             
         </div>
         
         <div class="col-lg-6">
             <div class="imgofer">
                 <img src="../../Image/about-img-2-1.jpg">
             </div>
             <div class="info">
                 <span>Good Types:</span>
                 <h6>${data.GoodsType}</h6>
             </div>
             
             <div class="info ">
             <span>NumberOfCartons:</span>
             <h6>${data.NumberOfCartons}</h6>
         </div>
         
         <div class="info ">
         <span>WeightOfSingleCarton:</span>
         <h6>${data.WeightOfSingleCarton}</h6>
     </div>
         
                      </div>
                      `;
                }
                data = alldata.request;
                console.log(data);
                if (data.TypeOfInternational == 1) {
                    // WILD
                    let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
                    document.getElementById("NameRequest").innerText =
                        "International (Wild) Request";
                    document.getElementById("HeaderRequest").innerHTML = `    
            <div class="col-lg-6 ps-5">
        
           <div class="info ">
               <span>Location:</span>
               <h6> ${data.Location}</h6>
           </div>
           <div class="info ">
                <span>Destination:</span>
                <h6> ${data.Destination}</h6>
            </div>
            <div class="info ">
            <span>Weight:</span>
            <h6>${data.Weight}</h6>
            </div>
            <div class="info ">
            <span>Length:</span>
            <h6>${data.Length}</h6>
            </div>
            <div class="info ">
            <span>Height:</span>
            <h6>${data.Height}</h6>
            </div>
            <div class="info ">
            <span>Width:</span>
            <h6>${data.Width}</h6>
            </div>  
            ${data.Safety != null ? Safe : ""}
            
            
            <div class="info ">
                <span>Notes:</span>
                <h6>${data.Comment}</h6>
            </div>
           
       </div>
       
       <div class="col-lg-6">
           <div class="imgofer">
               <img src="../../Image/about-img-2-1.jpg">
           </div>
           <div class="info">
               <span>Good Types:</span>
               <h6>${data.GoodsType}</h6>
           </div>
           
           <div class="info ">
           <span>TypesOfTruck:</span>
           <h6>${data.TypesOfTruck}</h6>
       </div>
       
       <div class="info ">
       <span>WeightOfSingleCarton:</span>
       <h6>${data.WeightOfSingleCarton}</h6>
   </div>
       
                    </div>
                    `;
                } else if (data.TypeOfInternational == 2) {
                    // SEA
                    let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
                    document.getElementById("NameRequest").innerText =
                        "International (Sea) Request";
                    document.getElementById("HeaderRequest").innerHTML = `    
            <div class="col-lg-6 ps-5">
        
           <div class="info ">
               <span>Location:</span>
               <h6> ${data.Location}</h6>
           </div>
           <div class="info ">
                <span>Destination:</span>
                <h6> ${data.Destination}</h6>
            </div>
            <div class="info ">
            <span>Weight:</span>
            <h6>${data.Weight}</h6>
            </div>
            <div class="info ">
            <span>Length:</span>
            <h6>${data.Length}</h6>
            </div>
            <div class="info ">
            <span>Height:</span>
            <h6>${data.Height}</h6>
            </div>
            <div class="info ">
            <span>Width:</span>
            <h6>${data.Width}</h6>
            </div>  
            ${data.Safety != null ? Safe : ""}
            
            
            <div class="info ">
                <span>Notes:</span>
                <h6>${data.Comment}</h6>
            </div>
           
       </div>
       
       <div class="col-lg-6">
           <div class="imgofer">
               <img src="../../Image/about-img-2-1.jpg">
           </div>
           <div class="info">
               <span>Good Types:</span>
               <h6>${data.GoodsType}</h6>
           </div>
           
           <div class="info ">
           <span>ContainerTypeAndSize:</span>
           <h6>${data.ContainerTypeAndSize}</h6>
       </div>
       
       <div class="info ">
       <span>NumberOfContainer:</span>
       <h6>${data.NumberOfContainer}</h6>
   </div>
       
                    </div>
                    `;
                } else if (data.TypeOfInternational == 3) {
                    // AIR
                    let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
                    document.getElementById("NameRequest").innerText =
                        "International (Air) Request";
                    document.getElementById("HeaderRequest").innerHTML = `    
            <div class="col-lg-6 ps-5">
        
           <div class="info ">
               <span>Location:</span>
               <h6> ${data.Location}</h6>
           </div>
           <div class="info ">
                <span>Destination:</span>
                <h6> ${data.Destination}</h6>
            </div>
            <div class="info ">
            <span>Weight:</span>
            <h6>${data.Weight}</h6>
            </div>
            <div class="info ">
            <span>Length:</span>
            <h6>${data.Length}</h6>
            </div>
            <div class="info ">
            <span>Height:</span>
            <h6>${data.Height}</h6>
            </div>
            <div class="info ">
            <span>Width:</span>
            <h6>${data.Width}</h6>
            </div>  
            ${data.Safety != null ? Safe : ""}
            
            
            <div class="info ">
                <span>Notes:</span>
                <h6>${data.Comment}</h6>
            </div>
           
       </div>
       
       <div class="col-lg-6">
           <div class="imgofer">
               <img src="../../Image/about-img-2-1.jpg">
           </div>
           <div class="info">
               <span>Good Types:</span>
               <h6>${data.GoodsType}</h6>
           </div>
           
           <div class="info ">
           <span>NumberOfCartons:</span>
           <h6>${data.NumberOfCartons}</h6>
       </div>
       
       <div class="info ">
       <span>WeightOfSingleCarton:</span>
       <h6>${data.WeightOfSingleCarton}</h6>
   </div>
       
                    </div>
                    `;
                }
                displayOffer();
            });
    } else if (TypeOfRequest == 1) {
        // Local Request
        fetch(`${localStorage.getItem("API")}/requests/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
                document.getElementById("NameRequest").innerText = "DHL Request";
                document.getElementById("HeaderRequest").innerHTML = `    
        <div class="col-lg-6 ps-5">

       <div class="info ">
           <span>Location:</span>
           <h6> ${data.Location}</h6>
       </div>
       <div class="info ">
            <span>Destination:</span>
            <h6> ${data.Destination}</h6>
        </div>
        <div class="info ">
            <span>Notes:</span>
            <h6>${data.Comment}</h6>
        </div>
       
        <div class="info">
        <span>Good Types:</span>
        <h6>${data.GoodsType}</h6>
    </div>
    
   </div>
   
   <div class="col-lg-6">
       <div class="imgofer">
           <img src="../../Image/about-img-2-1.jpg">
       </div>
                </div>
                `;
                displayOffer();
                data = data.request;
                Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
                document.getElementById("NameRequest").innerText = "DHL Request";
                document.getElementById("HeaderRequest").innerHTML = `    
        <div class="col-lg-6 ps-5">

       <div class="info ">
           <span>Location:</span>
           <h6> ${data.Location}</h6>
       </div>
       <div class="info ">
            <span>Destination:</span>
            <h6> ${data.Destination}</h6>
        </div>
        <div class="info ">
            <span>Notes:</span>
            <h6>${data.Comment}</h6>
        </div>
       
        <div class="info">
        <span>Good Types:</span>
        <h6>${data.GoodsType}</h6>
    </div>
    
   </div>
   
   <div class="col-lg-6">
       <div class="imgofer">
           <img src="../../Image/about-img-2-1.jpg">
       </div>
                </div>
                `;
                displayOffer();
            });
    }
})();

function AcceptOffer(offer_id) {
    let { id } = JSON.parse(localStorage.getItem("CurrentReq"));
    fetch(`${localStorage.getItem("API")}/offer-accept/${id}/${offer_id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            location.href = "http://127.0.0.1:5502/components/allOffers/allOffers.html";
        });
}
function displayOffer() {
    let { id } = JSON.parse(localStorage.getItem("CurrentReq"));
    fetch(`${localStorage.getItem("API")}/requests/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            if (data.request.ACCEPT == 1) displayAcceptWithProcess(data.request.ACCEPT_ID);
            else GetOffers();
        });
}
function displayAcceptWithProcess(offer_id) {
    fetch(`${localStorage.getItem("API")}/offers/${offer_id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let cartoona = "";
            cartoona += `
                <div class="col-lg-6">
            <div class="cardReq pt-3 mt-4 rounded-4">
                <div class="text text-center pb-4">
                    <h2 class="pb-2 pt-3">Offer</h2>
                    <div class="elementor">
                        <span class="elementor-divider"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 ps-5">
                        
                        <div class="d-flex req">
                            <span>From:</span>
                            <h5>${data.From}</h5>
                        </div>
                        <div class="d-flex req">
                            <span>Price:</span>
                            <h5>${data.Price}.00$</h5>

                        </div>
                        <div class="d-flex req">
                            <span>PL:</span>
                            <h5>${data.PL}.00$</h5>

                        </div>
                        <div class="d-flex req">
                            <span>TT:</span>
                            <h5>${data.TT}.00$</h5>

                        </div>

                        <div class="d-flex req">
                            <span>THC:</span>
                            <h5>${data.THC}.00$</h5>

                        </div>
                      <div class="d-flex req">
                            <span>Name:</span>
                            <h5>
                            <a href="http://127.0.0.1:5502/components/searchProfile/searchProfile.html?id=${offer_id};" style="color:white">
                            ${data.agent.shipping_company.Name}
                            </a>
                            </h5>
                        </div>
                        
                        <div class="d-flex req">
                            <span>Customs Price:</span>
                            <h5>${data.CustomsPrice}</h5>

                        </div>
                    </div>
                    <div class="col-6">
                    <div class="d-flex req">
                    <span>To:</span>
                    <h5>${data.TO}</h5>
                </div>
                    <div class="d-flex req">
                        <span>FT:</span>
                        <h5>${data.FT}.00$</h5>
                    </div>
                        <div class="d-flex req">
                            <span>Power Per Day:</span>
                            <h5>${data.PowerPerDay}.00$</h5>
                        </div>
                        <div class="d-flex req">
                            <span>OF:</span>
                            <h5>${data.OF}.00$</h5>
                        </div>
                        <div class="d-flex req">
                            <span>Extra Fees:</span>
                            <h5>${data.ExtraFees}.00$</h5>
                        </div>
                        <div class="d-flex req">
                        <span>BusinessHistory:</span>
                        <h5>${data.agent.shipping_company.BusinessHistory}</h5>

                    </div>
                    <div class="d-flex req">
                        <span>Trucking Price:</span>
                        <h5>${data.TruckingPrice}</h5>

                    </div>
                    </div>
                </div>
                <div class="giveOffer  text-center m-3">
                    <a >
                        <button class="bg-success" onclick="Goto_Process()">Process </button>
                    </a>
                </div>
            </div>
        </div>
                `;
            document.getElementById("AllOffers").innerHTML = cartoona;
        });
}
function Goto_Process() {
    location.href = "http://127.0.0.1:5502/components/processUser/procsessUser.html";
}
function GetOffers() {
    fetch(`${localStorage.getItem("API")}/offersNotAccept`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let cartoona = ``;
            let { id } = JSON.parse(localStorage.getItem("CurrentReq"));
            for (let i = 0; i < data.length; i++) {
                if (data[i].request.id == id)
                    cartoona += `
                <div class="col-lg-6">
            <div class="cardReq pt-3 mt-4 rounded-4">
                <div class="text text-center pb-4">
                    <h2 class="pb-2 pt-3">Offer</h2>
                    <div class="elementor">
                        <span class="elementor-divider"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 ps-5">
                        
                        <div class="d-flex req">
                            <span>From:</span>
                            <h5>${data[i].From}</h5>
                        </div>
                        <div class="d-flex req">
                            <span>Price:</span>
                            <h5>${data[i].Price}.00$</h5>

                        </div>
                        <div class="d-flex req">
                            <span>PL:</span>
                            <h5>${data[i].PL}.00$</h5>

                        </div>
                        <div class="d-flex req">
                            <span>TT:</span>
                            <h5>${data[i].TT}.00$</h5>

                        </div>

                        <div class="d-flex req">
                            <span>THC:</span>
                            <h5>${data[i].THC}.00$</h5>

                        </div>
                        <div class="d-flex req">
                            <span>Name:</span>
                            <h5>
                            <a href="http://127.0.0.1:5502/components/searchProfile/searchProfile.html?id=${
                                i + 1
                            };" style="color:white">
                            ${data[i].agent.shipping_company.Name}
                            </a>
                            </h5>
                        </div>
                        
                        <div class="d-flex req">
                            <span>Customs Price:</span>
                            <h5>${data[i].CustomsPrice}</h5>

                        </div>
                    </div>
                    <div class="col-6">
                    <div class="d-flex req">
                    <span>To:</span>
                    <h5>${data[i].TO}</h5>
                </div>
                    <div class="d-flex req">
                        <span>FT:</span>
                        <h5>${data[i].FT}.00$</h5>
                    </div>
                        <div class="d-flex req">
                            <span>Power Per Day:</span>
                            <h5>${data[i].PowerPerDay}.00$</h5>
                        </div>
                        <div class="d-flex req">
                            <span>OF:</span>
                            <h5>${data[i].OF}.00$</h5>
                        </div>
                        <div class="d-flex req">
                            <span>Extra Fees:</span>
                            <h5>${data[i].ExtraFees}.00$</h5>
                        </div>
                        <div class="d-flex req">
                        <span>BusinessHistory:</span>
                        <h5>${data[i].agent.shipping_company.BusinessHistory}</h5>

                    </div>
                    <div class="d-flex req">
                        <span>Trucking Price:</span>
                        <h5>${data[i].TruckingPrice}</h5>

                    </div>
                    </div>
                </div>
                <div class="giveOffer  text-center m-3">
                    <a >
                        <button class="bg-success" onclick="AcceptOffer(${
                            data[i].id
                        })">Accept </button>
                    </a>
                    <a >
                        <button class="bg-danger">Reject </button>
                    </a>
                </div>
            </div>
        </div>
                `;
            }
            document.getElementById("AllOffers").innerHTML = cartoona;
        });
}
