import moment from "moment"
import { PropTypes } from 'prop-types'
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyContext } from "../../Contexts/CurrencyContext";
import { stringLimit } from "../../Helpers/stringHelpers";
import { addToCart } from '../../Store/Slices/cartSlice';

const Product = ({ id, name, description, imgURL, price, created_at, setShowSuccessAlert }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const auth = useSelector(state => state.auth)
    const { currencySymbol } = useContext(CurrencyContext);

    const handleAddToCart = () => {
        setIsLoading(true)

        setTimeout(() => {
            dispatch(addToCart({
                id,
                name,
                imgURL,
                price
            }));
            setIsLoading(false)
            setShowSuccessAlert(true);
        }, 1000);

        // Hide the success alert after 3 seconds
        setTimeout(() => {
            setShowSuccessAlert(false);
        }, 3000);
    };

    return (<>
        <div className="col text-center">
            <div className="card h-100">
                <img src={imgURL} alt={name} style={{
                    width: '304px',
                    height: '304px',
                    objectFit: 'cover'
                }} className="w-100" />
                <div className="card-body">
                    <h5 className="p-0 m-0 card-title">{name}</h5>
                    <p className="p-0 m-0 card-text">{stringLimit(description)}</p>
                    <h5 className="p-0 m-0 card-text fw-bold my-2">{price} {currencySymbol}</h5>
                    {auth.isLogin && (<button className="btn btn-dark w-block w-full w-100" onClick={() => handleAddToCart()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        <span className="mx-2">
                            {isLoading && 'Adding ...'}
                            {!isLoading && 'Add to Cart'}
                        </span>
                    </button>)}
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Added {moment(created_at).fromNow()}</small>
                </div>
            </div>
        </div>
    </>);
}

Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    imgURL: PropTypes.string,
    price: PropTypes.number,
    created_at: PropTypes.string,
    setShowSuccessAlert: PropTypes.func,
}

export default Product;
