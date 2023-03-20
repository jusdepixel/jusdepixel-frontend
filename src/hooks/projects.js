import axios from '@/lib/axios'
import { useState } from 'react'

export const useProjects = () => {
    const [datas, setDatas] = useState([])

    const all = async () => {
        await axios
            .get('/api/posts')
            .then(res => {
                setDatas(res.data.posts)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
            })
    }

    return {
        all,
        datas,
    }
}
