import React, {useState} from "react";
import { Sparkles } from 'lucide-react';

type EmailType = {
    email:string
}

const EmailCapture: React.FC = () => {
    // Rachel Email capture flow 10
    const [email, setEmail] = useState<EmailType>({ email: "" });


   // handle email
    const handleSubmit = () =>{}

 

  return (
    <div className=" w-96 bg-gray-100 rounded-xl p-4 h-3/4 md:h-[14rem]">
      <div className="flex items-center justify-center py-2">
        <div className="border-4 border-gray-400 bg-gray-600 rounded-full p-2">
          <Sparkles size={24} className="text-gray-300" />
        </div>
      </div>

      <div className="text-center h-full">
        <p className="text-lg text-gray-600 px-2 bold">
        Ok, Let's keep going
        </p>
        <p className="text-base text-gray-500 px-2">
        So we can keep track of your book, let's grab your email.
        </p>

       
       

        {/* email input */}
  <div className="flex gap-2 mt-4 justify-center">
  <input type="email" value={email.email}onChange={e => setEmail({email:e.target.value})}
  placeholder="Enter your email"
  className="w-full px-3 py-2 rounded-lg border text-sm font-medium transition
             bg-white text-gray-700 border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-gray-400"
/>

  <button
    type="button"
    className="px-3 py-2 rounded-lg border text-sm font-medium transition
               flex items-center justify-between bg-white text-gray-700 border-gray-300 
               hover:bg-gray-100 whitespace-nowrap"
               onClick={handleSubmit}
  >
   Submit
  </button>
</div>


       {/* Button controls */}
      </div>
    </div>
  );
};

export default EmailCapture;

