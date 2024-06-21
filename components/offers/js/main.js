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
      .then((all) => {
        console.log(all);
        let data;
        if (all.request) data = all.request;
        else data = all;
        console.log(data);
        document.getElementById("From").value = `${data.Country} (${data.Location})`;
        document.getElementById("To").value = `${data.Country} (${data.Destination})`;
        let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
        document.getElementById("HeaderRequest").innerHTML = `    
        <div class="col-lg-4">
        <h2>Local Request</h2>
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
   
   <div class="col-lg-4">
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
      });
  } else if (TypeOfRequest == 2) {
    // International
    fetch(`${localStorage.getItem("API")}/requests/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.request) data = data.request;
        else data = data;

        document.getElementById("From").value = `${data.Country} (${data.Location})`;
        document.getElementById("To").value = `${data.Country} (${data.Destination})`;
        if (data.TypeOfInternational == 1) {
          // WILD
          let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
          document.getElementById("HeaderRequest").innerHTML = `<div class="col-lg-6 ps-5">
            <h2>International (WILD) Request</h2>
            <div class="info ">
                <span>Location:</span>
                <h6> ${data.Location} (${data.Destination})</h6>
            </div>
            <div class="info ">
                <span>Destination:</span>
                <h6> ${data.Location2} (${data.Destination2})</h6>
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

          document.getElementById("From").value = `${data.Country} (${data.Location})`;
          document.getElementById("To").value = `${data.Country} (${data.Destination})`;
          let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
          document.getElementById("HeaderRequest").innerHTML = `    
            <div class="col-lg-6 ps-5">
            <h2>International (SEA) Request</h2>

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

          document.getElementById("From").value = `${data.Country} (${data.Location})`;
          document.getElementById("To").value = `${data.Country} (${data.Destination})`;
          let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
          document.getElementById("HeaderRequest").innerHTML = `    
            <div class="col-lg-6 ps-5">
            <h2>International (AIR) Request</h2>

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
      });
  } else if (TypeOfRequest == 1) {
    // Local Request
    fetch(`${localStorage.getItem("API")}/requests/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.request) data = data.request;
        else data = data;

        console.log(data);

        document.getElementById("From").value = `${data.Location} (${data.Destination})`;
        document.getElementById("To").value = `${data.Location2} (${data.Destination2})`;
        console.log(data);
        let Safe = `<div class="info "><span>Safety:</span><h6>${data.Safety}</h6></div>`;
        document.getElementById("HeaderRequest").innerHTML = `    
        <div class="col-lg-4">

       <div class="info ">
           <span>Location:</span>
           <h6> ${data.Location} (${data.Destination})</h6>
       </div>
       <div class="info ">
            <span>Destination:</span>
            <h6> ${data.Location2} (${data.Destination2})</h6>
        </div>
        <div class="info ">
           <span>Location:</span>
           <h6> ${data.Location2}</h6>
       </div>
       <div class="info ">
            <span>Destination:</span>
            <h6> ${data.Destination2}</h6>
        </div>
        <div class="info ">
            <span>Notes:</span>
            <h6>${data.Comment}</h6>
        </div>
        
   </div>
   
   <div class="col-lg-4">
       <div class="imgofer">
           <img src="../../Image/about-img-2-1.jpg">
       </div>
       <div class="info">
           <span>Good Types:</span>
           <h6>${data.GoodsType}</h6>
       </div>
       
                </div>
                `;
      });
  }
})();

function SendOffer() {
  let dataPost = {
    From: document.getElementById("From").value,
    To: document.getElementById("To").value,
    Price: document.getElementById("Price").value,
    TT: document.getElementById("TT").value,
    FT: document.getElementById("FT").value,
    OF: document.getElementById("OF").value,
    THC: document.getElementById("THC").value,
    PL: document.getElementById("PL").value,
    Comment: document.getElementById("Comment").value,
    PowerPerDay: document.getElementById("PowerPerDay").value,
    ExtraFees: document.getElementById("ExtraFees").value,
    CustomsPrice: document.getElementById("CustomsPrice").value,
    TruckingPrice: document.getElementById("TruckingPrice").value,
    request_id: JSON.parse(localStorage.getItem("CurrentReq")).id,
    agents_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
  };
  const apiUrl = `${localStorage.getItem("API")}/offers-create`;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataPost),
  };
  console.log(dataPost);
  fetch(apiUrl, requestOptions)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      location.href = "http://127.0.0.1:5502/components/allRequest/allRequest.html";
    });
}
