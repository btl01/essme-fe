import axios from 'axios'
import { Customer } from '~/models/Customer'

const apiUrl = 'customers'

export const getCustomerbyUid = async (uid: string): Promise<Customer> => {
    try {
        const res = await axios.get(`${apiUrl}/uid/${uid}`)
        return res.data
    } catch (error) {
        throw new Error('Failed to get user')
    }
}

export const deleteCustomer = async (id: string): Promise<Customer> => {
    try {
        const res = await axios.get(`${apiUrl}/uid/${id}`)
        return res.data
    } catch (error) {
        throw new Error('Failed delete get customer')
    }
}