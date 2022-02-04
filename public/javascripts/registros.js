function cargarCategorias() {
    var array = ['INYECCION'];
    array.sort();
    addOptions('categoria', array);
}

function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];

    for (categoria in array) {
        var opcion = document.createElement("option");
        opcion.text = array[categoria];
        opcion.value = array[categoria].toLowerCase();
        selector.add(opcion);
    }
}

function cargarEquipos() {
    var listaEquipos = {
        inyeccion: ['INYECTORA #1', 'INYECTORA #4', 'INYECTORA #5', 'INYECTORA #6', 'INYECTORA #7', 'INYECTORA #8', 'INYECTORA #9', 'INYECTORA #10',
                    'INYECTORA #11', 'INYECTORA #12', 'INYECTORA #13', 'INYECTORA #14', 'INYECTORA #15', 'INYECTORA #16', 'INYECTORA #17', 'INYECTORA #18',
                    'INYECTORA #19', 'INYECTORA #20', 'ROBOT 1-INY 9', 'ROBOT 2-INY 10', 'ROBOT 3-INY 11', 'ROBOT 3-INY 15', 'CHILLER MECALOR', 'TORRE DE ENFRIAMIENTO',
                    'TRATAMIENTO DE RESINAS', 'MOLINOS', 'MONTACARGAS', 'POLIPASTOS Y DIFERENCIALES', 'INSTRUMENTOS DE MEDICION(MASA Y LONGITUD)'],

    }
    var categorias = document.getElementById('categoria')
    var equipos = document.getElementById('equipo')
    var categoriaSeleccionada = categorias.value
    equipos.innerHTML = '<option value="">Seleccione un equipo...</option>'

    if(categoriaSeleccionada !== ""){
        categoriaSeleccionada = listaEquipos[categoriaSeleccionada]
        categoriaSeleccionada.sort()

        categoriaSeleccionada.forEach(function(equipo){
            let opcion = document.createElement('option')
            opcion.value = equipo
            opcion.text = equipo
            equipos.add(opcion)
    });
    
}

}

function cargarCategorias2() {
    var array = ['MOLDES'];
    array.sort();
    addOptions('categoria', array);
}

function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];

    for (categoria in array) {
        var opcion = document.createElement("option");
        opcion.text = array[categoria];
        opcion.value = array[categoria].toLowerCase();
        selector.add(opcion);
    }   
}

function cargarEquipos2() {
    var listaEquipos = {
        moldes: ['CORAZA 3110V2','CORAZA 3110V3', 'CORAZA 501SPV1', 'CORAZA 501SPV2', 'CORAZA 3120', 'CORAZA 503', 'CORAZA 520', 'CORAZA 101',
                 'CORAZA 3300', 'CORAZA 3110S', 'MENTONERA 3110 V2', 'MENTONERA 3110 V3', 'MENTONERA 3120', 'TAPA 501SP', 'VISOR 3110 V2',
                 'VISOR 3110 V3', 'VISOR 500(501 SP)', 'DOBLE VISOR 3110(2 CAV)','BASE TC30', 'BASE TC34', 'BASE TC40', 'TAPA TC30', 'TAPA TC34', 'TAPA TC40'],

    }
    var categorias = document.getElementById('categoria')
    var equipos = document.getElementById('equipo')
    var categoriaSeleccionada = categorias.value
    equipos.innerHTML = '<option value="">Seleccione un equipo...</option>'

    if(categoriaSeleccionada !== ""){
        categoriaSeleccionada = listaEquipos[categoriaSeleccionada]
        categoriaSeleccionada.sort()

        categoriaSeleccionada.forEach(function(equipo){
            let opcion = document.createElement('option')
            opcion.value = equipo
            opcion.text = equipo
            equipos.add(opcion)
    });
    
}

}

function cargarCategorias3() {
    var array = ['PINTURA', 'ENSAMBLE', 'GRAFICOS', 'DECORACION', 'PLANTA', 'LOCATIVOS', 'PULIDO'];
    array.sort();
    addOptions('categoria', array);
}

function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];

    for (categoria in array) {
        var opcion = document.createElement("option");
        opcion.text = array[categoria];
        opcion.value = array[categoria].toLowerCase();
        selector.add(opcion);
    }
}

function cargarEquipos3() {
    var listaEquipos = {
        pintura: ['HORNO DE SECADO PINTURAS', 'SISTEMAS DE CABINAS', 'PISTOLA DE GRAVEDAD', 'BOMBAS TRITON'],
        ensamble: ['BANDAS', 'BOMBAS DE HOT MELT', 'REMACHADORAS', 'VENTILADORES'],
        graficos: ['IMPRESORAS DE GRAFICOS'],
        decoracion: ['BANDA DECORACION'],
        planta: ['GENERACIÓN Y TTO AIRE COMPRIMIDO', 'SUBESTACION 500 KVA 13.2/0.22V + 440V','ADECUACIONES ELÉCTRICAS','AIRES ACONDICIONADOS',
                 'FILTROS DE PLANTA', 'GENERALES DE MANUFACTURA'],
        locativos: ['REPARACIONES LOCATIVAS'],
        pulido: ['ROTORBITALES']
    }
    var categorias = document.getElementById('categoria')
    var equipos = document.getElementById('equipo')
    var categoriaSeleccionada = categorias.value
    equipos.innerHTML = '<option value="">Seleccione un equipo...</option>'

    if(categoriaSeleccionada !== ""){
        categoriaSeleccionada = listaEquipos[categoriaSeleccionada]
        categoriaSeleccionada.sort()

        categoriaSeleccionada.forEach(function(equipo){
            let opcion = document.createElement('option')
            opcion.value = equipo
            opcion.text = equipo
            equipos.add(opcion)
    });
    
}

}


