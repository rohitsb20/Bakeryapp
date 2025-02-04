import {Link} from "react-router-dom"
import useLogout from "../hooks/useLogout";
import useAuthContext from "../zustand/useAuthContext";


const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blogs", path: "/blogs" },
    { title: "Contact", path: "/contact" },
   
]

const Header = () => {

  const {logoutData} = useLogout();
  const {authUser} = useAuthContext();
  return (
    <nav className="navbar rounded-box ">
      <div className="w-full md:flex md:items-center md:gap-2">
        <div className="flex items-center justify-between">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a
              className="link text-base-content link-neutral text-xl font-semibold no-underline"
              href="#"
            >
              Logo
            </a>
            <div className="ml-5 capitalize text-sm p-2 w-fit rounded-box">
              Hi, {authUser.fullname}
            </div>
            <div className="md:hidden ">
              <button
                type="button"
                className="collapse-toggle btn btn-outline btn-secondary btn-md btn-square"
                data-collapse="#default-navbar-collapse"
                aria-controls="default-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="default-navbar-collapse"
          className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
        >
          <ul className="menu md:menu-horizontal gap-2 p-0 text-base  max-md:mt-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="link hover:text-sky-500  no-underline hover:bg-transparent
                    hover:scale-105   transition-transform duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <button
              onClick={logoutData}
              className="btn btn-gradient bg--sky-500 btn-accent waves 
            -light"
            >
              {" "}
              Logout{" "}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header