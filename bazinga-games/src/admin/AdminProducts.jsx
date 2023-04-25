import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../api-adapter";
import { Link } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
//import "../loading.css";
import "./adminproducts.css";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    let placeholder = await getProducts();
    setProducts(placeholder.products); // Looking at how the apiAdapter returns "results" so if we are missing info, change this to placeholder.data, possibly placeholder.data.products depending on the backend (db/products.js returns "rows")
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleDelete(productId) {
    const adminProductId = Number(productId);
    const token = localStorage.getItem("token");
    const deleted = await deleteProduct(adminProductId, token);

    if (products) {
      let allProducts = await fetchProducts();
      if (allProducts) {
        setProducts(allProducts.products);
        fetchProducts();
      }
    }
  }

  return (
    <div>
      <h2 className="adminproducts-header">Product Data</h2>
      <CreateProduct
        products={products}
        fetchProducts={fetchProducts}
        setProducts={setProducts}
      />

      <div id="container">
        {products.length ? ( // The .length error we got most likely came from here, consider instead of checking the length refactoring React suspense in to prevent this entirely.
          products.map((product) => {
            return ( // Lines 62 - 67 have a neat component with props, consider doing the same to this bit, and nesting the EditProduct component below into a "Product" component made from the JSX between here and there?
              <div key={`product-${product.id}`} className="productBox-admin">
                <div className="productName">{product.name}</div>
                <div className="productDescription">
                  Description: {product.description}
                </div>

                <div className="productInStock">In stock: {product.stock}</div>
                <div className="productID">Price: {product.price}</div>
                <img id="productImage" src={`${product.image_url}`} />
                {/* <button>Add to cart</button> */}
                <Link to={`/product/${product.id}`} className="moreinfo">
                  <button>Display More Info</button>
                </Link>

                <EditProduct
                  product={product}
                  products={products}
                  setProducts={setProducts}
                  fetchProducts={fetchProducts}
                />
                <button
                  id={product.id ? `${product.id}` : null}
                  onClick={() => handleDelete(product.id)}
                >
                  Delete Product
                </button>
              </div>
            );
          })
        ) : (
          <div id="loadingProducts">Loading your products... </div>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
