class Content_corporate_governance_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "corporate_governance",
            lang: "eng",
            data:{

               
                   
                    title: "Corporate Governance",
                    p1: "The company utilizes the management department and the finance department for corporate governance, and their department directors have more than three years of management experience in public companies; the duties include to assist in providing information required by the directors and supervisor, to help head supervisor to comply with laws and regulations, and to handle matters related to board of directors meetings and shareholders meeting in accordance with laws.",
                    p2: "Results and progress for this year:",

                    
                    items: [

                    {item: '1. Assisting directors and supervisors in performing their duties:',
                        content: ["(1) Assist in amending company's regulations which shall complies with laws and regulations, and deliver to directors for reference.",
                        "(2) Assist in maintaining clear communication channels between directors, supervisors and various company's business executive",
                        ' (3) Assist in maintaining communication channels between directors, supervisors and certified public accountants.']},

                     {item: '2. Assist in initiating and managing meetins for board of directors and shareholder:',
                        content:['(1)Assist in arranging meetings for the board of directors and shareholders in compliance with laws, regulations,and corporate governance standards.',
                        '(2) Assist in providing information needed for the meetings of board of directors and shareholders.',
                        ' (3) Confirm the correctness of major announcements in important issues resolved from the board of directors and shareholders meeting and make sure the information released complies with laws and regulations.',
                        '(4) Within the the time frame set by the law, finish the meeting records and other materials that are related to the board of directors and shareholders meetings.',
                        '(5) Irregularly remind the members of the board of directors not to engage in insider trading and inform them about corporate governance regulations.']},
                      {item: '3. Assist directors in arranging training courses for job requirement in compliance with laws and regulations. ',
                        content:[]
                        }           
        
        
               
            
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