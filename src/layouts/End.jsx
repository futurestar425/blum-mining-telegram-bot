import React from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../routes";

const End = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-evenly bg-black text-white">
      {
        routes.map(({title, icon, path}, index) => (
          <Link 
            key={index} 
            to={path} 
            className={`flex flex-col items-center py-3  hover:text-white font-bold text-xs hover:stroke-white ${path == pathname ? 'text-white stroke-white' : 'text-gray-400 stroke-gray-400'}`} 
          >
            <div className="text-white">
              {icon}
            </div>
            {title}
          </Link>
        ))
      }
    </nav>
  )
}

export default End;