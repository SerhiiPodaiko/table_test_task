import { toast } from 'react-toastify'
import { API } from '../API.ts'
import { Columns, Schoolboys, SetRatePayload, Rates } from '@/models/global-models'

// Columns
export const fetchColumns = async (): Promise<Columns> => {
    try {
        const response = await API.get(`/Column`)

        console.log('fetchColumns SUCCESSFUL', response?.data)

        return response.data
    } catch (error) {
        console.error('fetchColumns, Error fetching columns:', error)
        toast.error(`Error - ${error}`)
        throw error
    }
}

//Schoolboys
export const fetchSchoolboys = async (): Promise<Schoolboys> => {
    try {
        const response = await API.get(`/Schoolboy`)

        console.log('fetchGetAllSchoolboys SUCCESSFUL', response?.data)

        return response?.data
    } catch (error) {
        console.error('fetchGetAllSchoolboys ERROR', error)

        toast.error(`Error - ${error}`)
        throw error
    }
}

// Rates
export const fetchRates = async (): Promise<Rates> => {
    try {
        const response= await API.get(`/Rate`)

        console.log('fetchRates SUCCESSFUL', response?.data)


        return response.data
    } catch (error) {
        console.error('fetchRates ERROR', error)

        toast.error(`Error - ${error}`)
        throw error
    }
}

export const setRate = async (payload: SetRatePayload): Promise<void> => {
    try {
        await API.post(`/Rate`, payload)
    } catch (error) {
        console.error('Error setting rate:', error)

        toast.error(`Error - ${error}`)
        throw error
    }
}

export const unsetRate = async (schoolboyId: number, columnId: number): Promise<void> => {
    try {
        await API.post(`/UnRate`, { SchoolboyId: schoolboyId, ColumnId: columnId })
    } catch (error) {
        console.error('Error unsetting rate:', error)

        toast.error(`Error - ${error}`)
        throw error
    }
}
