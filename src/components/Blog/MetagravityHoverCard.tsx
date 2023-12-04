import { CalendarDays, Code2Icon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function MetaIcon() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@metagravity</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/metagravityIcon.jpg" />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@Scribe</h4>
            <p className="text-sm">
            The CEO and Co-Founder of Scribe Ai
            </p>
            <div className="flex items-center pt-2">
              <Code2Icon    className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Just coding rn 😂
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
