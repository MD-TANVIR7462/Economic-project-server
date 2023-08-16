// import React from 'react';
// import ContactBenner from '../../Components/Contact/ContactBenner';

import ContactBenner from '../../Components/Contact/ContactBenner';
import ContactFrom from '../../Components/Contact/ContactFrom/ContactFrom';
import ContactMap from '../../Components/Contact/ContactMap';

const Contact = () => {
   return (
      <div>
         <ContactBenner />
         <ContactMap></ContactMap>
         <ContactFrom></ContactFrom>

      </div>
   );
};

export default Contact;

