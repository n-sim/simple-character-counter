vm = new Vue({
    el: "#app",
    data: {
        msg: ""
    },
    computed: {
        words() {
            let parts = this.msg.split(new RegExp("\\s+"))
            let anz = 0
            parts.forEach(element => {
                if (element !== "") {
                    anz++
                }
            });
            return anz
        }
    }

})