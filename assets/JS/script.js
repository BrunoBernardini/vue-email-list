/*
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */

const app = new Vue({
  el: "#app",
  data: {
    emailList: [],
    generated: false
  },
  methods: {
    generateEmailList(quantity){
      // La variabile "generated" viene comunque inizializzata a false nel caso in cui la funzione venisse richiamata altre volte tramite il pulsante.
      this.generated = false;
      this.emailList = [];
      for(let i=0; i<quantity; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then(resp=>{
            this.emailList.push(resp.data.response);
            if(this.emailList.length === quantity) this.generated = true;
          });
      }
    }
  },
  mounted(){
    this.generateEmailList(10);
  }
});