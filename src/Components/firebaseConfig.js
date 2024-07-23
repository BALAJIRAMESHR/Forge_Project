// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDPpJXGLRIfRmlnf_JpsfTjvt1vYT28Lro",
  authDomain: "car-manu.firebaseapp.com",
  databaseURL: "https://car-manu-default-rtdb.firebaseio.com",
  projectId: "car-manu",
  storageBucket: "car-manu.appspot.com",
  messagingSenderId: "771412513807",
  appId: "1:771412513807:web:e3ccd71b1ed2023d9f7f7a",
  measurementId: "G-2GF3RK9GV1"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export {  database };
