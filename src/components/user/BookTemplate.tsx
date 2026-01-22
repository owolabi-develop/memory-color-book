

const BookTemplate = () => {
  return (
     <div className='grid grid-cols-1 lg:grid-cols-2 px-8 gap-10 m-6'>


         <div className="flex item-start justify-start py-4">

            <div className="bg-gray-200 rounded-xl flex item-center w-full h-96">
               {/* <img 
                  src={props.url} 
                  alt={`hello`}
                  className="w-full h-full object-cover rounded-xl"
                /> */}
               </div>

         </div>
         

        <div className="py-6 ">
            {/* template 1 */}
            <div className="border-gray-800 border-l-1 px-6 mb-6">
            <h1 className="text-lg font-semibold ">Books like this one</h1>
             <h1 className="py-2 text-sm font-medium ">We remember what you've made. Start fresh with similar theme, tone, or subject whenever inspiration strikes.</h1>

              {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              
              <button className="hidden sm:flex text-gray-900 text-xs sm:text-sm font-semibold items-center justify-center sm:justify-start gap-2 hover:gap-3 transition-all duration-300 group">
                Start
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            </div>
            

             {/* template 2 */}
            <div className="border-gray-800 px-6 mb-6">
            <h1 className="text-lg font-semibold ">What's new this season</h1>
             <h1 className="py-2 text-sm font-medium ">Discover prompts and ideas tailored to the time of year. Holiday memories, back-to-school moments, or quit winter reflections.</h1>

              {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              
              <button className="hidden sm:flex text-gray-900 text-xs sm:text-sm font-semibold items-center justify-center sm:justify-start gap-2 hover:gap-3 transition-all duration-300 group">
                Start
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            </div>


              {/* template 3 */}
            <div className="border-gray-800 px-6 mb-6">
            <h1 className="text-lg font-semibold">Quick start templates</h1>
             <h1 className="py-2 text-sm font-medium ">Jump into a new book in minutes using formats you've already loved. No need to start from scratch</h1>

              {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              
              <button className="hidden sm:flex text-gray-900 text-xs sm:text-sm font-semibold items-center justify-center sm:justify-start gap-2 hover:gap-3 transition-all duration-300 group">
                Start
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            </div>
            
             
        </div>

        

     </div>
  )
}

export default BookTemplate