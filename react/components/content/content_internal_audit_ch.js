class Content_internal_audit_ch extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "internal_audit",
            lang: "ch",
             data : {
                 title:"內部稽核",
                table1 : [
                    {date: "109.06.05", type: "座談會", items: ["1. 109年1~4月稽核業務執行情形、查核追蹤報告。","2. 就現行內控運作情形報告。"], results:["獨立董事、監察人洽悉。"]},
                    {date: "109.11.06", type: "座談會", items: [
                      "1. 109年5~10月稽核業務執行情形、查核追蹤報告。",
                      "2. 就現行內控運作情形報告。",
                      "3. 陳報110年稽核計畫。"
                    ], results:[
                      "1. 獨立董事、監察人洽悉。",
                      "2. 獨立董事、監察人洽悉。",
                      "3. 經審議後，送董事會決議。"
                    ]},
                    {date: "109.12.17", type: "座談會", items: ["1. 109年11月稽核業務執行情形報告。","2. 就現行內控運作情形報告。"], results:["1. 獨立董事、監察人洽悉。","2. 獨立董事、監察人洽悉"]},
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