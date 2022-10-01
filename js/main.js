import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
const db = getFirestore();
const auth = getAuth();
const alert = document.getElementById('alert');
document.getElementById("signIn").addEventListener("click", (e) => {
    e.preventDefault();
    alert.innerHTML = `<br><div class="d-flex justify-content-center">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
    const email = document.getElementById("dni").value;
    const password = document.getElementById("numesa").value;
    signInWithEmailAndPassword(auth, email+"@gmail.com", password)
    .then(  (userCredential) => {
        verificarUser(userCredential.user.uid);
    })
    .catch((error) => {
        alert.innerHTML = `<br>
        <div class="alert alert-danger" role="alert">
            Usuario o contraseña incorrectos, intente nuevamente.
        </div>`
    })
});

async function verificarUser(uid){
    const q = query(collection(db, "users"), where("uid", "==",uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if(doc.data().tipo == "admi"){
            window.location.href = "home.html";
        }else{
            window.location.href = "votos.html";
        }
    });
}