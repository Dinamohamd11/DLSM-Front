(async function Report(params) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  await fetch(`${localStorage.getItem("API")}/getShippingCompanyDetails/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((Newdata) => {
      console.log(Newdata);
    });
})();
