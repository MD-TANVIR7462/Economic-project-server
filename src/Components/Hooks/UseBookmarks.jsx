
// Tanstack Query
import { useQuery } from '@tanstack/react-query';

const FetchData = async()=>{
   const res = await fetch("http://localhost:5000/bookmarks")
   const data = await res.json();
   return data
}

// Query Function==>

const UseBookmarks = () => {
const{data : bookmarkProducts,isLoading,refetch  }=useQuery(["bookmarkProducts"],FetchData)
   return {bookmarkProducts,isLoading,refetch}
    
 
};

export default UseBookmarks;