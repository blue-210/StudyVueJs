var app = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

  app.message = "changed!"

  var app2 = new Vue({
      el: '#app-3',
      data: {
          seen:true
      }
  })
  app2.seen = false

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos:[
        { text: 'Learn Javascript'},
        { text: 'learn Vue'},
        { text: 'Build something awsome'}
      ]
    }
  })

  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods:{
      reverseMessage: function(){
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables'},
        { id: 1, text: 'Cheese'},
        { id: 2, text: 'Whatever else humans are supposed to eat'}
      ]
    }
  })
