import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items:[
            {name: 'Food Shop', isCompleted: true, priority: 'high'},
            {name: 'Hoover', isCompleted: true, priority: 'low'},
            {name: 'Gym', isCompleted: false, priority: 'medium'}
            ],
      newItem: "",
      priority: ""
    },
    methods: {
      saveNewItem: function (){
        this.items.push({
        name: this.newItem,
        isCompleted: false,
        priority: this.NewPriority
      });
        this.newItem = "";
      },
      buyItem: function (index){
        this.items[index].isCompleted = true;
      }
    }
  });
});
