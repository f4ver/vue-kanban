<template>
  <div class="container">
      <div class="logged-in">Вы вошли через {{ $nuxt.$fire.auth.currentUser.email }}
      <br>
      </div>
      <button v-on:click = "$router.push('/auth/signout')" class="logBtn">Выйти</button>
      <br><br>
      <div class="container-group">
          <div class = "list-field">
              <div class="column-title-1">
                <h3>
                  ON HOLD ({{ arrBacklog.length }})
                </h3>
              </div>
              <draggable class="list-group kanban-column" :list = "arrBacklog" group="tasks">
                <div class="list-group-item" v-for ="element in arrBacklog" :key="element.name">
                  <div class="item">
                    <p>id: {{ element.id }}<button class="deleteBtn" v-on:click = "hiddenB(element.id)">╳</button>
                      <br><br>
                      {{element.name}}
                    </p>
                  </div>
                </div>
              </draggable>
              <br>
              <div class="add-card">
                <input v-model="newTask1" placeholder = "Добавить карточку">
                <button v-on:click ="add1()">+</button>
              </div>
          </div>
          <div class = "list-field">
              <div class="column-title-2">
                <h3>
                  IN PROGRESS ({{ arrInProgress.length }})
                </h3>
              </div>
              <draggable class="list-group kanban-column" :list = "arrInProgress" group="tasks">
                <div class="list-group-item" v-for ="element in arrInProgress" :key="element.name">
                  <div class="item">
                    <p>
                      id: {{ element.id }}<button class="deleteBtn" v-on:click = "hiddenP(element.id)">╳</button>
                      <br><br>
                      {{element.name}}
                    </p>
                     
                  </div>
                </div>
              </draggable>
              <br>
              <div class="add-card">
                <input v-model="newTask2" placeholder = "Добавить карточку">
                <button v-on:click ="add2()">+</button>
              </div>
          </div>
          <div class = "list-field">
              <div class="column-title-3">
                <h3>
                  NEEDS REVIEW ({{ arrTested.length }})
                </h3>
              </div>
              <draggable class="list-group kanban-column" :list = "arrTested" group="tasks">
                <div class="list-group-item" v-for ="element in arrTested" :key="element.name">
                  <div class="item">
                    <p>
                      id: {{ element.id }}<button class="deleteBtn" v-on:click = "hiddenT(element.id)">╳</button>
                        <br><br>
                      {{element.name}}
                    </p>
                     
                  </div>
                </div>
              </draggable>
              <br>
              <div class="add-card">
                <input v-model="newTask3" placeholder = "Добавить карточку">
                <button v-on:click ="add3()">+</button>
              </div>
          </div>
          <div class = "list-field">
              <div class="column-title-4">
                <h3>
                  APPROVED ({{ arrDone.length }})
                </h3>
              </div>
              <draggable class="list-group kanban-column" :list = "arrDone" group="tasks">
                <div class="list-group-item" v-for ="element in arrDone" :key="element.name">
                  <div class="item">
                    <p>
                      id: {{ element.id }}<button class="deleteBtn" v-on:click = "hiddenD(element.id)">╳</button>
                      <br><br>
                      {{element.name}}
                    </p>
                     
                  </div>
                </div>
              </draggable>
              <br>
              <div class="add-card">
                <input v-model="newTask4" placeholder = "Добавить карточку">
                <button v-on:click ="add4()">+</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    name:'drag',
    components: {
        draggable
    },
    data() {
        return {
            h: 0,
            k: 0,
            newTask1:"",
            newTask2:"",
            newTask3:"",
            newTask4:"",
            newBacklog: [],
            newInProgress:[],
            newTested: [],
            newDone: [],
            arrBacklog: [ 
                
            

            ],
            arrInProgress: [

            ],
            arrTested: [

            ],
            arrDone: [

            ]
        };
    },
    methods: {
    add1: function() {
      if (this.newTask1) {
        this.arrBacklog.push({ id: this.k + 1, name: this.newTask1});
        this.k = this.k +1;
        this.newTask1 = "";

      }
    },
    add2: function() {
      if (this.newTask2) {
        this.arrInProgress.push({ id: this.k + 1, name: this.newTask2});
        this.k = this.k +1;
        this.newTask2 = "";
      }
    },
    add3: function() {
      if (this.newTask3) {
        this.arrTested.push({ id: this.k + 1, name: this.newTask3});
        this.k = this.k +1;
        this.newTask3 = "";
      }
    },
    add4: function() {
      if (this.newTask4) {
        this.arrDone.push({ id: this.k + 1, name: this.newTask4});
        this.k = this.k +1;
        this.newTask4 = "";
      }
    },
    deleteElem: function() {

    },
    hiddenB: function(h) {
      let i = 0;
      while (i < this.arrBacklog.length && this.newBacklog.length < this.arrBacklog.length) { 
        this.newBacklog.push(this.arrBacklog[i].id);
        i++;
}
      let c = this.newBacklog.indexOf(h)
      this.arrBacklog.splice(c,1);
      this.newBacklog.splice(c,1);
    },
    hiddenP: function(h) {
      let i = 0;
      while (i < this.arrInProgress.length && this.newInProgress.length < this.arrInProgress.length) { 
        this.newInProgress.push(this.arrInProgress[i].id);
        i++;
}
      let c = this.newInProgress.indexOf(h)
      this.arrInProgress.splice(c,1);
      this.newInProgress.splice(c,1);
    },
    hiddenT: function(h) {
      let i = 0;
      while (i < this.arrTested.length && this.newTested.length < this.arrTested.length) { 
        this.newTested.push(this.arrTested[i].id);
        i++;
}
      let c = this.newTested.indexOf(h)
      this.arrTested.splice(c,1);
      this.newTested.splice(c,1);
    },
    hiddenD: function(h) {
      let i = 0;
      while (i < this.arrDone.length && this.newDone.length < this.arrDone.length) { 
        this.newDone.push(this.arrDone[i].id);
        i++;
}
      let c = this.newDone.indexOf(h)
      this.arrDone.splice(c,1);
      this.newDone.splice(c,1);
    },
  }
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');
*{
  font-family: 'Exo 2', sans-serif;
}
.container-group {
    position: relative;
}
.list-field {
    vertical-align: top;
    margin-top:0px;
    display: inline-block;
    margin-left: 30px;
    width: 300px;
    margin-bottom: 20px;
}
.list-field input {
  background-color: rgb(47,49,55);
  color: white;
  border: none;
  height: 20px;
  outline: none;
}
.list-field h3 {
    margin-top: 0px;
    margin-left: 10px;
}
.kanban-column {
    min-height: 300px;
    background-color: rgb(47,49,55);
}
.logged-in {
  color: white;
  position: absolute;
  right: 0px;
  display: inline-flex;
  font-family: 'Exo 2', sans-serif;
  font-size: 15px;
}
.logBtn {
  padding: 2;
  position: absolute;
  right: 5px;
  top: 25px;
  background-color: rgb(47,49,55);
  color: white;
  border: none;
}
.logBtn:hover {
  padding: 2;
  font-family: 'Kanit', sans-serif;
  background-color: white;
  transition: 300ms;
  color: rgb(47,49,55);
}
.column-title-1 {
  position: relative;
  color: aliceblue;
  background-color: rgba(237,132,76);
  height: 50px;
}
.column-title-2 {
  position: relative;
  color: aliceblue;
  background-color: rgba(68,143,188);
  height: 50px;
}
.column-title-3 {
  position: relative;
  color: aliceblue;
  background-color: rgba(239,204,86);
  height: 50px;
}
.column-title-4 {
  position: relative;
  color: aliceblue;
  background-color: rgba(80,179,103);
  height: 50px;
}
.column-title-1 h3 {
  top: 20%;
  position: absolute;
}
.column-title-2 h3 {
  top: 20%;
  position: absolute;
}
.column-title-3 h3 {
  top: 20%;
  position: absolute;
}
.column-title-4 h3 {
  top: 20%;
  position: absolute;
}

.item {
  background-color: rgba(31,31,33);
  color: white;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  word-wrap: break-word;
}
.item p {
  margin-left: 5%;
  margin-right: 5%;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(55,59,64);
}
.deleteBtn {
    position: absolute;
    background-color: rgba(31,31,33);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    margin-left: 180px;
}
.add-card button {
    background-color: rgb(47,49,55); /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    width: 40px;
    height: 40px;
}
</style>