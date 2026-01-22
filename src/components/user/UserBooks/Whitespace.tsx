import BookMemory from "./BookMemory";
import Inspiration from "./Inspiration";
import Support from "./Support";
import BooksSlide from "./BooksSlide";
import BookTimeLine from "./BookTimeLine";
const Whitespace = () => {
  // THIS COMPONENT IS JUST TO TEST SCROLLING EFFECT
  return (
    <>
      <div className="aspect-square bg-gray-100 p-10">
      <BooksSlide/>
      <BookTimeLine/>
       <Inspiration/>
        <Support/>
        <BookMemory/>

       
      </div>

     
    </>
  );
};

export default Whitespace;