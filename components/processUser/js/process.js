let current_Process;
(function Deliver(url) {
    fetch(`${localStorage.getItem("API")}/current_Process/1`)
        .then((response) => {
            return response.json();
        })
        .then((Newdata) => {
            current_Process = Newdata;
            console.log(current_Process);
        });
})();
let Number_Star = 0;
let feedback = `
<div class="option d-flex justify-content-center d-none">
    <div class="imgg rounded-5">
        <div class="layer rounded-5">
            <h5>Your feedBack is important to us</h5>

            <div class="rating text-center">
                <i class="rating__star far fa-star" id="S_1" onclick="Star(1)"></i>
                <i class="rating__star far fa-star" id="S_2" onclick="Star(2)"></i>
                <i class="rating__star far fa-star" id="S_3" onclick="Star(3)"></i>
                <i class="rating__star far fa-star" id="S_4" onclick="Star(4)"></i>
                <i class="rating__star far fa-star" id="S_5" onclick="Star(5)"></i>
            </div>
            <div class="feedBack pb-5 ">
                <textarea name="message" class="form-control rounded-0" placeholder="Feedback" id="FeedBackText"
                    style="height: 109px;"></textarea>
            </div>
            <div class="sendFeedback text-center">
                <button class="btn" onclick="sendFeedback()">SEND</button>
            </div>
        </div>

    </div>
</div>`;

first(JSON.parse(localStorage.getItem("CurrentReq")).id);
function first(id) {
    fetch(`${localStorage.getItem("API")}/requests/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            dis(data);
            document.getElementById("CONTAINER").innerHTML = cartona = `
                <div class="row ">
                <div class="col-lg-6 ">
                    <div class="shipper">
                        <strong> Shipper Information</strong>
                    </div>
                    <div class="ship-info">
                        <label>Name : <a href="http://127.0.0.1:5502/components/searchProfile/searchProfile.html?id=${
                            data.agent.shipping_company.id
                        };" style="color:black">
                            ${data.agent.shipping_company.Name}
                            </a>
                            </label>
                        
                        <label>Website : <a href='${
                            data.agent.shipping_company.Website
                        }' target='blank'>${data.agent.shipping_company.Name}</a></label>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="shipper">
                        <strong> Client Information</strong>
                    </div>
                    <div class="ship-info">
                        <label>Name : ${data.request.client.Name}</label>
                        <label>Phone Number : ${data.request.client.PhoneNumber}</label>
                        <label>Email : ${data.request.client.Email}</label>
                    </div>
                </div>
            </div>
            <div id="shipment-status" class="wpcargo-row " style="text-align:center; ">
                <p id="result-status-header">Shipment Status: </p>
            </div>
            <div class="shippment-info pb-5">
                <div class="shippment-Heading">
                    <strong>Shipment Information </strong>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <div class="data-shipp">
                            <label>From : ${data.request.Location}</label>

                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="data-shipp">
                            <label>To : ${data.request.Location2}</label>

                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="data-shipp">
                            <label>GoodsType : ${data.request.GoodsType}</label>
                            <label>Safety Sheet : ${
                                data.request.Safety
                                    ? data.request.Safety
                                    : "There's No Safety Sheet"
                            }</label>
                            <label>Comment : ${
                                data.request.Comment ? data.request.Comment : "There's No Comment"
                            }</label>
                        </div>
                    </div>

                </div>
            </div>
            <section class="map pb-5 pt-5 w-50">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.442730674085!2d31.336312275013075!3d30.110142415456004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815c0c8cd563f%3A0xe0e9785b0e9bef7d!2z2LDZg9ix2YrYp9iq!5e0!3m2!1sen!2seg!4v1710249090018!5m2!1sen!2seg"
                    width="1315" height="520" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            `;
        });
}
function dis(all) {
    let data = all.request;

    if (data.BestCase == 6) {
        feedback = `
