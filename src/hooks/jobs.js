import axios from '@/lib/axios'
import { useState } from 'react'

export const useJobs = () => {
    const [datas, setDatas] = useState([])

    const all = async () => {
        await axios
            .get('/api/jobs')
            .then(res => {
                setDatas(res.data.datas)
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
