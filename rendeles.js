/*------------------ár--mennyiség-só-fokhagyma-------*/

var rendelesek = {
    "sima" : [800, 0, false, false],
    "sajtos" : [1150, 0, false, false],
    "tejfolos" : [1200, 0, false, false],
    "sajtostejfolos" : [1350, 0, false, false],
    "bitang" : [2000, 0, false, false],
    "nutellas" : [1700, 0, false, false],
};

function open_orders(){
    localStorage.setItem('rendelesekJSON', JSON.stringify(rendelesek));
    window.location.href="osszegzes.html"
}

function add_to_cart_sima(){
    rendelesek.sima[1] = document.getElementById("sima_db").value;
    rendelesek.sima[2] = document.getElementById("sima_so").checked;
    rendelesek.sima[3] = document.getElementById("sima_fok").checked;
    if (rendelesek.sima[1] == 0){
        rendelesek.sima[2] = false;
        rendelesek.sima[3] = false;
    }
}

function add_to_cart_sajtos(){
    rendelesek.sajtos[1] = document.getElementById("sajtos_db").value;
    rendelesek.sajtos[2] = document.getElementById("sajtos_so").checked;
    rendelesek.sajtos[3] = document.getElementById("sajtos_fok").checked;
    if (rendelesek.sajtos[1] == 0){
        rendelesek.sajtos[2] = false;
        rendelesek.sajtos[3] = false;
    }
}

function add_to_cart_tejfolos(){
    rendelesek.tejfolos[1] = document.getElementById("tejfolos_db").value;
    rendelesek.tejfolos[2] = document.getElementById("tejfolos_so").checked;
    rendelesek.tejfolos[3] = document.getElementById("tejfolos_fok").checked;
    if (rendelesek.tejfolos[1] == 0){
        rendelesek.tejfolos[2] = false;
        rendelesek.tejfolos[3] = false;
    }
}

function add_to_cart_sajtostejfolos(){
    rendelesek.sajtostejfolos[1] = document.getElementById("sajtostejfolos_db").value;
    rendelesek.sajtostejfolos[2] = document.getElementById("sajtostejfolos_so").checked;
    rendelesek.sajtostejfolos[3] = document.getElementById("sajtostejfolos_fok").checked;
    if (rendelesek.sajtostejfolos[1] == 0){
        rendelesek.sajtostejfolos[2] = false;
        rendelesek.sajtostejfolos[3] = false;
    }
}

function add_to_cart_bitang(){
    rendelesek.bitang[1] = document.getElementById("bitang_db").value;
    rendelesek.bitang[2] = document.getElementById("bitang_so").checked;
    rendelesek.bitang[3] = document.getElementById("bitang_fok").checked;
    if (rendelesek.bitang[1] == 0){
        rendelesek.bitang[2] = false;
        rendelesek.bitang[3] = false;
    }
}

function add_to_cart_nutellas(){
    rendelesek.nutellas[1] = document.getElementById("nutellas_db").value;
    rendelesek.nutellas[2] = document.getElementById("nutellas_so").checked;
    rendelesek.nutellas[3] = document.getElementById("nutellas_fok").checked;
    if (rendelesek.nutellas[1] == 0){
        rendelesek.nutellas[2] = false;
        rendelesek.nutellas[3] = false;
    }
}



let menu = document.querySelector('.head .navbar');
document.querySelector('#bars').onclick = () => {
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    searchfrm.classList.remove('active');
}