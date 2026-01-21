import HowItWorks from "./HowItWorks";
import StorySection from "./StorySection";
import MeetRachel from "./MeetRachel";
import GiftCardSection from "./BuyGiftCard";
import TestimonialSection from "./Testimonials";
import Community from "./Community";
const Whitespace = () => {
  // THIS COMPONENT IS JUST TO TEST SCROLLING EFFECT
  return (
    <>
      <div className="aspect-square bg-gray-100 p-10">
        <HowItWorks />
        <StorySection/>
        <MeetRachel/>
        <Community/>
        <GiftCardSection/>
        <TestimonialSection/>
      </div>
    </>
  );
};

export default Whitespace;