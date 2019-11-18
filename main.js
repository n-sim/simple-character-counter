vm = new Vue({
    el: "#app",
    data: {
        msg: "",
        platforms: [{ name: "Facebook", max: 250 }, { name: "Twitter", max: 280 }, { name: "Google", max: 300 }]
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
        },
        chars() {
            return this.msg.length;
        }
    }

})