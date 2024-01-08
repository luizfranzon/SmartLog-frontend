import { LogoSmartLog } from './LogoSmartLog'

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-6 bg-veryDarkBlue p-6 text-white">
      <LogoSmartLog />
      <span className="text-center sm:text-lg ">
        © 2024 SmartLog - Todos os direitos reservados
      </span>
    </footer>
  )
}
