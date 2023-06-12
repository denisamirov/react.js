import {TListing} from '../modules/modules'

export const Listing = ({items}) => {
    // for (const i in items) {
    //     console.log(items[i]);
    // }
  return (
    <div className="item-list">{items.map(i => 
            <div className="item" key={i.title + i}>
                <div className="item-image">
                    <a href={i.url}>
                        <img src={i.MainImage?.url_570xN} />
                    </a>
                </div>
                <div className="item-details">
                <p className="item-title">{i.title?.length < 50 ? i.title : i.title?.slice(0,50) + '...'}</p>
                <p className="item-price">{i.currency_code == ('EUR') ? 
                                          (i.currency_code == ('EUR') ? ('€') + i.price : ("$") + i.price) : 
                                          (i.currency_code == ('USD') ? ("$") + i.price : i.price + " " + i.currency_code)}
                                        </p>
                <p className={i.quantity > 20 ? "item-quantity level-high" : 
                              i.quantity <= 10 ? "item-quantity level-low" : " item-quantity level-medium"}>{i.quantity}</p>
                </div>
            </div>
        )}
    </div>
  )
}

Listing.defaultProps = {
    items: []
}