import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";
import { emptyCart } from "../../../Store/Slices/cartSlice";
import CartItem from "./CartItem";
import './cartList.css'

const CartList = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const itemsList = useSelector((state) => state.cart.itemsList);
    const { currencyText } = useContext(CurrencyContext);
    console.log(itemsList)

    const dispatch = useDispatch();

    const handleEmptyCart = () => {
        dispatch(emptyCart())
    }

    return (<>
        <div className="offcanvas-wrapper">
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="cartList" aria-labelledby="cartListLabel">
                <div className="offcanvas-header p-3 border-bottom">
                    <h5 className="offcanvas-title" id="cartListLabel">Cart List <span className="text-primary fw-bold">({totalQuantity})</span> items</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        {itemsList && <>
                            {itemsList.length === 0 ? (
                                <p className='fw-bold p-0 m-0 text-decoration-underline'>Empty Cart List</p>
                            ) : (<div className="row row-cols-1">
                                {
                                    Object.values(itemsList)
                                        .map((product, index) => (
                                            <CartItem
                                                key={index}
                                                id={product.id}
                                                name={product.name}
                                                imgURL={product.imgURL}
                                                totalPrice={product.totalPrice}
                                                added_to_cart={product.added_to_cart}
                                                quantity={product.quantity}
                                            />
                                        ))
                                }
                            </div>)}
                        </>}
                    </div>
                </div>

                <div className="offcanvas-footer p-3 border-top">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold">Cart SubTotal</h5>
                        <h5 className="fw-bold">{totalPrice} {currencyText}</h5>
                    </div>
                    <div className="mt-2">
                        <Link to="/checkout" className="btn btn-sm btn-dark btn-block w-100 w-full">Shop Now</Link>
                        <button className="btn btn-sm btn-danger btn-block w-100 w-full my-2" onClick={handleEmptyCart}>Empty Cart</button>
                        <Link to="/" className="btn btn-sm btn-light btn-block w-100 w-full" data-bs-dismiss="offcanvas" aria-label="Close">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default CartList;
