// 'use client';

// export default function EmbedMap() {
//   return (
//     <div className='h-[300px] md:h-[380px] w-[95%] m-auto border-4 bg-red'>
//         <iframe className='h-[100%] w-[100%] invert-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046086084!2d72.92448531094048!3d31.423759042271517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722493477084!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//     </div>

//   );
// }



import React from 'react';

const Map = () => {
  return (

    <div className="max-w-[950px] h-[400px] mx-auto my-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159985.113265185!2d58.347677784375975!3d29.949884283699703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1753115546856!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen // ✅ correct prop
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
