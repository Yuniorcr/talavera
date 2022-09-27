import { getAuth, createUserWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = getFirestore();
const auth = getAuth();

const alert = document.getElementById("alert");

document.getElementById("save").addEventListener("click", async (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido")
    let dni = document.getElementById("dni")
    let password = document.getElementById("password")
    let celular = document.getElementById("cel")
    let comunidad = document.getElementById("Comunidad")
    let mesa = document.getElementById("mesa")
    let tipo = document.getElementById("tipo")
    console.log(dni.value, password.value);
    createUserWithEmailAndPassword(auth, dni.value+"@gmail.com", password.value)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        saveUser(nombre.value,apellido.value,dni.value,celular.value,comunidad.value,mesa.value, user.uid, tipo.value);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert.innerHTML = `<div class="alert alert-danger" role="alert">
        ${errorMessage}
        </div>`;
    });
});

async function saveUser(nombre, apellido, dni, celular, comunidad, mesa, uid, tipo) {
    console.log(nombre, apellido, dni, celular, comunidad, mesa, uid);
    try {
        const docRef =  await addDoc(collection(db, "users"), {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            celular: celular,
            comunidad: comunidad,
            mesa: mesa,
            uid: uid,
            tipo: tipo
        });
        alert.innerHTML = `<div class="alert alert-success" role="alert">
        Usuario registrado con exito
        </div>`;
        //singOut();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.");
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
          document.getElementById("nombre").value = "";
          document.getElementById("apellido").value = "";
          document.getElementById("dni").value = "";
          document.getElementById("password").value = "";
          document.getElementById("cel").value = "";
          document.getElementById("Comunidad").value = "";
          document.getElementById("mesa").value = "";

    } catch (e) {
        alert.innerHTML = `<div class="alert alert-danger" role="alert">
        Error al registrar usuario: ${e}	
        </div>`;
    }
}