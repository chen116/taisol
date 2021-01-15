class Content_shareholder_relations_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "shareholder_relations",
            lang: "eng",
            data :  {    
                title:"Shareholder Relations" , 
                table1:[
                  {name: '余清松',self_stock:'14,155,046',self_stock_per:"16.22", fam_stock:"773,431",fam_stock_per:"0.89",other_stock:"2,698,000",other_stock_pre:'3.09', name2:'隆昕實業',relation:'關係人',note:''},
                  {name: '隆昕實業股份有限公司法人代表：葉麗娟',self_stock:'2,698,000',self_stock_per:"3.09", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'余清松',relation:'關係人',note:''},
                  {name: '林千雅',self_stock:'1,844,321',self_stock_per:"2.11", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
                  {name: '台灣企銀受託保管群益創新科技基金專戶',self_stock:'1,200,000',self_stock_per:"1.38", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
                  {name: '群益馬拉基金專戶',self_stock:'1,030,000',self_stock_per:"1.18", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
                  {name: '謝君山',self_stock:'1,022,276',self_stock_per:"1.17", fam_stock:"280,466",fam_stock_per:"0.32",other_stock:"",other_stock_pre:'-', name2:'',relation:'',note:''},
                  {name: '元大人壽保險股份有限公司',self_stock:'956,000',self_stock_per:"1.10", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
                  {name: '復華傳家二號基金專戶',self_stock:'863,000',self_stock_per:"0.99", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
                  {name: '野村中小基金專戶',self_stock:'855,000',self_stock_per:"0.98", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
                  {name: '復華數位經濟基金專戶',self_stock:'812,000',self_stock_per:"0.93", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
              ]
          
        
              }
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