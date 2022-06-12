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
  