import MeLayout from '@/components/Layouts/MeLayout'
import { useEffect, useState } from 'react'
import { useJobs } from '@/hooks/jobs'
import { Loading } from '@/components/Loading'

const Jobs = () => {
    const [loading, setLoading] = useState(true)
    const { all, datas } = useJobs()

    useEffect(() => {
        if (loading) {
            all().then(() => setLoading(false))
        }
    }, [loading, datas])

    return (
        <MeLayout page={true} loaded={!loading}>
            {loading && <Loading />}
            {!loading && (
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12 mb-16 mt-16">
                    {datas.map((data, idx) => (
                        <div
                            key={idx}
                            className="job w-full sm:max-w-md px-10 py-6 pb-14 bg-white shadow-md relative">
                            <div
                                className={`icon absolute ${
                                    data.icon === 'bi-paperclip'
                                        ? '-top-4 right-0'
                                        : 'top-0 right-4'
                                }`}>
                                <i className={`bi ${data.icon}`} />
                            </div>
                            <h3 className="mb-2">{data.job}</h3>
                            <h4>{data.society}</h4>
                            <h5>{data.dates}</h5>
                            <h6 className="w-full absolute left-0 bottom-0 px-3 pt-2 pb-1 text-left">
                                <i className="bi bi-pin-map mr-1" />
                                {data.location}
                                <span className="absolute right-3">
                                    {data.duration}
                                </span>
                            </h6>
                            <p className="mt-4">{data.skills}</p>
                        </div>
                    ))}
                </div>
            )}
        </MeLayout>
    )
}

export default Jobs
