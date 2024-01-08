import { Header } from '@/components/Header'
import { DataCardHeroSection } from '@/components/DataCardHeroSection'
import { SectionAbout } from '@/components/SectionAbout'
import { SectionServices } from '@/components/SectionServices'
import { SectionStructure } from '@/components/SectionStructure'
import { SectionQuality } from '../components/SectionQuality'
import { SectionContact } from '@/components/SectionContact'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="relative h-[900px] w-full bg-truck bg-cover bg-no-repeat">
        <div className="m-auto max-w-[1180px]">
          <Header />
          <div className="flex h-[500px] flex-col items-center justify-center px-3 sm:h-[750px] lg:flex-row lg:justify-end">
            <h2 className="mb-36 max-w-[630px] text-center font-mono text-2xl text-white lg:text-right lg:text-4xl">
              Logística com eficiência e qualidade, para o{' '}
              <span className="text-greenLime">sucesso</span>{' '}
              <br className="hidden lg:block" />
              do seu negócio.
            </h2>
            <Link
              className="text-xlrounded-md border-2 border-greenLime bg-greenLime/10 px-6 py-4 font-mono text-white transition-colors hover:bg-greenLime/30 lg:hidden"
              href={'/contato'}
            >
              ENTRE EM CONTATO
            </Link>
          </div>
        </div>
      </div>
      <DataCardHeroSection />
      <SectionAbout />
      <SectionServices />
      <SectionStructure />
      <SectionQuality />
      <SectionContact />
      <Footer />
    </div>
  )
}
