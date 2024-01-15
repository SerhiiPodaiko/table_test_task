import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchSchoolboys, fetchColumns, fetchRates, setRate, unsetRate } from '@/lib/attendance'
import { Schoolboys, Columns, Rates } from '@/models/global-models'
import ncNanoId from '@/utils/noNanoId'

export interface AttendanceState {
    schoolboys: Schoolboys[]
    columns: Columns[]
    rates: Rates[]
    loading: boolean
    errorMessage: string | null
}

interface FetchDataPayload {
    schoolboys: Schoolboys[]
    columns: Columns[]
    rates: Rates[]
}

const initialState: AttendanceState = {
    schoolboys: [],
    columns: [],
    rates: [],
    loading: false,
    errorMessage: null
}

export const fetchData = createAsyncThunk('attendance/fetchData', async () => {
    const schoolboys = await fetchSchoolboys()
    const columns = await fetchColumns()
    const rates = await fetchRates()

    return {
        schoolboys: schoolboys.Items,
        columns: columns.Items,
        rates: rates.Items
    }
})

export const setRateAction = createAsyncThunk(
    'attendance/setRate',
    async ({ schoolboyId, columnId }: { schoolboyId: number, columnId: number }) => {
        await setRate({ SchoolboyId: schoolboyId, ColumnId: columnId, Title: 'H' })

        return { schoolboyId, columnId }
    }
)

export const unsetRateAction = createAsyncThunk(
    'attendance/unsetRate',
    async ({ schoolboyId, columnId }: { schoolboyId: number, columnId: number }) => {
        await unsetRate(schoolboyId, columnId)

        return { schoolboyId, columnId }
    }
)

const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, state => {
                state.loading = true
                state.errorMessage = null
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<unknown>) => {
                state.loading = false
                const { schoolboys, columns, rates } = action.payload as FetchDataPayload
                state.schoolboys = schoolboys
                state.columns = columns
                state.rates = rates
            })
            .addCase(fetchData.rejected, (state, action: PayloadAction<unknown>) => {
                state.loading = false

                if (action.payload === 'string') {
                    state.errorMessage = action.payload
                }
            })

            .addCase(setRateAction.fulfilled, (state, action: PayloadAction<any>) => {
                const { schoolboyId, columnId } = action.payload;
                const rateIndex = state.rates.findIndex((rate: any) => rate.SchoolboyId === schoolboyId && rate.ColumnId === columnId)

                if (rateIndex !== -1) {
                    state.rates[rateIndex].Items[0].Title = 'H'
                } else {
                    state.rates.push({
                        Id: ncNanoId(),
                        Title: 'H',
                        SchoolboyId: schoolboyId,
                        ColumnId: columnId
                    })
                }
            })
            .addCase(unsetRateAction.fulfilled, (state, action:PayloadAction<any>) => {
                const { schoolboyId, columnId } = action.payload
                const rateIndex = state.rates.findIndex(({ SchoolboyId, ColumnId }: any) => SchoolboyId === schoolboyId && ColumnId === columnId)
                if (rateIndex !== -1) {
                    state.rates[rateIndex].Title = ''
                }
            })
    },
})

export default attendanceSlice.reducer
