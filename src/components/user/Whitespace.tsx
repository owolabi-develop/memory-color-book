import { InProgress } from "./InProgress";
import MyBooks from "./MyBooks";
import BookTemplate from "./BookTemplate";
import BrowseGiftCard from "./BrowseGiftCard";
import Help from "./Help";
const Whitespace = () => {
  // THIS COMPONENT IS JUST TO TEST SCROLLING EFFECT
  return (
    <>
      <div className="aspect-square bg-gray-100 p-10">
        <InProgress status={`In Progress..`} title={`Mom's garden memories in progress`} description={`You're 60% though selecting photos. Three more spreads to go before we move to the cover design.`}/>

         <MyBooks/>

         <BookTemplate/>

         <BrowseGiftCard/>
         <Help/>
      </div>

     
    </>
  );
};

export default Whitespace;