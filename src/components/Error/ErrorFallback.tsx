import { ErrorBoundaryPropsWithComponent } from 'react-error-boundary'
import { Box, Button } from '@mui/material'

import ErrorSvg from '@/assets/icons/error.svg'
import Typography from '@mui/material/Typography'

const ErrorFallback = ({ error, resetErrorBoundary }: { error: ErrorBoundaryPropsWithComponent | any, resetErrorBoundary: () => void }) => {
    return (
        <Box sx={{ maxWidth: '800px', width: '100%', margin: '20px auto', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px',
                color: 'red', borderRadius: '8px', border: '1.5px solid red', backgroundColor: 'rgba(255, 0, 0, 0.1);'  }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography component='strong'>Something went wrong:</Typography>
                    <Typography component='span'>{error.message}</Typography>
                </Box>
                <img className='img-fluid' src={ErrorSvg} alt='Error | 404' />
            </Box>
            <Button
                sx={{ display: 'flex', alignSelf: 'center' }}
                variant='contained'
                color='error'
                onClick={resetErrorBoundary}
            >
                Try again
            </Button>
        </Box>
    )
}

export default ErrorFallback