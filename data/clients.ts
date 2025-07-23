import { Client } from '@/types'

export const clientsData: Client[] = [
    {
        id: 1,
        name: "Admin User",
        email: "admin@barbearia.com",
        passwordHash: "admin_hash",
        role: 'ADMIN'
    },
    {
        id: 2,
        name: "Maria Oliveira",
        email: "maria@email.com",
        passwordHash: "client_hash_1",
        role: 'CLIENT'
    },
    {
        id: 3,
        name: "José Santos",
        email: "jose@email.com",
        passwordHash: "client_hash_2",
        role: 'CLIENT'
    },
    {
        id: 4,
        name: "Ana Costa",
        email: "ana@email.com",
        passwordHash: "client_hash_3",
        role: 'CLIENT'
    },
    {
        id: 5,
        name: "Lucas Silva",
        email: "lucas@email.com",
        passwordHash: "client_hash_4",
        role: 'CLIENT'
    }
]
