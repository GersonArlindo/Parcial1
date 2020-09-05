var trabajador  = require('./trabajador');

function PrecioTrabajador(l) {
    console.log("Horas trabajadas = "
                + l );
    trabajador(l, (err,trab) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("Precio del trabajador segun horas trabajadas x $8 = " + trab.total());
        }
    });
};
PrecioTrabajador(40);