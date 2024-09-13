import './Home.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero title='The Travel Agency' text='We help you plan your next trip!' herobtn='Book Now' contCname='hero_cont' sectionCname='hero_text'/>
    </div>
  )
}

export default Home
