import { Link } from "react-router"

export const InProgress = (props:any) => {
  return (
     <div className='grid grid-cols-1 lg:grid-cols-2 px-16 gap-10'>

        <div className="">
            <h1 className="p-2 text-2xl md:text-4xl ">{props.status}</h1>
             <h1 className="p-2 text-xl md:text-3xl font-semibold">{props.title}</h1>
             <h1  className="p-2 text-sm md:text-base font-medium">{props.description}</h1>


             {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link to="/dashboard/profile/rachel/book/inprogress">
              <button className="border border-gray-800 text-gray-900 text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Resume
              </button>
              </Link> 
              <button className="text-gray-900 text-xs sm:text-sm font-medium flex items-center justify-center sm:justify-start gap-2 hover:gap-3 transition-all duration-300 group">
                View All
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

        </div>

         <div className="flex md:item-end md:justify-end">

            <div className="bg-gray-200 rounded-xl p-30 flex item-center w-80"> </div>

         </div>

     </div>
  )
}
