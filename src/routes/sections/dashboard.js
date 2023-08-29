import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
// import { AuthGuard } from 'src/auth/guard';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// const IndexPage = lazy(() => import('src/pages/dashboard/one'));
const PageTwo = lazy(() => import('src/pages/dashboard/two'));
// const PageThree = lazy(() => import('src/pages/dashboard/three'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));
// const PageSeven = lazy(() => import('src/pages/dashboard/seven'));
const DetailsPage = lazy(() => import('src/pages/dashboard/DetailsPage'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { element: <PageFour />, index: true },
      { path: 'two', element: <PageTwo /> },
      // { path: 'three', element: <PageThree /> },
      // { path: 'seven', element: <PageSeven /> },
      { path: 'details/:id', element: <DetailsPage /> },
      {
        path: 'group',
        children: [
          // { element: <PageFour />, index: true },
          { path: 'five', element: <PageFive /> },
          { path: 'six', element: <PageSix /> },
        ],
      },
    ],
  },
];
