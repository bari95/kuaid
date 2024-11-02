import React from 'react';
import Header from '@/components/contact/Header';
import Footer from '@/components/Footer';
import { BsArrowUp } from 'react-icons/bs';

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
<div className="w-full md:w-1/2 px-4 h-96">
  <div className="h-full w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg border-4 border-blue-500 relative">
    {/* Overlay */}
   
    <iframe
      className="w-full h-full rounded-lg"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6422920300884!2d39.24752927590747!3d-6.81235006692479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b38e32b715f%3A0xf08d1375e7d377b6!2sMagomeni%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1603794290143!5m2!1sen!2sus"
      allowFullScreen
      aria-hidden="false"
      tabIndex={0}
      loading="lazy"
    ></iframe>
  </div>
</div>

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
