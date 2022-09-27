import { getFirestore,deleteDoc, collection, query,doc, where,onSnapshot, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = getFirestore();
const deleteVoto = async (id) => {
    await deleteDoc(doc(db, "votos",id));
    Mostrar();
}

window.onload = Mostrar;
async function Mostrar(){

    const q = query(collection(db, "votos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        document.getElementById("cuerpo").innerHTML="";
        var i=0;
    querySnapshot.forEach((doc) => {
        i++;
        document.getElementById("cuerpo").innerHTML += `
        <tr>
            <td>${i}</td>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().apellido}</td>
            <td>${doc.data().dni}</td>
            <td>${doc.data().votoRegional}</td>
            <td>${doc.data().votoConsejeria}</td>
            <td>${doc.data().votoProvincial}</td>
            <td>${doc.data().votoDistrital}</td>
            <td><a target="_"href="${doc.data().votoIMG}">Ver</a></td>
            <td>
              <button class="btn btn-danger" id="${doc.id}" >Eliminar</button>
            </td>
        </tr>
        `;
        const deleteButton = document.querySelectorAll('.btn-danger')
        deleteButton.forEach((button)=>{
          button.addEventListener('click', (e)=>{
            deleteVoto(e.target.id)
          })
        }
        )
    });
    });
    
}
