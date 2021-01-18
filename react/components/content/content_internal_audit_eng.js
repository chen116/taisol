class Content_internal_audit_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "internal_audit",
            lang: "eng",
            data : {
                title:"Internal Audit",
               table1 : [
                   {date: "2020/06/05", type: "forum", items: ["1. From January to April of 2009, audit business execution status and audit tracking report.",
                                                               "2. Report on current internal control operations."], results:["Independent directors and supervisors acknowledged."]},
                   {date: "2020/11/06", type: "forum", items: [
                    "1. From May to October, 2020, audit business execution status and audit tracking report.",
                    "2. Report on current internal control operations.",
                    "3. Report the 2021-year audit plan."
                   ], results:[
                     "1. Independent directors and supervisors acknowledged.",
                     "2. Independent directors and supervisors acknowledged.",
                     "3. After deliberation, it is sent to the board of directors for resolution."
                   ]},
                   {date: "109.12.17", type: "forum", items: ["1. Report on the implementation of audit business in November 2020","2. Report on current internal control operations."], results:["1. Independent directors and supervisors acknowledged.","2. Independent directors and supervisors acknowledged."]},
                 ]
       
       
           
           },
        }
            
    }

    loadData = () => {
        this.props.onLoadData(this.state.data,this.state.key,this.state.lang);            
    }
    componentDidMount() {
        window.addEventListener('load',this.loadData);
     }
    render(){return null};        

}