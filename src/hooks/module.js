import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const useModule = () => {
    const router = useRouter()
    const slug = router.query.slug

    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState([])
    const [data, setData] = useState([])
    const [datas, setDatas] = useState([])
    const [count, setCount] = useState(null)
    const [model, setModel] = useState([])
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const init = async () => {
        if (loading) {
            await axios
                .get('/api/admin/module/' + slug)
                .then(res => {
                    setModel(res.data)
                    setLoading(false)
                })
                .catch(error => {
                    if (error.response.status !== 422) throw error
                    setErrors(error.response.data.errors)
                })
        }
    }

    const all = async () => {
        await axios
            .get('/api/admin/' + slug)
            .then(res => {
                setDatas(res.data.datas)
                setCount(res.data.count)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const one = async () => {
        await axios
            .get('/api/admin/' + slug + '/' + router.query.id + '/edit')
            .then(res => {
                setData(res.data.data)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const update = async props => {
        await csrf()
        setErrors([])

        await axios
            .put('/api/admin/' + slug + '/' + router.query.id, props)
            .then()
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    useEffect(() => {
        init().then()
    }, [model])

    return {
        model,
        all,
        one,
        update,
        datas,
        data,
        errors,
        count,
    }
}
