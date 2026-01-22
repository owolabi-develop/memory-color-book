import Footer from "../../components/HomePage/Footer"
import Navbar from "../../components/HomePage/NavBar"
import Whitespace from "../../components/user/BookInProgress/Whitespace"
import HeroCover from "../../components/user/HeroCover"
import HeroImage from '../../assets/heroImage.jpg'


const BookInProgress = () => {
  return (
   <>
   <Navbar/>
    <HeroCover url={HeroImage} title={`Your story continues`} description={`Pick up where you left off and breathe life into your memories with Rachel's intelligent guidance`}/>
   <Whitespace/>
   <Footer/>
   </>
  )
}

export default BookInProgress