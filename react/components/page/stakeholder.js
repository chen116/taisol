function Page_stakeholder(props) {
  const myPage = "stakeholder";
  if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}



  class ActiveTable1 extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
      render() {
          const table =  this.props.data.map( (row,index) => [
              <tr>
                <td> <b>{row.person}</b></td>

              <td>
                          {/* <ul class="list-group list-group-flush"> */}
                            {this.props.data[index].topics.map(     (topic) =>
                                // <li class="list-group-item list-group-flush" >
                                <li style={{listStyleType:`none`}} >

                                    {topic}
                                </li >
                            )}
                            {/* </ul> */}
                </td>
                <td>
                            {this.props.data[index].jobs.map(     (job) =>
                                <li style={{listStyleType:`none`}} >
                                    {job}
                                </li >
                            )}
                </td>
                <td>
                            {this.props.data[index].results.map(     (result) =>
                                <li style={{listStyleType:`none`}} >
                                    <a href={result.href} >{result.txt}</a>
                                </li >
                            )}

                </td>
            </tr>
          ]);
          return (
            <table  class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th rowspan="1" >利害關係人</th>
                  <th rowspan="1" >關切的議題</th>
                  <th rowspan="1" style={{width: `50%`}}>我們的責任</th>
                  <th rowspan="1">我們的努力</th>
                </tr>

                </thead>
            <tbody>
                {table}
            </tbody>
            </table>
          )
      }
    }
  class ActiveList1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    render() {
        const list =  this.props.data.map( (item,index) => [
          <li class="list-group-item list-group-flush">{item.title}
              {item.content.map(function(detail, index2) {
                return [
                  <li class="list-group-item " >
                    <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>{detail}
                  </li>
                ]
                
                })}

          </li>
          ]);
        return (
          <ul class="list-group list-group-flush" >
              {list}
          </ul>
        )
    }
  }  
  class ActiveList2 extends React.Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    render() {
        const list =  this.props.data.map( (item,index) => [
              <li class="list-group-item" >
                {item}
              </li>
          ]);
        return (
          <ul class="list-group list-group-flush ">
            {list}
            <li  class="list-group-item">   郭尚仁 先生
            (副總經理暨發言人) <img src="./assets/images/investor04_6.jpg"  />：<a href="mailto:sales@taisol.com">sales@taisol.com</a>
            </li>
          </ul>

        )
    }
  }  

  return  [
  <div class="content">

    <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
    <p><span>&nbsp;&nbsp;</span></p>
    <p>企業追求永續發展，必須瞭解利害關係人的想法。透明的溝通不僅會減少公司內部管理成本，亦是追求永續發展的重要參考。我們相信，開放、無障礙的溝通方式，更能充分瞭解利害關係人的需求。
    </p>
    <ActiveTable1 data={props.data[props.lang].table1} />
    <p><span>&nbsp;&nbsp;</span></p>

    <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>與利害關係人聯絡窗口</h5>
    <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>

     {/* <div class="container">
      
    <div class="row">
      <div class="col-sm">
       投資人
       <ul class="list-group list-group-flush "> <li class="list-group-item "><a href="mailto:talk@taisol.com">talk@taisol.com</a></li> </ul>
        
      </div>
      <div class="col-sm">
      客戶
      <ul class="list-group list-group-flush "> <li class="list-group-item "><a href="mailto:sales@taisol.com">sales@taisol.com</a></li> </ul>
      </div>
      <div class="col-sm">
        供應商
        <ul class="list-group list-group-flush "> <li class="list-group-item "><a href="mailto:sales@taisol.com">sales@taisol.com</a></li> </ul>
      </div>
      <div class="col-sm">
        員工
        <ul class="list-group list-group-flush "> <li class="list-group-item "><a href="mailto:talk@taisol.com">talk@taisol.com</a></li> </ul>
      </div>
    </div>
  </div>  */}
  <ul class="list-group list-group-flush "> 
    <li class="list-group-item list-group-flush">投資人: <a href="mailto:talk@taisol.com">investor@taisol.com</a></li>
    <li class="list-group-item list-group-flush">客戶: <a href="mailto:sales@taisol.com">customer@taisol.com</a></li>
    <li class="list-group-item list-group-flush">供應商: <a href="mailto:sales@taisol.com">supplier@taisol.com</a></li>
    <li class="list-group-item list-group-flush">員工: <a href="mailto:talk@taisol.com">talk@taisol.com</a></li>
  
  </ul>


    <p><span>&nbsp;&nbsp;</span></p>
    <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span> 檢舉信箱作業辦法</h5>

    <ActiveList1 data={props.data[props.lang].list1} />
    <p><span>&nbsp;&nbsp;</span></p>
    <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>員工申訴中心 </h5>
    <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>



    <p>員工是公司主要的利害關係人之一，更是泰碩珍視的資產。
    </p>
    <p>基於對員工的承諾，泰碩相信每位員工皆應受到公平的對待與尊重； 保障國際公認人權，致力維護與尊重聯合國世界人權宣言和國際勞動 組織基本公約的核心勞動標準。 
    </p>
    <p>為了保障您的權益、讓您更安心工作，泰碩特別設置提供專責的員工 意見申訴管道。<img src="./assets/images/investor04_6.jpg"  /> : <a href="mailto:talk@taisol.com">talk@taisol.com</a>
    </p>

    {/* <p><img src="./assets/images/investor04_6.jpg"  /> : <a href="mailto:talk@taisol.com">talk@taisol.com</a> </p> */}
    <p><span>&nbsp;&nbsp;</span></p>  
    

    <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>客戶及供應商投訴中心 </h5>
    <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>

    <p><b>違反從業道德行為舉報系統:</b></p>
    <p>在泰碩電子股份有限公司，誠信正直是公司文化最重要之核心價值， 也是公司經營理念之首。泰碩公司一向承諾以誠信從事所有業務活動 ，絕不允許貪污及任何形式之舞弊行為。
    </p>
    <p>若您發現泰碩公司員工或任何代表泰碩公司的相關人士進行可疑行為 或可能違反泰碩公司的道德行為準則時，請告訴我們。
    您的舉報事項，我們將交由公司副總經理直接處理。
    </p>
    <p>除法律另有規定外，對於您提供關於您的個人資料，我們將予以保密 ，並依法採取適當之保護措施，保護您的個人資料及隱私。 
    </p>
    <p><span>&nbsp;&nbsp;</span></p>
    <p><b>提醒您：</b></p>
    <ActiveList2 data={props.data[props.lang].list2} />




  </div>
  ];



}
