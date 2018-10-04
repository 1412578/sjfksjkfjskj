<template>
  <div class='translate-page'>
    <panel class='panel panel-left' theme='dark' language='French'></panel>
    <panel class='panel panel-right' theme='light' language='English'></panel>
    <button class="translate">Translate</button>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  name: 'TranslatePage',
  components: {
    Panel
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.translate-page {
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
}

.translate { 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #0b4050;
  color: white;
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  outline: none;
}
.translate:hover{
}
.panel{
  flex-grow: 1;
}
.panel.panel-left{
 /* background-color: hsl(219, 35%, 23%); */
  background-color: hsl(310, 20%, 23%);
}
.panel.panel-right{
  background-color: hsl(310, 20%, 93%);
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
