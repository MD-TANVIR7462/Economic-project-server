// import React from 'react';
// import ContactBenner from '../../Components/Contact/ContactBenner';

import ContactBenner from '../../Components/Contact/ContactBenner';
import ContactFrom from '../../Components/Contact/ContactFrom/ContactFrom';
import ContactMap from '../../Components/Contact/ContactMap';

const Contact = () => {
   return (
      <div>
         <ContactBenner name={"#Contact Us"} subtitle={"Feel Free To Contact Us"} img={"https://i.ibb.co/cN24B75/banner.png"} />
         <ContactMap></ContactMap>
         <ContactFrom></ContactFrom>

      </div>
   );
};

export default Contact;

