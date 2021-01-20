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
                {props.lang=='ch'?

                <tr>
                  <th rowspan="1" >利害關係人</th>
                  <th rowspan="1" >關切的議題</th>
                  <th rowspan="1" style={{width: `50%`}}>我們的責任</th>
                  <th rowspan="1">我們的努力</th>
                </tr>
                :
                <tr>
                  <th rowspan="1" >Stakeholder</th>
                  <th rowspan="1" >Issues of concern</th>
                  <th rowspan="1" style={{width: `50%`}}>Responsibility</th>
                  <th rowspan="1">Efforts</th>
                </tr>

          }

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
            {props.lang=='ch'?

            <li  class="list-group-item">   郭尚仁 先生
            (副總經理暨發言人) <img src="./assets/images/investor04_6.jpg"  />：<a href="mailto:sales@taisol.com">sales@taisol.com</a>
            </li>
            :
            <li  class="list-group-item">  
            Mr. Guo Shangren (Deputy General Manager and Spokesperson) <img src="./assets/images/investor04_6.jpg"  />：<a href="mailto:sales@taisol.com">sales@taisol.com</a>
            </li>
        }
          </ul>

        )
    }
  }  


  if(props.lang=='ch')
  {
  return  [
  <div class="content">

    <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
    <p><span>&nbsp;&nbsp;</span></p>
    <p>企業追求永續發展，必須瞭解利害關係人的想法。透明的溝通不僅會減少公司內部管理成本，亦是追求永續發展的重要參考。我們相信，開放、無障礙的溝通方式，更能充分瞭解利害關係人的需求。
    </p>
    <ActiveTable1 data={props.data[props.lang].table1} />
    <p><span>&nbsp;&nbsp;</span></p>

    <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>與利害關係人聯絡窗口</h5>
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
    <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span> 檢舉信箱作業辦法</h5>

    <ActiveList1 data={props.data[props.lang].list1} />
    <p><span>&nbsp;&nbsp;</span></p>
    <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>員工申訴中心 </h5>
    <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>



    <p>員工是公司主要的利害關係人之一，更是泰碩珍視的資產。
    </p>
    <p>基於對員工的承諾，泰碩相信每位員工皆應受到公平的對待與尊重； 保障國際公認人權，致力維護與尊重聯合國世界人權宣言和國際勞動 組織基本公約的核心勞動標準。 
    </p>
    <p>為了保障您的權益、讓您更安心工作，泰碩特別設置提供專責的員工 意見申訴管道。<img src="./assets/images/investor04_6.jpg"  /> : <a href="mailto:talk@taisol.com">talk@taisol.com</a>
    </p>

    {/* <p><img src="./assets/images/investor04_6.jpg"  /> : <a href="mailto:talk@taisol.com">talk@taisol.com</a> </p> */}
    <p><span>&nbsp;&nbsp;</span></p>  
    

    <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>客戶及供應商投訴中心 </h5>
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
else{
  return [
  <div class="content">

  <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
  <p><span>&nbsp;&nbsp;</span></p>
  <p>To pursue sustainable development, enterprises must understand the ideas of stakeholders. Transparent communication will
     reduce the company's internal management costs.  We believe that an open and barrier-free communication method can better understand the needs of stakeholders.
  </p>
  <ActiveTable1 data={props.data[props.lang].table1} />
  <p><span>&nbsp;&nbsp;</span></p>

  <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>Contact window with stakeholders</h5>
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
  <li class="list-group-item list-group-flush">Investor: <a href="mailto:talk@taisol.com">investor@taisol.com</a></li>
  <li class="list-group-item list-group-flush">Customer: <a href="mailto:sales@taisol.com">customer@taisol.com</a></li>
  <li class="list-group-item list-group-flush">Supplier: <a href="mailto:sales@taisol.com">supplier@taisol.com</a></li>
  <li class="list-group-item list-group-flush">Staff: <a href="mailto:talk@taisol.com">talk@taisol.com</a></li>

</ul>


  <p><span>&nbsp;&nbsp;</span></p>
  <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>Reporting through mail method</h5>

  <ActiveList1 data={props.data[props.lang].list1} />
  <p><span>&nbsp;&nbsp;</span></p>
  <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>Employee Appeal Center  </h5>
  <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>

  <p>Employees are one of the company's main stakeholders, and they are also an asset for TaiSol.</p>

  <p>Based on its commitment to employees, TaiSol believes that every employee should be treated fairly and respected; 
    we strive to maintain and respect the core labor standards of the United Nations Universal Declaration of 
    Human Rights and the basic conventions of the International Labor Organization.</p>

  <p>In order to protect your rights and make you work more at ease, TaiSol has specially set up a dedicated employee complaint channel. <img src="./assets/images/investor04_6.jpg"  /> : <a href="mailto:talk@taisol.com">talk@taisol.com</a></p>


  {/* <p><img src="./assets/images/investor04_6.jpg"  /> : <a href="mailto:talk@taisol.com">talk@taisol.com</a> </p> */}
  <p><span>&nbsp;&nbsp;</span></p>  
  

  <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>Customer and Supplier Complaint Center  </h5>
  <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>

  <p><b>Violation of professional ethics reporting system:</b></p>


  <p>At TaiSol Electronics Co., Ltd., integrity is the most important core value of the company's culture and the top of the company's business philosophy. 
    TaiSol has always promised to conduct all business activities in good faith, and will never allow corruption and any form of fraud.</p>

  <p>If you find that an employee of TaiSol or any related person acting on behalf of TaiSol has performed suspicious behavior or may violate the 
    ethics code of TaiSol, please let us know. Your report will be handled directly by the deputy general manager of the company.</p>

  <p>Unless otherwise provided by law, we will keep the personal information you provide confidential and take appropriate protective measures 
    in accordance with the law to protect your personal information and privacy.</p>


  <p><span>&nbsp;&nbsp;</span></p>
  <p><b>Reminders:</b></p>
  <ActiveList2 data={props.data[props.lang].list2} />




</div>
];
}



}
