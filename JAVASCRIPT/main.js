const { createApp } = Vue


createApp({
    data() {
        return {

            url:'./JAVASCRIPT/datos.json',
            error: false,
            datos:[]  
                                   
        }
    },
    methods:{
        fetchdata (url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                
                console.log(data);
                this.datos= data.carta
            }
)}

        },
        created(){
            this.fetchdata(this.url)
        }



    
}).mount('#app')
