document.addEventListener('DOMContentLoaded', function() {
    fetch('data/encuesta.json')
        .then(response => response.json())
        .then(data => {
            const resultadosTabla = document.getElementById('tabla-resultados');
            const filtroEdad = document.getElementById('filtro-edad');
            const filtroDispositivo = document.getElementById('filtro-dispositivo');
            const filtroPlataforma = document.getElementById('filtro-plataforma');
            const filtroHoras = document.getElementById('filtro-horas');
            const filtroContenido = document.getElementById('filtro-contenido');
            const filtroPreferencia = document.getElementById('filtro-preferencia');
            const filtroFactor = document.getElementById('filtro-factor');
            const filtroGenero = document.getElementById('filtro-genero');

            // Mostrar datos en la tabla
            function mostrarDatos(datos) {
                resultadosTabla.innerHTML = '';
                datos.forEach(item => {
                    const row = document.createElement('tr');
                    Object.values(item).forEach(value => {
                        const cell = document.createElement('td');
                        cell.textContent = value;
                        row.appendChild(cell);
                    });
                    resultadosTabla.appendChild(row);
                });
            }

            // Filtrar datos según los criterios seleccionados
            function filtrarDatos() {
                const edad = filtroEdad.value;
                const dispositivo = filtroDispositivo.value;
                const plataforma = filtroPlataforma.value;
                const horas = filtroHoras.value;
                const contenido = filtroContenido.value;
                const preferencia = filtroPreferencia.value;
                const factor = filtroFactor.value;
                const genero = filtroGenero.value;

                const datosFiltrados = data.filter(item => {
                    return (edad === '' || item['¿Cuál es tu edad?'] === edad) &&
                           (dispositivo === '' || item['¿Qué dispositivo utilizas con mayor frecuencia para acceder a contenido digital?'] === dispositivo) &&
                           (plataforma === '' || item['¿Qué plataforma o aplicaciones utilizas con mayor frecuencia para consumir contenido digital?'] === plataforma) &&
                           (horas === '' || item['¿Cuántas horas al día aproximadamente pasas consumiendo contenido digital?'] === horas) &&
                           (contenido === '' || item['¿Qué tipo de contenido digital consumes con mayor frecuencia?'] === contenido) &&
                           (preferencia === '' || item['¿Prefieres consumir contenido digital de forma individual o en compañía?'] === preferencia) &&
                           (factor === '' || item['¿Qué factor es más importante para ti al elegir qué contenido digital consumir?'] === factor) &&
                           (genero === '' || item['¿Cuál es tu género?'] === genero);
                });

                mostrarDatos(datosFiltrados);
            }

            document.getElementById('form-filtros').addEventListener('submit', function(e) {
                e.preventDefault();
                filtrarDatos();
            });

            // Mostrar todos los datos inicialmente
            mostrarDatos(data);
        });
});
