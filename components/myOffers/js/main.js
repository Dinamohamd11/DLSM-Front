( function allOffer() {
    // requests
    fetch( `${localStorage.getItem('API')}/offers` )
        .then( ( response ) => {
            return response.json();
        } )
        .then( ( Newdata ) => {
            console.log( Newdata );
            let cartona = ``;
            for ( let i = 0; i < Newdata.length; i++ ) {
                if ( Newdata[i].agents_id == JSON.parse( localStorage.getItem( "CurrentUser" ) ).id )
                    cartona += `
                    <div class="col-lg-4">
                    <div class="cardReq pt-3 mt-4 rounded-4">
                        <div class="text text-center pb-4">
                            <h2 class="pb-2 pt-3">Offer</h2>
                            <div class="elementor">
                                <span class="elementor-divider"></span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="d-flex req ">
                                    <span>From:</span>
                                   <h5 class="mt-1">${Newdata[i].From}</h5>
                                </div>
                                <div class="d-flex req ">
                                    <span>Price:</span>
                                   <h5 class="mt-1">${Newdata[i].Price}</h5>
                                </div>
                                <div class="d-flex req">
                                    <span>PL:</span>
                                   <h5 class="mt-1">${Newdata[i].PL}</h5>
                                </div>
                                <div class="d-flex req">
                                    <span>TT:</span>
                                   <h5 class="mt-1">${Newdata[i].TT}</h5>
                                </div>
                                <div class="d-flex req pe-0">
                                    <span>Power Per Day:</span>
                                    <h5 class="mt-1">${Newdata[i].PowerPerDay}</h5>
                                </div>
                            </div>                
                            <div class="col-lg-6">
                
                                <div class="d-flex req ">
                                    <span>To:</span>
                                   <h5 class="mt-1">${Newdata[i].TO}</h5>
                
                                </div>
                                <div class="d-flex req ">
                                <span>THC:</span>
                               <h5 class="mt-1">${Newdata[i].THC}</h5>
            
                            </div>
                                <div class="d-flex req">
                                    <span>ExtraFees:</span>
                                   <h5 class="mt-1">${Newdata[i].ExtraFees}</h5>
                                </div>
                                <div class="d-flex req">
                                    <span>FT:</span>
                                   <h5 class="mt-1">${Newdata[i].FT}</h5>
                                </div>
                                
                                <div class="d-flex req">
                                    <span>OF:</span>
                                   <h5 class="mt-1">${Newdata[i].OF}</h5>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                    `;
            }
            document.getElementById( "roow" ).innerHTML = cartona;
        } );
} )();
function GiveOffer( id, TypeOfRequest ) {
    console.log( id );
    console.log( TypeOfRequest );
    let Req = {
        id: id,
        TypeOfRequest: TypeOfRequest,
    };
    localStorage.setItem( "CurrentReq", JSON.stringify( Req ) );
    location.href = "http://127.0.0.1:5502/components/allOffers/allOffers.html";
}
