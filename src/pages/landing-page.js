import { useState } from "react";
import { offers as Offers } from "../constants";

const LandingPage = () => {
    const [offers, setOffers] = useState(Offers);

    return (
        <>
            <p>Landing Page</p>
            {offers.map((offer, index) => (
                <div key={offer.id}>
                    <h3>Product: {offer.product}</h3>
                    <p>Discount: {offer.discount}</p>
                    <p>ValidTill: ${offer.validTill}</p>
                    <p>OfferCode: ${offer.offerCode}</p>
                </div>
            ))}
        </>
    )
}

export default LandingPage;