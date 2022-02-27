<template>

<div>

    {{message}}
   <a href="/link">Link</a>
   <div ref= 'counterdiv'>{{counter}}</div>
 
</div>
</template>
<script>
export default {
    name:'CicloVida',
    data(){
        return{
            message:"",
            counter:0
        }
    },
    beforeCreate(){
        console.log('No se ha ejecutado nada')
    },
    created(){
        this.message="Componente cargado"
        //console.log(this.$el.querySelectorAll('a'))
        setInterval(()=>{
            this .counter++

        },100)
    },
    //montado
    mounted(){
        console.log(this.$el.querySelectorAll('a'))
    },
    //estado de actualizacion
    beforeUpdate(){
        conole.log('Empieza nuevo renderizado del componente')
    },
    update(){
        
        console.log("Componente actualizado")
        console.log(this.counter)
    }
    //Destruccion de el componente 
    //hooks



}
</script>
