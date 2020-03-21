<script>
  //cart button
  import CartButton from "../Cart/CartButton.svelte";
  //global store
  import globalStore from "../../stores/global-store";
  import { link } from "svelte-routing";
</script>

<nav class="navbar">
  <div class="nav-center">
    <!-- sidebar toggle -->
    <button
      class="btn-sidebar-toggle"
      on:click={() => globalStore.toggleItem('sidebar', true)}>
      <i class="fas fa-bars" />
    </button>
    <!-- logo -->
    <a href="/" use:link class="nav-logo">
      <img src="/assets/images/logo.svg" alt="logo" class="logo" />
    </a>
    <!-- cart button -->
    <CartButton />
  </div>
</nav>
