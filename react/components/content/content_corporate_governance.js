class Content_corporate_governance extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "corporate_governance",
            data:{
                ch:{
                    title: "公司治理",
                    

                    p1:"本公司以管理部、財務部為公司治理之主要兼職單位，其部門主管已具備公開發行公司從事財務等管理工作經驗達三年以上；以協助提供董事、監察人執行業務所需之資料、協助董監事 遵循法令、依法辦理董事會及股東會之會議相關事宜等為職責。" ,                   
                    p2:"本年度業務執行情形如下： ",
                    items: [

                    {item: '一、協助董事、監察人執行職務：',
                        content: ['（一）依法令規章之修訂，協助訂定公司相關作業辦法，俾以提供董事知悉、參考。',
                        '（二）協助維持董事、監察人與公司各項業務主管之溝通、交流。',
                        '（三）協助維持董事、監察人與簽證會計師之溝通、交流。']},
                     {item: '二、協助董事會、股東會之召開、議程及其他相關事宜：',
                        content:['（一）協助董事會、股東會之通知、召開、議程等均遵循法令及公司治理之規範。',
                        '（二）協助提供董事會、股東會之議事資料。',
                        '（三）確認董事會、股東會後各項重要決議之重大訊息公告均正確且遵循法令。',
                        '（四）依法令規定期限內完成董事會、股東會後之議事錄等相關資料。',
                        '（五）不定期向董事會成員宣導包括不應從事內線交易等法令及公司治理之規定。']},
                      {item: '三、協助董事依法令規定及職務需要，安排進修課程。',
                        content:[]
                        }           
        
        
               
            
                  ]},
                eng:{
                   
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
        
        
               
            
                  ]},

            }
        }
            
    }

    loadData = () => {
        this.props.onLoadData(this.state.data,this.state.key);            
    }
    componentDidMount() {
        window.addEventListener('load',this.loadData);
     }
    render(){return null};        

}