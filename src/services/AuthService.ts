import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey:"",
  authDomain:"",
  projectId:"",
  storageBucket:"",
  messagingSenderId:"",
  appId:"",
};

class AuthService {
    app = initializeApp(firebaseConfig);

    async login(email: string, password: string) {
        const auth = getAuth();
        try {
            const userCreds = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCreds.user.getIdToken();
            const claims = await userCreds.user.getIdTokenResult();
            console.log(claims);
            localStorage.setItem("token", token);
            return true;
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { errorMessage, errorCode };
        }
    }
}

const authService = new AuthService();
export default authService;