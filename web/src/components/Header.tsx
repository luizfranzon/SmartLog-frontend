import Image from 'next/image'
import Logo from '../../public/assets/mklog-logo.png'

import '@/styles/navItemHoverAnimation.css'
import Link from 'next/link'
import { LogoSmartLog } from './LogoSmartLog'

export function Header() {
  return (
    <header className="flex items-center justify-center px-6 py-6 lg:justify-between">
      <LogoSmartLog />
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-6 font-mono text-xl text-white">
          <li>
            <a className="navItem relative inline-block" href="#about">
              QUEM SOMOS<span className="text-greenLime">.</span>
            </a>
          </li>
          <li>
            <a className="navItem relative inline-block" href="#services">
              SERVIÇOS<span className="text-greenLime">.</span>
            </a>
          </li>
          <li>
            <a className="navItem relative inline-block" href="#structure">
              ESTRUTURA<span className="text-greenLime">.</span>
            </a>
          </li>
          <li>
            <a className="navItem relative inline-block" href="#quality">
              QUALIDADE<span className="text-greenLime">.</span>
            </a>
          </li>
        </ul>
      </nav>
      <Link
        href={'/contato'}
        className="text-x hidden rounded-md border-2 border-greenLime bg-greenLime/10 px-6 py-4 font-mono text-white transition-colors hover:bg-greenLime/30 lg:block"
      >
        CONTATO
      </Link>
    </header>
  )
}
