class Content_stakeholder_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "stakeholder",
            lang: "eng",
            data :  {   
                title: "Stakeholder Relations",   
                table1:[
                  {person: "Investor", topics:["Profitability","Risk Management"], jobs:["The company holds regular shareholder meetings on a regular basis, and all management will also participate in the whole process, detailed reports and responses to investors’ concerns. We also set up a special section on the relationship with investors on our website to increase the transparency of company operations. Smooth communication channels enable us to effectively manage risks, and transparency of information also allows investors to make wise decisions."]
                  ,results:[{txt:"latest news",href:"http://www.taisol.com.tw/news?lang=zh"}]},
                  {person: "Employee", topics:[
                    "Working Environment",
                    "Salary and Benefits",
                    "Promotion"
                  ]
                  , jobs:["We hope that all colleagues can feel that their voice is heard and valued. To this end, we have established a set of barrier-free employee voice systems and procedures, and provide dedicated telephone lines and mailboxes to allow employees’ opinions to reach the top management."]
                  ,results:[{txt:"Employee welfare, working environment and personal safety",href:"index.html?lang=eng&page=human_resources"}]},
                  {person: "Client", topics:["product quality"], jobs:[
                    "The company actively requires business units to maintain close contact with customers, promptly inform customers of their due rights, and ensure that the products reach the expected reliability and quality. We are also committed to providing customers with green products, and signed a restricted substance commitment guarantee with raw material suppliers, not using conflict minerals, and providing customers with products that meet the EU ROHS specifications.",
                    "In addition to establishing a complete customer complaint management system, the company also provides a channel for customers to communicate directly on the webpage. All customer complaints are handled directly by the company's deputy general manager."
                  ]
                  ,results:[]},
                  {person: "Supplier", topics:["Purchase conditions","Integrity management"], 
                  jobs:["The company strictly implements honest operation. After the purchasing unit reviews the actual transaction situation every year, it coordinates with the supplier the content of the contract for the next year. It also requires the purchasing unit not to accept the illegitimate benefits provided by the manufacturer in various forms."
                  ,"The company has provided a channel for direct communication with suppliers on its webpage, and complaints from suppliers are handled directly by the company's deputy general manager."],results:[]},
                  
                  {person: "Society", topics:["Environmental protection","Social welfare"], 
                  jobs:["The company has passed the ISO14001 environmental management system, and has established a number of operating methods in accordance with ISO14064 to actively promote the management of air, noise, water pollution and other pollution prevention and control, and to improve the standards for greenhouse gas management.",
                  "The company has set up scholarships and grants in universities to give the most substantial encouragement to young students with excellent academic performance."],
                  results:[{txt:"Social responsibility",href:"index.html?lang=eng&page=social"}, {txt:"ISO14001 certificate",href:"http://w3.taisol.com.tw/important/EMS-ARES-ISO14001.pdf"} ]},
                  
                  
               
                  
              ],
            
              list1:[
            
                {
                  title:"1. In order to implement the integrity management policy and actively prevent dishonest behaviors, the company has established a reporting mailbox mechanism to strictly prohibit any behavior and circumstances that violate business ethics. If there is a violation of the relevant laws and regulations of each business location or the company's various business ethics behaviors Standards are handled impartially and never lenient loans.", 
                  content:[]
                },
                {
                  title:"2. The company provides rewards for reporting: correct or report violations of the Integrity Code, and those that are verified to be true will be rewarded appropriately. In addition, for violations of professional ethics, all illegitimate benefits obtained shall be recovered and returned to the person or company claimed, and sanctions or combined sanctions shall be imposed according to the size of the circumstances.",
                  content:[]
                },
                {
                  title:"3. The reporting method is as follows:",
                  content:["Reporting mailbox: as shown below"]
                },
                {
                  title:"4. The whistleblower should provide at least the following information to establish a whistleblower case:",
                  content: 
                  [
                    "Internal employees: (1) factory category (2) job number (3) name.",
                    "Outsider: (1) Name (2) ID number.",
                    "The address, telephone and e-mail address of the informant can be contacted.",
                    "The name of the informant or other information sufficient to identify the identity of the informant.",
                    "Specific evidence available for investigation.",
                  ]
                },
                {
                  title:"5. According to the informant, the report item, and the target, the window for accepting the report is Miss Wu of the Management Department or Vice President Guo, the spokesperson, as shown below. The identity of the whistleblower and the content reported will be kept confidential except in accordance with the requirements of the law, and promised to protect the whistleblower and appropriate rewards.",
                  content:[]
                },
                {
                  title:"6. The company immediately assigns a special person to investigate the reported case. The relevant paper documents, electronic files, etc., in addition to being provided to judicial prosecutors and other units, will be locked and encrypted by dedicated personnel and kept properly.",
                            content:[]
                },
                {
                  title:"7. Operation process:",
                  content:[
                    "(1) Acceptance window→Chairman/General Manager→Management Department/Audit Office→Director/Supervisor.",
                    "(2) Management Department / Audit Office → Appointment of lawyers / judicial and inspection units. "

                  ]
                }
            
              ],
            
              list2:[
                "1. The personal data provided by you, including your name, telephone number, and email address, may be processed and used for the purpose of investigating and reporting matters and contacting during the investigation; if the investigation is necessary, the company may pass on what you need Personal information is given to relevant units such as the company's internal and judicial investigations.",
                "2. Do not knowingly false and deliberately fabricating facts, if the report is later proved to be malicious or deliberately fabricating false statements, you must bear the relevant legal responsibility.",
                "3. In order to investigate and solve the problem as soon as possible, please be sure to provide all possible relevant specific information and documents. If the relevant information and documents are not available, Taishuo will not be able to investigate.",
                "4. All or part of the relevant contact information provided by Taishuo Company to you shall not be disclosed to anyone. Except as required by law, you are not allowed to file a lawsuit based on the content of the contact between Taishuo and you or use the content of the contact as relevant information for the lawsuit.",
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