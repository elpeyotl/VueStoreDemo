
export const ButtonCounter2 =
    Vue.component("button-counter", {
    data: function() {
        return {
        };
    },
    methods: {
        increment () {
            this.$store.commit('store2/increment')
        },
    },
    computed: {
        count() {
            return this.$store.state.store2.count
        }
    },
    template:
            '<button v-on:click="increment()">You clicked me {{ count }} times.</button>'
    });

