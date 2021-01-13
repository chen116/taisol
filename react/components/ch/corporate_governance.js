function Page_corporate_governance(props) {
    const myPage = "corporate_governance";
    var data = {
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
    };

    class ActiveList1 extends React.Component {
      constructor(props){
          super(props);
          this.state={
          };
      }
      render() {
          const list =  this.props.data.map( (item,index) => [
                <li class="list-group-item list-group-flush " ><img class="rounded" src="./assets/images/menu01.jpg"/> <span>&nbsp;&nbsp;</span>
                    {item.item}
                    {item.content.map(function(detail, index2) {
                    return [
                      <li class="list-group-item list-group-flush " >
                        {detail}
                      </li>
                    ]
                    
                    })}
                </li>
            ]);
          return (
            <ul class="list-group list-group-flush ">
              {list}
            </ul>

          )
      }
    }  

    if (myPage != props.currentPage){return null;}
    return [
        <div class="content">
            <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>公司治理 </h4>
            <p><span>&nbsp;&nbsp;</span></p> 

            <img class="rounded" src="./assets/images/investor04_8.png"/>

            <p>本公司以管理部、財務部為公司治理之主要兼職單位，其部門主管已具備公開發行公司從事財務等管理工作經驗達三年以上；以協助提供董事、監察人執行業務所需之資料、協助董監事 遵循法令、依法辦理董事會及股東會之會議相關事宜等為職責。 </p>
            <p>本年度業務執行情形如下： </p>
            <ActiveList1 data={data.items} />






        </div>


    ];

}

