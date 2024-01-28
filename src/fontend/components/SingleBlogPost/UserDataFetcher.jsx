import { useState, useEffect } from "react";

const UserDataFetcher = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://dbforassignment2023.onrender.com/user_data"
        );

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          setError(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userData, isLoading, error };
};

export default UserDataFetcher;
