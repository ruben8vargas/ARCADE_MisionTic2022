class Busqueda{
    //el constructor nos permitira inicializar variables
    constructor(){
        this.producto = [
            {ID: "275", nombre: "Tarjeta Grafica", mes: "Enero", ventas:"8500", costos: "4000"},
            {ID: "276", nombre: "Monitor", mes: "Enero", ventas:"4800", costos: "2100"},
            {ID: "277", nombre: "Teclado", mes: "Enero", ventas:"2400", costos: "1500"},
            {ID: "278", nombre: "Mouse", mes: "Enero", ventas:"3000", costos: "1600"},
            {ID: "279", nombre: "Heatset", mes: "Enero", ventas:"2500", costos: "1200"},
            {ID: "280", nombre: "WebCam", mes: "Enero", ventas:"1800", costos: "700"},
        ];
        //Backup de la lista para no perderla
        this.productoBK = this.producto;
        this.onInit();
        console.log(this.producto);
    }
    //Operaciones de vista
    onInit(){
        //Apunta al cuerpo de la tabla
        let cuerpo = document.getElementById("cuerpo");
        //limpiar el Tbody eliminado las filas
        while(cuerpo.rows.length > 0){
            cuerpo.deleteRow(0);
        }
        //Insertar los produtos dentro de Tbody
        this.producto.forEach(producto => {
            let fila = cuerpo.insertRow(cuerpo.rows.length);
            //Inserta celdas
            fila.insertCell(0).innerHTML = producto.ID;
            fila.insertCell(1).innerHTML = producto.nombre;
            fila.insertCell(2).innerHTML = producto.mes;
            fila.insertCell(3).innerHTML = producto.ventas;
            fila.insertCell(4).innerHTML = producto.costos;
        });
    }
    //Metodo de filtrado de datos
    buscar(id){
        //recupero el valor del Input
        let busqueda = document.getElementById(id).value;
        //restauro la lista de personas
        this.producto = this.productoBK;
        //retorna el resultado de busqueda
        this.producto = this.producto.filter(producto => {
            return producto.ID.toLowerCase().indexOf(busqueda) > -1;
        });
        //actualizar la vista
        this.onInit();
    }
}
let busqueda = new Busqueda();
let form = document.getElementById("busquedaForm");
//Evento y funcion que trae de regreso el valor buscado
form.addEventListener('submit',()=> {
    busqueda.buscar('valor');
})