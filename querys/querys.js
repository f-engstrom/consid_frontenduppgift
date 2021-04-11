export const PAGE_QUERY = `query Page($pageSlug:String) {
  page(filter: {slug: {eq: $pageSlug}}) {
    title
    position
  }
}`;



export const PAGES_QUERY = `query Pages {
  allPages {
    title
    slug
    position
  }
}`;

export const HOMEPAGE_QUERY = `query HomePage {
  startpage {
    title
    mainImage {
      url
    }
    content {
      value
    }
  }
}`;

export const PRODUCT_QUERY = `query ProductQuery($id:ItemId) {
   product(filter: {id: {eq: $id}}) {
    id
    price
    name
  }
  
}`;

export const ALL_PRODUCTS_QUERY = `query allProducts {
  allProducts {
    id
  }
}`;