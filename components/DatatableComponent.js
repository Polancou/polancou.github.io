import {} from "../js/datatables/jquery.dataTables.min.js"
import {} from "../js/datatables/dataTables.bootstrap4.min.js"
import {} from "../js/datatables/dataTables.select.min.js"

class DatatableComponent {
    get opciones() {
        return this._opciones;
    }

    set opciones(value) {
        this._opciones = value;
    }

    get datos() {
        return this._datos;
    }

    set datos(value) {
        this._datos = value;
    }

    get tabla() {
        return this._tabla;
    }

    set tabla(value) {
        this._tabla = value;
    }

    constructor(elemento) {
        this.elemento = elemento;
    }

    iniciarDatatableConDatos = () => {
        this.tabla = this.elemento.DataTable(this._opciones);
    };

    destruirTabla() {
        this.getTabla().destroy();
    }

    getTabla() {
        return this.elemento.DataTable();
    }

    obtenerDatosFilaPorClick(e){
        return this.tabla.row($(e.target).parents('tr')).data();
    };

    obtenerFilaSeleccionada(selected) {
        return this.tabla.row(selected).data()
    }

    actualizarFila(row, d) {
        this.tabla.row(row).data(d).draw(false);
    }

    eliminarFila(fila) {
        this.tabla.row(fila).remove().draw();
    }

    agregarFila(data) {
        this.tabla.row.add(data).draw(false);
    }

    recargarDatos() {
        this.getTabla().ajax.reload(null, false);
    }
}

export {DatatableComponent}
