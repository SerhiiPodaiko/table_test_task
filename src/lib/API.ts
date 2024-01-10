import axios, { AxiosInstance } from 'axios'

const _BASE_URL = 'http://94.131.246.109:5555/'

export const API: AxiosInstance = axios.create({
    baseURL: `${(_BASE_URL || '').replace(/\/$/, '')}/v1/2`,
    timeout: 60000,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
        // "Access-Control-Allow-Origin:": "*"
    }
})
