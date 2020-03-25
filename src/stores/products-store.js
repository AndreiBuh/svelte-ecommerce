import { writable } from "svelte/store";
import getProducts from "../strapi/getProducts";

// subscribe, set, update methods
const flattenProducts = storeData => {
  return storeData.map(product => {
    let image = product.image.url;
    return { ...product, image };
  });
};

const productsStore = writable([], () => {
  setProducts();
  return () => {};
});

async function setProducts() {
  let products = await getProducts();
  if (products) {
    products = flattenProducts(products);
    productsStore.set(products);
  }
}

export default productsStore;
