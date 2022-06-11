var app4 = new Vue({
    el: '#app-4',
    methods: {
      cambio(e){
        let texto = e.target.innerText;
        e.target.innerText = "Has pulsado en: " + texto;
        e.target.style.background="blue";
        e.target.style.color="white";
      },
      saluda(){
          if(this.parrafo == "buenas"){
            this.parrafo = "adios";
            
          }else{
            this.parrafo = "buenas";
          }
      },
      agrega(){
          this.items.push(
            { text: this.message }
          );
      }
      
    },
    data: {
      items: [
        { text: 'Aprender JavaScript' },
        { text: 'Aprender Vue' },
        { text: 'Construir algo increíble' },
        { text: 'Construir algooo incaaareíble' }
      ],
      parrafo: "buenas",
      message: ""
    },

  });
  var app5 = new Vue({
    el: '#app-5',
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
    data: {
      parrafo: "Hola!! ",
      segundo: " ¿Que tal estas?",
      tercero: "Hoy",
      now: new Date().toLocaleDateString()
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