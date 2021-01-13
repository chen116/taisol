class Test extends React.Component {
    constructor(props){
        super(props);
        this.state={dd:1}
    }

    sayhi(){
        this.state.dd=this.state.dd+1;
        console.log("inside test dd: ",this.state.dd)
    }

    render(){
        
        this.props.handleLoad(this.state);

        return                      <button class="btn btn-secondary btn-sm" type="button"   onClick={()=>
            {
                this.sayhi();
                this.props.handleLoad(this.state);
            }}>
            {this.state.dd}
            </button>;}
}