import { useNavigate, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Tooltip } from '@mui/material'
import { PAGE_SLUGS } from '@/constants/pages'

const navItems = [
    { title: 'About', path: PAGE_SLUGS.about },
    { title: 'Contact', path: PAGE_SLUGS.contact }
]

export default function DrawerAppBar() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component='nav'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
                        onClick={() => navigate(PAGE_SLUGS.home)}
                    >
                        <Tooltip title='Logo' placement='right-end'>
                            Table
                        </Tooltip>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                color={item.path === location.pathname ? 'secondary' : 'primary'}
                                variant={item.path === location.pathname ? 'contained' : 'outlined'}
                                key={item.title} sx={{ color: '#fff' }} onClick={() => navigate(item.path)}>
                                <Typography sx={{ color: 'white' }} component='span'>
                                    {item.title}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
