// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Agrega esta importación

// Tu configuración de Firebase
const firebaseConfig = {
  // Configuración de tu proyecto Firebase
  apiKey: "AIzaSyDSAxvxrSEITkgUuN0ci05d_VO4K0KBUyY",
  authDomain: "seguializ-commerce.firebaseapp.com",
  projectId: "seguializ-commerce",
  storageBucket: "seguializ-commerce.appspot.com",
  messagingSenderId: "1011693193182",
  appId: "1:1011693193182:web:88295a112ba5d76f9cff4f",
  measurementId: "G-82VFV135XX"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
