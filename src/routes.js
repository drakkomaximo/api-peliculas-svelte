import Inicio from './pages/Inicio.svelte';
import Pelicula from './pages/Pelicula.svelte';
import ErrorRuta from './pages/ErrorRuta.svelte';


const routes = {
    '/': Inicio,
    '/pelicula/:id': Pelicula,
    '*': ErrorRuta,
};

export default routes;