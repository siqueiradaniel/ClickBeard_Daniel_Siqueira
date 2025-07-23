import { Client } from '@/types'
import { clientsData } from '@/data/clients'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const clientsApi = {
    getAll: async (): Promise<Client[]> => {
        await delay(500)
        return clientsData
    },

    getById: async (id: number): Promise<Client | null> => {
        await delay(300)
        return clientsData.find(c => c.id === id) || null
    },

    getByEmail: async (email: string): Promise<Client | null> => {
        await delay(300)
        return clientsData.find(c => c.email === email) || null
    },

    getByRole: async (role: 'CLIENT' | 'ADMIN'): Promise<Client[]> => {
        await delay(400)
        return clientsData.filter(c => c.role === role)
    },

    create: async (clientData: Omit<Client, 'id'>): Promise<Client> => {
        await delay(600)
        const newClient = {
            ...clientData,
            id: Math.max(...clientsData.map(c => c.id)) + 1
        }
        clientsData.push(newClient)
        return newClient
    }
}
