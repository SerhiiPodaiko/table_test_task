import {Box, Button, TableCell, TableRow} from '@mui/material'
import Typography from '@mui/material/Typography'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setRateAction, unsetRateAction } from '@/store/slices/attendanceSlice'
import { Schoolboys } from '@/models/global-models'

interface AttendanceTableItemProps {
    schoolboy: Schoolboys
    index: number
}

const AttendanceTableItem = ({ schoolboy, index }: AttendanceTableItemProps) => {
    const dispatch = useAppDispatch()
    const { columns, rates } = useAppSelector(state => state.attendance)

    const calculateIsAbsent = (schoolboyId: number, columnId: number): boolean => {
        const rate = rates.find(r => r.SchoolboyId === schoolboyId && r.ColumnId === columnId)
        return rate ? rate.Title === 'H' : false
    }

    const setRate = (schoolboyId: number, columnId: number) => {
        dispatch(setRateAction({ColumnId: undefined, SchoolboyId: undefined, Title: undefined, schoolboyId, columnId }))
    }

    const unsetRate = (schoolboyId: number, columnId: number) => {
        dispatch(unsetRateAction({ schoolboyId, columnId }))
    }

    return (
        <TableRow key={schoolboy.Id} sx={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f2f2f2' }}>
            <TableCell>
                {`${schoolboy.FirstName || ''} ${schoolboy.SecondName || ''}`} <br/>
                {`${schoolboy.LastName || ''}`}
            </TableCell>
            {columns?.map(column => {
                const isAbsent = calculateIsAbsent(schoolboy.Id, column.Id)

                return (
                    <TableCell key={column.Id}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {
                                isAbsent && (
                                    <Typography sx={{ backgroundColor: '#9071C2', textAlign: 'center', color: 'white', padding: '5px', borderRadius: '8px' }}>
                                        Пропуск
                                    </Typography>
                                )
                            }
                            <Button
                                color='primary'
                                variant='contained'
                                onClick={() => isAbsent ? unsetRate(schoolboy.Id!, column.Id!) : setRate(schoolboy.Id!, column.Id!)}
                                sx={{ fontSize: '12px' }}
                            >
                                {isAbsent ? 'Відмінити\nпропуск' : 'Виставити\nпропуск'}
                            </Button>
                        </Box>
                    </TableCell>
                )
            })}
        </TableRow>
    )
}

export default AttendanceTableItem