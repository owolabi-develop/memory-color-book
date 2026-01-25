import { Book } from "./Book"
import React from 'react';
import HeroImage from '../../assets/heroImage.jpg';
import GardenImage from '../../assets/garden.jpg';
import AdventureImage from '../../assets/adventure.jpg';
import { Link } from "react-router";

interface CategoryTitle {
  title: string;
  id:number
}
interface BookColumn {
  id:number;
  projectName:string;
  description:string;
  url:string;
  categories: CategoryTitle[];
}
const MyBooks: React.FC = () => {

    const  bookColumn: BookColumn[] = [
    {
      id:1,
      projectName:"Mom's garden memories",
      description:"You're 60% though selecting photos. Three more spreads to go before we move to the cover design.",
      url:HeroImage,
      categories: [
        { id:1,title: 'Celebration'},
        { id:2,title: 'Family' },
        { id:3, title: 'Hardcover'},
    ]
    },

     {
     id:2,
      projectName:"Mom's garden memories",
      description:"Order in May. Her recipes, her hand, her voice in every page you color.",
      url:GardenImage,
      categories: [
        { id:1,title: 'Memorial'},
        { id:2,title: 'Love' },
        { id:3,title: 'Softcover'},
    ]
    },

     {
      id:3,
      projectName:"Children adventure memories",
      description:"Order in August. New backpack, new classroom, the nervous smile you'll want to remember",
      url:AdventureImage,
      categories: [
        { id:1,title: 'Childhood'},
        { id:2,title: 'Adventure' },
        { id:3,title: 'Hardcover'},
    ]
    },
    ]
  return (
    <div className="p-8">
        <div className="text-center">
        <h1 className="text-2xl md:text-4xl">My Books</h1>
        <h1 className="text-sm md:text-base">Browse, revisit, and share the books you've made.</h1>
        </div>

        {bookColumn.map((book)=>(
              <Book key={book.id} projectName={book.projectName} description={book.description} url={book.url} categories={book.categories}/>
        ))}


        {/* view all */}
        <div className="flex item-center justify-center">
              <Link to="/dashboard/user-profile/rachel/books">
              <button className="border border-gray-800 text-gray-900 text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                View All
              </button>
              </Link>
              
            </div>

      
        

    </div>
  )
}

export default MyBooks