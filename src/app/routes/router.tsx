import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import { HomePage } from '@/pages/home';
import { CatalogPage } from '@/pages/catalog';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/catalog',
                element: <CatalogPage />,
            },
            {
                path: '/catalog/:url',
                element: <CatalogPage />,
            },
        ],
    },
]);
