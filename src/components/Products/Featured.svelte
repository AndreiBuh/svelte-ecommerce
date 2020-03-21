<script>
  import productsStore from "../../stores/products-store";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";

  export let title;

  $: featuredProducts = $productsStore.filter(
    product => product.featured === true
  );
</script>

{#if featuredProducts.length === 0}
  <Loading />
{:else}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
      {#each featuredProducts as product (product.id)}
        <Product {product} />
      {:else}{/each}
    </div>
  </section>
{/if}
