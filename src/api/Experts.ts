import axios from 'axios'
import { Experts } from '~/models/Experts'
import { PageEntity } from '~/models/PageEntity'
const apiUrl = 'experts'

export interface FieldsType {
  _id: string
  quantity: number
}

export const getExpertByUid = async (uid: string): Promise<Experts> => {
  try {
    const res = await axios.get(`${apiUrl}/uid/${uid}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to get Expert')
  }
}

export const getExpertstop = async (size = 6, page = 0): Promise<Experts[]> => {
  try {
    const res = await axios.get(`${apiUrl}/top`, {
      params: {
        page,
        size
      }
    })
    return res.data
  } catch (error) {
    throw new Error('Failed to get experts')
  }
}
export const getExperts = async (size = 10, page = 0): Promise<Experts[]> => {
  try {
    const res = await axios.get(`${apiUrl}/top`, {
      params: {
        page,
        size
      }
    })
    return res.data
  } catch (error) {
    throw new Error('Failed to get experts')
  }
}
export const getExperts1 = async (limit = 100, sortBy = 'research_area', asc = true): Promise<Experts[]> => {
  try {
    const res = await axios.get(apiUrl, {
      params: {
        limit,
        sortBy,
        asc
      }
    })
    return res.data
  } catch (error) {
    throw new Error('Failed to get experts')
  }
}
export const searchExperts = async (
  what?: string,
  where?: string,
  page = 2,
  size = 100
): Promise<PageEntity<Experts>> => {
  try {
    const res = await axios.get(`${apiUrl}/search`, {
      params: {
        what,
        where,
        page: page - 1,
        size
      }
    })
    return res.data
  } catch (error) {
    throw new Error('Failed to get experts')
  }
}
export const fieldsExperts = async (): Promise<FieldsType[]> => {
  try {
    const res = await axios.get(`${apiUrl}/field`)
    return res.data
  } catch (error) {
    throw new Error()
  }
}
export const getExpertsById = async (id: string): Promise<Experts> => {
  try {
    const res = await axios.get(`${apiUrl}/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to get experts')
  }
}
export const getRelatedExperts = async (id: string, limit = 10, skip = 0): Promise<Experts[]> => {
  try {
    const res = await axios.get(`${apiUrl}/${id}/related`, {
      params: {
        limit,
        skip
      }
    })
    return res.data
  } catch (error) {
    throw new Error('Failed to get experts')
  }
}

export const createExperts = async (experts: Experts): Promise<Experts> => {
  try {
    const res = await axios.post(apiUrl, experts)
    return res.data
  } catch (error) {
    throw new Error('Failed to create experts')
  }
}

export const deleteExperts = async (id: string) => {
  try {
    const res = await axios.delete(`${apiUrl}/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to delete experts')
  }
}

export const updateExperts = async (id: string, experts: Experts): Promise<Experts> => {
  try {
    const res = await axios.put(`${apiUrl}/${id}`, experts)
    return res.data
  } catch (error) {
    throw new Error('Failed to update experts')
  }
}
