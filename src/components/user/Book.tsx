
interface CategoryTitle {
  title: string;
  id:number;
}
export const Book = (props:any) => {
  return (
     <div  className='grid grid-cols-1 lg:grid-cols-2 px-8 gap-10 border rounded-xl m-6 shadow-md'>

        <div className="" key={props.idx}>
            <h1 className="py-4 text-xl md:text-3xl font-semibold">{props.projectName}</h1>
            {/* book category */}
            <div className="flex item-start justify-start gap-2 flex-wrap">
              {props.categories.map((cat:CategoryTitle)=>(
                <span key={cat.id} className="rounded-lg bg-gray-200 px-4 py-1 shadow-md text-sm ">{cat.title}</span>
              ))}
            
            
            </div>

             {/* book category */}
             
             <h1  className="p-1 text-base font-medium mt-22">{props.description}</h1>


             {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-5">
              <button className="border border-gray-800 text-gray-900 text-xs sm:text-sm font-medium px-3 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 ">
                Reorder
              </button>
              <button className="text-gray-900 text-xs sm:text-sm font-medium flex items-center justify-center sm:justify-start gap-2 hover:gap-3 transition-all duration-300 group">
                View All
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

        </div>

         <div className="flex item-end justify-end py-4">

            <div className="bg-gray-200 rounded-xl flex item-center w-80">
               {/* <img 
                  src={props.url} 
                  alt={`hello`}
                  className="w-full h-full object-cover rounded-xl"
                /> */}
               </div>

         </div>

     </div>
  )
}
