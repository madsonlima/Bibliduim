'use client'
import { useForm } from "react-hook-form";
import React, { useState } from 'react';

import { collection, getDocs } from "firebase/firestore";

import Loading from "../../../components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(false) // Loading

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data: any) => {
    setLoading(true)

  }

  return (
    <div className="">
      <form
        className='bg-primary-800 rounded-b-lg w-screen grid items-center justify-items-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap gap-4 p-4 ">
          <div>
            <label className="text-white flex flex-col">Console</label>
            <select
              className='p-2 rounded-md h-10'
              {...register("console", { required: true })}
            >
              <option value="3DS">3DS</option>
              <option value="GB/GBC">GB/GBC</option>
              <option value="GBA">GBA</option>
              <option value="GC">GC</option>
              <option value="MD">MD</option>
              <option value="N64">N64</option>
              <option value="NDS">NDS</option>
              <option value="PC">PC</option>
              <option value="PS">PS</option>
              <option value="PS2">PS2</option>
              <option value="PS3">PS3</option>
              <option value="PS4">PS4</option>
              <option value="PSP">PSP</option>
              <option value="SNES">SNES</option>
              <option value="SWITCH">SWITCH</option>
              <option value="WII">WII</option>
              <option value="WII U">WII U</option>
            </select>
          </div>

          <div>
            <label className="text-white flex flex-col">Título</label>
            <input
              className='p-2 rounded-md'
              type="text" {...register("titulo", { required: true })}
            />
          </div>

          <div>
            <label className="text-white flex flex-col">Franquia</label>
            <input
              className='p-2 rounded-md w-24'
              type="text" {...register("franquia", { required: false })}
            />
          </div>

          <div>
            <label className="text-white flex flex-col">Status</label>
            <select
              className='p-2 rounded-md h-10'
              {...register("status", { required: true })}
            >
              <option value="Jogando">Jogando</option>
              <option value="Finalizado">Finalizado</option>
              <option value="Platinado">Platinado</option>
              <option value="Contínuo">Contínuo</option>
              <option value="Engavetado">Engavetado</option>
            </select>
          </div>

          <div>
            <label className="text-white flex flex-col">Nota</label>
            <select
              className='p-2 rounded-md w-14 h-10'
              defaultValue={10} {...register("nota", { required: true })}
            >
              <option value="11">11</option>
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>

          <div>
            <label className="text-white flex flex-col">Data de início</label>
            <input
              className='p-2 rounded-md h-10'
              type="date" {...register("dataini", { required: false })}
            />
          </div>

          <div>
            <label className="text-white flex flex-col">Data de término</label>
            <input
              className='p-2 rounded-md h-10'
              type="date" {...register("datafim", { required: false })}
            />
          </div>

          <div>
            <label className="text-white flex flex-col">Horas</label>
            <input
              className='p-2 rounded-md w-24'
              type="text" {...register("horas", { required: false })}
            />
          </div>

          <div>
            <label className="text-white flex flex-col">Contagem</label>
            <input
              className='p-2 rounded-md w-24'
              type="number" {...register("vezes", { required: false })}
            />
          </div>

          <div>
            <label className="text-white flex flex-col">Rejogabilidade</label>
            <select
              className='p-2 rounded-md w-full h-10'
              {...register("rejogabilidade", { required: false })}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          <div>
            <label className="text-white flex flex-col">Outras informações</label>
            <textarea
              className='p-2 rounded-md h-10 w-40'
              {...register("outras", { required: false })}
            />
          </div>

          <div>
            <label className="text-white flex flex-col">Review</label>
            <textarea
              className='p-2 rounded-md h-10 w-40'
              {...register("review", { required: false })}
            />
          </div>

          <div className="flex gap-1">
            {
              loading ? <Loading /> : <button
                className='text-white border-2 rounded transition hover:text-primary-600 hover:bg-white h-full px-6 hover:cursor-pointer w-auto flex flex-col items-center justify-center'
                type="submit"
              >
                V
              </button>
            }
            <button
              className='text-white border-2 rounded transition hover:border-primary-200 hover:bg-primary-200 px-2 hover:cursor-pointer w-auto flex flex-col items-center justify-center'
              type="reset"
            >
              X
            </button>
          </div>
        </div>
      </form>



    </div>
  )
}
/**
 * 
 *    <div className="bg-primary-1200 w-screen h-screen flex items-center">
      <div
        className="h-full w-2/3 flex "
      >
      </div>
      <div className="flex-col gap-4 mr-16 grid justify-items-end">
        <h1 className="text-white text-8xl">HOME</h1>
        <h2 className='text-white text-4xl mr-2'>Página Home</h2>
      </div>
    </div>


 */