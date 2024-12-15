import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/main-layout";

const MainDashoard = lazy(() => import("@/pages/dashboard/main-dashboard"));
const UsersPage = lazy(() => import("@/pages/users/users-page"));

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <MainDashoard />
        },
        {
          path: "/users",
          element: <UsersPage />
        }
      ]
    }
  ]);
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}