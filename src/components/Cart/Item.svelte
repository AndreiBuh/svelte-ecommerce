<script>
  export let id;
  export let title;
  export let price;
  export let amount;
  export let image;

  import {
    removeItem,
    increaseAmount,
    decreaseAmount
  } from "../../stores/cart-store";
  //import cart methods
</script>

<div class="cart-item">
  <img src={image} alt={title} />
  <div>
    <h4>{title}</h4>
    <h5>${price}</h5>
    <button class="cart-btn remove-btn" on:click={() => removeItem(id)}>
      remove
    </button>
  </div>
  <div>
    <button class="cart-btn amount-btn" on:click={() => increaseAmount(id)}>
      <i class="fas fa-chevron-up" />
    </button>
    <p class="item-amount">{amount}</p>
    <button class="cart-btn amount-btn" on:click={() => decreaseAmount(id)}>
      <i class="fas fa-chevron-down" />
    </button>
  </div>
</div>
