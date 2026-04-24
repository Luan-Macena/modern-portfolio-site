'use client'

import { CheckCircle, Users, Award, Truck } from 'lucide-react'

export default function Differentials() {
  const differentials = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Garantia Completa',
      description: 'Todos os serviços com garantia de 5 anos contra defeitos de fabricação.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Equipe Experiente',
      description: 'Profissionais certificados e treinados nas melhores técnicas do mercado.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Prêmios e Certificações',
      description: 'Reconhecidos pela qualidade e excelência nos serviços prestados.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Atendimento Rápido',
      description: 'Resposta em até 24 horas e execução eficiente dos trabalhos.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por Que Nos Escolher?
          </h2>
          <p className="text-xl text-blue-100">
            Diferenciais que fazem a diferença
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="glass p-8 rounded-xl text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="mb-4">{diff.icon}</div>
              <h3 className="text-lg font-bold mb-2">{diff.title}</h3>
              <p className="text-blue-100">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}