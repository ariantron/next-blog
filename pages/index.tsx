export default function Home(props: any) {
    return (
        <>
            <h2>
                Welcome to Next Blog
            </h2>
            <p>The weather: {props.forecast}</p>
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()

    return {
        props: {
            forecast: data.properties.periods[0].detailedForecast
        }
    }
}
