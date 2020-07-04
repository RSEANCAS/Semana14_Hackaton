const app = new Vue({
    el: '#app',
    data: {
        lista: [],
        item: null,
        open: false,
        confirm: false
    },
    // watch: {
    //     item(newValue, oldValue) {
    //         console.log(newValue)
    //     }
    // },
    methods: {
        btnConfirmarEliminar() {

        },
        btnCancelarEliminar() {

        }
    },
    beforeCreate() {
        let url = 'http://localhost:3000/video';

        fetch(url)
            .then(r => r.json())
            .then(j => {
                this.lista = j;
            });
    }
});