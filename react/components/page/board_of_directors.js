function Page_board_of_directors(props) {
    const myPage = "board_of_directors";
    if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}
    

    class ActiveTable1 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            tableExpanded: 0,
            showExpandedTableButton: ['Open All','Close All'],
            expandList:{},

            
            };
            // this.toggleExpandTable=this.toggleExpandTable.bind(this);
        }
        toggleExpandTable(){
            var currentTableState = this.state.tableExpanded

            this.setState(function(state,props){
                if (state.tableExpanded==0) {
                    $('.collapseTable').collapse('show')
                    // $('.collapseTableButton').collapse('hide')
                }else{
                    $('.collapseTable').collapse('hide')
                    // $('.collapseTableButton').collapse('show')
                }
                return {
                    tableExpanded: (state.tableExpanded+1)%2  
                };
                });
        };

        renderButtonList(array,index,type){
            if(array.length>1)
             return  [<button class="btn btn-light dropdown-toggle  collapseTableButton" type="button" data-toggle="collapse" data-target={"#collapseExample"+type+index} aria-expanded="false" aria-controls={"collapseExample"+type+index}>
             {array[0]}...
             </button>,
                                     <div class="collapse collapseTable" id={"collapseExample"+type+index}>
                                     <div class="card card-body">
                                         {array.map(     (detail) =>
                                             <li type="disc" >
                                                 {detail}
                                             </li >
                                         )}
                                     </div>
                                 </div>
            ]
            return <button class="btn btn-light  " type="button"  >
            {array[0]}
            </button>
        }

        render() {

            

            const table = this.props.data.map( (item,index) => [
                <tr><td>{item.title}</td><td>{item.from}</td><td>{item.name}</td><td>{item.sex}</td><td>{item.start_date}</td><td>{item.duration}</td><td>{item.first_start_date}</td><td>{item.stock1}</td> <td>{item.stock_per1}</td> <td>{item.stock2}</td> <td>{item.stock_per2}</td> <td>{item.stock3}</td><td>{item.stock_per3}</td><td>{item.stock4}</td><td>{item.stock_per4}</td>
                    <td >
                        {this.renderButtonList(item.exps,index,0)}

                    </td>
                    <td>
                    {this.renderButtonList(item.other_titles,index,1)}

                    </td>
                    <td>{item.relative_title}</td>
                    <td>{item.relative_name}</td>
                    <td>{item.relative_relation}</td>
                </tr>
            ]);

            return (
                <div>
                     <button class="btn btn-secondary btn-sm" type="button"   onClick={()=>
                    {
                        this.toggleExpandTable();
                    }}>
                    {this.state.showExpandedTableButton[this.state.tableExpanded]}
                    </button> 
                    <table  class="table table-bordered table-hover"  style={{width:`1650px`}} >
                        <thead>
                            {this.props.lang=="ch"?  [

                            <tr>
                                <th rowspan="2" style={{width: `1%`}}>職稱（註一）</th>
                                <th rowspan="2" style={{width: `3%`}}>國籍或註冊地</th>
                                <th rowspan="2" >姓名</th>
                                <th rowspan="2" >性別</th>
                                <th rowspan="2" style={{width: `1%`}}>選(就)任日期</th>
                                <th rowspan="2" style={{width: `1%`}}>任期</th>
                                <th rowspan="2" style={{width: `1%`}}>初次選任日期（註二）</th>
                                <th colspan="2" style={{width: `8%`}}>選任時持有股份</th>
                                <th colspan="2" style={{width: `8%`}}>現在持有股份</th>
                                <th colspan="2" style={{width: `8%`}}>配偶,未成年子女現在持有股份</th>
                                <th colspan="2" style={{width: `8%`}}>利用他人名義持有股份</th>
                                <th rowspan="2" style={{width: `25%`}} >主要經（學）歷（註三）</th>
                                <th rowspan="2" style={{width: `25%`}}>目前兼任本公司及其他公司之職務</th>
                                <th colspan="3" style={{width: `10%`}}>具配偶或二親等以內關係之其他主管,董事或監察人</th>
                            </tr> ,

                            <tr>
                                <th>股數</th>
                                <th>持股比率(%)</th>
                                <th>股數</th>
                                <th>持股比率(%)</th>
                                <th>股數</th>
                                <th>持股比率(%)</th>
                                <th>股數</th>
                                <th>持股比率(%)</th>
                                <th>職稱</th>
                                <th>姓名</th>
                                <th>關係</th>
                            </tr>
                              ]  : [

                                <tr>
                                <th rowspan="2">Title (Note1) </th>
                                <th rowspan="2">Nationality or Place of Registration</th>
                                <th rowspan="2">Name</th>
                                <th rowspan="2">Gender</th>
                                <th rowspan="2">Date Elected</th>
                                <th rowspan="2">Term</th>
                                <th rowspan="2">Date First Elected (Note2)</th>
                                
                                <th colspan="2">Shares Held When Elected</th>
                                <th colspan="2">Shares Currently Held</th>
                                <th colspan="2">Shares Currently Held by Spouse and Underage Children</th>
                                <th colspan="2">Shares Held by Proxy</th>
                                <th rowspan="2">Major Career(Academic) Achievements (Note3)</th>

                                <th rowspan="2">Position Concurrently Held in the Company and/or Other Companies</th>
                                <th colspan="3">Spouse or Relatives of Second Degree or Closer Acting as Directors, Supervisors, or Department Heads</th>
                            </tr>,
                            <tr>
                                <th>Shares</th>
                                <th>%</th>
                                <th>Shares</th>
                                <th>%</th>                
                                <th>Shares</th>
                                <th>%</th>                
                                <th>Shares</th>
                                <th>%</th>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Relationship</th>
                            </tr>
                                    
                                    
                                    
                            ]  }


                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>
                </div>
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

                    {this.props.lang=="ch"?  [
                        <tr>
                            <th rowspan="2">條件姓名(註1)</th>
                            <th colspan="3"  style={{width: `50%`}}>是否具有五年以上工作經驗及下列專業資格</th>
                            <th colspan="10">符合獨立性情形（註2）</th>
                            <th rowspan="2"  style={{width: `10%`}}>兼任其他公開發行公司獨立董事家數</th>
                        </tr>
                        ,
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
                        </tr>]
                        : [ 
                        
                            <tr>
                            <th rowspan="2">Name (Note 1)</th>
                            <th colspan="3">Have More than Five Years of Work Experience in the Listed Professional Qualifications</th>
                            <th colspan="10">Have Met the Independence Requirement (Note 2)</th>
                            <th rowspan="2">Number of Other Companies in Which the Individual is Concurrently Serving as an Independent Director</th>
                        </tr>,
                        <tr>
                            <th>Instructor or Higher Position in Department of Commerce, Law, Finance, Accounting, or Other Field Related to the Company's Business' Need in a Public or Private Institution</th>
                            <th>Judge, Public Prosecutor, Attorney, Certified Public Accountant, or Other Professional or Technical Specialist that has Passed Any National Qualification and/or Been Awarded a Certificate in a Profession that is Needed by the Company</th>
                            <th>Work Experience in the Areas of Commerce, Law, Finance, Accounting, or Other Fields Related to the Company's Business' Need </th>
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
   

    class ActiveList1 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            };
        }
        render() {
            const list =  this.props.data.map( (item,index) => [
                  <li class="list-group-item list-group-flush " ><span>&nbsp;&nbsp;</span>
                      {item.item}
                      {item.content.map(function(detail, index2) {
                      return [
                        <li class="list-group-item list-group-flush " >
                          <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>{detail}
                        </li>
                      ]
                      
                      })}
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
            const list =  this.props.data.links.map( (item,index) => [
                  <li  > 
                    <a href={item[1]} target="_blank">{item[0]}</a> 
                  </li>
              ]);
            return (
              <ul class="list-group list-group-flush ">
                  <li class="list-group-item list-group-flush ">
                  {this.props.data.title}
                    <li class="list-group-item list-group-flush "> <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>{this.props.data.date} : <ul>{list}</ul></li>
                  </li>
              </ul>
  
            )
        }
      }  

    return [
        <div class="content">
         
            <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
            <p><span>&nbsp;&nbsp;</span></p>
            <p>
                {props.data[props.lang].p1}
            </p>
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                                  {props.data[props.lang].p2}
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" >
                        <div class="card-body"  style={{overflow: `auto`}}>
                            <ActiveTable1  data={props.data[props.lang].table1} lang={props.lang} />
                        </div>
                        <p><span>&nbsp;&nbsp;</span></p>

                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                                {props.data[props.lang].p3}
                               
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" >
                        <div class="card-body"  style={{overflow: `auto`}}>
                            <ActiveTable2  data={props.data[props.lang].table2}  lang={props.lang}  />
                        </div>
                        <p><span>&nbsp;&nbsp;</span></p>
                    </div>
                </div>
            </div>

            <ActiveList1  data={props.data[props.lang].list1} />
            <ActiveList2  data={props.data[props.lang].list2} />









        </div>


    ];

}


