<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    export let title
    export let image

    const ver = () => {
        dispatch('ver-mas')
    }
</script>

<div class="card mb-3" style="width: 18rem;">
    <img src="https://image.tmdb.org/t/p/w500{image}" alt="{title}" width="100%" height="500">
    <div class="card-body">
        <h5 class="card-titel">{title}</h5>
        <button class="btn btn-primary" on:click={ver}>Ver más...</button>
    </div>
</div>