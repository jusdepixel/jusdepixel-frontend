import axios from '@/lib/axios'
import { useState } from 'react'

export const useMe = () => {
    const [data, setData] = useState([])

    const one = async () => {
        await axios
            .get('/api/me')
            .then(res => {
                setData(res.data.data)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
            })
    }

    return {
        one,
        data,
    }
}
