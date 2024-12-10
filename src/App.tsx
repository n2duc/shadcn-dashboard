import { ThemeProvider } from "./hooks/theme-provider";
import MainLayout from "./layouts/main-layout";
import MainDashoard from "./pages/dashboard/main-dashboard";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <MainDashoard />
      </MainLayout>
    </ThemeProvider>
  )
}