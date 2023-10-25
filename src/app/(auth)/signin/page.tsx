'use client'
import React from 'react';
import { useForm } from 'react-hook-form';  // Formulários

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

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

          <button
            className='text-white border-2 rounded transition hover:text-primary-600 hover:bg-white p-2 hover:cursor-pointer mt-4'
            type="submit"
          >
            Entrar
          </button>
        </form>

      </div>
    </div>
  )
}
