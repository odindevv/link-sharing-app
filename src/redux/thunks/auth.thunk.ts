import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { authFirebase, dbFirebase } from '../../firebase/firebaseConfig';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

export const authThunkWithGoogle = createAsyncThunk(
  'firebase/auth',
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(authFirebase, provider);

      const { uid, email, displayName, photoURL } = result.user;
      const userData = {
        uid,
        email: email || '',
        displayName: displayName || '',
        photoURL: photoURL || '',
      };
      const userCollection = collection(dbFirebase, 'users');
      const userQuery = query(userCollection, where('id', '==', uid));
      const querySnapshot = await getDocs(userQuery);
      if (querySnapshot.empty) {
        await addDoc(userCollection, { ...userData });
      }
      return { userData };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

interface AuthParams {
  emailAuth: string;
  passwordAuth: string;
}

export const authRegisterWithEmailAndPassword = createAsyncThunk(
  'firebase/auth-register',
  async ({ emailAuth, passwordAuth }: AuthParams, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        authFirebase,
        emailAuth,
        passwordAuth
      );
      const { uid, email, displayName, photoURL } = userCredential.user;
      const userData = {
        uid,
        email: email || '',
        displayName: displayName || '',
        photoURL: photoURL || '',
      };
      return { userData };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const authLogin = createAsyncThunk(
  'firebase/auth-login',
  async ({ emailAuth, passwordAuth }: AuthParams, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        authFirebase,
        emailAuth,
        passwordAuth
      );
      const { uid, email, displayName, photoURL } = userCredential.user;
      const userData = {
        uid,
        email: email || '',
        displayName: displayName || '',
        photoURL: photoURL || '',
      };
      return { userData };
    } catch (error: any) {
      const errorMessage = error.message || 'Error desconocido';
      rejectWithValue(errorMessage);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'firebase/logout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(authFirebase);
      return;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
