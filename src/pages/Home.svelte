<script>
  import { link } from "svelte-routing";

  import Hero from "../components/Hero.svelte";

  //featured products
</script>

<h1>Home page</h1>
<Hero>
  <a href="/products" use:link class="btn btn-primary btn-hero">Shop now</a>
</Hero>
