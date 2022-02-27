<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div id="root">
        <!--input type="text" id="input" v-model="text">
        <p>El valor del input es {{ text }}</p> |
        <p v-text="text"></p>
        <p v-html="text"></p-->

            <h1 :style="[styleH1, {'fontSize':fontSize+'px'}]">{{title}}</h1>
            <button class="btn" v-on:click="fontSize+">+</button><button class="btn" v-on:click="fontSize--">-</button>
            <input type="radio" name="colorh1" v-model="color" value="blue">Blue
            <input type="radio" name="colorh1" v-model="color" value="yellow">Yellow
            <input type="radio" name="colorh1" v-model="color" value="green">Green
        
        <!--ul>
            <li>{{ items[0] }}</li>
            <li>{{ items[1] }}</li>
        </ul>
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul-->
        <div>
            <input type="text" v-model="newItem" placeholder="Escriba el nombre del elemento"
            class="form-control" v-on:keyup.enter="addItem">
            <button class="btn btn-success" v-on:click="addItem">Add Item</button>
        </div>
        <div>
            <h2>Elementos en la lista</h2>
            <ul>
                <li v-for="(item,index) in items" v-on:click="getInfo(index)"  v-bind:class="[item.checked==true?'alert-primary':alert-success']">
                    <input type="radio" name="selected" v-model="item.checked" :value="item.text" @change="onChange($event, index)">
                    <label>{{ item.text }}</label>                    
                </li>
                <button class="btn btn-danger" v-on:click="deleteItem(index)" :disabled="!item.checked">Delete</button>
                </ul>
                <!--Elemento para vaciar el array -->
                <button @click.once="items=[]" class="btn btn-primary">Limpiar lista</button>
        </div>
        <div>
            <hr/>
            <label v-html="message"></label>
        </div>
    </div>


     <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>


    <script>
        //let data={text: "<b>Hola</b>"}

        //instancia
        var v=new Vue({
            el:'#root',
            data: {
                title: "Ejemplo listas",
                //items:['Elemento 1', 'Elemento 2']
                items:[
                    {text:"Elemento 1", checked:true},
                    {text: "Elemento 2", checked:false}
                ],
                newItem:'',
                message:'',
                fontSize: 50,
                color:''
            },
            methods:{
                addItem: function(){
                    var text = this.newItem;
                    if(text){
                        this.items.push({
                            text:text,
                            checked:false
                        });
                    //limpiar  el input
                    this.newItem ='';
                    }
                },
                getInfo: function(index){
                    this.message ="<p class='alert alert-success'>Se ha seleccionado el elemento " + index + "</p>";
                },
                deleteItem: function(index){
                    this.items.splice(index,1);
                    this.message="<p class='alert alert-danger'>Se ha eliminado un elemento de la lista</p>";
                },
                onChange(event, index){
                    this.message = "Se ha seleccionado el elemento " + event.target.value;
                    for(i=0; i<this.items.length;i++){
                        this.items[i].checked=false;
                    }
                    this.items[index].checked=true;
                    }
            },
            computed:{
                styleH1(){
                    return{
                        color: "blue"
                    }

                 }
             

            }
        })
    </script>
</body>
</html> 
