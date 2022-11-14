import "./App.css";
import Products from "./components/products/Products";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Products Page</h1>
        <Products />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
