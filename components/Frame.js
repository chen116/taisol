app.component('frame-comp', {
    props: {
        req: String
      },
    template:
    /*html*/
    `

    <iframe :src="http://w3.taisol.com.tw/important/{{ req }}"
    style="position:fixed; top:100; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding-top:100px ; padding-bottom: 100px; overflow:hidden; z-index:-2;"
          allowfullscreen sandbox='allow-scripts'>

      </iframe>
  
  `
  })


