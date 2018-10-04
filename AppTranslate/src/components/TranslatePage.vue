<template>
  <div class='translate-page'>
    <panel class='panel panel-left' theme='dark' language='French'></panel>
    <panel class='panel panel-right' theme='light' language='English'></panel>
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
