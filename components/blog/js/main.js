(function forShippingOnly() {
    if (localStorage.getItem("CurrentUser"))
        if (JSON.parse(localStorage.getItem("CurrentUser")).typeOfClient == 4)
            document.getElementById("ShippingOnly").classList.remove("d-none");
        else {
            document.getElementById("ShippingOnly").classList.add("d-none");
            fetch(`${localStorage.getItem("API")}/posts`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    let cartona = ``;
                    for (let i = 0; i < data.length; i++) {
                        console.log(data[0].created_at);
                        let year = "",
                            month = "",
                            days = "";
                        year +=
                            data[0].created_at[0] +
                            data[0].created_at[1] +
                            data[0].created_at[2] +
                            data[0].created_at[3];
                        month += data[0].created_at[5] + data[0].created_at[6];
                        days += data[0].created_at[8] + data[0].created_at[9];
                        cartona += `
                    <div class="ps-5 ">
                            <div class="blogitem ">
                                <div class="blogimg ">
                                    <img src="../../Image/blog-2-1-1170x694.jpg" alt="Blog" width="100%">
                                    <div class="blogchild">
                                        <div class="blogthems">
                                            <i class="fa-regular fa-calendar-days"></i> <span>${
                                                month == 1
                                                    ? "Jun"
                                                    : month == 2
                                                    ? "Feb"
                                                    : month == 3
                                                    ? "Mar"
                                                    : month == 4
                                                    ? "Apr"
                                                    : month == 5
                                                    ? "May"
                                                    : month == 6
                                                    ? "Jun"
                                                    : month == 7
                                                    ? "Jul"
                                                    : month == 8
                                                    ? "Aug"
                                                    : month == 9
                                                    ? "Sep"
                                                    : month == 10
                                                    ? "Oct"
                                                    : month == 11
                                                    ? "Nov"
                                                    : month == 12
                                                    ? "Dec"
                                                    : "NAN"
                                            } ${days}, ${year}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="blogstyle p-4">
                                    <div class="blogText">
                                        <h2>${data[i].shipping_companies.Name}</h2>
                                        <p>${data[i].data}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    }
                    document.getElementById("blogsForDisplay").innerHTML = cartona;
                });
        }
})();
function SendPost() {
    const postData = {
        data: document.getElementById("text-atra").value,
        shipping_companies_id: JSON.parse(localStorage.getItem("CurrentUser")).id,
    };
    const apiUrl = `${localStorage.getItem("API")}/posts-create`;

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
        });
}
