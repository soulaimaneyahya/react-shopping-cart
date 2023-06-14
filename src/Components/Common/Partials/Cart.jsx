import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";
import { cartActions } from "../../../Store/Slices/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const { currencyText } = useContext(CurrencyContext);

    const showCart = () => {
        dispatch(cartActions.setShowCart());
    };

    return (
        <>
            <a className="btn btn-sm mx-md-3 btn-light position-relative text-dark m-0 mt-1"
                data-bs-toggle="offcanvas" href="#cartList" role="button" aria-controls="cartList">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart mx-2" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span onClick={showCart}><span className="fw-bold">{totalPrice}</span> {currencyText}</span>
                <span className="position-absolute top-0 start-100 translate-middle py-0 px-2 bg-danger text-white rounded-circle">
                    {totalQuantity}
                    <span className="visually-hidden">Total Items</span>
                </span>
            </a>
        </>
    );
};

export default Cart;
