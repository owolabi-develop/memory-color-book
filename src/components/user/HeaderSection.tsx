
import { Mail, CreditCard, Settings, User, Phone  } from 'lucide-react';
import { Link } from "react-router";

export default function HeaderSection(props:any) {
  return (
    <section className="relative w-full min-h-screen p-22 bg-white">
     
      <div className="bg-gray-50 rounded-lg shadow-md p-4">

        <h1 className='font-semibold '>Your Profile</h1>

         {/* header section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 p-1 gap-10'>

        

        

        {/* Left Side - Content */}
       <div className=''>
        {/* profile holder */}
        <div className="flex items-center gap-4 py-2">
        <div className="bg-gray-200 p-4 rounded-full">
          <User/>
        </div>

        <div>
          <h1 className="text-4xl leading-none font-bold">Hi, {props.username}</h1>
        </div>
      </div>
         {/* profile holder */}
        
        <p className='text-gray-800 text-base'> Manage your email, shipping address, payment methods, and privacy preferences all in one place
        </p>

        <button className='w-full bg-white p-2 mt-3 rounded-lg'> Important Notifications</button>
       </div>
       

        {/* Right Side -  */}
        <div className='px-10'>

          {/* email */}
          <div className="py-2">
          <div className="flex items-center gap-4">
          <Mail className="w-4 h-4" />
          <h1 className="text-base leading-none font-bold">Email</h1>
          </div>
          <Link to=''>
          <p className="ml-8 text-sm text-gray-600 underline hover:text-black">Update email</p>
          </Link>
          </div>


          {/* email */}


          {/* address */}

        <div className="py-2">
        <div className="flex items-center gap-4">
       <Phone className="w-4 h-4"/>
        <h1 className="text-base leading-none font-bold">Address</h1>
        </div>
         <Link to=''>
        <p className="ml-8 text-sm text-gray-600 underline hover:text-black">Edit shipping address </p>
        </Link>
        </div>



          {/* address */}




          {/* payment */}
          <div className="py-2">
        <div className="flex items-center gap-4">
       <CreditCard className="w-4 h-4"/>
        <h1 className="text-base leading-none font-bold">Payment</h1>
        </div>
        <Link to=''>
        <p className="ml-8 text-sm text-gray-600 underline hover:text-black">Manage payment methods </p>
        </Link>
        </div>

          {/* payment */}


          {/* all settings */}

             <div className="py-2">
        <div className="flex items-center gap-4">
       <Settings className="w-4 h-4"/>
       <Link to=''>
        <h1 className="text-base leading-none text-gray-600 underline hover:text-black">All settings</h1>
        </Link>
        </div>
        </div>

          {/* all settings */}

       




        </div>

        </div>
         {/* header section */}
        
      </div>
    </section>
  );
}