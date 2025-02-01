import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

let firebaseApp: FirebaseApp | undefined;
let db: Firestore | undefined;

export function initFirebase(config: FirebaseConfig): void {
  if (!firebaseApp) {
    firebaseApp = initializeApp(config);
    db = getFirestore(firebaseApp);
  }
}

export function getDb(): Firestore {
  if (!db) {
    throw new Error('Firebase must be initialized before accessing the database');
  }
  return db;
}

export function isInitialized(): boolean {
  return !!db;
}
