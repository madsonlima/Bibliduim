'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';

import Loading from '../../components/Loading/loading';

export default function SignIn() {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Algo deu errado. Por favor, verifique o email e a senha novamente.\n\n" + errorCode + errorMessage)
        return
      })
    alert("Usuário logado com sucesso!")
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className='bg-primary-600 p-8 rounded-md flex flex-col items-center'
      >
        <div
          className='text-white text-4xl mb-8'
        >
          Entrar
        </div>

        <form
          className='flex flex-col gap-4 w-80'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className='p-2 rounded-md'
            type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className='p-2 rounded-md'
            type="password" placeholder="Senha" {...register("password", { required: true, minLength: 6 })}
          />

          {
            loading ? <Loading /> : <button
              className='text-white border-2 rounded transition hover:text-primary-600 hover:bg-white p-2 hover:cursor-pointer mt-4'
              type="submit"
            >
              Entrar
            </button>
          }
        </form>

      </div>
    </div>
  )
}
