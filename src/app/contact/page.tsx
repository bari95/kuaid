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
      <div className="container mx-auto py-16 px-4 lg:px-0">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <h6 className="text-blue-500 uppercase font-semibold tracking-wider mb-2">Get In Touch</h6>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Contact For Any Query</h1>
            <form className="bg-white shadow-xl p-10 rounded-2xl space-y-8 transform transition-all duration-300 hover:shadow-2xl">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="relative">
      <input 
        type="text" 
        id="name" 
        placeholder=" " 
        className="w-full py-4 px-6 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 shadow-sm hover:shadow-md transition focus:outline-none focus:border-blue-500 focus:bg-white"
      />
      <label 
        htmlFor="name" 
        className="absolute top-0 left-5 text-sm text-gray-500 bg-white px-1 transform -translate-y-1/2 scale-75 transition-all duration-300 peer-focus:text-blue-500"
      >
        Your Name
      </label>
    </div>
    <div className="relative">
      <input 
        type="email" 
        id="email" 
        placeholder=" " 
        className="w-full py-4 px-6 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 shadow-sm hover:shadow-md transition focus:outline-none focus:border-blue-500 focus:bg-white"
      />
      <label 
        htmlFor="email" 
        className="absolute top-0 left-5 text-sm text-gray-500 bg-white px-1 transform -translate-y-1/2 scale-75 transition-all duration-300 peer-focus:text-blue-500"
      >
        Your Email
      </label>
    </div>
  </div>
  <div className="relative">
    <input 
      type="text" 
      id="subject" 
      placeholder=" " 
      className="w-full py-4 px-6 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 shadow-sm hover:shadow-md transition focus:outline-none focus:border-blue-500 focus:bg-white"
    />
    <label 
      htmlFor="subject" 
      className="absolute top-0 left-5 text-sm text-gray-500 bg-white px-1 transform -translate-y-1/2 scale-75 transition-all duration-300 peer-focus:text-blue-500"
    >
      Subject
    </label>
  </div>
  <div className="relative">
    <textarea 
      id="message" 
      placeholder=" " 
      className="w-full h-40 py-4 px-6 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 shadow-sm hover:shadow-md transition resize-none focus:outline-none focus:border-blue-500 focus:bg-white"
    ></textarea>
    <label 
      htmlFor="message" 
      className="absolute top-0 left-5 text-sm text-gray-500 bg-white px-1 transform -translate-y-1/2 scale-75 transition-all duration-300 peer-focus:text-blue-500"
    >
      Message
    </label>
  </div>
  <button 
    type="submit" 
    className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
  >
    Send Message
  </button>
</form>


          </div>

        {/* Map */}
       <MapEmbed />

        </div>
      </div>

      {/* Footer */}
      <Footer />
      
      {/* Back to Top */}
      <a href="#" className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg">
        <BsArrowUp className="text-2xl" />
      </a>
    </div>
  );
};

export default ContactPage;
