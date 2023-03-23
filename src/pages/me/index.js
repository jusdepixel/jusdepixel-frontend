import MeLayout from '@/components/Layouts/MeLayout'
import { useMe } from '@/hooks/myself'
import { useEffect, useState } from 'react'
import { Loading } from '@/components/Loading'
import PreloadImage from 'react-preload-image'

const Index = () => {
    const [loading, setLoading] = useState(true)
    const { one, data } = useMe()

    useEffect(() => {
        if (loading) {
            one().then(() => setLoading(false))
        }
    }, [loading, data])

    return (
        <MeLayout loaded={!loading}>
            {loading && <Loading />}
            {!loading && (
                <>
                    <div className="relative picture mt-10">
                        <PreloadImage
                            src={data.picture}
                            alt={data.description}
                        />
                    </div>
                    <h2 className="mt-5">{data.description}</h2>
                    <h3 className="-mt-5">{data.job}</h3>
                    <h4 className="mt-10">{data.baseline}</h4>
                </>
            )}
        </MeLayout>
    )
}

export default Index
