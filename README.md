# ClickBeard - Sistema de Agendamento para Barbearia

![ClickBeard Logo](https://img.shields.io/badge/ClickBeard-Sistema%20de%20Agendamento-green?style=for-the-badge)

## 🚀 Demo Online
**Acesse a aplicação:** [https://click-beard.vercel.app/](https://click-beard.vercel.app/)

## 📋 Sobre o Projeto

O **ClickBeard** é um sistema completo de agendamento para barbearias, desenvolvido para facilitar o gerenciamento de horários, barbeiros, serviços e clientes. O sistema permite que clientes façam agendamentos online e que administradores tenham controle total sobre a operação da barbearia.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **React 18** + **TypeScript** - Interface moderna e tipada
- **Tailwind CSS** - Estilização responsiva
- **JWT** - Autenticação e autorização
- **Vercel** - Deploy e hospedagem

## ✅ Funcionalidades Implementadas

- Sistema de autenticação completo (login/registro)
- Gestão de usuários (clientes, barbeiros, administradores)
- Sistema de agendamentos com regras de negócio
- Painel administrativo para gestão
- Interface responsiva e moderna
- Controle de acesso por roles
- Validação de conflitos de horários
- Cancelamento com regra de 2 horas

## 👥 Usuários de Teste

### Administrador
- **Email:** admin@barbearia.com / **Senha:** admin

### Clientes de Exemplo
- **Email:** maria@email.com / **Senha:** maria123
- **Email:** jose@email.com / **Senha:** jose123

### Barbeiros
- **Email:** joao@barbearia.com / **Senha:** joao123
- **Email:** carlos@barbearia.com / **Senha:** carlos123

## 🛠️ Como Rodar Localmente

### Pré-requisitos
- Node.js (versão 18+)
- npm ou yarn

### Instalação
```bash
# 1. Clone o repositório
git clone https://github.com/siqueiradaniel/ClickBeard_Daniel_Siqueira.git
cd ClickBeard_Daniel_Siqueira

# 2. Instale as dependências
npm install

# 3. Execute o projeto
npm run dev

# 4. Acesse http://localhost:3000
```

## 📊 Estrutura do Banco de Dados

### Entidades Principais

**Clientes (Client)**
```typescript
{
  id: number
  name: string
  email: string (único)
  passwordHash: string
  role: 'CLIENT' | 'ADMIN'
}
```

**Barbeiros (Barber)**
```typescript
{
  id: number
  name: string
  email: string
  birthDate: Date
  age: number
  hiredAt: Date
  active: boolean
}
```

**Agendamentos (Schedule)**
```typescript
{
  id: number
  clientId: number
  barberId: number
  serviceId: number
  date: Date
  time: string
  status: 'SCHEDULED' | 'CANCELLED' | 'FINISHED'
  cancelledAt?: Date
}
```

## ⚙️ Regras de Negócio Implementadas

### Agendamentos
- **Horário:** 8h às 18h, todos os dias
- **Duração:** 30 minutos por atendimento
- **Conflitos:** Barbeiro não pode ter agendamentos simultâneos
- **Cancelamento:** Permitido até 2 horas antes do horário
- **Email único:** Sistema impede cadastros duplicados

### Especialidades
- Cada barbeiro possui múltiplas especialidades
- 12 tipos de serviços disponíveis
- Preços variando de R$15 a R$100

## 🧪 Como Testar

### Fluxo Completo
1. **Acesse:** [https://click-beard.vercel.app/](https://click-beard.vercel.app/)
2. **Teste como Cliente:**
   - Registre-se ou use: maria@email.com / maria123
   - Faça um agendamento
   - Visualize seus agendamentos
   - Teste cancelamento
3. **Teste como Admin:**
   - Login: admin@barbearia.com / admin
   - Acesse painel administrativo
   - Gerencie barbeiros e agendamentos

### Cenários de Validação
- ✅ Conflito de horários (mesmo barbeiro, mesmo horário)
- ✅ Cancelamento fora do prazo (menos de 2h)
- ✅ Email duplicado no cadastro
- ✅ Acesso a rotas protegidas

## 🏗️ Arquitetura

```
src/
├── app/                    # Next.js App Router
├── components/            # Componentes React
├── contexts/             # Context API (Auth)
├── data/                 # Mock data (simulando PostgreSQL)
├── hooks/                # Custom hooks
├── lib/                  # APIs e utilitários
└── types/               # Definições TypeScript
```

## 📧 Contato

**Desenvolvedor:** Daniel Siqueira  
**Email:** daniel.oliveira.17@email.com  
**LinkedIn:** [https://www.linkedin.com/in/danielsiqueira1/](https://www.linkedin.com/in/danielsiqueira1/)

---

**Projeto desenvolvido como parte do teste técnico para a Clickativo**