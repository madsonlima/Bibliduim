'use client'
import { auth } from '../../../services/firebaseConfig'
import { signOut } from 'firebase/auth';

export default function HandleSignOut() {

  signOut(auth)
  alert('LogOut realizado com sucesso!')

}