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
      this.generated = false;
      let self = this;
      // viene usato setTimeout per simulare un caricamento
      setTimeout(function(){
        self.emailList = [];
        for(let i=0; i<quantity; i++){
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(resp=>{
              self.emailList.push(resp.data.response);
            })
        }
        self.generated = true;
      },1000);
    }
  },
  mounted(){
    this.generateEmailList(10);
  }
});