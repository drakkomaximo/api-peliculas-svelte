<script>
    import Card from "./Card.svelte";
    export let peliculas;
    import { push } from "svelte-spa-router";
</script>

<div class="row mt-3">
    {#each peliculas as pelicula}
        <div class="col-sm-4">
            <Card 
                title={pelicula.title} 
                image={pelicula.poster_path} 
                on:ver-mas={() => push(`/pelicula/${pelicula.id}`)}
                />
        </div>
    {/each}
</div>
