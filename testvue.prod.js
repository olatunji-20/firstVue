const app = Vue.createApp({
    data() {
        return {
            firstName: 'Sheriff',
            lastName: 'Falana',
            email: 'falana@gmail.org',
            gender: 'male',
            image: 'https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-1/c0.0.160.160a/p160x160/79771311_2676271322490696_9206726826674618368_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeEy5Tw1vn6zwGCT_d0vcEzNcH8L9IFhmxpwfwv0gWGbGhQ1VlGNRzjvWUXaA-hxdn8ejXqmtYP1TJZh8FucdKh-&_nc_ohc=zRD94M-3obkAX8VtA0a&_nc_ht=scontent.flos1-1.fna&oh=4bf73316ebc867b726ccb5b9b942e3ba&oe=60FD64B8'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api/')
            const { results } = await res.json()
            console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.image = results[0].picture.large
        }
    }
})

app.mount('#app')