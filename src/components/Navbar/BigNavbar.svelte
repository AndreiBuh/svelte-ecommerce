<script>
  import CartButton from "../Cart/CartButton.svelte";
  import { link } from "svelte-routing";
  import links from "../../constants/links.js";
  import LoginLink from "../LoginLink.svelte";
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <!-- nav links -->
      <ul class="nav-links">
        {#each links as navLink}
          <li>
            <a href={navLink.url} use:link>{navLink.text}</a>
          </li>
        {/each}
      </ul>
      <!-- logo -->
      <a href="/" use:link class="nav-logo big-logo">
        <img src="/assets/images/logo.svg" alt="logo" class="logo" />
      </a>
      <!-- cart toggle -->
      <div class="nav-aside">
        <LoginLink />
        <CartButton />
      </div>
    </div>
  </div>
</nav>
