import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  return (
    <>
      {productList.map((item) => (
        <ProductItem item={item.data} id={item.id} key={item.id} />
      ))}
    </>
  );
}

export default ProductList;
