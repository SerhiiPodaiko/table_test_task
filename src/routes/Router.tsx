import { createBrowserRouter } from 'react-router-dom'

import Layout from '@/components/Layout/Layout'
import NotFoundPage from '@/pages/404/NotFoundPage'
import HomePage from '@/pages/Home/Home'
import AboutPage from '@/pages/About/About'
import ContactPage from '@/pages/Contact/Contact'
import { PAGE_SLUGS } from '@/constants/pages'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: PAGE_SLUGS.home,
                element: <HomePage />,
            },
            {
                path: PAGE_SLUGS.about,
                element: <AboutPage />
            },
            {
                path:  PAGE_SLUGS.contact,
                element: <ContactPage />,
            }
        ]
    },
])