import type {PriceImpl} from "../interfaces/ProductRelated.ts";

export default function Price ({currency, price} : PriceImpl) {

    return (
        <>
            {currency}
            <span>{price}</span>
        </>
    );
}