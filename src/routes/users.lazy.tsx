import UsersPage from '@/pages/users/users-page'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/users')({
  component: UsersPage,
})