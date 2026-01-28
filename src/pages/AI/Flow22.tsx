
import { motion } from "framer-motion";
import { GeneralButton } from '../../components/Buttons';
import { MenuIconContainer } from '../../components/Buttons';
import { MenuButton } from '../../components/Buttons';
import { AiOutlineUser } from "react-icons/ai";
import { X } from 'lucide-react';
import RachelResponse from "../../components/AI/AICards/RachelResponse";


const Flow22 = () => {
  const TOTAL_STEPS = 39;
  let step = 2
  const isBackDisabled = step === 1;
  const progress = Math.min((step / TOTAL_STEPS) * 100, 100);
  return (
    <section className='relative w-full p-5'>


        <div className='w-full h-full'>

        {/* header section */}
        <div className='grid grid-cols-3 mt-10 gap-6'>

           <div className="flex item-center justify-center">
          
            <MenuIconContainer icon={<X size={15}/>} />
                     
          </div>
            
          {/* Book creation progress */}

         
          <div className="relative h-2 max-w-80 overflow-hidden rounded-full bg-gray-200 mt-3">
            <motion.div
              className={` h-full rounded-full bg-gray-400`}
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>
         
           
           {/* links nav */}
          <div className="flex gap-2 flex item-center justify-center">
           
            <MenuButton title="Gift Cards" className="whitespace-nowrap" />
                    
          
            <MenuIconContainer icon={<AiOutlineUser />} />
                     
          </div>
           {/* links nav */}
          

        </div>
         

         {/* header section */}

         {/* main section */}
          <div className='flex item-center justify-center w-full  mt-2 p-2 py-18'>

          <RachelResponse/>
          </div>

        {/* main section */}

        {/* bottom section */}
        
        <div className='p-2 mt-2 grid grid-cols-2 md:grid-cols-2'>
            {/* back control */}
             <div className='flex item-center justify-center'>
                <GeneralButton title='Back' className={`${
                isBackDisabled
                  ? "invisible"
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white"
              }`}/>
             </div>

            {/* back control */}

            {/* chat input */}
              {/* <div className="flex item-center justify-center">
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
                  </div> */}

            {/* chat input */}

            {/* next control */}
              <div className='flex item-center justify-center'>
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

export default Flow22