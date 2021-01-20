function Page_human_resources(props) {
  const myPage = "human_resources";
    if (myPage != props.currentPage){return null;}
  
    class ActiveList1_2 extends React.Component {
      constructor(props){
          super(props);
          this.state={
          };
      }
      render() {
         const complexList = this.props.data.map((item,index) => [
            <li class="list-group-item list-group-flush"><b>{item.title}</b>
                      {item.contents.map(function(content, index2) {
                            return [
                                          <li class="list-group-item" >
                                            <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>{content.subTitle}
                                            {content.subContent.map(function(subcontent, index3) {
                                            return [
                                              <p>{subcontent.subsubTitle}</p>,
                                             <div>
                                              {subcontent.subsubContents.map(function(subsubcontent, index3) {
                                                return [
                                                  <ul class="list-group list-group-flush" >{subsubcontent.subsubsubTitle}
                                                  {subsubcontent.subsubsubContents.map(function(subsubsubcontent, index4) {
                                                      return [
                                                          <li class="list-group-item list-group-flush"  >{subsubsubcontent}  </li>
                                                      ]})}
                                                   </ul>
                                                  
                                               
                                                
                                            ]})}
                                                  </div>
                                         
                          ]
                        })}
                         </li>
                            ]})}
            </li>



         ]);

          return (
            <ul class="list-group list-group-flush" >
                {complexList}
            </ul>
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
              <li class="list-group-item" >
                <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>{item}
              </li>
              ]);

            if (props.lang=='ch')
            {
              return (
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item list-group-flush"><b>一、福利措施</b>
                    {list}
                  </li>
                  <li class="list-group-item list-group-flush"><b>二、員工認股</b>
                    <li class="list-group-item list-group-flush" >
                    <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>本公司為追求企業永續成長與員工共同分享企業經營成果，推行員工認股與分紅入股辦法，落實『員工即股東』之理念。
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
            }else{
              return (
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item list-group-flush"><b>1. Welfare Measures</b>
                    {list}
                  </li>
                  <li class="list-group-item list-group-flush"><b>2. Employee Stock Options</b>
                    <li class="list-group-item list-group-flush" >
                    <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>In order to pursue a sustainable growth of the company, the company shares its profit with its employees, implements employee stock subscriptions and dividends, and implements the concept of "employees as shareholders".
                    </li>
                  </li>
                  <li class="list-group-item list-group-flush"><b>3. Retirement System</b>
                    <li class="list-group-item list-group-flush" >	
                      <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>Implementation status:
                      <br />
                      The company’s employee retirement measures are formulated in accordance with the Labor Standards Law. 
                      The company allocates a monthly retirement reserve of 3% of the total employee’s salary and deposits it in the special pension account of the Central Trust Bureau; 
                      in addition, since july 1, 2005, in conjunction with the implementation of the Labor Pension Regulations (hereinafter referred to as the "new system"), 
                      employees who originally applied to the company’s retirement system will have their service years changed if they choose to apply the service years after 
                      the new system or employees who take up the job after the implementation of the new system. The definite allocation system is adopted, and the pension payment 
                      is paid by the company on a monthly basis at 6% of the monthly salary and stored in the individual labor pension account.
                    </li>
                  
                    <li class="list-group-item list-group-flush" >	
                      <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>Eligibility for retirement (according to the latest version of the Labor Standards Law): 
                      <br />
                      All employees of the company who meet one of the following requirements can apply for retirement by themselves or apply for mandatory retirement:
                      <ul class="list-group list-group-flush" >(1) Self-retired:
                        <li class="list-group-item list-group-flush" >a. Those who have served the company for more than 15 years and are over 55 years old.
                        </li>
                        <li class="list-group-item list-group-flush" >b. Those who have served the company for more than 25 years.
                        </li>
                        <li class="list-group-item list-group-flush" >c. Those who have served the company for more than 10 years and are over 60 years old.
                        </li>
                      </ul>
                      <ul class="list-group list-group-flush" >(2) Mandatory retirement:
                        <li class="list-group-item list-group-flush" >a. Those who are over 65 years old.
                        </li>
                        <li class="list-group-item list-group-flush" >b. Those who are mentally ill or are physically disabled and are incapable of performing their duties.
                        </li>
                      </ul>
                    </li>
    
                  </li> 
    
                </ul>
              )

            }
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
                <li class="list-group-item list-group-flush"><b>{props.lang=='ch'?"人才培育範疇包含:":"The scope of talent cultivation includes:"}      </b>
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
                  {props.lang=='ch'?
                  <tr>
                      <th rowspan="1" style={{width: `50%`}}>檢測時間</th>
                      <th rowspan="1" style={{width: `50%`}}>計畫內容</th>
                  </tr>:
                  <tr>
                  <th rowspan="1" style={{width: `50%`}}>Inspection Date</th>
                  <th rowspan="1" style={{width: `50%`}}>Plan</th>
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
                  <li class="list-group-item list-group-flush"><b>{props.lang=='ch'?"人才培育範疇包含:":"The scope of talent cultivation includes:"}  </b>
                    {list}
                  </li>
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
  
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>福利制度</h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
        <p>本公司秉持尊重及關心員工的理念，致力於提供高品質的友善職場環境及員工福利，並於88年5月1日正式成立職工福利委員會組織，負責員工福利規劃與活動辦理，我們期許透過完善的福利制度，全方位照顧員工的身、心、靈健康與平衡。員工福利措施及制度包含：
        </p>
        <ActiveList1 data={props.data[props.lang].list1} lang={props.lang} />
  
        <p><span>&nbsp;&nbsp;</span></p>
  
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>人才培育 </h5>
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
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>員工工作環境與人身安全的保護措施 </h5>
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
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>人權政策 </h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
        <p>泰碩電子股份有限公司(以下稱「泰碩」)，為善盡企業社會責任並落實人權保障，尊重並遵循「聯合國世界人權宣言」、「聯合國全球盟約」及國際勞工組織的「工作基本原則與權利宣言」等各項國際人權公約所揭橥之人權保護精神與基本原則，特制定本政策，並遵守《中華民國勞動基準法》、《性別工作平等法》、《就業服務法》等勞動相關法規，杜絕任何侵犯及違反人權之行為，有尊嚴的對待及尊重所有同仁。  </p>
        <p>本公司人權政策適用範圍包括本公司及相關企業，落實方針如下：</p>
        <ActiveList4 data={props.data[props.lang].list4}/>
      </div>
      ];
    }
  else {
    return  [
      <div class="content">
  
        <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
        <p><span>&nbsp;&nbsp;</span></p>
  
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>Welfare System</h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
        <p>The company upholds the concept of respecting and caring for employees, and is committed to providing a high-quality and friendly
           workplace environment and employee benefits. On May 1, 1988, the employee welfare committee was formally established to be responsible for 
           employee welfare planning and activities. We hope to improve The welfare system of the company takes full care of the physical, mental and 
           spiritual health and balance of employees. Staff welfare measures and systems include:
        </p>
        <ActiveList1 data={props.data[props.lang].list1} />
  
        <p><span>&nbsp;&nbsp;</span></p>
  
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>Talent Recruitment  </h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
        <p>TaiSol understands that "employees" are the company's most important asset, and continuous talent cultivation is an important
           strategy to improve employee skills and service quality. The company has established education and training related programs,
            and in line with the company's short, medium and long-term development needs, handles internal and external training related 
            courses to continuously improve employees' professional knowledge and management skills.  
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
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>Protective measures for the working environment and personal safety of employees  </h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
        <p>TaiSol attaches great importance to employee safety and is committed to providing a safe, hygienic and comfortable working environment for all colleagues. The working environment and employee personal safety protection measures are summarized as follows:  </p>
        <ActiveList3 data={props.data[props.lang].list3} />
        <div class="row justify-content-md-center">
        {/* <div class="col-md-auto">
          <img src="http://w3.taisol.com.tw/important/notice-2-9.jpg" class="card-img-top img-thumbnail rounded " alt="..." />
        </div> */}
        </div>
        <p><span>&nbsp;&nbsp;</span></p>
  
        <p><b>2019 fire and safety inspection plan of Asia Science and Technology Building:</b></p>
          <ActiveTable1 data={props.data[props.lang].table1} />
        <p><b>2018 fire and safety inspection plan of Asia Science and Technology Building:</b></p>
          <ActiveTable1 data={props.data[props.lang].table2} />
        <p><span>&nbsp;&nbsp;</span></p>
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>Human rights policy  </h5>
        <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
        <p>TaiSol Electronics Co., Ltd. (hereinafter referred to as "TaiSol"), in order to fulfill corporate social responsibility and implement human rights protection, 
          respects and follows the "United Nations Universal Declaration of Human Rights", "United Nations Global Covenant" and the "Basic Principles of Work" of the International 
          Labor Organization.
          The spirit and basic principles of human rights protection revealed in various international human rights conventions such as the Declaration of Rights.
           This policy is formulated and complies with the Labor Standards Law of the Republic of China, the Gender Work Equality Law, the Employment Service Law and other 
           labor Relevant laws and regulations, to prevent any violations and violations of human rights, treat all colleagues with dignity and respect. </p>
        <p>The scope of application of the company's human rights policy includes the company and related companies. The implementation guidelines are as follows:</p>
        <ActiveList4 data={props.data[props.lang].list4}/>
      </div>
      ];
  }
   
    
  }
  