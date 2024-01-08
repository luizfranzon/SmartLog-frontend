'use client'

import CountUp from 'react-countup'

export function DataCardHeroSection() {
  return (
    <div className="relative bottom-28 m-auto flex max-w-[390px] flex-col items-center justify-between gap-10 rounded-md bg-[#0d1118] px-12 py-10 font-mono lg:max-w-[1180px] lg:flex-row">
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="text-6xl text-white">
          +<CountUp start={0} end={20} />
        </span>

        <span className="text-center text-greenLime lg:text-xl">
          ANOS DE <br></br> EXPERIÊNCIA.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="text-6xl text-white">
          <CountUp start={0} end={60000} />
          <span className="text-4xl text-greenLime">m2</span>
        </span>
        <span className="text-center text-greenLime lg:text-xl">
          DE ÁREA TOTAL. SENDO 66% <br></br> APENAS DE ARMAZÉM.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="text-6xl text-white">
          <CountUp start={0} end={28} />
        </span>
        <span className="text-center text-greenLime lg:text-xl">
          DOCAS PARA CARGA <br></br> E DESCARGA.
        </span>
      </div>
    </div>
  )
}
