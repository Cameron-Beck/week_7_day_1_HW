import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items:[
            {name: 'Food Shop', isCompleted: true},
            {name: 'Hoover', isCompleted: true},
            {name: 'Gym', isCompleted: false}
            ],
      newItem: ""
    },
    methods: {
      saveNewItem: function (){
        this.items.push({
        name: this.newItem,
        isCompleted: false
      });
        this.newItem = "";
      },
      buyItem: function (index){
        this.items[index].isCompleted = true;
      }
    }
  });
});
