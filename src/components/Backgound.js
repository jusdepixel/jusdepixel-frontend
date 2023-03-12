export default function Background() {
    return (
        <div className={'background-bg'}>
            <div className={`background`}>
                {[...new Array(40)].map((_, i) => (
                    <span key={`span-${i}`} />
                ))}
            </div>
        </div>
    )
}
