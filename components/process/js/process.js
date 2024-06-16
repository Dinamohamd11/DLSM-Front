const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}
executeRating(ratingStars);

function Deliver(url) {
    fetch(`${localStorage.getItem('API')}/${url}/${JSON.parse(localStorage.getItem('CurrentReq')).id}`)
        .then((response) => {
            return response.json();
        })
        .then((Newdata) => {
            console.log(Newdata);
        });
    first(1);
}

// *************************************

let feedback = `
<div class="option d-flex justify-content-center ">
                <div class="imgg rounded-5">
                    <div class="layer rounded-5">
                        <h5>Your feedBack is important to us</h5>
                        <div class="rating text-center">
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 1;
                            }}"></i>
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 2;
                            }}"></i>
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 3;
                            }}"></i>
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 4;
                            }}"></i>
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 5;
                            }}"></i>
                        </div>
                        <div class="feedBack pb-5 ">
                            <textarea name="Comment" class="form-control rounded-0" placeholder="Feedback"
                                style="height: 109px;" id="MsgFeedBack"></textarea>
                        </div>
                        <div class="sendFeedback text-center">
                            <button class="btn" onclick="SendFeedo()">SEND</button>
                        </div>
                    </div>
                </div>
            </div>`;

first(1);
function first(id) {
    fetch(`${localStorage.getItem('API')}/requests/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            dis(data);
        });
}
let NumStar = 0;
function dis(data) {
    if (data.BestCase == 6) {
        feedback = `
            <div class="option d-flex justify-content-center ">
                <div class="imgg rounded-5">
                    <div class="layer rounded-5">
                        <h5>Your feedBack is important to us</h5>
                        <div class="rating text-center">
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 1;
                            }}"></i>
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 2;
                            }}"></i>
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 3;
                            }}"></i>
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 4;
                            }}"></i>
                            <i class="rating__star far fa-star" onclick="${() => {
                                NumStar = 5;
                            }}"></i>
                        </div>
                        <div class="feedBack pb-5 ">
                            <textarea name="Comment" class="form-control rounded-0" placeholder="Feedback"
                                style="height: 109px;" id="MsgFeedBack"></textarea>
                        </div>
                        <div class="sendFeedback text-center">
                            <button class="btn" onclick="${FeedbackSubmit()}">SEND</button>
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
function FeedbackSubmit() {
    const apiUrl = `${localStorage.getItem('API')}/feedback-create`;
    let dataPost = {
        message: document.getElementById("MsgFeedBack").value,
        rate: NumStar,
        client_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
        // shipping_company_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
        shipping_company_id: 1,
    };
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPost),
    };
    fetch(apiUrl, requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            location.href = "http://127.0.0.1:5502/components/processUser/procsessUser.html";
        });
}
