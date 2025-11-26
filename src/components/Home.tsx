import Hero from "./Hero"
import Metrics from "./Metrics"
import Integrations from "./Integrations"
import VideoSection from "./VideoSection"
import AboutFeatured from "./AboutFeatured"
import MarketTypes from "./MarketTypes"
export default function Home() {
    return (
        <>
            <Hero />
            <VideoSection />
            <AboutFeatured />
            <MarketTypes />
            {/* <Metrics />
            <Integrations /> */}

        </>
    )
}