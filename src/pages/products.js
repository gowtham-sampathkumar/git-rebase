import { useEffect } from "react";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <p>Products Page</p>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>Product: {product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}
        </>
    )
}

export default ProductsPage;