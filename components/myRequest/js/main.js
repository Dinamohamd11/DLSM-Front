( function allRequest() {
    // requests
    fetch( `${localStorage.getItem('API')}/requests` )
        .then( ( response ) => {
            return response.json();
            console.log( response );
        } )
        .then( ( Newdata ) => {
            console.log( Newdata );
            let cartona = ``;
            for ( let i = 0; i < Newdata.length; i++ ) {
                console.log( 'Newdata[i].client_id ' + Newdata[i].client_id );
                console.log( "JSON.parse(localStorage.getItem('CurrentUser')).id " + JSON.parse( localStorage.getItem( 'CurrentUser' ) ).id );
                if ( Newdata[i].client_id == JSON.parse( localStorage.getItem( 'CurrentUser' ) ).id )
                    cartona += `
                <div class="col-lg-4">
                <div class="cardReq pt-3 mt-4 rounded-4">
                    <div class="text text-center pb-4">
                        <h2 class="pb-2 pt-3">Request</h2>
                        <div class="elementor">
                            <span class="elementor-divider"></span>
                        </div>
                    </div>
                    <div class="d-flex req ">
                        <span>From:</span>
                        <h5>${Newdata[i].Location}</h5>

                    </div>
                    <div class="d-flex req">
                        <span>To:</span>
                        <h5>${Newdata[i].Destination}</h5>
                    </div>
                
                    <div class="giveOffer text-center">

                        <a>
                            <button onclick="GiveOffer(${Newdata[i].id}, ${Newdata[i].TypeOfRequest})">All Offers</button>
                        </a>
                    </div>
                </div>
            </div>
                    `;
            }
            document.getElementById( 'roow' ).innerHTML = cartona;
        } );
} )();
function GiveOffer( id, TypeOfRequest ) {
    console.log( id );
    console.log( TypeOfRequest );
    let Req = {
        id: id,
        TypeOfRequest: TypeOfRequest,
    };
    localStorage.setItem( 'CurrentReq', JSON.stringify( Req ) );
    location.href = 'http://127.0.0.1:5502/components/allOffers/allOffers.html';
}
