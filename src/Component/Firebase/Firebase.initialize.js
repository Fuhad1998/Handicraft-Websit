import { initializeApp } from "firebase/app";
import firebaseConfig from "../src/Component/Firebase/Firebase.config";


const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;