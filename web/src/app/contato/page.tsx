'use client'

import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { ChevronsLeft } from 'lucide-react'
import Link from 'next/link'

const sendMailFormSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  email: z
    .string()
    .min(1, { message: 'O e-mail é obrigatório' })
    .email('Formato do e-mail inválido'),
  subject: z.string().min(1),
  message: z.string().min(1, { message: 'A mensagem é obrigatória' }),
})

type SendMailFormSchema = z.infer<typeof sendMailFormSchema>

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMailFormSchema>({
    resolver: zodResolver(sendMailFormSchema),
  })

  function handleUserSubmitForm() {
    console.log('email send')
  }

  return (
    <div className="flex h-[115vh] w-full flex-col items-center bg-veryDarkBlue sm:h-screen">
      <Link
        href={'/'}
        className="mt-12 flex items-center font-mono text-3xl text-white"
      >
        {' '}
        <ChevronsLeft color="#C2FF1A" size={36} /> Voltar
      </Link>
      <h1 className="mt-12 font-mono text-xl text-white sm:text-3xl">
        Envie a sua mensagem!
      </h1>

      <form
        onSubmit={handleSubmit(handleUserSubmitForm)}
        className="mt-12 flex w-full max-w-3xl flex-col gap-5 px-6"
        action=""
      >
        <div className="flex w-full flex-col">
          <label className="text-lg text-white" htmlFor="name">
            Nome:
          </label>
          <input
            type="text"
            className="rounded-sm border border-[#3b475c] bg-[#212c3f] px-4 py-2 text-lg text-white outline-none focus:outline-greenLime"
            placeholder="Nome"
            {...register('name', {
              required: 'Esse campo precisa ser preenchido',
              max: 28,
              min: 3,
            })}
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-white" htmlFor="email">
            E-mail:
          </label>
          <input
            type="email"
            className="rounded-sm border border-[#3b475c] bg-[#212c3f] px-4 py-2 text-lg text-white outline-none focus:outline-greenLime"
            placeholder="exemplo@email.com"
            {...register('email', {
              required: 'Esse campo precisa ser preenchido',
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-white" htmlFor="subject">
            Assunto:
          </label>
          <select
            className="rounded-sm border border-[#3b475c] bg-[#212c3f] px-4 py-2 text-lg text-white outline-none focus:outline-greenLime"
            {...register('subject', { required: true })}
          >
            <option value="Sugestão">Sugestão</option>
            <option value="Reclamação">Reclamação</option>
            <option value="Denúncia">Denúncia</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-white" htmlFor="message">
            Mensagem:
          </label>
          <textarea
            placeholder="Mensagem"
            className="rounded-sm border border-[#3b475c] bg-[#212c3f] px-4 py-2 text-lg text-white outline-none focus:outline-greenLime"
            rows={6}
            {...register('message', {
              required: 'Esse campo precisa ser preenchido',
            })}
          />
          {errors.message && (
            <span className="text-red-600">{errors.message.message}</span>
          )}
        </div>

        <button
          className="mb-8 rounded-md bg-greenLime p-5 font-bold text-veryDarkBlue"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
