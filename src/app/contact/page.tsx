import React from 'react';
import Header from '@/components/contact/Header';
import Footer from '@/components/Footer';
import { BsArrowUp } from 'react-icons/bs';
import MapEmbed from '@/components/Map';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />

      {/* Contact Section */}
      <section className="container mx-auto py-16 px-4 lg:px-0 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="flex flex-wrap -mx-4">
          
          {/* Contact Form */}
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <h6 className="text-blue-600 uppercase font-semibold tracking-wider mb-2">Get In Touch</h6>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Contact Us for Any Query</h1>
            <form className="bg-white shadow-2xl p-10 rounded-2xl space-y-8 transition-transform duration-500 hover:shadow-3xl hover:scale-105">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="w-full py-4 px-6 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-lg hover:shadow-xl transition focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-0 left-5 text-sm text-gray-600 bg-white px-1 transform -translate-y-1/2 scale-75 transition-all duration-300 peer-focus:text-blue-600"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="w-full py-4 px-6 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-lg hover:shadow-xl transition focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-0 left-5 text-sm text-gray-600 bg-white px-1 transform -translate-y-1/2 scale-75 transition-all duration-300 peer-focus:text-blue-600"
                  >
                    Your Email
                  </label>
                </div>
              </div>

              {/* Subject Input */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  placeholder=" "
                  className="w-full py-4 px-6 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-lg hover:shadow-xl transition focus:outline-none focus:border-blue-500 focus:bg-white"
                />
                <label
                  htmlFor="subject"
                  className="absolute top-0 left-5 text-sm text-gray-600 bg-white px-1 transform -translate-y-1/2 scale-75 transition-all duration-300 peer-focus:text-blue-600"
                >
                  Subject
                </label>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  id="message"
                  placeholder=" "
                  className="w-full h-40 py-4 px-6 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-lg hover:shadow-xl transition resize-none focus:outline-none focus:border-blue-500 focus:bg-white"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-0 left-5 text-sm text-gray-600 bg-white px-1 transform -translate-y-1/2 scale-75 transition-all duration-300 peer-focus:text-blue-600"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Embed */}
          <div className="w-full md:w-1/2 px-4">
            <MapEmbed />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <a href="#" className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg transition hover:bg-blue-600">
        <BsArrowUp className="text-2xl" />
      </a>
    </div>
  );
};

export default ContactPage;
