import Product from './Product';
import PropTypes from 'prop-types'

function ProductsList({ products, setShowSuccessAlert }) {
    return (
        <>
            {products && products.length === 0 ? (
                <p className='fw-bold p-0 m-0 text-decoration-underline'>No products found</p>
            ) : (
                <div className="row row-cols-2 row-cols-md-4 g-4">
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            imgURL={product.imgURL}
                            price={product.price}
                            created_at={product.created_at}
                            setShowSuccessAlert={setShowSuccessAlert}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

ProductsList.propTypes = {
    products: PropTypes.array,
    setShowSuccessAlert: PropTypes.func
}

export default ProductsList;
