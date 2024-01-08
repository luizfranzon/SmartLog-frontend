import Image from 'next/image'

import warehouseUpViewImage from '../../public/assets/warehouseUpView.png'
import { Check } from 'lucide-react'

export function SectionStructure() {
  return (
    <div className="m-auto mt-24 max-w-[1180px] px-7">
      <div className="invisible relative bottom-32" id="structure"></div>
      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2">
          <div className="relative mb-12 flex w-full justify-center lg:m-auto lg:block">
            <span className="relative z-10 m-auto font-mono text-5xl uppercase">
              ESTRUTURA
            </span>
            <div className={`absolute bottom-2 h-4 w-[260px] bg-greenLime`} />
          </div>
          <div className="mt-12">
            <span className="font-mono text-3xl">
              Indaiatuba/SP{' '}
              <span className="font-sans font-medium italic text-veryDarkBlue/60">
                <br />
                (Matriz própria)
              </span>{' '}
            </span>
            <div className="mt-10 flex flex-col gap-3 font-medium lg:text-xl">
              <div className="flex shrink-0 items-start gap-2">
                <Check className="min-w-9" size={36} />
                <p>
                  60.000 m2 de área total. 40.000 m2 de Armazém, <br />
                  dividida em 11 módulos.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="min-w-9" size={36} />
                <p>28 docas para carga e descarga.</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="min-w-9" size={36} />
                <p>
                  Estrutura administrativa de 2.000 m2, para estabelecimento
                  <br /> de filiais.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="min-w-9" size={36} />
                <p>
                  Pátio externo de triagem de veículos com capacidade <br />{' '}
                  para 16 carretas.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="min-w-9" size={36} />
                <p>Pátio interno com capacidade de 30 carretas.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 font-medium">
            <span className="font-mono text-3xl">Cariacica/ES </span>
            <div className="mt-10 flex flex-col gap-3 font-medium lg:text-xl">
              <div className="flex items-start gap-2">
                <Check className="min-w-9" size={36} />
                <p>
                  Pátio externo para armazenamento de grandes <br /> volumes e
                  “cargas projeto”.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="min-w-9" size={36} />
                <p>5.000 m2 de área total.</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="hidden justify-self-end lg:block"
          width={380}
          src={warehouseUpViewImage}
          alt=""
        />
      </div>
    </div>
  )
}
