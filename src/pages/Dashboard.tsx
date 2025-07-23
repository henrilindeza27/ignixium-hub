import { Users, Calendar, QrCode, Building } from "lucide-react"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { QuickActionCard } from "@/components/dashboard/QuickActionCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  // Dados mock - em produção viriam da API
  const stats = [
    {
      title: "Total de Núcleos",
      value: "47",
      icon: Building,
      description: "Núcleos registados",
      trend: { value: 12, isPositive: true }
    },
    {
      title: "Utilizadores Ativos",
      value: "2,847",
      icon: Users,
      description: "Últimos 30 dias",
      trend: { value: 8, isPositive: true }
    },
    {
      title: "Total de Eventos",
      value: "156",
      icon: Calendar,
      description: "Este mês",
      trend: { value: 23, isPositive: true }
    },
    {
      title: "Check-ins QR",
      value: "1,234",
      icon: QrCode,
      description: "Últimas 24h",
      trend: { value: 5, isPositive: false }
    }
  ]

  const featuredNucleos = [
    { name: "AEEEUM", members: 450, events: 12, status: "premium" },
    { name: "AEFEUP", members: 620, events: 8, status: "standard" },
    { name: "AEFCUP", members: 380, events: 15, status: "premium" },
  ]

  const activePlans = [
    { name: "Grátis", nucleos: 23, limit: "5 eventos/mês" },
    { name: "Standard", nucleos: 18, limit: "25 eventos/mês" },
    { name: "Premium", nucleos: 6, limit: "Ilimitado" },
  ]

  const pendingRequests = [
    { nucleo: "AEISEP", type: "Upgrade para Premium", date: "Há 2 horas" },
    { nucleo: "AEFMUP", type: "Novo registo", date: "Há 5 horas" },
    { nucleo: "AEFLUP", type: "Suporte técnico", date: "Há 1 dia" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Visão geral da plataforma Ignixium
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Núcleos em Destaque */}
        <QuickActionCard
          title="Núcleos em Destaque"
          description="Núcleos com maior atividade recente"
          actionLabel="Editar"
          onAction={() => console.log("Editar núcleos")}
        >
          <div className="space-y-3">
            {featuredNucleos.map((nucleo, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-card-foreground">{nucleo.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {nucleo.members} membros • {nucleo.events} eventos
                  </p>
                </div>
                <Badge 
                  variant={nucleo.status === "premium" ? "default" : "secondary"}
                  className={nucleo.status === "premium" ? "bg-primary text-primary-foreground" : ""}
                >
                  {nucleo.status}
                </Badge>
              </div>
            ))}
          </div>
        </QuickActionCard>

        {/* Planos Ativos */}
        <QuickActionCard
          title="Planos Ativos"
          description="Distribuição de núcleos por plano"
          actionLabel="Alterar Limites"
          onAction={() => console.log("Alterar limites")}
        >
          <div className="space-y-3">
            {activePlans.map((plan, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-card-foreground">{plan.name}</p>
                  <p className="text-xs text-muted-foreground">{plan.limit}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{plan.nucleos}</p>
                  <p className="text-xs text-muted-foreground">núcleos</p>
                </div>
              </div>
            ))}
          </div>
        </QuickActionCard>

        {/* Pedidos Pendentes */}
        <QuickActionCard
          title="Pedidos Pendentes"
          description="Últimos pedidos que requerem atenção"
          actionLabel="Ver Todos"
          onAction={() => console.log("Ver todos pedidos")}
        >
          <div className="space-y-3">
            {pendingRequests.map((request, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <p className="font-medium text-card-foreground text-sm">{request.nucleo}</p>
                  <p className="text-xs text-muted-foreground">{request.type}</p>
                  <p className="text-xs text-muted-foreground">{request.date}</p>
                </div>
                <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                  Aprovar
                </Button>
              </div>
            ))}
          </div>
        </QuickActionCard>
      </div>

      {/* Growth Chart Placeholder */}
      <QuickActionCard
        title="Crescimento Mensal"
        description="Evolução do número de núcleos e utilizadores"
      >
        <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <p className="text-muted-foreground">
              Gráfico de crescimento será implementado aqui
            </p>
          </div>
        </div>
      </QuickActionCard>
    </div>
  )
}