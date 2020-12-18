const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            req:  "http://w3.taisol.com.tw/important/"+window.location.href.split('?')[1]+".html"
            
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
});

app.component('frame-comp', {
    props: {
        req: String
      },
    template:
    /*html*/
    `
    <iframe class="content" :src="req" allowfullscreen sandbox='allow-scripts'>
    </iframe>
  

  `
  });
