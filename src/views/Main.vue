<template lang="pug">
  #app
    .vuex-block
      h4 mapState 把 this, state 合併使用於computed: 
      |{{ sayHello }}, You are now {{ age }} years old.
      br
      button(@click="increase(1)") 增加 1
      hr

    .vuex-block
      h4 mapGetters 使用傳入方法找目標(注意：mapGetters 可接受一個數組)
      p 使用方法在計算屬性中不會自動計算，僅作為方法一次性使用
      p 
        |查詢 User ID: (1-3)
        input(type="text" v-model="searchID")
        br
        //- |UserData: {{ getUser(searchID) }}，只渲染一次
      hr

    .vuex-block
      h4 mutation 載荷 payload 傳參數
      button(@click="increase(10)") 增加 10
      hr

    .vuex-block
      h4 修改 數組類型 state
      p 全部Users： {{ users }}
      button(@click="addUser({id: 4, name: 'Yan'})") 新增 User

    .vuex-block
      h4 取得模組的 state
      p {{ getRoot }}

</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      msg: 'Hello! ',
      searchID: 1
    }
  },
  computed: {
    ...mapState({
      age: state => state.age,
      username: 'username', // 同上面效果
      users: 'users', // 同名
      sayHello(state) {
        return this.msg + state.username;
      }
    }),
    ...mapGetters([
      'info',
      'getUser',
      'getRoot'
    ]),
  },
  methods: {
    // increase(n) {
    //   this.$store.commit('increment', n);
    // },
    // addUser() {
    //   this.$store.commit('addUser', {
    //     data: { id: 4, name: 'Yan' }
    //   })
    // },
    increase(n){
      this.$store.dispatch('increment', n);
    },
    ...mapMutations([
      // 'increment',
      'addUser'
    ])
  }
}
</script>

<style lang="sass">
#app
  max-width: 992px
  margin: auto
  hr
    display: block
    border: 0
    border-top: 1px solid #ddd
</style>