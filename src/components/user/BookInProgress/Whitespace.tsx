
import Progress from "./Progress";
import CreatorTestimonial from "./CreatorTestimonial";
import ContinueJourney from "./ContinueJourney";
import ToolsCraftStory from "./ToolsCraftStory";
const Whitespace = () => {
  // THIS COMPONENT IS JUST TO TEST SCROLLING EFFECT
  return (
    <>
      <div className="aspect-square bg-gray-100 p-10">
       <Progress/>
        <ToolsCraftStory/>
       <ContinueJourney/>
      
       <CreatorTestimonial/>
      </div>

     
    </>
  );
};

export default Whitespace;