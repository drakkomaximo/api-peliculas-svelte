<script>
    import Cargador from "../components/Cargador.svelte";
    import Grid from "../components/Grid.svelte";

    const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=679ed1025c68a67d147dd3e41471bdfd&language=es-ES&page=1";
    let peliculas = [];
    let error = null;

    async function fetchData() {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
            const data = await res.json();
            peliculas = data.results;
        } catch (err) {
            error = err.message;
            peliculas = [];
        }
    }

    fetchData();
</script>

<h1>Peliculas mas populares del momento</h1>

{#if peliculas.length === 0 && error === null}
    <div align='center'>
        <Cargador />
    </div>
{:else if peliculas.length > 0}
    <Grid {peliculas} />
{:else}
    <p style="color: red;">{error}</p>
{/if}
