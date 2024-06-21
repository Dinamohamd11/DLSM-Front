(function NAVBAR() {
    let Type = JSON.parse(localStorage.getItem("CurrentUser")).typeOfClient;
    if (Type == "1") {
        //USER
        document.getElementById("Nav-Bar").innerHTML = `
        <div class="nav" id="navbarclient">
        <div class="container-fluid">
            <div class="row position-relative">
            <div class="col-lg-12 topsearcsh position-absolute start-0" style="top:-200px" id="search-top">
            <input type="search" id="search-input" placeholder="Search">
            <ul class="list-group position-absolute table-search d-none" id="list-search"> </ul>
            <button class="botton-search-new"><i class="fa-solid fa-magnifying-glass"></i></button>




            <button onclick="showHide()" id="clos" class="close"><i class="fa-solid fa-x"></i></button>
        </div>
                <div class="col-lg-3">
                    <div class="logo"> <a href="../../components/home/index.html">
                            <img src="../../Image/logo_black.svg">
                        </a>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="list ">
                        <ul class="navbar-nav justify-content-end ">
                             <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Requests
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><a class="dropdown-item sp" href="../../components/request/reqdhl.html"> DHL
                                        </a>
                                    </li>
                                    <li><a class="dropdown-item sp"
                                            href="../../components/request/reqinternational.html">International</a>

                                    </li>
                                    <li><a class="dropdown-item sp"
                                            href="../../components/request/reqlocal.html">Local</a>

                                    </li>
                                    <li>
                                        <a class="dropdown-item sp"
                                        href="../../components/myRequest/myRequest.html">My Request</a>
                                    </li>
                            </li>
                        </ul>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                service
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/air/air.html">Air Freight</a>
                                </li>
                                <li><a class="dropdown-item" href="../../components/offers/offers.html">Road
                                        Freight</a></li>
                                <li><a class="dropdown-item" href="../../components/ocean/ocean.html">Ocean
                                        Freight</a></li>
                            </ul>
                        </li>
                        <!--  
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Offers
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="../../components/AllOffers/AllOffers.html">My
                                            Offers</a></li>
                                </ul>
                            </li>
                        -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/blog/blog.html">Blog</a></li>
                                <li><a class="dropdown-item"
                                        href="../../components/blogDetails/blogDetails.html">Blog
                                        Details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item pt-4 "><a href="tel:5284567592" class="h-phone">
                                <i class="fa-solid fa-phone"></i>
                                (528) 456-7592</a></li>

                        <li class="nav-item pt-4"><i class=" fa-solid fa-magnifying-glass " onclick="showHide()"></i></li>
                        <li class="nav-item dropdown pt-3">
                            <button class="btn border-0" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <a href=""> <i class="fa-light fa-bars " style="font-size: 30px;"></i></a>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="../myprofile/myprofile.html">My Profile</a></li>
                               
                                <li><a class="dropdown-item" style="cursor: pointer;" onclick="LOGOUT()">LogOut</a>
                                </li>

                            </ul>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    } else if (Type == "2") {
        // Ex-Im Company
        document.getElementById("Nav-Bar").innerHTML = `
        <div class="nav" id="navbarclient">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-12 topsearcsh position-absolute start-0" style="top:-200px" id="search-top">
                        <input type="search" id="search-input" placeholder="Search">
                        <ul class="list-group position-absolute table-search d-none" id="list-search">      </ul>
                        <button class="botton-search-new"><i class="fa-solid fa-magnifying-glass"></i></button>




                        <button onclick="showHide()" id="clos" class="close"><i class="fa-solid fa-x"></i></button>
                    </div>
              <div class="col-lg-3">
                    <div class="logo"> <a href="../../components/home/index.html">
                            <img src="../../Image/logo_black.svg">
                        </a>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="list ">
                        <ul class="navbar-nav justify-content-end ">
                            <li class="nav-item">
                                <a class="nav-link" href="../../components/home/index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Requests
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><a class="dropdown-item sp" href="../../components/request/reqdhl.html"> DHL
                                        </a>
                                    </li>
                                    <li><a class="dropdown-item sp"
                                            href="../../components/request/reqinternational.html">International</a>

                                    </li>
                                    <li><a class="dropdown-item sp"
                                            href="../../components/request/reqlocal.html">Local</a>

                                    </li>
                                    <li>
                                        <a class="dropdown-item sp"
                                            href="../../components/myRequest/myRequest.html">My Request</a>
                                    </li>
                            </li>
                        </ul>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                service
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/air/air.html">Air Freight</a>
                                </li>
                                <li><a class="dropdown-item" href="../../components/offers/offers.html">Road
                                        Freight</a></li>
                                <li><a class="dropdown-item" href="../../components/ocean/ocean.html">Ocean
                                        Freight</a></li>
                            </ul>
                        </li>
                        <!--  
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Offers
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="../../components/AllOffers/AllOffers.html">My
                                            Offers</a></li>
                                </ul>
                            </li>
                        -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/blog/blog.html">Blog</a></li>
                                <li><a class="dropdown-item"
                                        href="../../components/blogDetails/blogDetails.html">Blog
                                        Details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item pt-4 "><a href="tel:5284567592" class="h-phone">
                                <i class="fa-solid fa-phone"></i>
                                (528) 456-7592</a></li>

                        <li class="nav-item pt-4"><i class=" fa-solid fa-magnifying-glass " onclick="showHide()"></i></li>
                        <li class="nav-item dropdown pt-3">
                            <button class="btn border-0" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <a href=""> <i class="fa-light fa-bars " style="font-size: 30px;"></i></a>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="../myprofile/myprofile.html">My Profile</a></li>
                               
                                <li><a class="dropdown-item" style="cursor: pointer;" onclick="LOGOUT()">LogOut</a>
                                </li>

                            </ul>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    } else if (Type == "3") {
        // Factory Company
        document.getElementById("Nav-Bar").innerHTML = `
        <div class="nav" id="navbarclient">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-12 topsearcsh position-absolute start-0" style="top:-200px" id="search-top">
                        <input type="search" id="search-input" placeholder="Search">
                        <ul class="list-group position-absolute table-search d-none" id="list-search"></ul>
                        <button class="botton-search-new"><i class="fa-solid fa-magnifying-glass"></i></button>




                        <button onclick="showHide()" id="clos" class="close"><i class="fa-solid fa-x"></i></button>
                    </div>
            <div class="col-lg-3">
                    <div class="logo"> <a href="../../components/home/index.html">
                            <img src="../../Image/logo_black.svg">
                        </a>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="list ">
                        <ul class="navbar-nav justify-content-end ">
                            <li class="nav-item">
                                <a class="nav-link" href="../../components/home/index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Requests
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><a class="dropdown-item sp" href="../../components/request/reqdhl.html"> DHL
                                        </a>
                                    </li>
                                    <li><a class="dropdown-item sp"
                                            href="../../components/request/reqinternational.html">International</a>

                                    </li>
                                    <li><a class="dropdown-item sp"
                                            href="../../components/request/reqlocal.html">Local</a>

                                    </li>
                                    <li>
                                        <a class="dropdown-item sp"
                                            href="../../components/myRequest/myRequest.html">My Request</a>
                                    </li>
                            </li>
                        </ul>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                service
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/air/air.html">Air Freight</a>
                                </li>
                                <li><a class="dropdown-item" href="../../components/offers/offers.html">Road
                                        Freight</a></li>
                                <li><a class="dropdown-item" href="../../components/ocean/ocean.html">Ocean
                                        Freight</a></li>
                            </ul>
                        </li>
                        <!--  
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Offers
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="../../components/AllOffers/AllOffers.html">My
                                            Offers</a></li>
                                    <li><a class="dropdown-item"
                                            href="../../components/blogDetails/blogDetails.html">Blog
                                            Details</a></li>
                                </ul>
                            </li>
                        -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/blog/blog.html">Blog</a></li>
                                <li><a class="dropdown-item"
                                        href="../../components/blogDetails/blogDetails.html">Blog
                                        Details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item pt-4 "><a href="tel:5284567592" class="h-phone">
                                <i class="fa-solid fa-phone"></i>
                                (528) 456-7592</a></li>

                        <li class="nav-item pt-4"><i class=" fa-solid fa-magnifying-glass " onclick="showHide()"></i></li>
                        <li class="nav-item dropdown pt-3">
                            <button class="btn border-0" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <a href=""> <i class="fa-light fa-bars " style="font-size: 30px;"></i></a>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="../myprofile/myprofile.html">My Profile</a></li>
                               
                                <li><a class="dropdown-item" style="cursor: pointer;" onclick="LOGOUT()">LogOut</a>
                                </li>

                            </ul>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    } else if (Type == "4" || Type == "6") {
        // Shipping Company
        document.getElementById("Nav-Bar").innerHTML = ` <div class="nav" id="navbarclient">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-12 topsearcsh position-absolute start-0" style="top:-200px" id="search-top">
                        <input type="search" id="search-input" placeholder="Search">
                        <ul class="list-group position-absolute table-search d-none" id="list-search">
                        </ul>
                        <button class="botton-search-new"><i class="fa-solid fa-magnifying-glass"></i></button>




                        <button onclick="showHide()" id="clos" class="close"><i class="fa-solid fa-x"></i></button>
                    </div>
            <div class="col-lg-3">
                    <div class="logo"> <a href="../../components/home/index.html">
                            <img src="../../Image/logo_black.svg">
                        </a>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="list ">
                        <ul class="navbar-nav justify-content-end ">
                            <li class="nav-item">
                                <a class="nav-link" href="../../components/home/index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Requests
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><a class="dropdown-item sp"
                                            href="../../components/allRequest/allRequest.html">All Request</a>
                                    </li>
                            </li>
                            
                        </ul>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                service
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/air/air.html">Air
                                        Freight</a>
                                </li>
                                <li><a class="dropdown-item" href="../../components/offers/offers.html">Road
                                        Freight</a></li>
                                <li><a class="dropdown-item" href="../../components/ocean/ocean.html">Ocean
                                        Freight</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Offers
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/myOffers/myOffer.html">My Offers</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/blog/blog.html">Blog</a>
                                </li>
                                <li><a class="dropdown-item"
                                        href="../../components/blogDetails/blogDetails.html">Blog
                                        Details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item pt-4 "><a href="tel:5284567592" class="h-phone">
                                <i class="fa-solid fa-phone"></i>
                                (528) 456-7592</a></li>

                        <li class="nav-item pt-4"><i class=" fa-solid fa-magnifying-glass " onclick="showHide()"></i></li>
                        <li class="nav-item dropdown pt-3">
                            <button class="btn border-0" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <a href=""> <i class="fa-light fa-bars " style="font-size: 30px;"></i></a>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="../myprofile/myprofile.html">My
                                        Profile</a></li>

                                <li><a class="dropdown-item" style="cursor: pointer;" onclick="LOGOUT()">LogOut</a>
                                </li>

                            </ul>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    } else {
        document.getElementById("Nav-Bar").innerHTML = `
        <div class="nav" id="navbarclient">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-12 topsearcsh position-absolute start-0" style="top:-200px" id="search-top">
                        <input type="search" id="search-input" placeholder="Search">
                        <ul class="list-group position-absolute table-search d-none" id="list-search">
                             
                             
                             
                             
                        </ul>
                        <button class="botton-search-new"><i class="fa-solid fa-magnifying-glass"></i></button>




                        <button onclick="showHide()" id="clos" class="close"><i class="fa-solid fa-x"></i></button>
                    </div>
            <div class="col-lg-3">
                    <div class="logo"> <a href="../../components/home/index.html">
                            <img src="../../Image/logo_black.svg">
                        </a>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="list ">
                        <ul class="navbar-nav justify-content-end ">
                            <li class="nav-item">
                                <a class="nav-link" href="../../components/home/index.html">Home</a>
                            </li>
                            
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                service
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/air/air.html">Air Freight</a>
                                </li>
                                <li><a class="dropdown-item" href="../../components/offers/offers.html">Road
                                        Freight</a></li>
                                <li><a class="dropdown-item" href="../../components/ocean/ocean.html">Ocean
                                        Freight</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../components/blog/blog.html">Blog</a></li>
                                <li><a class="dropdown-item"
                                        href="../../components/blogDetails/blogDetails.html">Blog
                                        Details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item pt-4 "><a href="tel:5284567592" class="h-phone">
                                <i class="fa-solid fa-phone"></i>
                                (528) 456-7592</a></li>

                        <li class="nav-item pt-4"><i class=" fa-solid fa-magnifying-glass " onclick="showHide()"></i></li>
                        <li class="nav-item dropdown pt-3">
                            <button class="btn border-0" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <a href=""> <i class="fa-light fa-bars " style="font-size: 30px;"></i></a>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="../login/login.html">Login</a></li>
                                <li><a class="dropdown-item" href="../register/Register.html">Register</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    }
})();

function LOGOUT() {
    localStorage.removeItem("CurrentUser");
    location.href = "http://127.0.0.1:5502/components/login/login.html";
}

function Search(params) {}
