// Tanstack Query
import { useQuery } from "@tanstack/react-query";

const FetchData = async () => {
  const res = await fetch(
    "https://ecommerce-projects-server.vercel.app/allUsers"
  );
  const data = await res.json();
  return data;
};

// Query Function==>

const UseUsers = () => {
  const {
    data: allUsers,
    isLoading,
    refetch,
  } = useQuery(["allUsers"], FetchData);
  return { allUsers, isLoading, refetch };
};

export default UseUsers;
