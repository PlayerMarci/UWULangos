var rendelesek = JSON.parse(localStorage.getItem('rendelesekJSON'));

let total_amount = 0;

for (let k = 1; k < 7; k++){
    let x = Number(rendelesek[`langos_${k}`][0]);
    let y = Number(rendelesek[`langos_${k}`][1]);
    total_amount += (x*y);
}



function langos_n(){
    for (let j = 1; j < 7; j++){
        for (let i = 1; i < 4; i++){
            if (i == 1){
                htmltext = `${rendelesek[`langos_${j}`][i]} db`;
            } 
            else 
            { if (rendelesek[`langos_${j}`][i] == false){
                htmltext = `<i class="fa-solid fa-circle-xmark"></i>`;
            } else {
                htmltext = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
            }}
            document.getElementById(`langos_${j}_${i}`).innerHTML=htmltext;
            console.log(rendelesek[`langos_${j}`][i]);
        }
    }
}



function kiir(){
    langos_n();
    console.log(total_amount);
    document.getElementById("total_amount").innerHTML= `${total_amount} Ft`;
}

function langos_arrive(){
    let x = 0;
    for (let i = 1; i <= 6; i++){
        x = rendelesek[`langos_${i}`][1];
    }
    alert(`A lángosa megérkezik önhöz ${x*3 + 8} perc múlva`);
}


/*
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
*/