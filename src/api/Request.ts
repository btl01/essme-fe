import axios from 'axios'
import { Request } from '~/models/Request'

const apiUrl = 'requests'

export const getRequest = async (page = 3, size = 20, sort = 'createdAt', desc = false): Promise<Request[]> => {
    try {
        const res = await axios.get(apiUrl, {
            params: {
                page,
                size,
                sort,
                desc
            }
        })
        return res.data
    } catch (error) {
        throw new Error('Failed to get requests')
    }
}

export const getRequestById = async (id: string): Promise<Request> => {
    try {
        const res = await axios.get(`${apiUrl}/${id}`)
        return res.data
    } catch (error) {
        throw new Error('Failed to get request')
    }
}