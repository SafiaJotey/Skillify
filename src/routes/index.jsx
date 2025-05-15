import { createBrowserRouter } from "react-router-dom";

import { lazy, Suspense } from "react";
import LoadingFallback from "../components/LoadingFallback";

// Lazy-loaded components
const RootLayout =lazy(()=>import("./RootLayout"));
const Home = lazy(() => import('./home'));
const Category = lazy(() => import('./categoryDetails'));
const CourseDetailsPage = lazy(() => import('./courseDetails'));
const AuthPage = lazy(() => import('./auth/login'));
const NotFoundPage = lazy(() => import('./notFound'));
const RegisterPage = lazy(() => import('./auth/register'));
const CoursesPage = lazy(() => import('./courses'));



export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingFallback/>}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: `/category/:id`,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: '/courseDetails/:id',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CourseDetailsPage />
          </Suspense>
        ),
      },
      {
        path: '/courses',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CoursesPage />
          </Suspense>
        ),
      },
      {
        path: '/auth/login',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AuthPage />
          </Suspense>
        ),
      },
      {
        path: '/auth/signup',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <RegisterPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);