import "./App.css";
import Route from "./components/Route/Route";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Shuttle Routes</h1>
        <Route />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
