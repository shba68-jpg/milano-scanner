import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzLUoUtiUGm8XVw2Av-hPG5SX09_AYPsk",
  authDomain: "milano-os-core.firebaseapp.com",
  projectId: "milano-os-core",
  storageBucket: "milano-os-core.firebasestorage.app",
  messagingSenderId: "301545257884",
  appId: "1:301545257884:web:f2e687e2b923e073c82659",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app, "gs://milano-invoices-v2");
