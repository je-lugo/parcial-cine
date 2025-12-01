// URL de la API
const API_URL = 'https://api.jsonbin.io/v3/b/692df727ae596e708f7d01b4';

// Función para formatear números con separadores de miles
function formatNumber(num) {
    return num.toLocaleString('es-ES');
}

// Función para formatear moneda
function formatCurrency(amount) {
    return `$${formatNumber(amount)}`;
}

// Función para mostrar la configuración
function displayConfig(config) {
    const configContainer = document.getElementById('config-info');
    
    const configData = [
        { label: 'Número de Salas', value: config.numSalas },
        { label: 'Número de Películas', value: config.numPeliculas },
        { label: 'Número de Asientos', value: formatNumber(config.numAsientos) }
    ];

    configContainer.innerHTML = configData.map(item => `
        <div class="config-card">
            <h4>${item.label}</h4>
            <p>${item.value}</p>
        </div>
    `).join('');
}

// Función para mostrar las películas
function displayMovies(peliculas) {
    const moviesContainer = document.getElementById('movies-container');
    
    if (peliculas.length === 0) {
        moviesContainer.innerHTML = '<p class="loading">No hay películas disponibles en este momento.</p>';
        return;
    }

    moviesContainer.innerHTML = peliculas.map(pelicula => `
        <div class="movie-card">
            <h4>${pelicula.titulo}</h4>
            <div class="movie-info">
                <strong>Director:</strong> ${pelicula.director}
            </div>
            <div class="movie-info">
                <strong>Sala:</strong> ${pelicula.sala}
            </div>
            <div class="movie-info">
                <strong>Número de Película:</strong> ${pelicula.numeroPelicula}
            </div>
            <div class="movie-info">
                <strong>Precio:</strong> ${formatCurrency(pelicula.precio)}
            </div>
            <div class="movie-info">
                <strong>Asientos Disponibles:</strong> ${formatNumber(pelicula.asientos)}
            </div>
            <div class="movie-info">
                <strong>Ventas Totales:</strong> ${formatCurrency(pelicula.ventas)}
            </div>
            <div class="movie-description">
                <strong>Descripción:</strong> ${pelicula.descripcion}
            </div>
        </div>
    `).join('');
}

// Función para mostrar el resumen
function displaySummary(resumen) {
    const summaryContainer = document.getElementById('summary-info');
    
    const summaryData = [
        { label: 'Total de Películas', value: resumen.totalPeliculas },
        { label: 'Total de Ventas', value: formatCurrency(resumen.totalVentas) },
        { label: 'Promedio de Ventas', value: formatCurrency(resumen.promedio) }
    ];

    summaryContainer.innerHTML = summaryData.map(item => `
        <div class="summary-card">
            <h4>${item.label}</h4>
            <p>${item.value}</p>
        </div>
    `).join('') + `
        <div class="summary-card">
            <h4>Última Actualización</h4>
            <p>${resumen.ultimaActualizacion}</p>
            <p class="date">Información actualizada</p>
        </div>
    `;
}

// Función principal para cargar y mostrar los datos
async function loadData() {
    const configContainer = document.getElementById('config-info');
    const moviesContainer = document.getElementById('movies-container');
    const summaryContainer = document.getElementById('summary-info');

    // Mostrar estado de carga
    if (configContainer) configContainer.innerHTML = '<p class="loading">Cargando configuración...</p>';
    if (moviesContainer) moviesContainer.innerHTML = '<p class="loading">Cargando películas...</p>';
    if (summaryContainer) summaryContainer.innerHTML = '<p class="loading">Cargando resumen...</p>';

    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        const record = data.record;

        // Mostrar los datos
        if (record.configuracion && configContainer) {
            displayConfig(record.configuracion);
        }

        if (record.peliculas && moviesContainer) {
            displayMovies(record.peliculas);
        }

        if (record.resumen && summaryContainer) {
            displaySummary(record.resumen);
        }

    } catch (error) {
        console.error('Error al cargar los datos:', error);
        
        const errorMessage = `
            <div class="error">
                <p>Error al cargar los datos de la API.</p>
                <p>${error.message}</p>
                <p>Por favor, intenta recargar la página más tarde.</p>
            </div>
        `;

        if (configContainer) configContainer.innerHTML = errorMessage;
        if (moviesContainer) moviesContainer.innerHTML = errorMessage;
        if (summaryContainer) summaryContainer.innerHTML = errorMessage;
    }
}

// Cargar los datos cuando la página esté lista
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
} else {
    loadData();
}
