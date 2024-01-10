import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchSchoolboys, fetchColumns, fetchRates, setRate, unsetRate } from '@/lib/attendance'
import { Schoolboy, Schoolboys, Column, Columns, Rates, Rate, SetRatePayload } from '@/models/global-models'

export interface AttendanceState {
    schoolboys: Schoolboys[]
    columns: Columns[]
    rates: Rates[]
    loading: boolean
    errorMessage: string | null
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
    async ({ schoolboyId, columnId }: SetRatePayload) => {
        await setRate({ SchoolboyId: schoolboyId, ColumnId: columnId, Title: 'H' })
        return { schoolboyId, columnId }
    }
)

export const unsetRateAction = createAsyncThunk(
    'attendance/unsetRate',
    async ({ schoolboyId, columnId }: SetRatePayload) => {
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
            .addCase(fetchData.fulfilled, (state, action:PayloadAction<any>) => {
                state.loading = false
                const { schoolboys, columns, rates } = action.payload
                state.schoolboys = schoolboys
                state.columns = columns
                state.rates = rates
            })
            .addCase(fetchData.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.errorMessage = action.payload
            })

            .addCase(setRateAction.fulfilled, (state, action) => {
                const { schoolboyId, columnId } = action.payload;
                const rateIndex = state.rates.findIndex(rate => rate.SchoolboyId === schoolboyId && rate.ColumnId === columnId);
                if (rateIndex !== -1) {
                    state.rates[rateIndex].Title = 'H'
                } else {
                    state.rates.push({ SchoolboyId: schoolboyId, ColumnId: columnId, Title: 'H' })
                }
            })
            .addCase(unsetRateAction.fulfilled, (state, action) => {
                const { schoolboyId, columnId } = action.payload;
                const rateIndex = state.rates.findIndex(rate => rate.SchoolboyId === schoolboyId && rate.ColumnId === columnId);
                if (rateIndex !== -1) {
                    state.rates[rateIndex].Title = ''
                }
            })
    },
})

export default attendanceSlice.reducer
