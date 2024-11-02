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
            <form className="bg-white shadow-lg p-8 rounded-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    placeholder=" " 
                    className="w-full py-3 px-4 rounded-lg border bg-gray-100 border-gray-300 text-gray-800 focus:outline-none focus:border-gray-500 transition" 
                  />
                  <label htmlFor="name" className="absolute top-0 left-4 text-sm text-gray-500 transition-all duration-300 transform -translate-y-2 scale-75">
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    placeholder=" " 
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:border-gray-500 transition" 
                  />
                  <label htmlFor="email" className="absolute top-0 left-4 text-sm  text-gray-500 transition-all duration-300 transform -translate-y-2 scale-75">
                    Your Email
                  </label>
                </div>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  id="subject" 
                  placeholder=" " 
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 bg-gray-100 focus:outline-none focus:border-gray-500 transition" 
                />
                <label htmlFor="subject" className="absolute top-0 left-4 text-sm text-gray-500 bg-gray-100 transition-all duration-300 transform -translate-y-2 scale-75">
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea 
                  id="message" 
                  placeholder=" " 
                  className="w-full h-32 py-3 px-4 rounded-lg border bg-gray-200 border-gray-300 text-gray-800 resize-none focus:outline-none focus:border-gray-500 transition"
                ></textarea>
                <label htmlFor="message" className="absolute top-0 left-4 text-sm text-gray-500 transition-all duration-300 transform -translate-y-2 scale-75">
                  Message
                </label>
              </div>
              <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="w-full md:w-1/2 px-4 h-96">
            <div className="h-full w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
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
