class Content_customer_service_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "customer_service",
            lang: "eng",
            data :  {
                title:"Customer Service" ,     
               list1:[
                 "1. 您所提供的個人資料，包含姓名、電話、電子郵件地址，泰碩 公司於調查期間，得為調查舉報事項與聯繫用途而處理利用； 調查若有必要，泰碩公司得傳遞您必要的個人資訊予公司內部 及司法檢調等相關單位。",
                 "2. 不得明知不實而故意捏造事實，倘舉報事後被證明是出於惡意 或有故意捏造虛偽陳述之情事，您必須自負相關法律責任。",
                 "3. 為能盡早調查與解決問題，請您務必提供所有可能的相關具體 資訊與文件，若相關資訊與文件不齊備，泰碩公司將無法進行 調查。",
                 "4. 泰碩公司提供予您的相關聯絡內容，其全部或一部分皆不可向 任何人揭露。除依法律之規定要求外，您不得以泰碩公司與您 之間的聯絡內容提出訴訟或以該聯絡內容作為訴訟相關資料。",
                 
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