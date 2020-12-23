app.component('notice-2-10', {
  data() {
    return {

      table1:[
        {name: 'namee',self_stock:'ss',self_stock_per:"eee", fam_stock:"ff",fam_stock_per:"ee",other_stock:"oof",other_stock_pre:'dddd', name2:'ee2',relation:'eee'},
        {name: 'namee',self_stock:'ss',self_stock_per:"eee", fam_stock:"ff",fam_stock_per:"ee",other_stock:"oof",other_stock_pre:'dddd', name2:'ee2',relation:'eee'},
        {name: 'namee',self_stock:'ss',self_stock_per:"eee", fam_stock:"ff",fam_stock_per:"ee",other_stock:"oof",other_stock_pre:'dddd', name2:'ee2',relation:'eee'},
      ]

      
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
      <td v-for="key in Object.keys(row)">{{ row[key] }}</td>
    </td>
    </tr> 
    </tbody>
  </table>


  </div>
  `,
  computed: {},
  methods: {},
  beforeMount() {}

})