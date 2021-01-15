class Content_corporate_governance_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "corporate_governance",
            lang: "eng",
            data:{

               
                   
                    title: "Corporate Governance",
  
                    p1: " The company takes the management department and the finance department as the main part-time units of corporate governance, and its department heads have more than three years of management experience in public offering companies engaged in financial management;to assist in providing information required by directors and supervisors to perform their business and assist directors Supervisors are responsible for complying with laws and regulations, and handling matters related to meetings of the board of directors and shareholders meeting in accordance with the law.",
                    p2: "The business execution situation this year is as follows:",

                    
                    items: [

                    {item: '1. Assisting directors and supervisors in performing their duties:',
                        content: ['(1) Amending laws and regulations, assisting in formulating company-related operating methods, so as to provide directors with knowledge and reference.',
                        "(2) Assist in maintaining communication and exchanges between directors, supervisors and the company's various business executives.",
                        ' (3) Assist in maintaining communication and exchanges between directors, supervisors and certified accountants.']},

                     {item: '2. Assist in the convening, agenda and other related matters of the board of directors and shareholder meetings :',
                        content:['(1) Assist in the notice, convening, and agenda of the board of directors and shareholder meetings in compliance with laws and regulations and corporate governance standards.',
                        '(2) Assist in providing information on the board of directors and shareholders meeting.',
                        ' (3) Confirm that the major information announcements of important resolutions after the board of directors and shareholders meeting are correct and comply with laws and regulations.',
                        '(4) Complete the minutes of the board of directors and shareholders meeting and other relevant materials within the time limit prescribed by the law.',
                        '(5) Advising members of the board of directors from time to time, including laws and regulations that should not engage in insider trading and corporate governance regulations.']},
                      {item: '3. Assist directors in arranging advanced training courses according to laws and regulations and job needs. ',
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