
import React from "react";
import { ArrowRight } from 'lucide-react';


interface MenuButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  title,
  onClick,
  className = "",
}) => {
  return (
   <button
  type="button"
  onClick={onClick}
  className={`
    px-3 py-1         
    border border-gray-400
    bg-transparent
    text-black text-sm  
    rounded-xl     
    font-medium
    transition-colors duration-300 ease-in-out
    hover:bg-black hover:text-white
    cursor-pointer
    ${className}
  `}
>
  {title}
</button>

  );
};




interface MenuIconContainerProps {
  icon: React.ReactNode; 
  onClick?: () => void;
  className?: string;
}

export const MenuIconContainer: React.FC<MenuIconContainerProps> = ({
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
  type="button"
  onClick={onClick}
  className={`
    px-3 py-2         
    border border-gray-400
    bg-transparent
    text-black text-sm  
    rounded-xl     
    font-medium
    transition-colors duration-300 ease-in-out
    hover:bg-black hover:text-white
    cursor-pointer
    ${className}
  `}
>
  {icon}
</button>
  );
};


export const GeneralButton: React.FC<MenuButtonProps> = ({
  title,
  onClick,
  className = "",
}) => {
  return (
   <button
  type="button"
  onClick={onClick}
  className={`
    px-3 py-1         
    border border-gray-400
    bg-transparent
    text-black text-sm  
    rounded-xl     
    font-medium
    transition-colors duration-300 ease-in-out
    hover:bg-black hover:text-white
    cursor-pointer
    ${className}
  `}
>
  {title}
</button>

  );
};




export const AIButton: React.FC<MenuButtonProps> = ({
  title,
  onClick,
}) => {
  return (
   <button
  type="button"
  onClick={onClick}
  className={`
    px-3 py-2         
    border border-gray-400
    bg-transparent
    text-black text-base  
    rounded-lg     
    font-medium
    transition-colors duration-300 ease-in-out
    hover:bg-black hover:text-white
    cursor-pointer 
    flex items-center justify-center gap-2
    bg-white shadow-md
    w-full whitespace-nowrap
  `}
>
  <span>{title}</span>
  <ArrowRight size={18} />
</button>


  );
};





