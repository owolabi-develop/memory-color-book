import {} from 'react'
import { motion } from "framer-motion";
import { GeneralButton } from '../Buttons';
import { SendHorizontal, Mic } from "lucide-react"
// import IntroCard from './AICards/IntroCard'; 
// import AIDIYChoice from './AICards/AIDiyChoice';
// import RecipientCard from './AICards/RecipientCard';
// import ForSomeoneElse from './AICards/ForSomeOneElse';
// import RecipientRelationship from './AICards/RecipientRelationship';
// import RecipientAge from './AICards/RecipientAge';
// import ThemeSelection from './AICards/ThemeSelection';
// import SubThemeSelection from './AICards/SubthemeSelection';
import PreviewSelection from './AICards/PreviewCard';



const CreateBookSection = () => {
  const TOTAL_STEPS = 39;
  let step = 1
  const isBackDisabled = step === 1;
  const progress = Math.min((step / TOTAL_STEPS) * 100, 100);
  return (
    <section className='relative w-full p-5 bg-white md:mt-12 rounded-md'>


        <div className='w-full h-[34rem]'>

        {/* header section */}
        <div className='flex item-center justify-center'>
            
          {/* Book creation progress */}
          <div className="relative h-2 w-80 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              className={`absolute left-0 top-0 h-full rounded-full bg-gray-400`}
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>
        </div>
         

         {/* header section */}

         {/* main section */}
          <div className='flex item-center justify-center w-full h-[27.8rem] md:h-[30rem] mt-2 p-2 py-18'>

          <PreviewSelection/>
          </div>

        {/* main section */}

        {/* bottom section */}
        
        <div className='p-2 mt-2 grid grid-cols-1 md:grid-cols-3 '>
            {/* back control */}
             <div className='flex item-start justify-start'>
                <GeneralButton title='Back' className={`${
                isBackDisabled
                  ? "invisible"
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white"
              }`}/>
             </div>

            {/* back control */}

            {/* chat input */}
              <div className="flex item-center justify-center">
                    <div className="flex items-center gap-3 border rounded-xl px-2 py-1 w-full">
            
                      <input
                        placeholder="Ask Rachel"
                        className="flex-1  text-sm text-600 placeholder-gray-400 focus:outline-none w-full"
                      />
            
                      <button className="text-gray-600 hover:text-white transition cursor-pointer hover:bg-gray-500 rounded-full p-2">
                        <Mic size={20}/>
                      </button>
            
                      <button
                       
                        className="hover:bg-gray-500 hover:text-white text-black p-2 rounded-full hover:scale-105 transition cursor-pointer"
                      >
                        <SendHorizontal size={20} />
                      </button>
            
                    </div>
                  </div>

            {/* chat input */}

            {/* next control */}
              <div className='flex item-end justify-end'>
                <GeneralButton title='Next' className={`${
                isBackDisabled || step == TOTAL_STEPS
                  ? "invisible" 
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white"
              }`}/>
             </div>

             {/* next control */}


        </div>
         {/* bottom section */}
            
        </div>


    </section>
  )
}

export default CreateBookSection