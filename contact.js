import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyB1nuEPcBhU2LFf0ivvTM7J2U03n1LPCkU",
            authDomain: "orientation-fb323.firebaseapp.com",
            projectId: "orientation-fb323",
            storageBucket: "orientation-fb323.firebasestorage.app",
            messagingSenderId: "1052452440769",
            appId: "1:1052452440769:web:6cb66c2c86a29609b7a240",
            measurementId: "G-L537X1YLEV"
        };

        // Initialiser Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // Exporter db pour l'utiliser dans contact.js
        window.db = db;
// contact.js

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log("Nom:", name, "Email:", email, "Message:", message);
    try {
        // Ajouter un document à la collection "contacts"
        const docRef = await addDoc(collection(window.db, "contact"), {
            name: name,
            email: email,
            message: message,
            timestamp: new Date() // Ajoute un horodatage
        });
        console.log("Document écrit avec ID: ", docRef.id);
        
        alert("Votre message a été envoyé avec succès 👏!");
    } catch (e) {
        console.error("Erreur lors de l'ajout du document: ", e);
        alert("Une erreur s'est produite lors de l'envoi de votre message : " + e.message);
    }

    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
});