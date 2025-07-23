'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

type Service = {
    id: number
    name: string
    description?: string
    duration?: number
    price: number
}

const services: Service[] = [
    { id: 1, name: "Corte Masculino", description: "Corte com tesoura e máquina", price: 40 },
    { id: 2, name: "Barba", description: "Modelagem de barba", price: 30 },
    { id: 3, name: "Corte + Barba", description: "Pacote completo", price: 60 },
    { id: 4, name: "Sobrancelha", description: "Limpeza e alinhamento", price: 15 },
    { id: 5, name: "Pigmentação", description: "Barba ou cabelo", price: 70 },
    { id: 6, name: "Hidratação Capilar", description: "Hidratação profunda", price: 25 },
    { id: 7, name: "Design de Corte", description: "Riscos e detalhes", price: 35 },
    { id: 8, name: "Platinado", description: "Descoloração e matização", price: 100 },
    { id: 9, name: "Corte Infantil", description: "Até 12 anos", price: 30 },
    { id: 10, name: "Relaxamento", description: "Redução de volume", price: 55 },
    { id: 11, name: "Alisamento", description: "Progressiva ou definitiva", price: 80 },
    { id: 12, name: "Massagem Facial", description: "Relaxamento e cuidados", price: 20 },
]

const ServiceCard = ({ service }: { service: Service }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/schedules/${service.id}`)
    }
    return (
        <Card className="w-full h-full border border-neutral-800 shadow-sm bg-neutral-800 text-white flex flex-col justify-between">
            <CardHeader className="text-center">
                <CardTitle className="text-lg">{service.name}</CardTitle>
            </CardHeader>

            {service.description && (
                <CardContent className="text-center text-sm text-neutral-300 mb-4">
                    <CardDescription>{service.description}</CardDescription>
                </CardContent>
            )}

            <CardContent className="mt-auto pt-2 flex justify-between items-center text-sm text-neutral-100 border-t border-neutral-700">
                <span className="font-medium">R$ {service.price.toFixed(2)}</span>
                <Button className="mt-4" onClick={handleClick}>
                    Reservar
                </Button>
            </CardContent>
        </Card>
    )
}

const ServiceList = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-white mb-6">Nossos Serviços</h2>

            {/* Grade com 3 colunas em telas médias */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    )
}

export default ServiceList
