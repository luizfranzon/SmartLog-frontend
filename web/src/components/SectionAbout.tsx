import Image from 'next/image'
import workerImage from '../../public/assets/worker.png'

export function SectionAbout() {
  return (
    <div className="relative m-auto mb-16 max-w-[1180px] px-3">
      <div className="invisible relative bottom-32" id="about"></div>
      <div className="">
        <div className="relative mb-12 flex w-full justify-center lg:m-auto lg:block">
          <span className="relative z-10 m-auto font-mono text-5xl uppercase">
            QUEM SOMOS
          </span>
          <div className={`absolute bottom-2 h-4 w-[300px] bg-greenLime`} />
        </div>
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-6 lg:flex-row">
        <div className="m-auto mt-4 max-w-md text-xl lg:m-0">
          <p>
            Fundada em <strong>2013</strong>, a <strong>SmartLog</strong> é
            uma empresa que oferece serviços logísticos integrados, comprometida
            em fornecer um serviço de excelência, com foco na qualidade, na
            eficiência e na satisfação dos clientes.
          </p>
          <br />
          <p>
            Com <strong>mais de 20 anos</strong> de experiência no mercado, a <strong>SM</strong>{' '}
            é especialista em planejamento, organização e controle de atividades
            de movimentação, armazenagem e distribuição de mercadorias.
          </p>
        </div>
        <Image
          width={445}
          quality={100}
          src={workerImage}
          alt="Trabalhador com um chapéu de construção amarelo e um tablet na mão"
          className="m-auto lg:m-0"
        />
      </div>
    </div>
  )
}
