import Footer from "../../components/HomePage/Footer"
import Navbar from "../../components/HomePage/NavBar"
import Whitespace from "../../components/user/UserBooks/Whitespace"
import HeroCover from "../../components/user/HeroCover"
import HeroImage from '../../assets/heroImage.jpg'

const UserBooks = () => {
  return (
    <>
    <Navbar/>
    <HeroCover url={HeroImage} title={`My Books`} description={`Preserve your memories and stories ith Love in Color's personalized coloring book collection.`}/>
     <Whitespace/>
   <Footer/>
    </>
  )
}

export default UserBooks