import axios from 'axios'
import { ResearchArea } from '~/models/Research-area'
import { PageEntity } from '~/models/PageEntity'

const apiUrl = 'research_area'


export const searchField = async (): Promise<ResearchArea[]> => {
    try {
      const res = await axios.get(apiUrl)
      return res.data
    } catch (error) {
      throw new Error('Failed to get field')
    }
  }

//   export const getQuestion = async (limit = 3, sort = 'createdAt', desc = false): Promise<ResearchArea[]> => {
//     try {
//         const res = await axios.get(apiUrl, {
//             params: {
//                 limit,
//                 sort,
//                 desc
//             }
//         })
//         return res.data
//     } catch (error) {
//         throw new Error('Failed to get questions')
//     }
// }