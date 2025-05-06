const ProductCard = ({ product }) => (
    <div className="hover:shadow-xl transition duration-300 border p-4 rounded">
        <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
    </div>
);

export default ProductCard;
