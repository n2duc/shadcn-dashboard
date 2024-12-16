import { createRootRoute } from '@tanstack/react-router'
import MainLayout from '@/layouts/main-layout'
import NotFoundPage from '@/pages/not-found'

export const Route = createRootRoute({
  component: MainLayout,
  notFoundComponent: NotFoundPage
})