import { Mail, MapPin, Phone } from 'lucide-react'

export function SectionContact() {
  return (
    <div className="m-auto mt-40 max-w-[1180px]">
      <div className="invisible relative bottom-32" id="services"></div>
      <div className="relative m-auto mb-12 flex w-full justify-center">
        <div className="relative m-auto mb-12 flex w-full justify-center">
          <span className="relative z-10 m-auto font-mono text-4xl uppercase lg:text-5xl">
            FALE CONOSCO
          </span>
          <div
            className={`absolute bottom-1 h-4 w-[260px] bg-greenLime lg:w-[360px]`}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <iframe
          className="w-full rounded-t-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542.8503674099798!2d-47.20991264978769!3d-23.11402908949786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4b1332e5349d%3A0xf57bcebc057ff24c!2zTm92YSBTb2x1w6fDo28gTG9nw61zdGljYSAmIFRyYW5zcG9ydGU!5e0!3m2!1spt-BR!2sbr!4v1704730377875!5m2!1spt-BR!2sbr"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="mb-60 grid w-full gap-12 rounded-b-md bg-veryDarkBlue p-8 text-white sm:grid-cols-3">
          <div className="flex flex-col items-center ">
            <MapPin size={80} color="#C2FF1A" />
            <span className="font-mono text-3xl">Endereço</span>
            <span className="mt-1 text-center">
              Rua Estr. Ângela Trevisan <br /> Indaiatuba/SP | 13340-730
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Mail size={80} color="#C2FF1A" />
            <span className="font-mono text-3xl">E-mail</span>
            <a href="mailto:contato@smartlog.com" className="mt-1 underline">
              contato@smartlog.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Phone size={80} color="#C2FF1A" />
            <span className="font-mono text-3xl">Telefone</span>
            <span className="mt-1">+55 11 4028-6647</span>
          </div>
        </div>
      </div>
    </div>
  )
}
