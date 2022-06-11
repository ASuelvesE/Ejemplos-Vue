
var app4 = new Vue({
    el: '#app',
    computed: { //Se ejecuta automáticamente a diferencia del methods

    },
    methods: {
        abrirCerrar(){
            if(!this.open){
                this.open = true;  
            }else {
                this.open = false;
            }
        }
    },
    watch: {
        open(){
            if(!this.open){
                this.text = "Puerta Cerrada";
            }else{
                this.text = "Puerta Abierta";
            }
        }
    },
    data: {
      text: "Puerta Cerrada",
      segundo: "Abrir Puerta",
      open: false
    },
    template:
    `
    <div class= "ultimo">
        <div> {{ text }} </div>
        <button v-on:click = "abrirCerrar" > {{ open ? "Cerrar" : "Abrir" }} </button>

    </div>

    `
});