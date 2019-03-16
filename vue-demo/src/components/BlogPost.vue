<template>
    <div>
      <h3>{{title1}}</h3>
      <button @click="handlerClick">click</button>
    </div>
</template>

<script>
export default{
  name: 'BlogPost',
  data () {
    return {
      title1: '子组件'
    }
  },
  methods: {
    handlerClick: function () {
      alert(this.title1)
    }
  }
}
</script>

<style scoped>

</style>
