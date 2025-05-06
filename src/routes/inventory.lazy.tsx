import InventoryPage from '@/pages/inventory'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/inventory')({
  component: InventoryPage,
});