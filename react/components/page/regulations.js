function Page_regulations(props) {
    const myPage = "regulations";

    if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}


    class ActiveList1 extends React.Component {
      constructor(props){
          super(props);
          this.state={
          };
      }
      render() {
          const list =  this.props.data.map( (link,index) => [
                <li class="list-group-item" ><img class="rounded" src="./assets/images/menu01.jpg"/> <span>&nbsp;&nbsp;</span>
                    <a href={link.href} target="_blank">{link.title}
                        {/* <img class="rounded" src="./assets/images/investor04_7.jpg"/> */}
                    </a>
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

            <p>{props.data[props.lang].p1} </p>

            <ActiveList1 data={props.data[props.lang].links} />






        </div>


    ];

}

