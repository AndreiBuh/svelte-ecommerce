<script>
  import globalStore from "../../stores/global-store";
  import { fly, fade, blur } from "svelte/transition";
  import { link } from "svelte-routing";
  import ItemsList from "./ItemsList.svelte";
  import userStore from "../../stores/user-store";
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 400 }}>
      <!-- card header -->
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => globalStore.toggleItem('cart', false)}>
          <i class="fas fa-window-close" />
        </button>
        <h2 class="cart-title">your bag</h2>
        <span />
      </div>
      <!-- end card header-->
      <!-- cart items -->
      <ItemsList />
      <!-- end cart items -->
      <!-- cart footer -->
      <div class="cart-footer">
        {#if $userStore.jwt}
          <a
            href="/checkout"
            use:link
            class="btn btn-primary btn-block"
            on:click={() => globalStore.toggleItem('cart', false)}>
            checkout
          </a>
        {:else}
          <p class="cart-login">
            In order to checkout please
            <a
              href="/login"
              use:link
              on:click={() => globalStore.toggleItem('cart', false)}>
              login
            </a>
          </p>
        {/if}
      </div>
      <!-- end cart footer -->
    </div>
  </div>
</div>
