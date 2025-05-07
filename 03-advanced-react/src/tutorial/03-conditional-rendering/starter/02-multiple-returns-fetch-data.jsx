import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        // fetch will not return error (400... 500... will not be errors; to check for those you need to use response.ok (ok is inside property of response))
        // with axios it will catch
        setIsError(true);
        console.log(error);
        return <p>{error}</p>;
      }
      setIsLoading(false);
    };

    fetchData();

    console.log(user);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }

  const { avatar_url, name, company, bio } = user; // it needs to be before the last return, otherwise it will be empty

  return (
    <div>
      <h2>Fetch Data </h2>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>{company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