<div class="option d-flex justify-content-center">
    <div class="imgg rounded-5">
        <div class="layer rounded-5">
            <h5>Your feedBack is important to us</h5>
            <div class="rating text-center">
                <i class="rating__star far fa-star" id="S_1" onclick="Star(1)"></i>
                <i class="rating__star far fa-star" id="S_2" onclick="Star(2)"></i>
                <i class="rating__star far fa-star" id="S_3" onclick="Star(3)"></i>
                <i class="rating__star far fa-star" id="S_4" onclick="Star(4)"></i>
                <i class="rating__star far fa-star" id="S_5" onclick="Star(5)"></i>
            </div>
            <div class="feedBack pb-5 ">
                <textarea name="message" class="form-control rounded-0" placeholder="Feedback" id="FeedBackText"
                    style="height: 109px;"></textarea>
            </div>
            <div class="sendFeedback text-center">
                <button class="btn" onclick="sendFeedback()">SEND</button>
            </div>
        </div>
    </div>
</div>`;
    }
    if (data.CustomsClearness == 1 && data.Tracking == 1) {
        document.getElementById("roow").innerHTML =
            `<div class="col-lg-2">
        <div class="box one">
            <div class="icon ${
                data.BestCase >= 1 ? "active" : ""
            }" onclick="Deliver('updateBooking')">
                <i class="fa-solid fa-calendar-check "></i>
            </div>
            <div class="heading">
                <h6>Booking</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box two">
            <div class="icon  ${
                data.BestCase >= 2 ? "active" : ""
            }" onclick="Deliver('updateLoading')">
                <i class="fa-solid fa-spinner "></i>
            </div>
            <div class="heading">
                <h6>Loading</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box three">
            <div class="icon  ${
                data.BestCase >= 3 ? "active" : ""
            }" onclick="Deliver('updateTrucking')">
                <i class="fa-solid fa-truck-moving "></i>
            </div>
            <div class="heading">
                <h6>Trucking </h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box four">
            <div class="icon  ${
                data.BestCase >= 4 ? "active" : ""
            }" onclick="Deliver('updateCustom_clearance')">
                <i class="fa-regular fa-file-zipper "></i>
            </div>
            <div class="heading">
                <h6>Custom clearance</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box five">
            <div class="icon ${data.BestCase >= 6 ? "active" : ""}" onclick="Deliver('updateDone')">
                <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="heading">
                <h6>Done</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box six">
            <div class="icon ${
                data.BestCase >= 5 ? "active" : ""
            }" onclick="Deliver('updateOn_trip')">
                <i class="fa-solid fa-truck-arrow-right"></i>
            </div>
            <div class="heading">
                <h6>On trip</h6>
            </div>
        </div>
    </div>
