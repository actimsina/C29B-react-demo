const Statistics = (props) => {
    const { good, neutral, bad } = props
    const all = () => good + neutral + bad
    const average = () => (good - bad) / all()
    const positive = () => (good / all()) * 100
    return (
        <>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all()}</p>
            <p>average {average()}</p>
            <p>positive {positive()} %</p>
        </>
    )
}

export default Statistics