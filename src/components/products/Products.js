import { Circles } from "react-loader-spinner";
import { useQuery } from "react-query";
import ProductDetail from "./ProductDetail";

function Products() {
  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }

  const { data, isLoading, isError } = useQuery("products", fetchProducts);

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
  if (isError) return <h3>Error: No Products Fetched!</h3>;

  return (
    <>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>
            <ProductDetail
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              rating={product.rating}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
