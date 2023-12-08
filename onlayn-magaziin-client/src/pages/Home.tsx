import { MainCategories, Arrivals, Gallery, PopularCategories, TrandingSection, Advantages, Blog, SubscribeForm } from '../components'
import Hero from '../components/Hero'


const Home = () => {
  return (
    <>
    <Hero/>
    <MainCategories/>
    <Arrivals/>
    <Gallery/>
    <PopularCategories/>
    <TrandingSection/>
    <Advantages/>
    <Blog/>
    <SubscribeForm/>
    </>
  )
}

export default Home