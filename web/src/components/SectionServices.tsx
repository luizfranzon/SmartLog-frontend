import Image from 'next/image'

import { Box, Check, Container, Presentation, Truck } from 'lucide-react'

import warehouseImage from '../../public/assets/warehouse.jpg'

export function SectionServices() {
  return (
    <div className="relative m-auto mb-24 max-w-[1180px] overflow-hidden px-4">
      <div className="invisible relative bottom-32" id="services"></div>
      <div className="relative m-auto mb-12 flex w-full justify-center">
        <div>
          <span className="relative z-10 m-auto font-mono text-4xl uppercase sm:text-5xl">
            NOSSOS SERVIÇOS
          </span>
          <div className={`relative bottom-5 h-4 bg-greenLime lg:w-[440px]`} />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 text-white lg:flex-row">
        <div className="flex-1 rounded-lg bg-veryDarkBlue p-5">
          <Truck className="mb-2" size={50} />
          <span className="text-xl font-bold">
            Gestão de Transporte Nacional
          </span>
          <div className="mt-4">
            <div className="flex items-center gap-1">
              <Check size={24} color="#C2FF1A" />
              <span className="text-lg">Transporte dedicado.</span>
            </div>
            <div className="flex items-center gap-1">
              <Check size={24} color="#C2FF1A" />
              <span className="text-lg">Distribuição.</span>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-veryDarkBlue p-5">
          <Presentation className="mb-2" size={50} />
          <span className="text-xl font-bold">Consultoria e Projetos</span>
          <div className="mt-4">
            <div className="flex flex-shrink-0 items-start gap-2">
              <div>
                <Check size={24} color="#C2FF1A" />
              </div>
              <span className="text-lg">
                Orientações e projetos nas áreas de planejamento, logística,
                suprimentos e gestão de materiais.
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-veryDarkBlue p-5">
          <Box className="mb-2" size={50} />
          <span className="text-xl font-bold">Operações In House</span>
          <div className="mt-4">
            <div className="flex items-start gap-1">
              <div>
                <Check size={24} color="#C2FF1A" />
              </div>
              <span className="text-lg">
                Aplicação da expertise e tecnologia da SmartLog na sua casa.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full flex-1 justify-between rounded-lg bg-veryDarkBlue text-white">
        <div className="p-5">
          <Container className="mb-2" size={50} />
          <span className="text-xl font-bold">
            Armazenagem e Gestão de Estoques
          </span>
          <div className="mt-4">
            <div className="flex items-start gap-1">
              <div>
                <Check size={24} color="#C2FF1A" />
              </div>
              <span className="text-lg">
                Matérias-primas; Produtos acabados; Montagem de Kits.
              </span>
            </div>
            <div className="flex items-start gap-1">
              <div>
                <Check size={24} color="#C2FF1A" />
              </div>
              <span className="text-lg">
                Fulfillment para operações de E-commerce.
              </span>
            </div>
            <div className="flex items-start gap-1">
              <div>
                <Check size={24} color="#C2FF1A" />
              </div>
              <span className="text-lg">
                Picking/Packing; Ova/Desova de containers, mecanizada ou a
                granel.
              </span>
            </div>
            <div className="flex items-start gap-1">
              <div>
                <Check size={24} color="#C2FF1A" />
              </div>
              <span className="text-lg">
                Alimentos; Cosméticos; Medicamentos; Produtos para Saúde
                (correlatos).
              </span>
            </div>
          </div>
        </div>
        <Image
          className="hidden max-w-[450px] lg:block"
          src={warehouseImage}
          alt=""
        />
      </div>
      <div className="w-full min-w-96 overflow-x-scroll px-10 sm:p-0">
        <table className="mt-24 w-full border-collapse">
          <thead className="border-2 border-veryDarkBlue bg-veryDarkBlue font-bold text-white">
            <tr>
              <td className="p-4 text-lg">Serviço</td>
              <td className="p-4 text-center text-lg text-green-500">Basic</td>
              <td className="p-4 text-center text-lg text-orange-500">
                Premium
              </td>
              <td className="p-4 text-center text-lg text-amber-400">
                Enterprise
              </td>
            </tr>
          </thead>
          <tbody className="border-2 border-veryDarkBlue [&>*:nth-child(2n+1)]:bg-slate-200">
            <tr>
              <td className="p-4 ">Lorem ipsum dolor</td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
            </tr>
            <tr>
              <td className="p-4 ">Consectetur</td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
            </tr>
            <tr className="">
              <td className="p-4 ">Sed do eiusmod</td>
              <td className="p-4 "></td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
            </tr>
            <tr>
              <td className="p-4 ">Incididunt ut</td>
              <td className="p-4 "></td>
              <td className="p-4 "></td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
            </tr>
            <tr>
              <td className="p-4 ">Ut enim ad</td>
              <td className="p-4 "></td>
              <td className="p-4 "></td>
              <td className="p-4 ">
                <Check className="w-full" size={24} color="#0d1118" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
