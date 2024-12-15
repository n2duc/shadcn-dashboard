import { createRootRoute } from '@tanstack/react-router'
import MainLayout from '@/layouts/main-layout'

export const Route = createRootRoute({
  component: MainLayout,
})