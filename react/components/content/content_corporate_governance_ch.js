class Content_corporate_governance_ch extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "corporate_governance",
            lang: "ch",
            data:{
               
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