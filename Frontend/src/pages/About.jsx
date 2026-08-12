import React from "react";

function About() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-slate-900 dark:text-white">
            <h1 className="text-4xl font-bold text-center">
                About Our Book Store
            </h1>


            <p className="mt-6 text-lg text-center">
                Welcome to our Book Store. We provide quality books and
                courses to help students learn and grow.
            </p>


            <div className="mt-10 grid md:grid-cols-3 gap-6">


                <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800">
                    <h2 className="text-2xl font-bold">
                        📚 Books
                    </h2>

                    <p className="mt-3">
                        Find your favorite books from different categories.
                    </p>
                </div>



                <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800">
                    <h2 className="text-2xl font-bold">
                        🎓 Courses
                    </h2>

                    <p className="mt-3">
                        Learn new skills with our available courses.
                    </p>
                </div>



                <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800">
                    <h2 className="text-2xl font-bold">
                        🚀 Mission
                    </h2>

                    <p className="mt-3">
                        Our mission is to make learning easy and accessible.
                    </p>
                </div>


            </div><br/><br/><br/>






            {/* Back Button */}
            <a
                href="/"
                className="inline-block mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
            >
                ← Back to Home
            </a>

        </div>
    );
}

export default About;