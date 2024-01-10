import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Button} from '@mui/material'

import { PAGE_SLUGS } from '@/constants/pages'
import NotFoundSvg from '@/assets/icons/not-found.svg'

const NotFoundPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => navigate(PAGE_SLUGS.home), 3000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <Box
            component='section'
            sx={{ display: 'flex', gap: '20px', flexDirection: 'column', padding: '20px', borderRadius: '8px',
                background: '#F4DEDE', border: '2px solid #DA7987', color: '#DA7987', margin: '30px' }}
            className='d-flex flex-column p-5 rounded'
        >
            <img
                src={NotFoundSvg}
                style={{ width: '25%', alignSelf: 'center' }}
                alt='Not Found | 404'
            />
            <Button
                sx={{ alignSelf: 'center' }}
                variant='contained'
                onClick={() => navigate(PAGE_SLUGS.home)}
            >
                Back to Home
            </Button>
        </Box>
    )
}

export default NotFoundPage