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
      title
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
    description {
      value
    }
    mainImage {
      url
      title
    }
    alternativeImages {
      url
      title
    }
  }
  
}`;

export const ALL_PRODUCT_IDS_QUERY = `query allProducts {
  allProducts {
    id
  }
}`;

export const ALL_PRODUCTS_QUERY = `query allProducts {
  allProducts {
    id
    name
    price
    description {
      value
    }
    mainImage {
      url
    }
  }
}`;