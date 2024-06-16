let All = document.getElementsByClassName( 'all' );
let User = document.getElementsByClassName( 'User' );
let Factory = document.getElementsByClassName( 'Factory' );
let Ex_Import = document.getElementsByClassName( 'Ex-Import' );
let Shipping = document.getElementsByClassName( 'Shipping' );
let SelectType = document.getElementById( 'Select-Type' );
for ( let i = 0; i < All.length; i++ ) {
    All[i].classList.add( 'd-none' );
}
for ( let i = 0; i < User.length; i++ ) {
    User[i].classList.remove( 'd-none' );
}
function DUser() {
    if ( SelectType.value == 0 || SelectType.value == 1 ) {
        for ( let i = 0; i < All.length; i++ ) {
            All[i].classList.add( 'd-none' );
        }
        for ( let i = 0; i < User.length; i++ ) {
            User[i].classList.remove( 'd-none' );
        }
    } else if ( SelectType.value == 2 ) {
        for ( let i = 0; i < All.length; i++ ) {
            All[i].classList.add( 'd-none' );
        }
        for ( let i = 0; i < Shipping.length; i++ ) {
            Shipping[i].classList.remove( 'd-none' );
        }
    } else if ( SelectType.value == 3 ) {
        for ( let i = 0; i < All.length; i++ ) {
            All[i].classList.add( 'd-none' );
        }
        for ( let i = 0; i < Ex_Import.length; i++ ) {
            Ex_Import[i].classList.remove( 'd-none' );
        }
    } else if ( SelectType.value == 4 ) {
        for ( let i = 0; i < All.length; i++ ) {
            All[i].classList.add( 'd-none' );
        }
        for ( let i = 0; i < Factory.length; i++ ) {
            Factory[i].classList.remove( 'd-none' );
        }
    }
}
DUser();
function Register() {
    let table_choice = document.getElementById( 'Select-Type' ).value;
    var postData;
    if ( table_choice == 1 ) {
        postData = {
            Name: document.getElementById( 'Name' ).value,
            Email: document.getElementById( 'Email' ).value,
            Password: document.getElementById( 'Password' ).value,
            Password_confirmation: document.getElementById( 'Password_confirmation' ).value,
            SSN: document.getElementById( 'SSN' ).value,
            Nationality: document.getElementById( 'Nationality' ).value,
            PhoneNumber: document.getElementById( 'PhoneNumber' ).value,
            Photo: document.getElementById( 'Photo' ).value,
            table_choice: document.getElementById( 'Select-Type' ).value,
        };
    } else if ( table_choice == 2 ) {
        postData = {
            Name: document.getElementById( 'Name' ).value,
            Email: document.getElementById( 'Email' ).value,
            Password: document.getElementById( 'Password' ).value,
            Password_confirmation: document.getElementById( 'Password_confirmation' ).value,
            PhoneNumber: document.getElementById( 'PhoneNumber' ).value,
            Address: document.getElementById( 'Address' ).value,
            Website: document.getElementById( 'Website' ).value,
            BusinessHours: document.getElementById( 'BusinessHours' ).value,
            BusinessHistory: document.getElementById( 'BusinessHistory' ).value,
            table_choice: document.getElementById( 'Select-Type' ).value,
        };
    } else if ( table_choice == 3 ) {
        postData = {
            Name: document.getElementById( 'Name' ).value,
            Email: document.getElementById( 'Email' ).value,
            Password: document.getElementById( 'Password' ).value,
            Password_confirmation: document.getElementById( 'Password_confirmation' ).value,
            PhoneNumber: document.getElementById( 'PhoneNumber' ).value,
            Address: document.getElementById( 'Address' ).value,
            Website: document.getElementById( 'Website' ).value,
            CountryDealing: document.getElementById( 'CountryDealing' ).value,
            CountryTarget: document.getElementById( 'CountryTarget' ).value,
            CommercialRecord: document.getElementById( 'CommercialRecord' ).value,
            IndustrialRecord: document.getElementById( 'IndustrialRecord' ).value,
            table_choice: document.getElementById( 'Select-Type' ).value,
        };
    } else if ( table_choice == 4 ) {
        postData = {
            Name: document.getElementById( 'Name' ).value,
            Email: document.getElementById( 'Email' ).value,
            Password: document.getElementById( 'Password' ).value,
            Password_confirmation: document.getElementById( 'Password_confirmation' ).value,
            PhoneNumber: document.getElementById( 'PhoneNumber' ).value,
            Address: document.getElementById( 'Address' ).value,
            Website: document.getElementById( 'Website' ).value,
            CountryDealing: document.getElementById( 'CountryDealing' ).value,
            CountryTarget: document.getElementById( 'CountryTarget' ).value,
            CommercialRecord: document.getElementById( 'CommercialRecord' ).value,
            IndustrialRecord: document.getElementById( 'IndustrialRecord' ).value,
            table_choice: document.getElementById( 'Select-Type' ).value,
        };
    } else if ( table_choice == 5 ) {
        postData = {
            Name: document.getElementById( 'Name' ).value,
            Email: document.getElementById( 'Email' ).value,
            Password: document.getElementById( 'Password' ).value,
            Password_confirmation: document.getElementById( 'Password_confirmation' ).value,
            SSN: document.getElementById( 'SSN' ).value,
            table_choice: document.getElementById( 'Select-Type' ).value,
        };
    }

    console.log( postData );

    const apiUrl = `${localStorage.getItem('API')}/register`;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( postData ),
    };
    // Send the POST request to the API endpoint
    fetch( apiUrl, requestOptions )
        .then( ( response ) => {
            location.href = 'http://127.0.0.1:5502/components/login/login.html';

            return response.json();
        } )
        .then( ( data ) => {
            document.getElementById( 'modalBody' ).innerHTML = data.message;
            console.log( data );
            GlobalData = data;
        } )
        .catch( ( error ) => {
            document.getElementById( 'modalBody' ).innerHTML = error.message;
            //location.href = 'http://127.0.0.1:5502/components/register/register.html';
        } );
}
