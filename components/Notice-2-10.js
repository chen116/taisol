app.component('notice-2-10', {
  data() {
    return {



      
    }
  },
  props: {},
  template:
  /*html*/
  `
  <div class="content">



  <h5 style="color:blue;"><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>股權結構 </h5>
  <p><span>&nbsp;&nbsp;</span></p>

  <h6><b>本公司股權比例占前十大之股東：   </b></h6>

  <p>本公司股權比例占前十大之股東：   </p>
  
  <table  class="table table-bordered table-hover">
    <thead>
    <tr>
        <th rowspan="2">利害關係人</th>
        <th colspan="2">關切的議題</th>
        <th colspan="2">關切的議題</th>
        <th colspan="2">關切的議題</th>
        <th colspan="2">關切的議題</th>
        <th rowspan="2">我們的努力</th>
    </tr>
    <tr>
      <th>ss1</th>
      <th>ss2</th>
      <th>ss3</th>
      <th>ss4</th>
      <th>ss5</th>
      <th>ss6</th>
      <th>ss7</th>
      <th>ss8</th>

    </thead>
    <tbody>
    <tr v-for="row in table1">
        <td> {{row.person}}</td>
        <td> {{row.topic}}</td>
        <td> {{row.job}}</td>
        <td> 
          <ul class="list-group list-group-flush" v-for="result in row.results">
            <li class="list-group-item list-group-flush" >
              <a :href="result.href" >{{result.txt}} </a>
            </li>
          </ul>
        </td>

    </td>
    </tr> 
    </tbody>
  </table>

  <img src="http://w3.taisol.com.tw/image/notice-2-10.jpg" class=rounded />


  </div>
  `,
  computed: {},
  methods: {},
  beforeMount() {}

})