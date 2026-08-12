import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Course() {
  const [book, setBook] = useState([]);

  // Search के लिए state
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  // Search के हिसाब से books filter होंगी
  const filteredBooks = book.filter((item) => {
    if (!search) {
      return true;
    }

    return JSON.stringify(item)
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  return (
    <>
      {/* Navbar */}
      <Navbar setSearch={setSearch} />

      {/* Course content */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">

        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi
            expedita quas quidem nesciunt debitis dolore non aspernatur
            praesentium assumenda sint quibusdam, perspiciatis, explicabo
            sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt
            quis sed magnam consequatur!
          </p>

          <Link
            to="/"
            className="inline-block mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
          >
            ← Back to Home
          </Link>
        </div>


        {/* Books Section */}
        <div
          id="books"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredBooks.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>

      </div>
    </>
  );
}

export default Course;