
function Page_corporate_governance(props) {
    const myPage = "corporate_governance";
    if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}
   

    
    class ActiveList1 extends React.Component {
      constructor(props){
          super(props);
          this.state={
          };
      }
      render() {
          const list =  this.props.data.map( (item,index) => [
                <li class="list-group-item list-group-flush " ><img class="rounded" src="./assets/images/menu01.jpg"/> <span>&nbsp;&nbsp;</span>
                    {item.item}
                    {item.content.map(function(detail, index2) {
                    return [
                      <li class="list-group-item list-group-flush " >
                        {detail}
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


    return [
      
        <div class="content">

            <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
            <p><span>&nbsp;&nbsp;</span></p>  

            <img class="rounded" src={props.lang=="ch"?'./assets/images/investor04_8.png':'./assets/images/corporate_governance.png'}/>

            <p>{props.data[props.lang].p1}</p>
            <p>{props.data[props.lang].p2} </p>
            <ActiveList1 data={props.data[props.lang].items} />






        </div>

    ];

}

