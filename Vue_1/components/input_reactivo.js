Vue.component('hijo',{
    props: [
      'parrafo'
    ],
    computed: { //Se ejecuta automáticamente a diferencia del methods
        today(){
            return this.tercero + " " + this.now;
        }
    },
    methods: {
      input(e){
        this.tercero = e.target.value;
      }
    },
    data() {
        return{
            segundo: " ¿Que tal estas?",
            tercero: "Hoy",
            now: new Date().toLocaleDateString()
        }
    },
    template:
    `
    <div class= "ultimo">
        <div> {{ parrafo }} </div>
        <div> {{ segundo }} </div>
        <input type="text"  v-on:input = "input" ></input>
        <div> {{ today }} </div>
    </div>

    `
  
  });