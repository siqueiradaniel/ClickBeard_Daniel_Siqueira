import React from 'react'

interface 
const ServiceCard = () => {
  return (
    const ServiceCard = ({ service }: { service: Service }) => {
        return (
          <Card className="w-full max-w-sm shadow-sm border border-neutral-800">
            <CardHeader>
              <CardTitle className="text-lg">{service.name}</CardTitle>
              {service.description && (
                <CardDescription>{service.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex justify-between items-center text-sm text-neutral-300">
              <span>Duração: {service.duration ?? 30} min</span>
              <span>R$ {service.price.toFixed(2)}</span>
            </CardContent>
          </Card>
        )
      }
  )
}

export default ServiceCard