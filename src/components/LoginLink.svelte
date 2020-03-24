<script>
  import { link } from "svelte-routing";

  // we import globalStore because we want to close sidebar when we click login
  import globalStore from "../stores/global-store";
  import userStore from "../stores/user-store";

  //logout
</script>

{#if $userStore.jwt}
  <a
    href="/"
    class="logout-btn"
    on:click={() => globalStore.toggleItem('sidebar', false)}>
    logout
  </a>
{:else}
  <a
    href="/login"
    class="logout-btn"
    on:click={() => globalStore.toggleItem('sidebar', false)}>
    login
  </a>
{/if}
