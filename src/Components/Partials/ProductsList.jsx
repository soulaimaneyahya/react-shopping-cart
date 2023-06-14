import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux';
import Product from './Product';
import { cartActions } from '../../Store/Slices/cartSlice'

function ProductsList({ products, setShowSuccessAlert }) {

    const dispatch = useDispatch()

    const addToCart = (product) => {
        // console.log(product)
        dispatch(cartActions.addToCart({
            id: product.id,
            name: product.name,
            imgURL: product.imgURL,
            price: product.price
        }))

        setShowSuccessAlert(true);

        // Hide the success alert after 3 seconds
        setTimeout(() => {
            setShowSuccessAlert(false);
        }, 3000);
    }

    return (
        <>
            {products && <>
                {products.length === 0 ? (
                    <p className='fw-bold p-0 m-0 text-decoration-underline'>No products found</p>
                ) : (<div className="row row-cols-2 row-cols-md-4 g-4">
                    {
                        Object.values(products)
                            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                            .map((product, index) => (
                                <Product
                                    key={index}
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    imgURL={product.imgURL}
                                    price={product.price}
                                    created_at={product.created_at}
                                    addToCart={() => addToCart(product)}
                                />
                            ))
                    }
                </div>)}
            </>}
        </>
    )
}

ProductsList.propTypes = {
    products: PropTypes.array,
    setShowSuccessAlert: PropTypes.func
}

export default ProductsList;
