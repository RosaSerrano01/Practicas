<template>
  <div class="div">
         <font face="Comic Sans MS,arial,verdana" color="teal"><h1>Capturador de Teclas  </h1></font>
         <font face="Comic Sans MS,arial,verdana" color="teal"><h3>Presione una tecla:  </h3></font>

        <input @keydown="showKey" class="inputStyle">
         <strong><font face="Comic Sans MS,arial,verdana" size=4 color:=" black"> <p>La tecla presionada por el usuario es:  <keyPress :class="style">{{key}}</keyPress></p></font></strong>
      </div>
</template>


<script>
  export default{
    name: 'Color de tecla',
    data(){
      return{
        key: ' ',
        style: ''
      }
    },
    methods:{
      showKey(event){
        const Numbers = /\d/;
        const Letters = /\w/;
        const key = event.key

        if(Numbers.test(key)){
          this.style='numeros'

        }else if(Letters.test(key)){
          this.style='Letras'
        }else{
          this.style='caracteres'
        }
        this.key = key
      }
    }
  }
</script>
<style>
.inputStyle{
  background-color: rgb(168, 172, 172);
  height: 4vh;
  border-color: rgb(14, 118, 107);
}
keyPress{
  font-size:20px
}
keyPress.Letras{
  color:rgb(7, 255, 7);
  
}
keyPress.numeros{
  color:rgba(228, 8, 8, 0.878);
  
}
keyPress.caracteres{
  color:rgb(250, 221, 0);
}
</style>
