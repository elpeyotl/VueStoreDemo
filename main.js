import { ButtonCounter } from "./button-counter.js";
import { ButtonCounter2 } from "./button-counter2.js";
const VuexPersistence = window.VuexPersistence

const vuexLocal = new window.VuexPersistence.VuexPersistence({
  storage: window.localStorage,
});

const store1 = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
}
const store2 = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
}

const store = new Vuex.Store({
  modules: {
    store1: store1,
    store2: store2
  },
  plugins: [vuexLocal.plugin]
})



new Vue({
  el: "#app", store,
  components: {ButtonCounter},
  data: {
    message: "test"
  }
});

new Vue({
  el: "#app2", store,
  components: { ButtonCounter2 },
  data: {
    message: "test"
  }
});






