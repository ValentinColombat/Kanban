<article>
  <p>{card.content}</p>

  {#if $isAdmin}
    <button data-card-grab><Hand /></button>
    <EditCardButton {card} />
    <DeleteCardButton {card} />
  {/if}
</article>


<script>
  import { Hand } from "@lucide/svelte";
  import DeleteCardButton from "./business/DeleteCardButton.svelte";
  import EditCardButton from "./business/EditCardButton.svelte";
  import { isAdmin } from "../stores/auth.store.js";

  const { card } = $props();
</script>

<style scoped>
  article {
    padding: 1rem;
    margin: 1rem;
    border: 1px solid lightcoral;
  }
</style>