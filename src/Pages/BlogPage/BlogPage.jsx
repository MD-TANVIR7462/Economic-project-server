import React from 'react';
import BlogBenner from '../../Components/Blog/BlogBenner';
import BlogCards from '../../Components/Blog/BlogCards';
import UseTitle from '../../Components/Hooks/UseTitle';


const BlogPage = () => {
   return (
      <div className='mb-12  '>
         {UseTitle("BLOG")}
         <BlogBenner></BlogBenner>
         <div className='mt-8 md:mt-20'>
         <BlogCards img={"https://i.ibb.co/wgZYv4s/b1-1.jpg"  } title={"The Cotton-Jersey Zip-Up Hoodie"}></BlogCards>
         <BlogCards img={"https://i.ibb.co/0ryFdgh/b2-1.jpg"  } title={"How To Style A Quiff "}></BlogCards>
         <BlogCards img={"https://i.ibb.co/8gy15Q5/b3.jpg"  } title={"Must Have Skater Girl Items"}></BlogCards>
         <BlogCards img={"https://i.ibb.co/0ccyY2D/b4-1.jpg"  } title={"Runway-Inspired Trends"}></BlogCards>
         <BlogCards img={"https://i.ibb.co/WzSb73H/b6.jpg"  } title={"AW20 Menswear Trends"}></BlogCards>
         </div>
         
      </div>
   );
};

export default BlogPage;