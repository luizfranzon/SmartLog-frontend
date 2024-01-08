import Image from 'next/image'

import warehouseInsideImage from '../../public/assets/warehouseInside.png'
import { AccordionComponent } from './Accordion'

export function SectionQuality() {
  return (
    <div className="m-auto mt-40 max-w-[1180px]">
      <div className="invisible relative bottom-32" id="quality"></div>
      <div className="relative m-auto mb-12 flex w-full justify-center">
        <div className="hidden flex-col items-center lg:flex">
          <span className="relative z-10 m-auto font-mono text-2xl uppercase lg:text-5xl">
            POLÍTICA DE QUALIDADE
          </span>
          <div
            className={`relative bottom-5 h-4 w-[300px] bg-greenLime lg:w-[625px]`}
          />
          <span className="relative z-10 m-auto font-mono text-2xl uppercase lg:text-5xl">
            {' '}
            E DIFERENCIAIS
          </span>
          <div
            className={`relative bottom-5 h-4 w-[210px] bg-greenLime lg:w-[420px]`}
          />
        </div>
        <div className="flex flex-col items-center lg:hidden">
          <span className="relative z-10 m-auto font-mono text-4xl uppercase">
            QUALIDADE E
          </span>
          <div
            className={`relative bottom-5 h-4 w-[250px] bg-greenLime lg:w-[625px]`}
          />
          <span className="relative z-10 m-auto font-mono text-4xl uppercase">
            {' '}
            DIFERENCIAIS
          </span>
          <div
            className={`relative bottom-5 h-4 w-[260px] bg-greenLime lg:w-[420px]`}
          />
        </div>
      </div>
      <Image
        src={warehouseInsideImage}
        alt=""
        className="mb-16 hidden px-6 sm:block"
      />
      <p className="px-5 text-center text-2xl font-semibold sm:text-3xl">
        <span className="font-bold">SmartLog Ltda</span>: eficiência e
        excelência em armazenagem e gestão de estoques.
      </p>
      <p className="mt-16 px-5 text-xl">
        A <span className="font-bold">SmartLog</span> é uma empresa
        especializada em serviços logísticos em armazenagem e gestão de
        estoques. A empresa busca a máxima eficiência em suas operações, com
        foco na satisfação dos clientes.
      </p>
      <br />
      <p className="px-5 text-xl">
        Para alcançar esse objetivo, a SmartLog se compromete com os seguintes{' '}
        <span className="font-bold">princípios</span>:
      </p>
      <div className="mt-20">
        <AccordionComponent />
      </div>
    </div>
  )
}
