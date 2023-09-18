import { Helmet  } from 'react-helmet-async';
const UseTitle = (title) => {
   return (
      <Helmet>
      <title>{title} - SWIFT MART </title>
     
    </Helmet>
   );
};

export default UseTitle;