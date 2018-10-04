<template>
  <div class='body' v-on:click='handleClick'>
    <textarea
      ref='txt'
      v-on:keydown='handleKeydown'
      name=''
      id=''
      v-bind:style="{ color: color }">
    </textarea>
    <div 
      v-bind:class="{empty: true, touched: touched}"
      v-bind:style="{ color: color }">
      {{ language }} 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: ['theme', 'language'],
  data () {
    const color = this.theme === 'dark' ? 'white' : 'hsl(310, 20%, 23%)';
    return {
      msg: 'This is panel component',
      touched: false,
      color: color
    }
  },
  methods: {
    handleKeydown: function () {
      this.touched = true;
    },
    handleClick: function () {
      this.touched = true;
      this.$refs.txt.focus();
    }
  }
}
</script>

<style scoped>

.body {
  padding: 50px;
  position: relative;
}
.empty{
  position: absolute;
  bottom: 50%;
  left: 50%;
  opacity: 0.7;
  transform: translate(-50%, -50%);
  font-size: 32px;
  transition: bottom 0.2s ease-out, left 0.2s ease-out, transform 0.2s ease-out;
}
.empty.touched{
  transform: translate(0%,0%);
  bottom: 20px;
  left: 20px;
  font-size: 18px;
}
textarea {
  font-size: 14px;
  color: white;
  background: none;
  border: none;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}
textarea:focus{
  outline: none; /* disable focus style temporarily */
}

</style>
