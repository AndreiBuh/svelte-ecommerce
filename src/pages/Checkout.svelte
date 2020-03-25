<script>
  import { onMount } from "svelte";
  import { link, navigate } from "svelte-routing";
  import userStore from "../stores/user-store";
  import cartStore, { cartStoreTotal } from "../stores/cart-store";
  import submitOrder from "../strapi/submitOrder";
  import globalStore from "../stores/global-store";

  // Stripe variables
  let cardElement;
  let cardErrors;
  let card;
  let stripe;
  let elements;

  let name = "";
  $: isEmpty = !name || !$globalStore.alert;

  onMount(() => {
    if (!$userStore.jwt) {
      navigate("/");
      return;
    }
    if ($cartStoreTotal > 0) {
      stripe = Stripe("pk_test_E6k59TYy9VqsTdhdNnfw2qHj000opWPBYa");
      elements = stripe.elements();
      card = elements.create("card");
      card.mount(cardElement);
      card.addEventListener("change", function(event) {
        if (event.error) {
          cardErrors.textContent = event.error.message;
        } else {
          cardErrors.textContent = "";
        }
      });
    }
  });

  const handleSubmit = async () => {
    globalStore.toggleItem("alert", true, "submitting order...please wait!");
    let response = await stripe
      .createToken(card)
      .catch(error => console.log(error));
    const { token } = response;
    if (token) {
      const { id } = token;
      let order = await submitOrder({
        name,
        total: $cartStoreTotal,
        items: $cartStore,
        stripeTokenId: id,
        userToken: $userStore.jwt
      });
      if (order) {
        globalStore.toggleItem("alert", true, "your order is complete");
        cartStore.set([]);
        localStorage.setItem("cart", JSON.stringify([]));
        navigate("/");
        return;
      } else {
        globalStore.toggleItem(
          "alert",
          true,
          "there was an error with your order. please try again",
          true
        );
      }
    }
  };
</script>

{#if $cartStoreTotal > 0}
  <section class="form">
    <h2 class="section-title">checkout</h2>
    <form class="checkout-form" on:submit|preventDefault={handleSubmit}>
      <h3>order total: ${$cartStoreTotal}</h3>
      <div class="form-control">
        <label for="name">your name</label>
        <input type="text" id="name" bind:value={name} />
      </div>

      <!-- stripe stuff -->
      <div class="stripe-input">
        <label for="card-element">Credit or debit card</label>
        <p class="stripe-info">
          Test using this credit card:
          <span>4242 4242 4242 4242</span>
          <br />
          enter any 5 digits for the zip code
          <br />
          enter any 3 digits for the CVC
        </p>
        <div id="card-element" bind:this={cardElement} />
        <div id="card-errors" bind:this={cardErrors} role="alert" />
      </div>

      <!-- error message -->
      {#if isEmpty}
        <p class="form-empty">please fill out name field</p>
      {/if}
      <!-- submit button -->
      <button
        type="submit"
        class="btn btn-block btn-primary"
        disabled={isEmpty}
        class:disabled={isEmpty}>
        submit
      </button>
    </form>
  </section>
{:else}
  <div class="checkout-empty">
    <h2>your cart is empty</h2>
    <a href="/products" use:link class="btn btn-primary">fill it</a>
  </div>
{/if}
