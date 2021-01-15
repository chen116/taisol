function Page_human_resources(props) {
  const myPage = "human_resources";
    if (myPage != props.currentPage){return null;}
  

      class ActiveList1 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            };
        }
        render() {
            const list =  this.props.data.map( (item,index) => [
              <li class="list-group-item" >
                <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>{item}
              </li>
              ]);
            return (
              <ul class="list-group list-group-flush" >
                <li class="list-group-item list-group-flush"><b>一、福利措施</b>
                  {list}
                </li>
                <li class="list-group-item list-group-flush"><b>二、員工認股</b>
                  <li class="list-group-item list-group-flush" >
                  <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>本公司為追求企業永續成長與員工共同分享企業經營成果，推行員工認股與分紅入股辦法，落
                  　　實『員工即股東』之理念。
                  </li>
                </li>
                <li class="list-group-item list-group-flush"><b>三、退休制度</b>
                  <li class="list-group-item list-group-flush" >	
                    <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>實施情形:
                    <br />
                    本公司員工退休辦法悉依勞動基準法訂定，由公司每月按員工薪資總額之3％提撥退休準備金，
                    儲存於中央信託局退休金專戶；另，自民國九十四年七月一日起配合勞工退休金條例(以下簡稱
                    「新制」)之實施，原適用本公司退休辦法之員工如經選擇適用新制後之服務年資或新制施行後到
                    職之員工其服務年資改採確定提撥制，其退休金之給付由本公司按月依每月工資百分之六提繳退
                    休金，儲存於勞工退休金個人專戶。
                  </li>
                
                  <li class="list-group-item list-group-flush" >	
                    <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>退休之資格(依最新版本之勞基法):
                    <br />
                    凡本公司之員工，合乎下列規定之一，即得自行申請退休或辦理強制退休：
                    <ul class="list-group list-group-flush" >(1)自請退休：
                      <li class="list-group-item list-group-flush" >a.於本公司服務滿十五年以上且年滿五十五歲者。
                      </li>
                      <li class="list-group-item list-group-flush" >b.於本公司服務滿二十五年者。
                      </li>
                      <li class="list-group-item list-group-flush" >c.於本公司服務滿十年以上且年滿六十歲者。
                      </li>
                    </ul>
                    <ul class="list-group list-group-flush" > (2)強制退休：
                      <li class="list-group-item list-group-flush" > a.年滿六十五歲者。
                      </li>
                      <li class="list-group-item list-group-flush" >b.心神喪失或身體殘廢不堪勝任職務者。
                      </li>
                    </ul>
                  </li>
  
                </li> 
  
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
              
              <li class="list-group-item " >
              <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>{item["title"]}
              {item["content"]!=null? <span> : </span> : null}
                   {item["content"]!=null? <ul ><li class=" list-group-flush">{item["content"]}</li></ul> : null}
              </li>
              ]);
            return (
              <ul class="list-group list-group-flush" >
                <li class="list-group-item list-group-flush"><b>人才培育範疇包含：</b>
                  {list}
                </li>
              </ul>
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
            const list =  this.props.data.map( (item,index) => [
              <li class="list-group-item list-group-flush"><b>{item.title}</b>
                  {item.details.map(function(detail, index2) {
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
      class ActiveTable1 extends React.Component {
        constructor(props){
            super(props);
            this.state={};
        }
          render() {
              const table =  this.props.data.map( (item,index) => [
                <tr>
                  <td> {item.date}</td>
                  <td> {item.content}</td>
                </tr> 
              ]);
              return (
                <table  class="table table-bordered table-hover">
                <thead>
                  <tr>
                      <th rowspan="1" style={{width: `50%`}}>檢測時間</th>
                      <th rowspan="1" style={{width: `50%`}}>計畫內容</th>
                  </tr>
  
                </thead>
                <tbody>
                    {table}
                </tbody>
                </table>
              )
          }
        }
  
        class ActiveList4 extends React.Component {
          constructor(props){
              super(props);
              this.state={
              };
          }
          render() {
              const list =  this.props.data.map( (item,index) => [
                
                <li class="list-group-item list-group-flush"><b>{item.title}</b>
                  <li class="list-group-item list-group-flush">
                    <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>{item.content}
                  </li>
                </li>
                ]);
              return (
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item list-group-flush"><b>人才培育範疇包含：</b>
                    {list}
                  </li>
                </ul>
              )
          }
        }  
  
      return  [
      <div class="content">
  
        <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
        <p><span>&nbsp;&nbsp;</span></p>
  
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>福利制度</h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
        <p>本公司秉持尊重及關心員工的理念，致力於提供高品質的友善職場環境及員工福利，並於88年5月1日正式成立職工福利委員會組織，負責員工福利規劃與活動辦理，我們期許透過完善的福利制度，全方位照顧員工的身、心、靈健康與平衡。員工福利措施及制度包含：
        </p>
        <ActiveList1 data={props.data[props.lang].list1} />
  
        <p><span>&nbsp;&nbsp;</span></p>
  
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>人才培育 </h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
        <p>泰碩瞭解『員工』是公司最重要的資產，而持續的人才培育正是提升員工技能及服務品質的重要策略。本公司訂有教育訓練相關辦法，並配合公司短中長期之發展需要，辦理內外訓相關課程，不斷增進員工專業知識及管理技能。  
        </p>
        <ActiveList2 data={props.data[props.lang].list2} />
        <p><span>&nbsp;&nbsp;</span></p>
  
        <div class="row justify-content-md-center">
          <div class="col">
            <img src="http://w3.taisol.com.tw/image/Notice2-9A.JPG" class="card-img-top img-thumbnail rounded " alt="..." />
          </div>
          <div class="col">
            <img src="http://w3.taisol.com.tw/image/Notice2-9B.JPG" class="card-img-top img-thumbnail rounded " alt="..." />
          </div>
        </div>
        <p><span>&nbsp;&nbsp;</span></p>
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>員工工作環境與人身安全的保護措施 </h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
        <p>泰碩重視員工安全，並致力提供一個安全、衛生與舒適的工作環境予全體同仁，工作環境與員工人身安全保護措施彙整如下：  </p>
        <ActiveList3 data={props.data[props.lang].list3} />
        <div class="row justify-content-md-center">
        {/* <div class="col-md-auto">
          <img src="http://w3.taisol.com.tw/important/notice-2-9.jpg" class="card-img-top img-thumbnail rounded " alt="..." />
        </div> */}
        </div>
        <p><span>&nbsp;&nbsp;</span></p>
  
        <p><b>亞洲科技大樓108年消防及安全檢測計畫：</b></p>
          <ActiveTable1 data={props.data[props.lang].table1} />
        <p><b>亞洲科技大樓107年消防及安全檢測計畫：</b></p>
          <ActiveTable1 data={props.data[props.lang].table2} />
        <p><span>&nbsp;&nbsp;</span></p>
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>人權政策 </h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
        <p>泰碩電子股份有限公司(以下稱「泰碩」)，為善盡企業社會責任並落實人權保障，尊重並遵循「聯合國世界人權宣言」、「聯合國全球盟約」及國際勞工組織的「工作基本原則與權利宣言」等各項國際人權公約所揭橥之人權保護精神與基本原則，特制定本政策，並遵守《中華民國勞動基準法》、《性別工作平等法》、《就業服務法》等勞動相關法規，杜絕任何侵犯及違反人權之行為，有尊嚴的對待及尊重所有同仁。  </p>
        <p>本公司人權政策適用範圍包括本公司及相關企業，落實方針如下：</p>
        <ActiveList4 data={props.data[props.lang].list4}/>
      </div>
      ];
    
   
    
  }
  