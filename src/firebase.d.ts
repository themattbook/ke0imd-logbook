declare module "firebase/auth" {
    interface Auth {
        signInWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential>;
    }
}