` + feedback;
    } else if (data.CustomsClearness == 1) {
        document.getElementById("roow").innerHTML =
            `<div class="col-lg-2"><div class="box one">
            <div class="icon ${
                data.BestCase >= 1 ? "active" : ""
            }" onclick="Deliver('updateBooking')">
                <i class="fa-solid fa-calendar-check "></i>
            </div>
            <div class="heading">
                <h6>Booking</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box two " style="top: -60px;
            right: -141px;">
            <div class="icon ${
                data.BestCase >= 2 ? "active" : ""
            }" onclick="Deliver('updateLoading')">
                <i class="fa-solid fa-spinner "></i>
            </div>
            <div class="heading">
                <h6>Loading</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box three" style="bottom: 139px;
            left: 256px;">
            <div class="icon ${
                data.BestCase >= 4 ? "active" : ""
            }" onclick="Deliver('updateTrucking')">
                <i class="fa-regular fa-file-zipper "></i>
            </div>
            <div class="heading">
                <h6>Custom clearance </h6>
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="box six" style="left: 305px;">
            <div class="icon ${
                data.BestCase >= 5 ? "active" : ""
            }" onclick="Deliver('updateOn_trip')">
                <i class="fa-solid fa-truck-arrow-right"></i>
            </div>
            <div class="heading">
                <h6 style="padding: 0 130px;">On trip</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box five " style="    left: 215px;">
            <div class="icon ${data.BestCase >= 6 ? "active" : ""}" onclick="Deliver('updateDone')">
                <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="heading">
                <h6 style="padding: 0 77px;">Done</h6>
            </div>
        </div>
    </div>
    ` + feedback;
    } else if (data.Tracking == 1) {
        document.getElementById("roow").innerHTML =
            `
        <div class="col-lg-2">
        <div class="box one">
            <div class="icon ${
                data.BestCase >= 1 ? "active" : ""
            }" onclick="Deliver('updateBooking')">
                <i class="fa-solid fa-calendar-check "></i>
            </div>
            <div class="heading">
                <h6>Booking</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box two " style="top: -60px;
        right: -141px;">
            <div class="icon ${
                data.BestCase >= 2 ? "active" : ""
            }" onclick="Deliver('updateLoading')">
                <i class="fa-solid fa-spinner "></i>
            </div>
            <div class="heading">
                <h6>Loading</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box three" style="bottom: 139px;
        left: 256px;">
            <div class="icon ${
                data.BestCase >= 3 ? "active" : ""
            }" onclick="Deliver('updateTrucking')">
                <i class="fa-solid fa-truck-moving "></i>
            </div>
            <div class="heading">
                <h6>Trucking </h6>
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="box six" style="left: 305px;">
            <div class="icon ${
                data.BestCase >= 5 ? "active" : ""
            }" onclick="Deliver('updateOn_trip')">
                <i class="fa-solid fa-truck-arrow-right"></i>
            </div>
            <div class="heading">
                <h6 style="padding: 0 130px;">On trip</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box five " style="    left: 215px;">
            <div class="icon ${data.BestCase >= 6 ? "active" : ""}" onclick="Deliver('updateDone')">
                <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="heading">
                <h6 style="padding: 0 77px;">Done</h6>
            </div>
        </div>
    </div>
    ` + feedback;
    } else {
        document.getElementById("roow").innerHTML =
            `<div class="col-lg-2">
        <div class="box one">
            <div class="icon ${
                data.BestCase >= 1 ? "active" : ""
            }" onclick="Deliver('updateBooking')">
                <i class="fa-solid fa-calendar-check "></i>
            </div>
            <div class="heading">
                <h6>Booking</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box two " style="top: -60px;
                right: -141px;">
            <div class="icon ${
                data.BestCase >= 2 ? "active" : ""
            }" onclick="Deliver('updateLoading')">
                <i class="fa-solid fa-spinner "></i>
            </div>
            <div class="heading">
                <h6>Loading</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="box six" style="left: 239px;bottom: 129px;">
            <div class="icon ${
                data.BestCase >= 5 ? "active" : ""
            }" onclick="Deliver('updateOn_trip')">
                <i class="fa-solid fa-truck-arrow-right"></i>
            </div>
            <div class="heading">
                <h6 style="padding: 0 130px;">On trip</h6>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="box five " style="left: 426px;">
            <div class="icon ${data.BestCase >= 6 ? "active" : ""}" onclick="Deliver('updateDone')">
                <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="heading">
                <h6 style="padding: 0 77px;">Done</h6>
            </div>
        </div>
    </div>
    ` + feedback;
    }
}
function sendFeedback() {
    let id = JSON.parse(localStorage.getItem("CurrentReq")).id;
    fetch(`${localStorage.getItem("API")}/requests/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((all) => {
            data = {
                message: document.getElementById("FeedBackText").value,
                rate: Number_Star,
                shipping_company_id: all.agent.shipping_company.id,
                client_id: all.request.client.id,
            };
            const apiUrl = `${localStorage.getItem("API")}/feedback-create`;
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
                    location.href = "http://127.0.0.1:5502/components/home";
                });
        });
}
function Star(num) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`S_${i}`).classList.remove("fa-solid");
    }
    Number_Star = num;
    for (let i = 1; i <= num; i++) {
        document.getElementById(`S_${i}`).classList.add("fa-solid");
    }
    console.log(Number_Star);
}
