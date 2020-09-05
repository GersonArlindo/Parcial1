module.exports = (x, callback) => {
    if (x <= 0 )
        setTimeout(() => 
            callback(new Error("Las horas trabajadas tienen que ser mayores que 0"), 
            null),
            2000);
    else
        setTimeout(() => 
            callback(null, {
                total:() => (x*8)
            }), 
            2000);
}