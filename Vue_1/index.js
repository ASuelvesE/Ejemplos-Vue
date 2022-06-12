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
          if(this.parrafo == "Hola!!!"){
            this.parrafo = "Adios!";
            
          }else{
            this.parrafo = "Hola!!!";
          }
      },
      agrega(){
          this.items.push(
            { text: this.message }
          );
      }
      
    },
    data() {
      return{
        items: [
          { text: 'Aprender JavaScript' },
          { text: 'Aprender Vue' },
          { text: 'Construir algo increíble' },
          { text: 'Construir algooo incaaareíble' }
        ],
        parrafo: "Hola!!!",
        message: ""
      }
    },

  });
  