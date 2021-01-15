function Page_shareholder_relations(props) {
    const myPage = "shareholder_relations";
    if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}



      class ActiveTable1 extends React.Component {
        constructor(props){
            super(props);
            this.state={};
        }
          render() {
              const table =  this.props.data.map( (item,index) => [
                <tr>
                    {Object.keys(item).map(function(keyName, keyIndex) {
                        return <td>{item[keyName]}</td>
                    })}
                </tr> 
              ]);
              return (
                <table  class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th rowspan="2">姓名（註一）</th>
                        <th colspan="2">本人持有股份</th>
                        <th colspan="2">配偶、未成年子女持有股份</th>
                        <th colspan="2">利用他人名義合計持有股份</th>
                        <th colspan="2">前十大股東互相間具有財務會計準則公報第六號關係人或為配偶、二等親以內之親屬關係者，其名稱或姓名及關係（註三）</th>
                        <th rowspan="2">備註</th>
                    </tr>
                    <tr>

                      <th>股數</th>
                      <th>持股比率(%)</th>
                      <th>股數</th>
                      <th>持股比率(%)</th>
                      <th>股數</th>
                      <th>持股比率(%)</th>
                      <th>名稱(或姓名)</th>
                      <th>關係</th>
                    </tr>

                    </thead>
                <tbody>
                    {table}
                </tbody>
                </table>
              )
          }
        }



      return  [
      <div class="content">

        <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
        <p><span>&nbsp;&nbsp;</span></p>
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>股權結構 </h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
        <p><span>&nbsp;&nbsp;</span>本公司股權比例占前十大之股東： </p>
        <p style={{textAlign:`right`}}>109 年 4 月 7 日  單位：股</p>
        <ActiveTable1 data={props.data[props.lang].table1} />

      </div>
      ];
    
   
    
  }