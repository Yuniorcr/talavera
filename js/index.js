import { getFirestore, collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
const db = getFirestore();


window.addEventListener("DOMContentLoaded", async () => {
    const q = query(collection(db, "votos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const votoDistrital = [];
    const votoProvincial = [];
    const votoConsejero = [];
    const votoRegional = [];
    querySnapshot.forEach((doc) => {
        votoDistrital.push(doc.data().votoDistrital);
        votoProvincial.push(doc.data().votoProvincial);
        votoConsejero.push(doc.data().votoConsejeria);
        votoRegional.push(doc.data().votoRegional);
    });
    // sumar votos
    const sumaDistrital = sumarVotos(votoDistrital);
    const sumaProvincial = sumarVotos(votoProvincial);
    const sumaConsejero = sumarVotos(votoConsejero);
    const sumaRegional = sumarVotos(votoRegional);
    // mostrar en pantalla
    document.getElementById("distrito").innerHTML = `
    <p class="card-title" style="font-size: 90px">${sumaDistrital}</p>
    <h4 class="card-text">Distrito</h4>`;
    document.getElementById("provincia").innerHTML = `
    <p class="card-title" style="font-size: 90px">${sumaProvincial}</p>
    <h4 class="card-text">Provincia</h4>`;
    document.getElementById("consejeria").innerHTML = `
    <p class="card-title" style="font-size: 90px">${sumaConsejero}</p>
    <h4 class="card-text">Consejero</h4>`;
    document.getElementById("region").innerHTML = `
    <p class="card-title" style="font-size: 90px">${sumaRegional}</p>
    <h4 class="card-text">Regional</h4>`;

    });
});

function sumarVotos(votos) {
    let suma = 0;
    // parseInt
    for (let i = 0; i < votos.length; i++) {
        suma += parseInt(votos[i]);
    }
    return suma;
}