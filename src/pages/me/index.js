import MeLayout from '@/components/Layouts/MeLayout'

const Index = () => {
    return (
        <MeLayout>
            <img
                src="https://static.jusdepixel.fr/mandy/mandy-png.png"
                alt="Mandy"
                width="160"
                className="mt-10"
            />
            <h2 className="mt-5">Mandy, 42 years old</h2>
            <h3 className="-mt-5">Developer since 2002</h3>
            <h4 className="mt-10">Looking for new challenges !</h4>
        </MeLayout>
    )
}

export default Index
