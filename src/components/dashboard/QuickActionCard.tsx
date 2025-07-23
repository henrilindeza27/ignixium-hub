import { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface QuickActionCardProps {
  title: string
  description: string
  children: ReactNode
  actionLabel?: string
  onAction?: () => void
}

export function QuickActionCard({ 
  title, 
  description, 
  children, 
  actionLabel,
  onAction 
}: QuickActionCardProps) {
  return (
    <Card className="shadow-card hover:shadow-soft transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">
              {title}
            </CardTitle>
            <CardDescription className="mt-1">
              {description}
            </CardDescription>
          </div>
          {actionLabel && onAction && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={onAction}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {actionLabel}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}