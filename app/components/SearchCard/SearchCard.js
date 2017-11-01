import React from 'react'
import { object } from 'prop-types'

import './SearchCard.scss'

const SearchCard = ({ item }) => (
  <div className='ml-search-card'>
    <div className='ml-search-card__image'>
      <a href={item.permalink} className='figure item-image item__js-link'>
        <img alt={item.title} src={item.picture} className='lazy-load' />
      </a>
    </div>
    <div className='ml-search-card__info'>
      <div className='ml-search-card__price'>
        <span className='ml-search-card__price-symbol'>{item.price.symbol}</span>
        <span className='ml-search-card__price-amount'>{item.price.amount}</span>
        {item.free_shipping ? <span className='ml-search-card__freeshipping' /> : ''}
      </div>
      <div className='ml-search-card__description'>
        {item.title}
      </div>
      <div className='ml-search-card__condition'>
        {item.condition}
      </div>
    </div>
  </div>
)

SearchCard.propTypes = {
  item: object
}

export default SearchCard

// <div class="item__info-container ">
//   <div class="item__info">
//     <h2 class="item__title list-view-item-title">
//       <a href="https://articulo.mercadolibre.com.ar/MLA-610057600-auricular-sennheiser-hd-407-_JM" class="item__info-title">
//         <span class="main-title"> Auricular Sennheiser Hd 407 </span>
//       </a>
//       <div class="brand__container">
//         <a class="item__brand" href="https://tienda.mercadolibre.com.ar/sennheiser-store">por Sennheiser Store</a>
//       </div>
//     </h2>
//     <div class="price__container">
//       <span class="price-old" itemprop="price-old"> <del> $&nbsp;1.070 </del> </span>
//       <div class="item__price item__price-discount">
//         <span class="price-symbol">$</span>
//         <span class="price-fraction">749</span>
//       </div>
//       <div class="item__discount">30% OFF</div>
//     </div>
//     <div class="item__stack_column">
//       <div class="item__stack_column__info">
//         <div class="stack_column_item shipping">
//           <div class="item__shipping icon-truck-small item__free-shipping-disabled">
//             <p class="stack-item-info item__free-shipping-disabled"> Envío a todo el país </p>
//             </div>
//           </div>
//           <div class="stack_column_item status">
//             <div class="item__status">
//               <div class="item__condition"> 1381 vendidos - Capital Federal </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="stack_colum_right without-attributes with-reviews">
//         <div class="item__reviews">
//           <div class="stars">
//             <div class="star star-icon-full"></div>
//             <div class="star star-icon-full"></div>
//             <div class="star star-icon-full"></div>
//             <div class="star star-icon-full"></div>
//             <div class="star star-icon-half"></div>
//           </div>
//           <div class="item__reviews-total">204</div>
//         </div>
//         <a class="product-header-link" href="https://listado.mercadolibre.com.ar/sennheiser_p_sennheiser-hd-407">Ver más Sennheiser HD 407</a>
//       </div>
//     </div>
//   </div>
//   <form class="item__bookmark-form" action="/search/bookmarks/MLA610057600/make" method="post" id="bookmarkForm">
//     <button type="submit" class="bookmarks favorite " data-id="MLA610057600">
//       <div class="item__bookmark">
//         <div class="icon"></div>
//       </div>
//     </button>
//     <input type="hidden" name="method" value="add" />
//   <input type="hidden" name="itemId" value="MLA610057600" />
//   </form>
