function Page_compensation_committee(props) {
    const myPage = "compensation_committee";
    if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}
    
    

   



    class ActiveList1 extends React.Component {
      constructor(props){
          super(props);
          this.state={
          };
      }
      render() {
          const list =  this.props.data.map( (reg,index) => [
              <li class="list-group-item"><b>{reg.title}</b>
                <ul class="list-group list-group-flush " >
                  {reg.contents.map(function(content, index2) {
                            return [
                              <li class="list-group-item">{content.item}
                                <ul class="list-group list-group-flush">
                                  { content.sub_items.map(function(sub_item,index3){
                                    return [
                                      <li class="list-group-item"> { sub_item }
                                      </li>         
                                    ]
                                  })}
                                </ul>
                              </li> 
                          ]
                        })}
                  </ul>
              </li> 
            ]);
          return (
            <ul class="list-group list-group-flush ">
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
            const list =  this.props.data.map( (reg,index) => [
                <li class="list-group-item"><b>{reg.title}</b>
                  <ul class="list-group list-group-flush " >
                    {reg.contents.map(function(content, index2) {
                              return [
                                <li class="list-group-item">{content}
                                 
                                </li> 
                            ]
                          })}
                    </ul>
                </li> 
              ]);
            return (
              <ul class="list-group list-group-flush ">
                {list}
              </ul>
  
            )
        }
      }  
    class ActiveTable1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
        };
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

                    {props.lang=="ch"? [ 

                    <tr>
                      <th rowspan="2">身份別（註1）</th>
                      <th rowspan="2">姓名</th>
                      <th colspan="3" style={{width: `50%`}}>是否具有五年以上工作經驗及下列專業資格</th>
                      <th colspan="10">符合獨立性情形（註2）</th>
                      <th rowspan="2"  style={{width: `10%`}}>兼任其他公開發行公司獨立董事家數</th>
                      <th rowspan="2">備註</th>
                    </tr>,
                    <tr>
                        <th>商務、法務、財務、會計或公司業務所須相關科系之公私立大專院校講師以上</th>
                        <th>法官、檢察官、律師、會計師或其他與公司業務所需之國家考試及格領有證書之專門職業及技術人員</th>
                        <th>商務、法務、財務、會計或公司業務所須之工作經驗</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                    </tr>
                    
                    ]: [

                        <tr>
                        <th rowspan="2">Title（Note 1）</th>
                        <th rowspan="2">Name</th>
                        <th colspan="3" style={{width: `50%`}}>Have more than five years of work experience in the listed professional qualifications</th>
                        <th colspan="10">Meet the independence criteria (Note 2)</th>
                        <th rowspan="2"  style={{width: `10%`}}>Number of other public companies in which the individual is concurrently serving as independent director</th>
                        <th rowspan="2">Note</th>
                      </tr>,
                      <tr>
                            <th>Instructor or higher position for department of commerce, law, finance, accounting, or other field related to the company's business' need in a public or private college or institution</th>
                            <th>Judge, public prosecutor, attorney, certified public accountant, or other professional or technical cpecialist that has passed any national qualification and/or been awarded a certificate in a profession that is needed by the company</th>
                            <th>Work Experience in commerce, law, finance, accounting, or other field related to the company's business' need </th>
                          <th>1</th>
                          <th>2</th>
                          <th>3</th>
                          <th>4</th>
                          <th>5</th>
                          <th>6</th>
                          <th>7</th>
                          <th>8</th>
                          <th>9</th>
                          <th>10</th>
                      </tr>

                    ]}
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        )
    }
    }
    class ActiveTable2 extends React.Component {
      constructor(props){
          super(props);
          this.state={
          };
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
                      {props.lang=='ch'?[
                      <tr>
                        <th rowspan="1">職稱</th>
                        <th rowspan="1">姓名</th>
                        <th rowspan="1">實際出(列)席次數B</th>
                        <th rowspan="1">委託出席次數</th>
                        <th rowspan="1">實際出(列)席率(%)【B/A】</th>
                        <th rowspan="1">備註</th>
      
                      </tr>
                      ]:[
                        <tr>
                        <th rowspan="1">Title</th>
                        <th rowspan="1">Name</th>
                        <th rowspan="1">Actual number of attendance (B)</th>
                        <th rowspan="1">Requested attendance (A)</th>
                        <th rowspan="1">Attendance rate (%)【B/A】</th>
                        <th rowspan="1">Note</th>
      
                      </tr>
                      ]}
                  </thead>
                  <tbody>
                      {table}
                  </tbody>
              </table>
          )
      }
      }
      class ActiveList3 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            };
        }
        render() {
            const list =  this.props.data.map( (meeting,index) => [
                <li class="list-group-item">{index+1}. {meeting.date}
                  <ul class="list-group list-group-flush">
                    {meeting.contents.map(function(content, index2) {
                              return [
                                <li class="list-group-item">{content.summary}
                                  <ul class="list-group list-group-flush">
                                   
                                        <li class="list-group-item"> { content.result }
                                        </li>         
                              
                                  </ul>
                                </li> 
                            ]
                          })}
                    </ul>
                </li> 
              ]);
            return (
              <ul class="list-group list-group-flush ">
                {list}
              </ul>
  
            )
        }
      }  
    return [
        <div class="content">
            <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>
            {props.data[props.lang].title}  </h4>
            <p><span>&nbsp;&nbsp;</span></p>

            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                                {props.data[props.lang].p1}
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" >
                        <div class="card-body"  style={{overflow: `auto`}}>
                        <ActiveList1  data={props.data[props.lang].salary_regulations} />
                        </div>

                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                                {props.data[props.lang].p2}
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" >
                        <div class="card-body"  style={{overflow: `auto`}}>
                          <ActiveTable1 data={props.data[props.lang].table1} />
                        </div>
                        <p><span>&nbsp;&nbsp;</span></p>
                        	
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                                {props.data[props.lang].p3}
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingOne" >
                        <div class="card-body"  style={{overflow: `auto`}}>
                             <ActiveList2 data={props.data[props.lang].list2} />


                        </div>
                        <p><span>&nbsp;&nbsp;</span></p>
                        	
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                                {props.data[props.lang].p4}
                                
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingOne" >
                        <div class="card-body"  style={{overflow: `auto`}}>
                          <ul class="list-group list-group-flush ">
                              <li class="list-group-item">{props.lang=='ch'?"(1)   本公司之薪資報酬委員會委員計3人。":"(1) There are 3 members of the compensation committee of the company."}
                              </li>
                              <li class="list-group-item">{props.lang=='ch'?"(2)   本屆委員任期：107年6月19日至110年6月18日，最近年度(108年度至年報刊印日止)薪資報酬委員會開會 5 次(Ａ)，委員資格及出席情形如下：":
                                    "(2) The term of office of the current members: June 19, 2018 to June 18, 2021, the salary and remuneration committee met 5 times in the most recent year (from the year 108 to the publication date of the annual report) (A). The qualifications and attendance of the members are as follows:"}
                                  <ActiveTable2 data={props.data[props.lang].table2} />
                                  <ul class="list-group list-group-flush ">
                                    <li class="list-group-item">{props.lang=='ch'?"其他應記載事項":"Other matters to be recorded:"}：
                                      </li>
                                      <li class="list-group-item">{props.lang=='ch'?"一、108年度至年報刊印日止薪資報酬委員會開會討論議案如下":"1. The Salary and Compensation Committee met to discuss the following proposals from the year 2008 to the date of publication of the annual report:"}：
                                      </li>
                                      <li class="list-group-item">
                                          <ActiveList3 data={props.data[props.lang].meetings} />
                                      </li>
                                      <li class="list-group-item">{props.lang=='ch'?"二、董事會如不採納或修正薪資報酬委員會之建議，應敘明董事會日期、期別、議案內容、董事會決議結果以及公司對薪資報酬委員會意見之處理 (如董事會通過之薪資報酬優於薪資報酬委員會之建議，應敘明其差異情形及原因)：無。":
                                      "2. If the board of directors does not adopt or amend the salary and compensation committee’s recommendations, it shall state the date of the board of directors, the date, the content of the proposal, the resolution of the board of directors, and the company’s handling of the opinions of the compensation committee (if the compensation approved by the board is better than the compensation committee The proposal should state the differences and reasons): None."}
                                      </li>
                                      <li class="list-group-item">{props.lang=='ch'?"三、薪資報酬委員會之議決事項，如成員有反對或保留意見且有紀錄或書面聲明者，應敘明薪資報酬委員會日期、期別、議案內容、所有成員意見及對成員意見之處理：無。":
                                      "3. The resolutions of the Salary and Compensation Committee. If members have objections or reservations and have records or written statements, the Salary and Compensation Committee should state the date, period, proposal content, all members' opinions and the handling of members' opinions: none."}
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                        </div>
                        <p><span>&nbsp;&nbsp;</span></p>
                        	
                    </div>
                </div>
            </div>











        </div>


    ];

}

