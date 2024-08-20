document.addEventListener("DOMContentLoaded", function() {
    const lista = {
        "Frutas": [],
        "Lácteos": [],
        "Congelados": [],
        "Dulces": [],
        "Otros": []
    };

    const preguntaInicialDiv = document.getElementById("preguntaInicial");
    const formularioAlimentoDiv = document.getElementById("formularioAlimento");
    const listaComprasDiv = document.getElementById("listaCompras");
    const categoriasDiv = document.getElementById("categorias");

    const siBtn = document.getElementById("siBtn");
    const noBtn = document.getElementById("noBtn");
    const alimentoInput = document.getElementById("alimento");
    const categoriaSelect = document.getElementById("categoria");
    const agregarBtn = document.getElementById("agregarBtn");
    const finalizarBtn = document.getElementById("finalizarBtn");

    // Evento para iniciar la adición de alimentos
    siBtn.addEventListener("click", function() {
        preguntaInicialDiv.style.display = "none";
        formularioAlimentoDiv.style.display = "block";
    });

    // Evento para finalizar la lista y mostrarla
    noBtn.addEventListener("click", function() {
        mostrarLista();
    });

    // Evento para agregar un alimento a la lista
    agregarBtn.addEventListener("click", function() {
        const alimento = alimentoInput.value.trim();
        const categoria = categoriaSelect.value;

        if (alimento !== "") {
            lista[categoria].push(alimento);
            alimentoInput.value = ""; // Limpiar el campo de entrada
            alimentoInput.focus(); // Enfocar nuevamente para una mejor UX
        }
    });

    // Evento para finalizar la lista y mostrarla
    finalizarBtn.addEventListener("click", function() {
        mostrarLista();
    });

    function mostrarLista() {
        formularioAlimentoDiv.style.display = "none";
        listaComprasDiv.style.display = "block";
        categoriasDiv.innerHTML = ""; // Limpiar la lista previa si existe

        for (const categoria in lista) {
            if (lista[categoria].length > 0) {
                const categoriaDiv = document.createElement("div");
                categoriaDiv.className = "categoria";
                categoriaDiv.innerHTML = `<strong>${categoria}:</strong> ${lista[categoria].join(", ")}`;
                categoriasDiv.appendChild(categoriaDiv);
            }
        }
    }
});

