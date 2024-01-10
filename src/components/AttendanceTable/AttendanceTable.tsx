import { useEffect } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { toast } from 'react-toastify'

import LoadingUI from '@/ui/Loading/LoadingUI'
import AttendanceTableItem from '@/components/AttendanceTable/AttendanceTableItem'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { fetchData} from '@/store/slices/attendanceSlice'
import { Column } from '@/models/global-models'

const AttendanceTable = () => {
    const dispatch = useAppDispatch()
    const { schoolboys, columns, errorMessage } = useAppSelector(state => state.attendance)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    if (errorMessage) {
        return toast.error(errorMessage)
    }

    if (!schoolboys || !columns) {
        return <LoadingUI />
    }
    
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ backgroundColor: '#1976D2' }}>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}>Учень</TableCell>
                        {columns?.map(column => (
                            <TableCell key={column.Id} sx={{ color: 'white', textAlign: 'center', borderLeft: '1px solid white' }}>
                                {column.Title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    { schoolboys?.map((schoolboy, index: number) => (
                            <AttendanceTableItem schoolboy={schoolboy} index={index} key={schoolboy.Id}  />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AttendanceTable