import { initializeApp } from "firebase/app"
import { initializeAuth } from "firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore } from "firebase/firestore"
import type { Persistence } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID
}

const app = initializeApp(firebaseConfig)

// React NativeでのAuth初期化、AsyncStorageを永続化に指定
const auth = initializeAuth(app, {
  persistence: AsyncStorage as unknown as Persistence
})

const db = getFirestore(app)

export { auth, db }
