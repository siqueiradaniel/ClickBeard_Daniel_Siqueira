
// components/ScheduleForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useService } from '@/hooks/useServices'
import { useBarbersByService } from '@/hooks/useBarbers'
import { useCreateSchedule } from '@/hooks/useSchedules'

type ScheduleFormProps = {
    serviceId: number
    clientId?: number
}

const ScheduleForm = ({ serviceId, clientId }: ScheduleFormProps) => {
    const router = useRouter()
    const { service, loading: serviceLoading } = useService(serviceId)
    const { barbers, loading: barbersLoading } = useBarbersByService(serviceId)
    const { createSchedule, loading: creating } = useCreateSchedule()
    
    const [selectedBarberId, setSelectedBarberId] = useState<number | null>(null)
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')

    const availableTimes = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!selectedBarberId || !selectedDate || !selectedTime) {
            alert('Preencha todos os campos')
            return
        }

        try {
            await createSchedule({
                clientId,
                barberId: selectedBarberId,
                serviceId,
                date: new Date(selectedDate),
                time: selectedTime,
                status: 'SCHEDULED'
            })
            
            alert('Agendamento realizado com sucesso!')
            router.push('/my-schedules')
        } catch (error) {
            alert('Erro ao criar agendamento')
        }
    }

    if (serviceLoading || barbersLoading) {
        return (
            <div className="max-w-md mx-auto px-4 py-8">
                <div className="h-96 bg-neutral-800 rounded-lg animate-pulse" />
            </div>
        )
    }

    if (!service) {
        return (
            <div className="max-w-md mx-auto px-4 py-8 text-center text-red-400">
                <p>Serviço não encontrado</p>
            </div>
        )
    }

    return (
        <div className="max-w-md mx-auto px-4 py-8">
            <Card className="bg-neutral-800 border-neutral-700 text-white">
                <CardHeader>
                    <CardTitle>Agendar: {service.name}</CardTitle>
                    <p className="text-sm text-neutral-400">
                        R$ {service.price.toFixed(2)} • {service.duration} min
                    </p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Barbeiro
                            </label>
                            <Select onValueChange={(value) => setSelectedBarberId(Number(value))}>
                                <SelectTrigger className="bg-neutral-700 border-neutral-600">
                                    <SelectValue placeholder="Escolha um barbeiro" />
                                </SelectTrigger>
                                <SelectContent>
                                    {barbers.map((barber) => (
                                        <SelectItem key={barber.id} value={barber.id.toString()}>
                                            {barber.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Data
                            </label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full p-2 bg-neutral-700 border border-neutral-600 rounded-md text-white"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Horário
                            </label>
                            <Select onValueChange={setSelectedTime}>
                                <SelectTrigger className="bg-neutral-700 border-neutral-600">
                                    <SelectValue placeholder="Escolha um horário" />
                                </SelectTrigger>
                                <SelectContent>
                                    {availableTimes.map((time) => (
                                        <SelectItem key={time} value={time}>
                                            {time}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full" 
                            disabled={creating}
                        >
                            {creating ? 'Agendando...' : 'Confirmar Agendamento'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default ScheduleForm
