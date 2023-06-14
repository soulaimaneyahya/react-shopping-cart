import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CurrencyContext } from "../Contexts/CurrencyContext";
import ShopNow from "./Partials/ShopNow";

function Checkout() {

    const history = useHistory();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (!auth.isLogin) {
            history.push('/login')
        }
    }, []);

    const { currencySymbol } = useContext(CurrencyContext);
    const total = useSelector((state) => state.cart.totalPrice);
    // console.log(cart)
    // console.log(products)

    return (
        <>
            {auth.isLogin && (<section className="row">
                <header>
                    <h1>Checkout Page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dignissimos at? Corporis odit repellat maxime quam totam molestiae est dolor.</p>
                </header>
                <article>
                    <div>
                        <ShopNow
                            amountTotal={total}
                            currencySymbol={currencySymbol}
                            placeholder="Pay Now"
                        />
                    </div>
                </article>
            </section>)}
        </>
    )
}

export default Checkout;
