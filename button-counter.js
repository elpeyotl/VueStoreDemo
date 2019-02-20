
export const ButtonCounter =
    Vue.component("button-counter", {
    data: function() {
        return {
        };
    },
    methods: {
        increment () {
            this.$store.commit('store1/increment')
        },
    },
    computed: {
        count() {
            return this.$store.state.store1.count
        }
    },
    template:
            '<button v-on:click="increment()">You clicked me {{ count }} times.</button>'
    });

