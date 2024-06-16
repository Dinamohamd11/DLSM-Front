let GlobalData;
function Login() {
    // Data to send (in this case, a JavaScript object)
    const postData = {
        Email: document.getElementById( 'EMail' ).value,
        Password: document.getElementById( 'Password' ).value,
    };
    const apiUrl = `${localStorage.getItem('API')}/login`;

    const requestOptions = {
        method: 'POST', // HTTP method (POST, GET, PUT, DELETE, etc.)
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( postData ), // Convert JavaScript object to JSON string
    };
    fetch( apiUrl, requestOptions )
        .then( ( response ) => {
            console.log(response);
            return response.json();
        } )
        .then( ( data ) => {
            console.log(data);
            document.getElementById( 'modalBody' ).innerHTML = data.message;
            GlobalData = data;
        } )
        .catch( ( error ) => {
            document.getElementById( 'modalBody' ).innerHTML = error;
        } );
}
function changeURL() {
    if ( GlobalData.status == true ) {
        localStorage.setItem(
            'CurrentUser',
            JSON.stringify( {
                id: GlobalData.id,
                typeOfClient: GlobalData.TypeOfClient,
            } ),
        );
        location.href = 'http://127.0.0.1:5502/components/home/index.html';
    } else {
        location.href = 'http://127.0.0.1:5502/components/login/login.html';
    }
}
