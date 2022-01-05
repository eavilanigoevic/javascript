function cuadradoCallback(value,callback){
    setTimeout(() => {
        callback(value,value*value);
    },0|Math.random()*100);
}

cuadradoCallback(5,(value,result) => {
    console.log("Inicia Callback");
    console.log(`Callback ${value}, ${result}`);
});