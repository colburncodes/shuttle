import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

function Route() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.BASE_URL}/${process.env.oneStopID}apikey=${process.env.API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then(
        (items) => {
          console.log(items);
          setIsLoaded(true);
          setRoutes(items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <Circles
          height="80"
          width="80"
          color="#000"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  } else {
    if (!routes.length) {
      return <div>No data</div>;
    } else {
      return (
        <ul>
          {(routes ?? []).map((route) => (
            <li key={route.id}>{route[0].route_long_name}</li>
          ))}
        </ul>
      );
    }
  }
}

export default Route;
