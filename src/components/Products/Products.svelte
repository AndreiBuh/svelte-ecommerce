<script>
  import productsStore from "../../stores/products-store";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";

  export let title;
</script>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-center">
    {#each $productsStore as product (product.id)}
      <Product {product} />
    {:else}
      <Loading />
    {/each}
  </div>
</section>
