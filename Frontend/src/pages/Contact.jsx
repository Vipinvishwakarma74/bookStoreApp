import React from "react";

function Contact() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-slate-900 dark:text-white">

            <h1 className="text-4xl font-bold text-center">
                Contact Us
            </h1>


            <p className="mt-6 text-lg text-center">
                You can contact us for any query related to books and courses.
            </p>


            <div className="mt-10 max-w-md mx-auto bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow">

                <p className="mb-3">
                    📧 Email: bookstore@gmail.com
                </p>

                <p className="mb-3">
                    📞 Phone: +91 98765XXXXX
                </p>

                <p>
                    📍 Location: India
                </p>

            </div><br/><br/><br/>

            <a
                href="/"
                className="inline-block mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
            >
                ← Back to Home
            </a>


        </div>
    );
}

export default Contact;