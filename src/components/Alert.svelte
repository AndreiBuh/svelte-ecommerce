<script>
  import { fly, fade } from "svelte/transition";
  import globalStore from "../stores/global-store";
  import { onMount, onDestroy } from "svelte";

  //close alert
  const handleCloseAlert = () => {
    globalStore.toggleItem("alert", false);
  };

  //close alert automatically after 3 seconds
  let timeout;
  onMount(() => {
    timeout = setTimeout(() => {
      globalStore.toggleItem("alert", false);
    }, 3000);
  });

  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

<div
  class="alert-container"
  in:fly={{ y: -200, duration: 1000 }}
  out:fade={{ duration: 0 }}
  class:alert-danger={$globalStore.alertDanger}>
  <div class="alert">
    <p>{$globalStore.alertText}</p>
    <button class="alert-close" on:click={handleCloseAlert}>
      <i class="fas fa-window-close" />
    </button>
  </div>
</div>
