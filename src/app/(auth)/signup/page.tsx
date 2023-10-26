'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';

import Loading from '../../components/Loading/loading';


export default function SignUp() {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data: any) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Algo deu errado. Por favor, verifique o email novamente.\n\n" + errorCode + errorMessage)
        return
      })
    alert("Usuário cadastrado com sucesso!")
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className='bg-primary-600 p-8 rounded-md flex flex-col items-center'
      >
        <div
          className='text-white text-4xl mb-8'
        >
          Cadastrar
        </div>

        <form
          className='flex flex-col gap-4 w-80'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className='p-2 rounded-md'
            type="text" placeholder="Usuário" {...register("user", { required: true })}
          />
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
              Cadastrar
            </button>
          }

        </form>

      </div>
    </div>
  )
}
