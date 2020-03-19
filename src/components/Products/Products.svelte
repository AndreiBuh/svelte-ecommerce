<script>
  // import { onMount, onDestroy } from "svelte";

  export let title;

  import productsStore from "../../stores/products-store";
  import Product from "./Product.svelte";

  // let unsubscribe;
  // onMount(() => {
  //   unsubscribe = productsStore.subscribe(storeData => {
  //     localProducts = storeData;
  //   });
  // });
  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-center">
    {#each $productsStore as product (product.id)}
      <Product {product} />
    {/each}
  </div>
</section>
