import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-veryDarkBlue text-white">
      <h1 className="px-5 font-mono text-2xl">Página não encontrada!</h1>
      <span className="p-4 text-xl">
        Clique{' '}
        <Link className="font-bold text-greenLime" href={'/'}>
          aqui
        </Link>{' '}
        para voltar para o início.
      </span>
    </div>
  )
}
