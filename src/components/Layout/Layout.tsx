import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { Box } from '@mui/material'

import Sidebar from '@/components/Navbar/Navbar'
import ErrorFallback from '@/components/Error/ErrorFallback'
import LoadingUI from '@/ui/Loading/LoadingUI'
import { PAGE_SLUGS } from '@/constants/pages'

const Layout = () => {
    const navigate = useNavigate()
    const navigation = useNavigation()

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate(PAGE_SLUGS.home)}>
            <Box component='div' sx={{ display: 'flex', height: '100vh' }}>
                <Sidebar />
                <Box
                    component='main'
                    sx={{ width: '100%', paddingX: '20px', paddingY: '80px', overlay: 'auto' }}
                    className='content'
                >
                    {navigation.state === 'loading' ? <LoadingUI /> : <Outlet />}
                </Box>
            </Box>
        </ErrorBoundary>
    )
}

export default Layout