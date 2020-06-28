import {DatatableComponent} from "../components/DatatableComponent.js";
let activas = new DatatableComponent($(`#activas`));
let pendientes = new DatatableComponent($(`#pendientes`));
activas.opciones = {};
pendientes.opciones = {
    columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   0
    } ],
    select: {
        style:    'multi',
    },
    order: [[ 1, 'asc' ]]
};
activas.iniciarDatatableConDatos();
pendientes.iniciarDatatableConDatos();
