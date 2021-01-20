function Page_internal_audit(props) {
    const myPage = "internal_audit";
    if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}


      class ActiveTable1 extends React.Component {
          constructor(props){
              super(props);
              this.state={};
          }
            render() {
                const table =  this.props.data.map( (meeting,index) => [
                  <tr>
                    <td> {meeting.date}</td>
                    <td> {meeting.type}</td>
                    <td> 
                        {/* <ul class="list-group list-group-flush ">
                          { meeting.items.map((sub_item,index2) =>
                            <li class="list-group-item">
                            {sub_item}
                            </li>
                          )}
                        </ul> */}
                       
                          { meeting.items.map((sub_item,index2) =>
                            <p>
                            {sub_item}
                            </p>
                          )}
                       
                    </td>
                    <td>
                          {/* <ul class="list-group list-group-flush ">
                              { meeting.results.map((sub_item,index2) =>
                              <li class="list-group-item">
                              {sub_item}
                              </li>
                              )}
                          </ul>                       */}
                              { meeting.results.map((sub_item,index2) =>
                              <p>
                              {sub_item}
                              </p>
                              )}
                    </td>
                  </tr> 
                ]);
                return (
                  <table  class="table table-bordered table-hover">
                    <thead>
                      {props.lang=='ch'?
                      <tr>
                          <th rowspan="1">會議日期</th>
                          <th rowspan="1">會議性質</th>
                          <th rowspan="1">溝通重點</th>
                          <th rowspan="1">溝通結果</th>
                      </tr> :
                      <tr>
                      <th rowspan="1">Meeting Date</th>
                      <th rowspan="1">Meeting Type</th>
                      <th rowspan="1">Agenda</th>
                      <th rowspan="1">Results</th>
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
      
      if (props.lang=='ch')
      {
      return [
            <div class="content">
            <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
            <p><span>&nbsp;&nbsp;</span></p>  
            <p class="content-p">
                本公司設置隸屬於董事會之內部稽核單位，並依公司規模、業務情況、管理需要及其他有關法令之規定，配置適任及適當人數之專任內部稽核人員。
            </p>
            <img class="rounded" src="./assets/images/IR-internal.gif"/>
            <p><span>&nbsp;&nbsp;</span></p>
            <p>內部稽核單位執行內部控制制度的稽核工作，檢查並評估公司的營運記錄有無缺失。對於發現之內部控制制度可能缺失及提出改善建議，做成稽核報告，定期向董事會報告。</p>
            <p>內部稽核單位督促內部各單位及子公司每年定期自行檢查內部控制制度之有效性，再由內部稽核單位覆核各單位及子公司之自行檢查報告，並綜合自行檢查結果，做為董事會及總經理出具內部控制制度聲明書之依據。</p>
            <p><span>&nbsp;&nbsp;</span></p>
            <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span>獨立董事、監察人與內部稽核主管之溝通方式</h5>
            <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>

            <p>1. 每年定期召開2次溝通會議，就本公司內部稽核業務執行狀況及內控運作情形提出報告。</p>
            <p>2. 若有重大或緊急事項時，召開不定期會議討論之。平時以電話及電子郵件等方式進行溝通。</p>
            <p>3. 稽核報告及追蹤報告陳核後，於次月底前交付各監察人、獨立董事查閱。</p>
            <p><span>&nbsp;&nbsp;</span></p>
            <p><b>獨立董事、監察人與內部稽核主管之溝通情形摘要： </b></p>

            <p>溝通結果:</p>
            <ActiveTable1 data={props.data[props.lang].table1} />




            </div> 
            ]

          
      }
      else
      {
        return [
          <div class="content">
          <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
          <p><span>&nbsp;&nbsp;</span></p>  
          <p class="content-p">
          The company sets up an internal audit unit under the board of directors, and allocates a competent and appropriate number of full-time internal audit personnel in accordance with the company's size, business conditions, management needs and other relevant laws and regulations.
          </p>
          <img class="rounded" src="./assets/images/audit_pic.png"/>
          <p><span>&nbsp;&nbsp;</span></p>
          <p>The internal audit unit performs the audit work of the internal control system, inspects and evaluates whether the company's operating records are missing. For possible deficiencies in the internal control system discovered and suggestions for improvement, make an audit report and report to the board of directors on a regular basis.</p>
          <p>The internal audit unit urges all internal units and subsidiaries to check the effectiveness of the internal control system on a regular basis each year, and then the internal audit unit reviews the self-inspection reports of the units and subsidiaries, and integrates the results of the self-examination, as the board of directors and general manager The basis for issuing the declaration of internal control system.</p>
          <p><span>&nbsp;&nbsp;</span></p>
          <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/common01.jpg"/><span>&nbsp;&nbsp;</span> Communication methods between independent directors, supervisors and internal audit supervisors</h5>
          <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
          <p>1. Convene two regular communication meetings every year to report on the company's internal audit business execution status and internal control operation status.</p>
          <p>2. If there are major or urgent matters, hold irregular meetings to discuss them. Usually communicate via telephone and email.</p>
          <p>3. After the audit report and tracking report are reviewed, they shall be delivered to the supervisors and independent directors for inspection before the end of the following month.</p>
          <p><span>&nbsp;&nbsp;</span></p>
          <p><b>Summary of the communication between independent directors, supervisors and internal audit supervisors: </b></p>

          <p>Results:</p>
          <ActiveTable1 data={props.data[props.lang].table1} />




          </div> 
          ]
  
      }
      
  
  }
  
  