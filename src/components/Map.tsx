


import React from 'react';

const MapEmbed = () => {
  return (
    <div className="w-full md:w-1/2 px-4 h-96">
      <div className="h-full w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg border-4 border-blue-500 relative">
        {/* Header */}
       
          <h3 className="text-center shadow-md">Our Location in Magomeni, Dar es Salaam, Tanzania</h3>
       

        {/* Map Iframe */}
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
  );
};

export default MapEmbed;
