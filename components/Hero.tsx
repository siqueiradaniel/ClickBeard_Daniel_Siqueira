import React from 'react'
import CTACard from './hero/CTACard'

const CTA = [
  {
    title: "Agendamento simplificado",
    description: "Aqui você tem acesso a um processo de agendamento simples e eficiente, permitindo que você reserve seu horário com facilidade."
  },
  {
    title: "Barbearias de elite",
    description: "Explore uma seleção das melhores barbearias parceiras. Encontre ambientes profissionais e qualificados para cuidar do seu visual.",
  },
  {
    title: "Explorando estilos",
    description: "A QUICK BARBER oferece uma ampla gama de barbearias parceiras que você possa explorar e encontrar o estilo que mais combina com você.",
  }
]

const Hero = () => {
  return (
    <section>
      <div>
        <img src='bannerHome.png' />
      </div>
      <div className='flex flex-col items-center max-w-5xl mx-auto'>
        <div className='flex flex-col items-center space-y-4 py-5 '>
          <h1 className="text-2xl font-bold uppercase md:text-3xl">
            Sua jornada de estilo começa aqui
          </h1>
          <p className="text-sm font-light dark:text-white/70">
            Descubra a praticidade da QUICK BARBER, a plataforma de agendamento
            online que simplifica todo o processo de reserva de horários em
            barbearias.
          </p>
        </div>
        <div className='flex space-x-4 mx-4'>
          {CTA.map((card) => (
            <CTACard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero