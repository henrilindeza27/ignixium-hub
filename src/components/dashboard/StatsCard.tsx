import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
}

export function StatsCard({ title, value, icon: Icon, description, trend }: StatsCardProps) {
  return (
    <Card className="relative overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-card-foreground">
                {value}
              </p>
              {description && (
                <p className="text-xs text-muted-foreground">
                  {description}
                </p>
              )}
              {trend && (
                <div className="flex items-center gap-1">
                  <span className={`text-xs font-medium ${
                    trend.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {trend.isPositive ? '+' : ''}{trend.value}%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    vs mês anterior
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}