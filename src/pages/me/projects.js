import MeLayout from '@/components/Layouts/MeLayout'
import { useProjects } from '@/hooks/projects'
import { useEffect, useState } from 'react'
import { Loading } from '@/components/Loading'
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery'
import PreloadImage from 'react-preload-image'
import 'lightgallery.js/dist/css/lightgallery.css'

const Projects = () => {
    const [loading, setLoading] = useState(true)
    const { all, datas } = useProjects()

    useEffect(() => {
        if (loading) {
            all().then(() => setLoading(false))
        }
    }, [loading, datas])

    return (
        <MeLayout page={true} loaded={!loading}>
            {loading && <Loading />}
            {!loading && (
                <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-10 ">
                    <LightgalleryProvider>
                        {datas.map((data, idx) => (
                            <div key={idx} className="project mt-5">
                                <LightgalleryItem
                                    group="lightbox"
                                    src={data.media_url}
                                    title={data.caption}>
                                    <PreloadImage
                                        className="image"
                                        src={data.media_url}
                                        alt={data.caption}
                                    />
                                    <div className="caption text-center mt-2">
                                        {data.caption}
                                    </div>
                                </LightgalleryItem>
                            </div>
                        ))}
                    </LightgalleryProvider>
                </div>
            )}
        </MeLayout>
    )
}

export default Projects
