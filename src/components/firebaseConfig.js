// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importa getFirestore

// Configuración de tu aplicación de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvshdNrpeXB6ieaCxIz63v9kfMFMSIxeM",
  authDomain: "ecommerce-2b09a.firebaseapp.com",
  projectId: "ecommerce-2b09a",
  storageBucket: "ecommerce-2b09a.appspot.com",
  messagingSenderId: "425018347753",
  appId: "1:425018347753:web:15a955b6b1f32c51fae078",
  measurementId: "G-SC0WQ4LN84"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
