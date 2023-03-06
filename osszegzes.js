var rendelesek = JSON.parse(localStorage.getItem('rendelesekJSON'));

let total_amount = rendelesek.nutellas[0] * rendelesek.nutellas[1] + rendelesek.bitang[1] * rendelesek.bitang[0] + rendelesek.sajtostejfolos[1] * rendelesek.sajtostejfolos[0] + rendelesek.tejfolos[1] * rendelesek.tejfolos[0] + rendelesek.sajtos[1] * rendelesek.sajtos[0] + rendelesek.sima[1] * rendelesek.sima[0];

function sima(){
    for (let i = 1; i < 4; i+=1){
        if (i == 1){
            htmltext = `${rendelesek.sima[i]} db`;
        } else {
            if (rendelesek.sima[i] == false){
                htmltext = `<i class="fa-solid fa-circle-xmark"></i>`;
            } else {
                htmltext = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
            }
        }
        document.getElementById(`sima_${i}`).innerHTML=htmltext;
    }
}

function sajtos(){
    for (let i = 1; i < 4; i+=1){
        if (i == 1){
            htmltext = `${rendelesek.sajtos[i]} db`;
        } else {
            if (rendelesek.sajtos[i] == false){
                htmltext = `<i class="fa-solid fa-circle-xmark"></i>`;
            } else {
                htmltext = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
            }
        }
        document.getElementById(`sajtos_${i}`).innerHTML=htmltext;
    }
}

function tejfolos(){
    for (let i = 1; i < 4; i+=1){
        if (i == 1){
            htmltext = `${rendelesek.tejfolos[i]} db`;
        } else {
            if (rendelesek.tejfolos[i] == false){
                htmltext = `<i class="fa-solid fa-circle-xmark"></i>`;
            } else {
                htmltext = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
            }
        }
        document.getElementById(`tejfolos_${i}`).innerHTML=htmltext;
    }
}

function sajtostejfolos(){
    for (let i = 1; i < 4; i+=1){
        if (i == 1){
            htmltext = `${rendelesek.sajtostejfolos[i]} db`;
        } else {
            if (rendelesek.sajtostejfolos[i] == false){
                htmltext = `<i class="fa-solid fa-circle-xmark"></i>`;
            } else {
                htmltext = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
            }
        }
        document.getElementById(`sajtostejfolos_${i}`).innerHTML=htmltext;
    }
}

function bitang(){
    for (let i = 1; i < 4; i+=1){
        if (i == 1){
            htmltext = `${rendelesek.bitang[i]} db`;
        } else {
            if (rendelesek.bitang[i] == false){
                htmltext = `<i class="fa-solid fa-circle-xmark"></i>`;
            } else {
                htmltext = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
            }
        }
        document.getElementById(`bitang_${i}`).innerHTML=htmltext;
    }
}

function nutellas(){
    for (let i = 1; i < 4; i+=1){
        if (i == 1){
            htmltext = `${rendelesek.nutellas[i]} db`;
        } else {
            if (rendelesek.nutellas[i] == false){
                htmltext = `<i class="fa-solid fa-circle-xmark"></i>`;
            } else {
                htmltext = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
            }
        }
        document.getElementById(`nutellas_${i}`).innerHTML=htmltext;
    }
}



function kiir(){
    sima();
    sajtos();
    tejfolos();
    sajtostejfolos();
    bitang();
    nutellas();
    document.getElementById("total_amount").innerHTML= `${total_amount} Ft`;
}

function langos_arrive(){
    let x = Number(rendelesek.sima[1]) + Number(rendelesek.tejfolos[1]) + Number(rendelesek.sajtos[1]) + Number(rendelesek.sajtostejfolos[1]) + Number(rendelesek.bitang[1]) + Number(rendelesek.nutellas[1]); 
    alert(`A lángosa megérkezik önhöz ${x*3 + 8} perc múlva`)
}
