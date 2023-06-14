import { useContext } from "react";
import { useDispatch } from "react-redux";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";
import { cartActions } from "../../../Store/Slices/cartSlice";
import { PropTypes } from 'prop-types'

const CartItem = ({ id, name, imgURL, quantity, totalPrice }) => {
    const dispatch = useDispatch();
    const { currencyText } = useContext(CurrencyContext);

    const incrementCartItem = () => {
        dispatch(
            cartActions.addToCart({
                id,
                name,
                imgURL,
                price: Math.floor(totalPrice / quantity)
            })
        );
    };

    const decrementCartItems = () => {
        dispatch(cartActions.removeFromCart(id));
    };

    const removePrementelyFromCart = () => {
        for (let i = 0; i < quantity; i++) {
            dispatch(cartActions.removeFromCart(id));
        }
    }

    return (<>
        <section className="d-flex justify-content-between align-items-start mb-3 pb-3 border-bottom">
            <section className="d-flex justify-content-start align-items-start gap-3">
                <aside>
                    <img src={imgURL} alt={name} width={60} className="img-thumbnail rounded" />
                </aside>
                <article>
                    <header>
                        <p className="cart-item-text">{name}</p>
                    </header>
                    <article>
                        <p className="cart-item-text">
                            <span>QTY</span><span className="p-1 mx-2 px-2 border">{quantity}</span> <span>{totalPrice} {currencyText}</span>
                        </p>
                    </article>
                </article>
            </section>
            <aside className="d-flex justify-content-start align-items-start gap-2">
                <div>
                    <button className="btn btn-light btn-sm d-block" onClick={removePrementelyFromCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                    </button>
                </div>
                <div>
                    <button className="btn btn-light btn-sm d-block mb-2" onClick={incrementCartItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                    <button className="btn btn-light btn-sm d-block" onClick={decrementCartItems}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>
                </div>
            </aside>
        </section>
    </>);
}

CartItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    imgURL: PropTypes.string,
    quantity: PropTypes.number,
    totalPrice: PropTypes.number
}

export default CartItem;
