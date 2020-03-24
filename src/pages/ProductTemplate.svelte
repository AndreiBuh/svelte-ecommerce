<script>
  export let id;

  import productsStore from "../stores/products-store.js";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";
  import globalStore from "../stores/global-store.js";
  import { addToCart } from "../stores/cart-store";

  $: product = $productsStore.find(item => item.id === parseInt(id));
</script>

{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <!-- back to products -->
    <a href="/products" use:link class="btn btn-primary">Back to products</a>
    <!-- single product container -->
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            addToCart(product)
            globalStore.toggleItem('cart', true)}}>
          add to cart
        </button>
      </article>
    </div>
  </section>
{/if}

<svelte:head>
  <title>{!product ? 'single product' : product.title}</title>
</svelte:head>
