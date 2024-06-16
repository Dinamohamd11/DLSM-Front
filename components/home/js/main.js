function LOGOUT() {
    localStorage.removeItem( "CurrentUser" );
    location.href = "http://127.0.0.1:5502/components/login/login.html";
}
