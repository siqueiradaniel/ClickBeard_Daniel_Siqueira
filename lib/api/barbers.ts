import { Barber, BarberWithServices } from '@/types'
import { barbersData } from '@/data/barbers'
import { barberServicesData } from '@/data/barberServices'
import { servicesData } from '@/data/services'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const barbersApi = {
    getAll: async (): Promise<Barber[]> => {
        await delay(500)
        return barbersData
    },

    getActive: async (): Promise<Barber[]> => {
        await delay(400)
        return barbersData.filter(b => b.active)
    },

    getById: async (id: number): Promise<Barber | null> => {
        await delay(300)
        return barbersData.find(b => b.id === id) || null
    },

    getWithServices: async (): Promise<BarberWithServices[]> => {
        await delay(600)
        return barbersData.map(barber => {
            const barberServiceIds = barberServicesData
                .filter(bs => bs.barberId === barber.id)
                .map(bs => bs.serviceId)
            
            const services = servicesData.filter(s => barberServiceIds.includes(s.id))
            
            return { ...barber, services }
        })
    },

    getByServiceId: async (serviceId: number): Promise<Barber[]> => {
        await delay(400)
        const barberIds = barberServicesData
            .filter(bs => bs.serviceId === serviceId)
            .map(bs => bs.barberId)
        
        return barbersData.filter(b => barberIds.includes(b.id) && b.active)
    }
}
