import React from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../routes";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-indigo-950 ">
      <div className="fixed bottom-0 left-0 w-full flex justify-evenly bg-indigo-950 text-white ">
        {
          routes.map(({title, icon, path}, index) => (
            <Link 
              key={index} 
              to={path} 
              className={`flex flex-col items-center py-3 hover:text-white font-bold text-xs hover:stroke-white ${path == pathname ? 'text-white stroke-white' : 'text-gray-400 stroke-gray-400'}`} 
            >
              <div className="text-white">
                {icon}
              </div>
              {title}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar;