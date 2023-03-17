/*------------------ár--mennyiség-só-fokhagyma-megnevezés------*/
var rendelesek = {
    "langos_1" : [800, 0, false, false, "Sima"],
    "langos_2" : [1150, 0, false, false, "Sajtos"],
    "langos_3" : [1200, 0, false, false, "Tejfölös"],
    "langos_4" : [1350, 0, false, false, "Sajtos-tejfölös"],
    "langos_5" : [2000, 0, false, false, "Bitang"],
    "langos_6" : [1700, 0, false, false, "Nutellás"],
};

let butt_id = 0;

function load(){
    console.log(rendelesek[`langos_${id}`][1]);
    console.log(rendelesek[`langos_${id}`][2]);
}


function open_orders(){
    localStorage.setItem('rendelesekJSON', JSON.stringify(rendelesek));
    window.location.href="osszegzes.html";
}

function add_to_cart_langos_n(){
    rendelesek[`langos_${butt_id}`][1] = document.getElementById(`langos_${butt_id}_db`).value;
    rendelesek[`langos_${butt_id}`][2] = document.getElementById(`langos_${butt_id}_so`).checked;
    rendelesek[`langos_${butt_id}`][3] = document.getElementById(`langos_${butt_id}_fok`).checked;
    if (rendelesek[`langos_${butt_id}`][1] == 0){
        rendelesek[`langos_${butt_id}`][2] = false;
        rendelesek[`langos_${butt_id}`][3] = false;
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

document.querySelectorAll('button').forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function() {
    console.log('A button with ID ' + id + ' was clicked!');
    butt_id = id;
    add_to_cart_langos_n();
    } );
});

/*
function add_to_cart_sima(){
    rendelesek.sima[1] = document.getElementById("sima_db").value;
    rendelesek.sima[2] = document.getElementById("sima_so").checked;
    rendelesek.sima[3] = document.getElementById("sima_fok").checked;
    if (rendelesek.sima[1] == 0){
        rendelesek.sima[2] = false;
        rendelesek.sima[3] = false;
    }
}
*/