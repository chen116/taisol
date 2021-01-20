class Content_customer_service_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "customer_service",
            lang: "eng",
            data :  {
                title:"Customer Service" ,     
               list1:[

"1. The personal data provided by you, including your name, telephone number, and email address, may be processed and used for the purpose of investigating and reporting matters and contacting during the investigation; if the investigation is necessary, the company may pass on necessary personal information to relevant units such as the company's internal and judicial investigation system.",
"2. Do not knowingly false and deliberately fabricating facts, if the report is later proved to be malicious or deliberately fabricating false statements, you must bear the relevant legal responsibility.",
"3. In order to investigate and solve the problem as soon as possible, please be sure to provide all possible relevant specific information and documents. If the relevant information and documents are not available, TaiSol will not be able to investigate.",
"4. All or part of the relevant contact information provided by TaiSol Company to you shall not be disclosed to anyone. Except if required by law, you are not allowed to file a lawsuit based on the content of the contact between TaiSol and you or use the content of the contact as relevant information for the lawsuit.",
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