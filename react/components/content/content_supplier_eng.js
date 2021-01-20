class Content_supplier_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "supplier",
            lang: "eng",
            data :  {          
                title:"Supplier Management",
                list1:[
                      "1. Set up an environmental management system and environmental goals: Suppliers must passed ISO 14001 or RC14001.",
                      "2. Prohibition of hazardous substances in raw materials: Suppliers must provide a statement to ensure that their products do not contain internationally banned substances that are harmful to the environment, and to ensure that the products meet the requirements of customers and relevant international laws and regulations, such as EU RoHS.",
                      "3. Compliance with environmental protection laws and regulations: The supplier must comply with the local government's relevant air pollution prevention and control, water pollution prevention and control, waste and toxic substance management and other environmental protection laws; after verification of violations of laws and regulations, they must promptly propose improvement plans .",
                      "4. Energy saving and carbon reduction: Encourage suppliers to build factory carbon inventory data, establish product carbon footprint, and provide specific carbon reduction performance.",
                      "5. Water resources and water conservation: Encourage suppliers to build water inventory data for factories and provide specific water resources management plans. ",
                      'Note: "Conflict-free" raw materials refer to the raw materials that come from suppliers approved by the Electronic Industry Citizenship Alliance or other equivalent organizations, or are fully funded in accordance with relevant laws and regulations after reasonable verification and due diligence Suppliers identified as "DRC conflict free" (DRC conflict free). '
                    ],

                    list2:[
                      "1. The personal data provided by you, including your name, telephone number, and email address, may be processed and used for the purpose of investigating and reporting matters and contacting during the investigation; if the investigation is necessary, the company may pass on what your necessary personal information to relevant units such as the company's internal and judicial investigation system.",
                      "2. Do not knowingly false and deliberately fabricating facts, if the report is later proved to be malicious or deliberately fabricating false statements, you must bear the relevant legal responsibility.",
                      "3. In order to investigate and solve the problem as soon as possible, please be sure to provide all possible relevant specific information and documents. If the relevant information and documents are not available, TaiSol will not be able to investigate.",
                      "4. All or part of the relevant contact information provided by TaiSol to you shall not be disclosed to anyone. Except if required by law, you are not allowed to file a lawsuit based on the content of the contact between TaiSol and you or use the content of the contact as relevant information for the lawsuit.",
                      
                    ]}
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