import { Circles } from "react-loader-spinner";
import { useQuery } from "react-query";

function Route() {
  async function fetchRoutes() {
    const BASE_URL = "https://transit.land/api/v2/rest/routes";
    const API_KEY = "";
    const oneStopID = "	r-9yzu-4?";

    const response = await fetch(`${BASE_URL}/${oneStopID}apikey=${API_KEY}`);
    const data = await response.json();
    const routes = await data.routes;
    return routes;
  }

  const { data, isLoading, isError } = useQuery("routes", fetchRoutes);

  if (isLoading) {
    return (
      <>
        <Circles
          height="80"
          width="80"
          color="#000"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </>
    );
  }
  if (isError) return <h3>Error: No Routes Fetched!</h3>;

  return (
    <>
      <ul>
        {data?.map((route) => (
          <li key={route.id}>{route.agency.agency_name}</li>
        ))}
      </ul>
    </>
  );
}

export default Route;
