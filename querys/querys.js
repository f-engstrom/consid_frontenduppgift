export const PAGE_QUERY = `query Page($pageSlug:String) {
  page(filter: {slug: {eq: $pageSlug}}) {
    title
    mainImage {
      url
      title
    }
    content {
      value
    }
  }
}`;



export const PAGES_QUERY = `query Pages {
  allPages {
    title
    slug
    position
  }
}`;

export const HOMEPAGE_QUERY = `query HomePage($nrProducts:IntType) {
  startpage {
    title
    mainImage {
      url
    }
    content {
      value
    }
  }
  allProducts(first: $nrProducts) {
    id
    name
    price
    mainImage {
      url
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