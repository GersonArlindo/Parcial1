
var trabajador  = require('./trabajador');
var ModuloTrabajadores = require('./ModuloTrabajadores');
var i = 1;
	function PrecioTrabajador(h) {
    console.log("Horas trabajadas empleado N."+(i++) + " " + h )
    trabajador(h, (err,trab) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
 			console.log("Precio del trabajador segun horas trabajadas x $8 = " +"$"+ trab.total());
        }
    });
};


PrecioTrabajador(40);
PrecioTrabajador(0);
PrecioTrabajador(60);
PrecioTrabajador(60);
PrecioTrabajador(40);
PrecioTrabajador(40);
ModuloTrabajadores.Trabajadores();