'use client'
import HandleSignOut from '../Firebase/HandleSignOut'

import { auth } from '../../services/firebaseConfig'
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  if (user) {
    return <nav
      className="bg-primary-600 text-white flex justify-between items-center space-x-4 p-4"
    >
      <a
        className="text-4xl ml-4"
        href="/home"
      >
        BIBLIDUIM
      </a>

      <ul
        className="flex gap-4"
      >
        <li>
          <a
            className="p-2.5 rounded transition hover:bg-primary-800 mr-4"
            href="/signin"
            onClick={(() => { HandleSignOut() })}
          >
            Sair
          </a>
        </li>
      </ul>
    </nav>
  } else {
    return <nav
      className="bg-primary-600 text-white flex justify-between items-center space-x-4 p-4"
    >
      <a
        className="text-4xl ml-4"
        href="/"
      >
        BIBLIDUIM
      </a>

      <ul
        className="flex gap-4"
      >
        <li>
          <a
            className="p-2.5 rounded transition hover:bg-primary-800"
            href="/signin"
          >
            Entrar
          </a>
        </li>
        <li>
          <a
            className="border-2 p-2 rounded transition hover:text-primary-600 hover:bg-white mr-4"
            href="/signup"
          >
            Cadastrar
          </a>
        </li>
      </ul>
    </nav>
  }
}