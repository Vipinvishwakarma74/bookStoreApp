import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar({ setSearch }) {
  const [authUser] = useAuth();

  const [searchInput, setSearchInput] = useState("");

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navItems = (
    <>
      <li>
        <a
        href="/"
        className="text-black dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700">
          Home
        </a>
      </li>

      <li>
        <a
          href="/course"
          className="text-black dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          Course
        </a>
      </li>

      <li>
        <a
          href="/contact"
          className="text-black dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700">
          Contact
        </a>
      </li>

      <li>
        <a
          href="/about"
          className="text-black dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700">
          About
        </a>
      </li>
    </>
  );


  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50
        dark:bg-slate-800 dark:text-white
        ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 duration-300 transition-all"
            : ""
        }`}
      >

        <div className="navbar">


          {/* Mobile menu */}
          <div className="navbar-start">

            <div className="dropdown">

              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>


              <ul
                tabIndex={0}
                className="
                menu menu-sm dropdown-content mt-3 z-[1]
                p-2 shadow rounded-box w-52
                bg-white text-black
                dark:bg-slate-800 dark:text-white
                "
              >
                {navItems}
              </ul>

            </div>


            <a className="text-2xl font-bold cursor-pointer">
              📖bookStore
            </a>

          </div>



          {/* Desktop menu */}
          <div className="navbar-center hidden lg:flex">

            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>

          </div>



          {/* Right side */}
          <div className="navbar-end gap-3">


            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900">

              <input
                type="text"
                className="grow outline-none dark:text-white"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />

              <button
                type="button"
                onClick={() => {
                    setSearch(searchInput);
                    
                    document
                      .getElementById("books")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                }}
                className="text-slate-600 dark:text-white"
              >


              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />

              </svg>

              </button>
            </label>


            {/* Theme */}
            <label className="swap swap-rotate">

              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              />


            {/* Sun icon */}
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.75a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75Zm0 12.5a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75ZM4.75 12a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75Zm12.5 0a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75ZM6.69 6.69a.75.75 0 011.06 0l.7.7a.75.75 0 01-1.06 1.06l-.7-.7a.75.75 0 010-1.06Zm9.86 9.86a.75.75 0 011.06 0l.7.7a.75.75 0 01-1.06 1.06l-.7-.7a.75.75 0 010-1.06ZM17.31 6.69a.75.75 0 010 1.06l-.7.7a.75.75 0 01-1.06-1.06l.7-.7a.75.75 0 011.06 0ZM7.75 16.25a.75.75 0 010 1.06l-.7.7a.75.75 0 01-1.06-1.06l.7-.7a.75.75 0 011.06 0ZM12 8a4 4 0 100 8 4 4 0 000-8Z"/>
            </svg>


            {/* Moon icon */}
            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13a1 1 0 00-1.05-.14 8 8 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1014 11.69 1 1 0 00-.36-1.05Z"/>
            </svg>


            </label>



            {authUser ? (
              <Logout />
            ) : (
              <div>
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>

                <Login />
              </div>
            )}


          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;