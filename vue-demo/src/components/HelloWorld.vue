<template>
  <!--<div>-->
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<button v-on:click="greet">点击事件</button>-->
    <!--<div style="{ fontSize: postFontsize + 'em' }">-->
    <!--<new-component-->
      <!--v-for="post in posts"-->
      <!--v-bind:key="post.id"-->
      <!--v-bind:post="post"-->
      <!--v-on:enlarge-size="enlargeHandler">-->
    <!--</new-component>-->
    <!--<BlogPost></BlogPost>-->
    <!--</div>-->
  <!--</div>-->
  <div v-if="errored">
    <p>sorry,we are not able to retrive this information at the moment</p>
  </div>
  <div v-else>
    <div v-if="loading">Loading</div>

    <div v-else
         v-bind:key="currency.description"
         v-for="currency in info">
      {{currency.description}}
    </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost'
export default {
  name: 'HelloWorld',
  methods: {
    greet: function () {
      alert('hello' + this.msg + '!')
    },
    enlargeHandler: function () {
      console.log(this.postFontsize)
      this.postFontsize++
    }
  },
  data () {
    return {
      postFontsize: 6,
      msg: 'Welcome to 44 Vue.js App',
      info: null,
      loading: false,
      errored: false,
      posts: [
        {id: 1, title: 'v-for1', content: 'content...'},
        {id: 2, title: 'v-for2', content: 'content...'}
      ]
    }
  },
  mounted: function () {
    this.$get('/api/v1/bpi/currentprice.json').then(response => {
      this.info = response.data.bpi
    })
  },
  components: {
    'BlogPost': BlogPost
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
