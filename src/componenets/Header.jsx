import Logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import user from "../assets/user.png";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { navigation } from "../contants/navigation";

const Header = () => {
  const location = useLocation();
  const removeSpace = location.search.slice(3).split("%20").join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  console.log("");

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 z-40">
      <div className="container mx-auto px-2 flex items-center h-full">
        <Link to={"/"}>
          <img src={Logo} alt="logo" width={120} />
        </Link>
        <nav className=" hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
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
        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-3" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search..."
              className="outline-none border-none px-4 py-1 bg-transparent hidden lg:block"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="text-white text-2xl">
              <IoSearch />
            </button>
          </form>
          <div className="w-8 h-8 cursor-pointer active:scale-50 transition-full ">
            <img src={user} alt="user" className="outline-none rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
