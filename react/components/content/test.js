class Test extends React.Component {
    constructor(props){
        super(props);
        this.state={qq:1}
    }
    handleData = (data) => {
        this.props.onPassingChildData(data);            
    }

    sayhi(){
        // this.state.dd=this.state.dd+1;
        this.setState({dd:this.state.dd+1 });
        console.log("inside test dd: ",this.state.dd)
    }
    
    render(){
        
        return <div>{this.handleData(1)}</div>};        

        // return <button class="btn btn-secondary btn-sm" type="button"   onClick={()=>
        //     {
        //         this.sayhi();
        //         this.props.handleLoad(this.state);
        //     }}>
        //     {this.state.dd}
        //     </button>;}
}