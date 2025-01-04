import CalendarPage from '@/pages/calendar'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/calendar')({
  component: CalendarPage,
})
