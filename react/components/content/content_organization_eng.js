class Content_organization_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "organization",
            lang: "eng",
            data : {
                title:"Organization and Responsibilities",
                p1:"Organization",
                p2:"Departments",
                p3:"Management",
                table1 : [
                    {   name: "HQO",
                        summary: "Adhere to the orders of the general manager, carry out the promotion and implementation of the projected business, and be responsible for maintaining the public relations of investors.",
                        details : [] 
                        
                    },
                    {   name: "Aduit", 
                        summary: "Carry out the audit work of the internal control system, check and evaluate the correctness of the company's operating records make suggestions for improvement.",
                        details : [] 
                        
                    },
                    {   name: "Financial Management",
                        summary: "Adhering to the orders of the general manager, in charge of the company's financial, personnel, general affairs, public relations and other matters. Sub-divisions include financial office and management office.",
                        details : ["(1) Plan the company's operating policy and implement the resolutions of the board of directors, establish the company's operating system and supervise daily operations.",
                        "(2) Handle the company's internal and external public relations and inter-departmental communication and coordination."] 
                        
                    },
                    {   
                        name: "Management Information System", 
                        summary: "",
                        details : ["(1) Maintenance and software integration of ERP system.",
                        "(2) The establishment of the internal network and the update and maintenance of the email system.",
                        "(3) Update and maintenance of software and hardware equipment.",
                        "(4) Information security maintenance and promotion."]
                    },
                    {   
                        name: "Finance", 
                        summary: "",
                        details : ["(1) Responsible for the management and promotion of company personnel, administration, general affairs, stock affairs and fixed assets.",
                        "(2) The maintenance and litigation of the company's intellectual property rights.",
                        "(3) Responsible for labor safety and health planning and management and formulating the company's occupational disaster prevention measures."] 
                    
                    },
                    {   
                        name: "Martketing", 
                        summary: "Adhering to the orders of the general manager, with the goal of creating the company's maximum profit, the four marketing offices are divided into radiator, communication, connector and card reader.",
                        details : [
                            "(1) Collect market information and provide it to the supervisor and R&D department.",
                            "(2) Price policy formulating and estimating, market planning and projection.",
                            "(3) Manage product advertising and exhibition.",
                            "(4) Review suggestions for new product development.",
                            "(5) Draft initial product specifications and cost analysis.",
                        ]
                    
                    },
                    
                    {   
                        name: "Business", 
                        summary: "Following the orders of the general manager and aiming at achieving performance and creating the company's maximum profit, it has five major product lines including Japan, communications, heat transfer, connectors, and card readers:",
                        details : [
                            "(1) Development, investigation, selection, contact and service of customers.",
                            "(2) Contact and coordination of contract and order review, production and sales, and shipment control.",
                            "(3) Contact handling of customer complaints and maintenance.",
                            "(4) Reflect the abnormal quality information to the quality assurance unit, collect and provide technical information to the customer.",
                            "(5) Arrange for shipment and delivery matters."
                        ]
                    
                    },
                    
                    
                    {   
                        name: "R&D", 
                        summary: "Following the orders of the general manager, R&D is responsible for the company's product development, manufacturing technical support, sales technical support, and customer support. There are communication research and development department, heat transfer research and development department, connector research and development department, card reader research and development department, and management department.",
                        details : 
                        [
                            "Communication R&D Department:",
                            "(1) Approval of the design of communication cooling products and related parts.",                          
                            "(2) Conduct development and trial production.",                          
                            "(3) Assist in solving customer technical problems.",                          
                            "Heat Transfer R&D Department:",                          
                            "(1) Approval of radiator design and related parts.",                          
                            "(2) Conduct development and trial production.",                          
                            "(3) Assist in solving customer technical problems.",                          
                            "Connector R&D Department:",                          
                            "(1) Approval of connector design and related parts.",                          
                            "(2) Conduct development and trial production.",                          
                            "(3) Assist in solving customer technical problems.",                          
                            "Reader R&D Department:",                          
                            "(1) The recognition of card reader design and related parts.",                          
                            "(2) Product development and trial production.",                          
                            "(3) Assist in solving customer technical problems.",
                        ]
        
                    
                    },
        
                    
                    {   
                        name: "Materials", 
                        summary: "Following the orders of the general manager and aiming at achieving performance and creating the company's maximum profit, it has five major product lines including Japan, communications, heat transfer, connectors, and card readers:",
                        details : [
                            "(1) Responsible for the procurement of raw materials, various equipment, etc., to achieve a procurement strategy of proper quality, quantity, time and price.",
                            "(2) Control and record material storage and inventory, and maintain the integrity of the inventory in the factory to meet the timely supply requirements.",
                        ] 
                    
                    },
        
                    {   
                        name: "Health Management", 
                        summary: "Following the orders of the general manager and aiming at achieving performance and creating the company's maximum profit, it has five major product lines including Japan, communications, heat transfer, connectors, and card readers:",
                        details : [
                            "(1) Production scheduling planning for manufacturing department.","(2) Responsible for the purchase of raw materials and material arrangements."]
                        
                    
                    },       
                    
                    
                    
                    {   
                        name: "Quality Control", 
                        summary: "Following the orders of the general manager and aiming at achieving performance and creating the company's maximum profit, it has five major product lines including Japan, communications, heat transfer, connectors, and card readers:",
                        details : [
                            "(1) Carry out the company's quality policy, ensure the implementation of the quality system and audit and improve quality operations.",
                            "(2) Provide operators with quality suggestions, assist and coordinate various departments to implement quality assurance work, and implement quality improvement activities and education training to provide customers with satisfactory services."
                        ] 
                    
                    }, 
                            
                    {   
                        name: "Manufacturing", 
                        summary: "Following the orders of the general manager and aiming at achieving performance and creating the company's maximum profit, it has five major product lines including Japan, communications, heat transfer, connectors, and card readers:",
                        details : ["(1) Responsible for the manufacture and production of company products.",
                            "(2) Improvement of production process and increase of yield."] 
                    
                    },     
                  
                  
                ],
                table2 : [
                    {"title": "Chairman",name:"Ching-Sung Yu","exps":["Department of Business Administration, Datong Institute of Technology"]},
                    {"title": "General manager",name:"Chun-Hsin Liang","exps":[
                        "Department of Economics, Tunghai University",
                        "General Manager of SINBON Electronics Co., Ltd.",
                        "Supervisor of SINBON Electronics Co., Ltd.",
                        "CEO of Digital Medical Equipment Co., Ltd.",
                    ]}
                ],
        
        
               
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