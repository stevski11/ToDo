var vm = new Vue ({
    el: "#todo",
    data: {
        title: 'ToDo List',
        tasks: [

        ]
    },
    methods: {
        addTask(event) {
            const text = event.target.value
            this.tasks.push({text, done: false, id: Date.now()})
            event.target.value = ''
        },
        removeTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id)
        },
        check(task) {
            task.done = !task.done
        }
    }
})
