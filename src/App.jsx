import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() { 

  return (
    <div ClassName="layout">
    {/*Cabecera*/}
    <header ClassName="header">
        <div ClassName="logo">
            <div ClassName="play"></div>
        </div>
        
        <h1>MisPelis</h1>
    </header>

    {/*Barra de navegación*/}
    <nav ClassName="nav">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Peliculas</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>

    {/*Contenido principal*/}
    <section id="content" ClassName="content">

        {/*aqui van las peliculas*/}
        <article ClassName="peli-item">
            <h3 ClassName="title">Desarrollo web</h3>
            <p ClassName="description">victorroblesweb.es</p>

            <button ClassName="edit">Editar</button>
            <button ClassName="delete">Borrar</button>
        </article>

        <article ClassName="peli-item">
            <h3 ClassName="title">Desarrollo web</h3>
            <p ClassName="description">victorroblesweb.es</p>

            <button ClassName="edit">Editar</button>
            <button ClassName="delete">Borrar</button>
        </article>

        <article ClassName="peli-item">
            <h3 ClassName="title">Desarrollo web</h3>
            <p ClassName="description">victorroblesweb.es</p>

            <button ClassName="edit">Editar</button>
            <button ClassName="delete">Borrar</button>
        </article>

        <article ClassName="peli-item">
            <h3 ClassName="title">Desarrollo web</h3>
            <p ClassName="description">victorroblesweb.es</p>

            <button ClassName="edit">Editar</button>
            <button ClassName="delete">Borrar</button>
        </article>

    </section>

    {/*Barra lateral*/}
    <aside ClassName="lateral">
        <div ClassName="search">
            <h3 ClassName="title">Buscador</h3>
            <form>
                <input type="text" id="search_field" />
                <button id="search">Buscar</button>
            </form>
        </div>

        <div ClassName="add">
            <h3 ClassName="title">Añadir pelicula</h3>
            <form>
                <input type="text" id="title" placeholder="Titulo" />
                <textarea id="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    </aside>

    {/*Pie de página*/}
    <footer ClassName="footer">
        &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
    </footer>

</div>

  );
}

export default App;
