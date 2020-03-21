<script>
  import { link } from "svelte-routing";

  import Hero from "../components/Hero.svelte";

  //featured products
  import Featured from "../components/Products/Featured.svelte";
</script>

<Hero>
  <a href="/products" use:link class="btn btn-primary btn-hero">Shop now</a>
</Hero>
<Featured title="Featured products" />
