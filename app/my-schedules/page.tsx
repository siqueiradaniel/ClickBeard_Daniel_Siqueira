'use client'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useSchedulesWithDetails, useCancelSchedule } from '@/hooks/useSchedules'

const MySchedulesPage = () => {
    const { schedules, loading, error, refetch } = useSchedulesWithDetails()
    const { cancelSchedule, loading: cancelling } = useCancelSchedule()

    // Simular cliente logado (ID = 2)
    const currentClientId = 2
    const mySchedules = schedules.filter(schedule => schedule.clientId === currentClientId)

    const handleCancel = async (id: number) => {
        if (confirm('Tem certeza que deseja cancelar este agendamento?')) {
            try {
                await cancelSchedule(id)
                refetch()
                alert('Agendamento cancelado com sucesso!')
            } catch (error) {
                alert('Erro ao cancelar agendamento')
            }
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-900 text-white">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">Meus Agendamentos</h1>
                    <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-32 bg-neutral-800 rounded-lg animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-neutral-900 text-white">
                <div className="max-w-4xl mx-auto px-4 py-8 text-center text-red-400">
                    <h1 className="text-3xl font-bold mb-6">Meus Agendamentos</h1>
                    <p>{error}</p>
                    <Button className="mt-4" onClick={() => window.location.reload()}>
                        Tentar novamente
                    </Button>
                </div>
            </div>
        )
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'SCHEDULED': return 'bg-blue-600'
            case 'FINISHED': return 'bg-green-600'
            case 'CANCELLED': return 'bg-red-600'
            default: return 'bg-gray-600'
        }
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case 'SCHEDULED': return 'Agendado'
            case 'FINISHED': return 'Finalizado'
            case 'CANCELLED': return 'Cancelado'
            default: return status
        }
    }

    const sortedSchedules = mySchedules.sort((a, b) => {
        const dateA = new Date(`${a.date.toDateString()} ${a.time}`)
        const dateB = new Date(`${b.date.toDateString()} ${b.time}`)
        return dateB.getTime() - dateA.getTime()
    })

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Meus Agendamentos</h1>
                
                {sortedSchedules.length === 0 ? (
                    <Card className="bg-neutral-800 border-neutral-700 text-white">
                        <CardContent className="text-center py-8">
                            <p className="text-lg mb-4">Você ainda não possui agendamentos</p>
                            <Button 
                                onClick={() => window.location.href = '/'}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Fazer Agendamento
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {sortedSchedules.map((schedule) => (
                            <Card key={schedule.id} className="bg-neutral-800 border-neutral-700 text-white">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-lg">{schedule.service.name}</CardTitle>
                                            <p className="text-sm text-neutral-400">
                                                {format(schedule.date, 'dd/MM/yyyy', { locale: ptBR })} às {schedule.time}
                                            </p>
                                        </div>
                                        <Badge className={`${getStatusColor(schedule.status)} text-white`}>
                                            {getStatusText(schedule.status)}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-400">Barbeiro:</span>
                                            <span>{schedule.barber.name}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-400">Valor:</span>
                                            <span>R$ {schedule.service.price.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-400">Duração:</span>
                                            <span>{schedule.service.duration} min</span>
                                        </div>
                                        
                                        {schedule.status === 'SCHEDULED' && (
                                            <div className="pt-2 border-t border-neutral-700">
                                                <Button 
                                                    variant="destructive" 
                                                    size="sm"
                                                    onClick={() => handleCancel(schedule.id)}
                                                    disabled={cancelling}
                                                >
                                                    {cancelling ? 'Cancelando...' : 'Cancelar Agendamento'}
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MySchedulesPage
