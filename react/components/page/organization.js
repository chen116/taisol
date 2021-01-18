function Page_organization(props) {
    const myPage = "organization";
    if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}


      class ActiveTable1 extends React.Component {
        constructor(props){
            super(props);
            this.state={};
        }
          render() {
              const table =  this.props.data.map( (item,index) => [
                      <tr>
                        <td> {item.name}</td>
                          <td> 
                              <p>{item.summary}</p>
                              
                                {item.details.map((detail) =>
                                 <p>
                                    <span>&nbsp;&nbsp;</span>{detail}
                                  </p>
                                )}
                                
                                
                           
                          </td>
                      </tr>
                  ]);
              return (
                <table  class="table table-bordered table-hover">
                  <thead>
                    {props.lang=="ch"?
                    <tr>
                        <th rowspan="1">部門</th>
                        <th rowspan="1">主要職掌</th>
                    </tr> :
                    <tr>
                        <th rowspan="1">Department</th>
                        <th rowspan="1">Main Duties</th>
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
      class ActiveTable2 extends React.Component {
        constructor(props){
            super(props);
            this.state={};
        }
          render() {
              const table =  this.props.data.map( (item,index) => [
                <tr>
                  <td> {item.title}</td>
                  <td> {item.name}</td>
                  <td> 
                      {/* <ul class="list-group list-group-flush ">
                        { item.exps.map((sub_item,index2) =>
                          <li class="list-group-item">
                          {sub_item}
                          </li>
                        )}
                      </ul> */}
                     
                        { item.exps.map((sub_item,index2) =>
                          <p >
                          {sub_item}
                          </p>
                        )}
                      
                  </td>
                </tr> 
              ]);
              return (
                <table  class="table table-bordered table-hover">
                  <thead>

                    {props.lang=="ch"?
                    <tr>
                        <th rowspan="1">職稱</th>
                        <th rowspan="1">姓名</th>
                        <th rowspan="1">主要經(學)歷</th>
                    </tr> :
                    <tr>
                        <th rowspan="1">Title</th>
                        <th rowspan="1">Name</th>
                        <th rowspan="1">Professional(edcucational) Background</th>
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

      return [
      <div class="content">
        <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title}</h4>
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
              <div class="card-body" style={{overflow: `auto`}}>
              <img class="rounded" src={props.lang=='ch'?"./assets/images/img20.gif":"./assets/images/organ_small.png"}/>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                  {props.data[props.lang].p2} 
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo">
              <div class="card-body" style={{overflow: `auto`}}>
                <ActiveTable1 data={props.data[props.lang].table1}/>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                  {props.data[props.lang].p3} 
                  
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" >
              <div class="card-body" style={{overflow: `auto`}}>
                <ActiveTable2 data={props.data[props.lang].table2}/>
              </div>
            </div>
          </div>



        </div>
      </div>
      ];

    }
    