import { writable } from "svelte/store";
import localProducts from "../localProducts"; //local data

// subscribe, set, update methods
const flattenProducts = storeData => {
  return storeData.map(product => {
    let image = product.image.url;
    return { ...product, image };
  });
};

const productsStore = writable(flattenProducts([...localProducts]));

export default productsStore;
