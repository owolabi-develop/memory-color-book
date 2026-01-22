
import { Mail,Phone, MapPin} from 'lucide-react';
import { Link } from 'react-router';
const Support = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-10xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">

          {/* Left Side - Content */}
          <div className="space-y-8 order-1 lg:order-1">

            <div>
              <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">
                Support
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
                We're here to help
              </h1>

              <p className="text-gray-600 text-sm sm:text-base max-w-xl">
            Our team is ready to assist you with any questions about your memory books
              </p>
            </div>
           
          </div>


          {/* Right Side  */}
          <div className="order-2 lg:order-2">
             {/* email */}
          <div className="py-2">
          <div className="flex items-center gap-4">
          <Mail className="w-4 h-4" />
          <h1 className="text-base leading-none font-bold">Email</h1>
          </div>
          <Link to=''>
          <p className="ml-8 text-sm text-gray-600 underline hover:text-black">support@loveincolor.com</p>
          </Link>
          </div>


          {/* email */}


          {/* address */}

        <div className="py-2">
        <div className="flex items-center gap-4">
       <Phone className="w-4 h-4"/>
        <h1 className="text-base leading-none font-bold">Phone</h1>
        </div>
        
        <p className="ml-8 text-sm text-gray-600 underline hover:text-black">+1 (888) MEMORY-BOOK</p>
        </div>

          {/* address */}

          {/* office*/}
          <div className="py-2">
        <div className="flex items-center gap-4">
       <MapPin className="w-4 h-4"/>
        <h1 className="text-base leading-none font-bold">Office</h1>
        </div>
       
        <p className="ml-8 text-sm text-gray-600 hover:text-black">123 Memory Lane, San Francisco, California 94105 </p>
        
        </div>

          {/* office */}
          </div>

        </div>

       {/* map */}
        <div className="mt-20 max-w-7xl mx-auto">
        <div className="w-full min-h-[24rem] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
        <iframe
        title="Memory Lane Location"
        className="w-full h-[24rem] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=123%20Memory%20Lane%2C%20San%20Francisco%2C%20California%2094105&output=embed"
        />
        </div>
        </div>


       {/* map */}

      </div>
    </div>
  )
}

export default Support