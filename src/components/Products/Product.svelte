<script>
  import { link } from "svelte-routing";

  export let product;
  const { title, image, price, id } = product;
</script>

<article class="product">
  <div class="image-container">
    <img src={image} alt={title} />
    <a href={`/products/${id}`} class="btn btn-primary" use:link>details</a>
  </div>
  <div class="product-footer">
    <p class="product-title">{title}</p>
    <p class="product-price">${price}</p>
  </div>
</article>
