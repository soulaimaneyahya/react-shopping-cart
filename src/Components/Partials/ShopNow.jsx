import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ShopNow = ({ amountTotal, currencySymbol, placeholder }) => {
    return (<div className="border rounded p-3">
        <h3>Total: {amountTotal} {currencySymbol}</h3>
        <Link to="/checkout" className="btn btn-sm btn-dark">{ placeholder ?? 'Shop Now' }</Link>
    </div>);
}

ShopNow.propTypes = {
    amountTotal: PropTypes.number,
    placeholder: PropTypes.string,
    currencySymbol: PropTypes.string
}

export default ShopNow;
