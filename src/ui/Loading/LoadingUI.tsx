import { CircularProgress, CircularProgressProps } from '@mui/material'

const LoadingUI = (props: CircularProgressProps) => {
    return (
        <CircularProgress {...props} />
    )
}

export default LoadingUI