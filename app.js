const app = new VTTCue({
    el: '#app',
    data: {
        title: 'Hello Coding Garden'
        newtodo: ''

    },
    methodes:{
        addTodo(){
            console.log('form submitted')
        }
    }
});