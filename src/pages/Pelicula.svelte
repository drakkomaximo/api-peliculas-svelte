<script>
    import { onMount } from "svelte";
    export let params = {};
    let id = params.id;
    const url = "https://api.themoviedb.org/3/movie/";
    const key = "?api_key=679ed1025c68a67d147dd3e41471bdfd&language=es-ES";
    const urlfinal = url + id + key;
    let pelicula = {};
    let generos = [];

    onMount(async () => {
        const res = await fetch(urlfinal);
        pelicula = await res.json();
        generos = pelicula.genres;
        console.log(pelicula);
    });
</script>

<div class="row mt-5">
    <div class="col-lg-6">
        <img
            src="https://image.tmdb.org/t/p/w500{pelicula.poster_path}"
            alt={pelicula.title}
            width="100%"
            height="700"
        />
    </div>
    <div class="col-lg-6">
        <h1>{pelicula.title}</h1>
        <p>{pelicula.overview}</p>
        {#each generos as genero}
            <h4>{genero.name}</h4>
        {/each}
        <div class="rating" align='center'>
            {pelicula.vote_average}
        </div>
    </div>
</div>

<style>
    .rating {
        width: 60%;
        border: solid 4px black;
        font-size: 5rem;
        font-weight: border;
    }
</style>
