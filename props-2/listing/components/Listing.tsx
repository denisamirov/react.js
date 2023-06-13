import {TListing} from '../modules/modules'

interface List {
    items: TListing[]
}

export const Listing = ({items}: List) => {

    const item = []
    for (let i = 0; i < items.length; i++) {
        const title = items[i].title;
        const url = items[i].url
        const src = items[i].MainImage?.url_570xN
        const itemTitle = items[i].title?.length < 50 ? items[i].title : items[i].title?.slice(0,50) + '...'
        const quantityNumber:number = items[i].quantity
        let currency_code = ""
        let quantity = ""

        if (items[i].currency_code == 'USD') {
            currency_code = '$' + items[i].price}
        else if (items[i].currency_code == 'EUR') {
            currency_code = '€' + items[i].price}
        else {
            currency_code = items[i].price + " " + items[i].currency_code
        }

        if (quantityNumber >= 20) {
            quantity = "item-quantity level-high"}
        else if (quantityNumber <= 10) {
            quantity = "item-quantity level-low"}
        else {
            quantity = "item-quantity level-medium"
        }

        item.push({'title': title, 
                   'url': url,
                   'src': src,
                   'itemTitle': itemTitle,
                   'currencyCode': currency_code,
                   'quantity': quantity,
                   'quantityNumber': quantityNumber})
    }

  return (
    <div className="item-list">
        {
            item.map((i) => 
            <div className="item" key={i.title + i}>
                <div className="item-image">
                    <a href={i.url}>
                        <img src={i.src} />
                    </a>
                    <div className="item-details">
                        <p className="item-title">{i.itemTitle}</p>
                        <p className="item-price">{i.currencyCode}</p>
                        <p className={i.quantity}>{i.quantityNumber}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

Listing.defaultProps = {
    items: []
}