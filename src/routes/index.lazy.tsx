import MainDashoard from '@/pages/dashboard/main-dashboard'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: MainDashoard,
})
