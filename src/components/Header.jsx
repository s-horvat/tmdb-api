import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import userIcon from "../assets/userIcon.png";
import movieLogo from "../assets/movieLogo.png";
import { IoIosSearch } from "react-icons/io";
import { navigation } from "../const/navigation";
// import { setBannerData } from "../store/tmdbSlice";

function Header() {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  console.log("location", location.search.slice(2));

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?=${searchInput}`);
    }
  }, [searchInput]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="fixed top-0 w-full h-16 px-10 bg-neutral-600 opacity-75 flex items-center z-20">
      <div>
        <Link to={"/"}>
          <img
            src={movieLogo}
            alt="logo"
            className="w-11 mx-3 text-neutral-50 bg-white border-white rounded-lg border-2"
          />
        </Link>
      </div>
      <nav className="hidden lg:flex items-center gap-5 ml-20">
        {navigation.map((nav) => {
          return (
            <div key={nav.label}>
              <NavLink
                to={nav.href}
                className={({ isActive }) =>
                  ` px-3 hover:text-neutral-400 ${
                    isActive && "text-neutral-100"
                  }`
                }
              >
                {nav.label}
              </NavLink>
            </div>
          );
        })}
      </nav>
      <div className="ml-auto flex items-center gap-10">
        <form className="flex items-center gap-5 mx-20" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search here..."
            className="bg-neutral-500 rounded-lg px-10 outline-none hidden  lg:block space-x-3"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <button className="text-xl text-white lg:-mx-12 md:-mx-12 sm:-mx-12 hidden lg:block">
            <IoIosSearch />
          </button>
        </form>

        <div className="w-9 h-9 rounded-full cursor-pointer active:scale-75 transition-all">
          <img src={userIcon} alt="userIcon" className="w-full h-full" />
        </div>
      </div>
    </header>
  );
}

export default Header;
