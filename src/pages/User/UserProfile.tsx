import { useParams } from "react-router";
import Navbar from "../../components/HomePage/NavBar";
import Footer from "../../components/HomePage/Footer";
import HeaderSection from "../../components/user/HeaderSection";
import Whitespace from "../../components/user/Whitespace";
const UserProfile = () => {
    const { userId } = useParams<{ userId: string }>();
  return (
    <>
    <Navbar/>
    <HeaderSection username={userId}/>
    <Whitespace/>
    <Footer/>
    </>
  )
}

export default UserProfile