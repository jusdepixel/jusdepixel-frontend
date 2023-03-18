import Link from 'next/link'

const Network = ({ network, link }) => {
    return (
        <Link href={link} target="_blank" alt={network} rel="noreferrer">
            <i
                className={`h-10 w-10 mx-2 link-network bi bi-${network} text-gray-400`}
            />
        </Link>
    )
}

export default Network
