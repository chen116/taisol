class Content_compensation_committee extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "compensation_committee",
            data:{
                ch:{    
                        title:"薪酬委員會",
                        p1:"薪酬委員會章程",
                        p2:"薪酬委員會之組成",
                        p3:"薪酬委員會之職責",
                        p4:"薪酬委員會運作情形",
                        salary_regulations: [
                          {   
                              title:"第 一 條　訂定目的及依據", 
                              contents:[ 
                                  {   
                                      item: "為健全本公司董事、監察人及經理人薪資報酬制度，爰依「股票上市或於證券商營業處所買賣公司薪資報酬委員會設置及行使職權辦法」（以下簡稱「薪酬委員會職權辦法」）第三條之規定，訂定本薪資報酬委員會組織規程（以下簡稱「組織規程」），以資遵循。"  ,
                                      sub_items: []  
                                  }]
                          }, 
                          {   
                              title:"第 二 條　適用範圍", 
                              contents:[ 
                                  {
                                      item: "本公司薪資報酬委員會( 以下簡稱本委員會) 之職權相關事項，除法令或章程另有規定者外，應依本組織規程之規定。"  ,
                                      sub_items: []  
                                  }]
                          }, 
                          {   
                              title:"第 三 條　公告備查", 
                              contents:[ 
                                  {
                                      item: "本公司應將本組織規程之內容置於本公司網站及公開資訊觀測站，以備查詢。"  ,
                                      sub_items: []  
                                  }]
                          }, 
                          {   
                              title:"第 四 條　委員會之功能", 
                              contents:[ 
                                  {
                                      item: "本委員會之職能，係以專業客觀之地位，就本公司董事、監察人及經理人之薪資報酬政策及制度予以評估，並向董事會提出建議，以供其決策之參考。"  ,
                                      sub_items: []  
                                  }]
                          }, 
                          {   
                              title:"第 五 條　委員會之組成", 
                              contents:[ 
                                  {
                                      item: "本委員會成員人數為三人，由董事會決議委任之，其中一人為召集人。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "本委員會成員之專業資格與獨立性，應符合薪酬委員會職權辦法第五條及第六條之規定。"  ,
                                      sub_items: []  
                                  }]
                          }, 
                          {   
                              title:"第 六 條　委員會之任期及補選", 
                              contents:[ 
                                  {
                                      item: "本委員會成員之任期與委任之董事會屆期相同。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "本委員會之成員因故解任，致人數不足三人者，應自事實發生之即日起算三個月內召開董事會補行委任。"  ,
                                      sub_items: []  
                                  },
                              ]
                          }, 
                          {   
                              title:"第 七 條　職責範圍", 
                              contents:[ 
                                  {
                                      item: "本委員會應以善良管理人之注意，忠實履行下列職權，並將所提建議提交董事會討論。但有關監察人薪資報酬建議提交董事會討論，以監察人薪資報酬經公司章程訂明或股東會決議授權董事會辦理者為限："  ,
                                      sub_items: [
                                          "一、 定期檢討本規程並提出修正建議。",
                                          "二、 訂定並定期檢討本公司董事、監察人及經理人年度及長期之績效目標與薪資報酬之政策、制度、標準與結構。",
                                          "三、 定期評估本公司董事、監察人及經理人之績效目標達成情形，並訂定其個別薪資報酬之內容及數額。"
                                      ]  
                                  },
                                  {
                                      item: "本委員會履行前項職權時，應依下列原則為之："  ,
                                      sub_items: [
                                          "一、 確保公司之薪資報酬安排符合相關法令並足以吸引優秀人才。",
                                          "二、 董事、監察人及經理人之績效評估及薪資報酬，應參考同業通常水準支給情形，並考量個人所投入之時間、所擔負之職責、達成個人目標情形、擔任其他職位表現、公司近年給予同等職位者之薪資報酬，暨由公司短期及長期業務目標之達成、公司財務狀況等評估個人表現與公司經營績效及未來風險之關連合理性。",
                                          "三、 不應引導董事及經理人為追求薪資報酬而從事逾越公司風險胃納之行為。",
                                          "四、 針對董事及高階經理人短期績效發放紅利之比例及部分變動薪資報酬支付時間，應考量行業特性及公司業務性質予以決定。",
                                          "五、 本委員會成員對於其個人薪資報酬之決定，不得加入討論及表決。"
                                      ]  
                                  },   
                                  {
                                      item: "前二項所稱之薪資報酬，包括現金報酬、認股權、分紅入股、退休福利或離職給付、各項津貼及其他具有實質獎勵之措施；其範疇應與公開發行公司年報應行記載事項準則中有關董事、監察人及經理人酬金一致。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "本公司子公司之董事及經理人薪資報酬事項如依子公司分層負責決行事項須經本公司董事會核定者，應先經本委員會提出建議後，再提交董事會討論。"  ,
                                      sub_items: []  
                                  },             
                              ]
                          }, 
                          {   
                              title:"第 八 條　會議召開及召集", 
                              contents:[ 
                                  {
                                      item: "本委員會每年召開兩次，召集時應載明召集事由，於七日前通知委員會成員。但有緊急情事者，不在此限。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "本委員會由全體成員互推一人擔任召集人及會議主席；召集人請假或因故不能召集會議，由其指定委員會之其他成員代理之；該召集人未指定代理人者，由委員會之其他成員推舉一人代理之。"  ,
                                      sub_items: []  
                                  }]
                          }, 
                          {   
                              title:"第 九 條　議程之訂定", 
                              contents:[ 
                                  {
                                      item: "本委員會會議議程由召集人訂定，其他成員亦得提供議案供委員會討論。會議議程應事先提供予委員會之成員。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "本委員會召開時，公司應設簽名簿供出席成員簽到，並供查考。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "本委員會之成員應親自出席委員會，如不能親自出席，得委託其他成員代理出席；以視訊參與會議者，視為親自出席。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "本委員會成員委託其他成員代理出席委員會時，應於每次出具委託書，且列舉召集事由之授權範圍。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "第三項代理人，以受一人之委託為限。"  ,
                                      sub_items: []  
                                  }]
                          }, 
                          {   
                              title:"第 十 條　決議方法", 
                              contents:[ 
                                  {
                                      item: "本委員會為決議時，應有全體成員二分之一以上同意。表決時如經委員會主席徵詢無異議者，視為通過，其效力與投票表決同。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "前項表決之結果，應當場報告，並作成紀錄。"  ,
                                      sub_items: []  
                                  }]
                          }, 
                          {   
                              title:"第十一條　議事錄", 
                              contents:[ 
                                  {
                                      item: "本委員會之議事，應作成議事錄，議事錄應詳實記載下列事項："  ,
                                      sub_items: [
                                          "一、 會議屆次及時間地點。 	",
                                          "二、 主席之姓名。 	",
                                          "三、 成員出席狀況， 包括出席、請假及缺席者之姓名與人數。",
                                          "四、 列席者之姓名及職稱。 	",
                                          "五、 紀錄之姓名。 	",
                                          "六、 報告事項。 	",
                                          "七、 討論事項：各議案之決議方法與結果、委員會成員之反對或保留意見。",
                                          "八、 臨時動議：提案人姓名、議案之決議方法與結果、委員會之成員、專家及其他人員發言摘要、反對或保留意見。",
                                          "九、 其他應記載事項。"
                                      ]  
                                  },
                                  {
                                      item: "本委員會簽到簿為議事錄之一部分；以視訊會議召開者，其視訊影音資料亦為議事錄之一部分。"  ,
                                      sub_items: []  
                                  },   
                                  {
                                      item: "議事錄須由會議主席及記錄人員簽名或蓋章，於會後二十日內分送委員會成員，並應呈報董事會及列入公司重要檔案，且應保存五年；議事錄之製作及分發，得以電子方式為之。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "前項保存期限未屆滿前，發生關於本委員會相關事項之訴訟時，應保存至訴訟終止為止。"  ,
                                      sub_items: []  
                                  },             
                              ]
                          }, 
                          {   
                              title:"第十二條　會議決議之辦理", 
                              contents:[ 
                                  {
                                      item: "本委員會基於第七條所定職權之決議事項，或依第十三條第二項決議委任專業人員等之後續執行工作，得授權召集人或委員會其他成員續行辦理，並於執行期間向本委員會為書面報告；必要時應於下一次會議提報本委員會追認或報告。"  ,
                                      sub_items: []  
                                  }
                              ]
                          },
                          {   
                              title:"第十三條　行使職權之資源", 
                              contents:[ 
                                  {
                                      item: "本委員會召開時，得請本公司董事、相關部門經理人員、內部稽核人員、會計師、法律顧問或其他人員列席會議，並提供相關必要之資訊。"  ,
                                      sub_items: []  
                                  },
                                  {
                                      item: "本委員會得經決議，委任律師、會計師或其他專業人員，就行使職權有關之事項為必要之查核或提供諮詢，其相關費用由公司負擔。"  ,
                                      sub_items: []  
                                  }]
                          },
                          {   
                              title:"第十四條　施行", 
                              contents:[ 
                                  {
                                      item: "本組織規程經董事會通過後施行，修正時亦同。"  ,
                                      sub_items: []  
                                  }
                              ]
                          },
                          {   
                              title:"第十五條 本規程訂立於民國一○○年十二月二十九日。", 
                              contents:[ 
                                  {
                                      item: ""  ,
                                      sub_items: []  
                                  }
                              ]
                          }
                          
                        ],
                        table1 : [
                          {title: "召集人/獨立董事","name":"張文添","pro_exp1":"✔","pro_exp2":"-","pro_exp3":"✔","fit_item1":"✔","fit_item2":"✔","fit_item3":"✔","fit_item4":"✔","fit_item5":"✔","fit_item6":"✔","fit_item7":"✔","fit_item8":"✔","fit_item9":"✔","fit_item10":"✔","num_company":"-","note":"-"},
                          {title: "委  員/獨立董事","name":"曾天運","pro_exp1":"-","pro_exp2":"✔","pro_exp3":"✔","fit_item1":"✔","fit_item2":"✔","fit_item3":"✔","fit_item4":"✔","fit_item5":"✔","fit_item6":"✔","fit_item7":"✔","fit_item8":"✔","fit_item9":"✔","fit_item10":"✔","num_company":"-","note":"-"},
                          {title: "委  員/獨立董事","name":"陳志弘","pro_exp1":"-","pro_exp2":"-","pro_exp3":"✔","fit_item1":"✔","fit_item2":"✔","fit_item3":"✔","fit_item4":"✔","fit_item5":"✔","fit_item6":"✔","fit_item7":"✔","fit_item8":"✔","fit_item9":"✔","fit_item10":"✔","num_company":"-","note":"-"},
                        ],
                        table2 : [
                            {title: "召集委員","name":"張文添","real_show":"5","asked_show":"","real_show_per":"100.00%", "note": "107.6.19連任。" },
                            {title: "委員","name":" 曾天運","real_show":"5","asked_show":"","real_show_per":"100.00%", "note": "107.6.19連任。" },
                            {title: "委員","name":"陳志弘","real_show":"5","asked_show":"","real_show_per":"100.00%", "note": "107.6.19連任。" },
                          ],
                  
                        meetings : [
                            {
                                "date" : "薪酬委員會日期：108年1月25日", 
                                contents: [ 
                                    {"summary": "(1)本公司民國一○七年年終獎金暨一○六年員工酬勞發放標準及擬發放金額案。", "result":"無異議照案通過。"},
                                    {"summary": "(2)擬訂本公司一O七年度員工及董監事酬勞提撥案，提請討論。", "result":"無異議照案通過。"} 
                                ]
                            },
                            {
                                "date" : "薪酬委員會日期：108年8月12日", 
                                contents: [ 
                                    {"summary": "(1)一○八年度董事兼任經理人薪資調整討論案。", "result":"無異議照案通過。"},
                                    {"summary": "(2)為公司營運管理之需，調升經理人員討論案。", "result":"無異議照案通過。"} 
                                ]
                            },    
                            {
                                "date" : "薪酬委員會日期：108年10月4日", 
                                contents: [ 
                                    {"summary": "(1)子公司泗陽泰碩電子有限公司(以下簡稱泗陽泰碩)因管理之需，增聘經理人員薪酬案，提請 審議。", "result":"無異議照案通過。"},
                                    {"summary": "(2)為公司營運管理之需，調升經理人員討論案。", "result":"無異議照案通過。"} 
                                ]
                            },   
                            {
                                "date" : "薪酬委員會日期：109年1月16日", 
                                contents: [ 
                                    {"summary": "(1)本公司民國一○八年年終獎金暨一○七年員工酬勞發放標準及擬發放金額案。", "result":"無異議照案通過。"}
                                ]
                            },    
                            {
                                "date" : "薪酬委員會日期：109年3月13日", 
                                contents: [ 
                                    {"summary": "(1)擬訂本公司一O八年度員工及董監事酬勞提撥案，提請討論。", "result":"無異議照案通過。"},
                                    {"summary": "(2)修訂本公司「董事及經理人績效評估辦法」案，提請討論。", "result":"無異議照案通過。"}
                                ]
                            },        
                        ]
                },
                eng:{
                   
                    title:"Compensation Committee ",
                    p1:"Remuneration Committee Charter",
                    p2:"Remuneration Committee Composition ",
                    p3:"Remuneration Committee Responsibilities",
                    p4:"Remuneration Committee Opeartion",
                    salary_regulations: [
                        {   
                            title:"Article 1 Purpose and basis", 
                            contents:[ 
                                {   
                                    item: 'In order to improve the remuneration system for directors, supervisors and managers of the company, we follow Article 3 of the "Measures for the Establishment and Exercising of Remuneration Committees of Companies Listed in Stocks or Trading Companies at the Business Places of Securities Firms" (hereinafter referred to as "Measures for Remuneration Committees") The organization rules of the Salary and Compensation Committee (hereinafter referred to as the "organization rules") are formulated for the purpose of compliance.',
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"第 二 條　適用範圍", 
                            contents:[ 
                                {
                                    item: "本公司薪資報酬委員會( 以下簡稱本委員會) 之職權相關事項，除法令或章程另有規定者外，應依本組織規程之規定。"  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"第 三 條　公告備查", 
                            contents:[ 
                                {
                                    item: "本公司應將本組織規程之內容置於本公司網站及公開資訊觀測站，以備查詢。"  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"第 四 條　委員會之功能", 
                            contents:[ 
                                {
                                    item: "本委員會之職能，係以專業客觀之地位，就本公司董事、監察人及經理人之薪資報酬政策及制度予以評估，並向董事會提出建議，以供其決策之參考。"  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"第 五 條　委員會之組成", 
                            contents:[ 
                                {
                                    item: "本委員會成員人數為三人，由董事會決議委任之，其中一人為召集人。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "本委員會成員之專業資格與獨立性，應符合薪酬委員會職權辦法第五條及第六條之規定。"  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"第 六 條　委員會之任期及補選", 
                            contents:[ 
                                {
                                    item: "本委員會成員之任期與委任之董事會屆期相同。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "本委員會之成員因故解任，致人數不足三人者，應自事實發生之即日起算三個月內召開董事會補行委任。"  ,
                                    sub_items: []  
                                },
                            ]
                        }, 
                        {   
                            title:"第 七 條　職責範圍", 
                            contents:[ 
                                {
                                    item: "本委員會應以善良管理人之注意，忠實履行下列職權，並將所提建議提交董事會討論。但有關監察人薪資報酬建議提交董事會討論，以監察人薪資報酬經公司章程訂明或股東會決議授權董事會辦理者為限："  ,
                                    sub_items: [
                                        "一、 定期檢討本規程並提出修正建議。",
                                        "二、 訂定並定期檢討本公司董事、監察人及經理人年度及長期之績效目標與薪資報酬之政策、制度、標準與結構。",
                                        "三、 定期評估本公司董事、監察人及經理人之績效目標達成情形，並訂定其個別薪資報酬之內容及數額。"
                                    ]  
                                },
                                {
                                    item: "本委員會履行前項職權時，應依下列原則為之："  ,
                                    sub_items: [
                                        "一、 確保公司之薪資報酬安排符合相關法令並足以吸引優秀人才。",
                                        "二、 董事、監察人及經理人之績效評估及薪資報酬，應參考同業通常水準支給情形，並考量個人所投入之時間、所擔負之職責、達成個人目標情形、擔任其他職位表現、公司近年給予同等職位者之薪資報酬，暨由公司短期及長期業務目標之達成、公司財務狀況等評估個人表現與公司經營績效及未來風險之關連合理性。",
                                        "三、 不應引導董事及經理人為追求薪資報酬而從事逾越公司風險胃納之行為。",
                                        "四、 針對董事及高階經理人短期績效發放紅利之比例及部分變動薪資報酬支付時間，應考量行業特性及公司業務性質予以決定。",
                                        "五、 本委員會成員對於其個人薪資報酬之決定，不得加入討論及表決。"
                                    ]  
                                },   
                                {
                                    item: "前二項所稱之薪資報酬，包括現金報酬、認股權、分紅入股、退休福利或離職給付、各項津貼及其他具有實質獎勵之措施；其範疇應與公開發行公司年報應行記載事項準則中有關董事、監察人及經理人酬金一致。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "本公司子公司之董事及經理人薪資報酬事項如依子公司分層負責決行事項須經本公司董事會核定者，應先經本委員會提出建議後，再提交董事會討論。"  ,
                                    sub_items: []  
                                },             
                            ]
                        }, 
                        {   
                            title:"第 八 條　會議召開及召集", 
                            contents:[ 
                                {
                                    item: "本委員會每年召開兩次，召集時應載明召集事由，於七日前通知委員會成員。但有緊急情事者，不在此限。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "本委員會由全體成員互推一人擔任召集人及會議主席；召集人請假或因故不能召集會議，由其指定委員會之其他成員代理之；該召集人未指定代理人者，由委員會之其他成員推舉一人代理之。"  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"第 九 條　議程之訂定", 
                            contents:[ 
                                {
                                    item: "本委員會會議議程由召集人訂定，其他成員亦得提供議案供委員會討論。會議議程應事先提供予委員會之成員。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "本委員會召開時，公司應設簽名簿供出席成員簽到，並供查考。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "本委員會之成員應親自出席委員會，如不能親自出席，得委託其他成員代理出席；以視訊參與會議者，視為親自出席。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "本委員會成員委託其他成員代理出席委員會時，應於每次出具委託書，且列舉召集事由之授權範圍。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "第三項代理人，以受一人之委託為限。"  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"第 十 條　決議方法", 
                            contents:[ 
                                {
                                    item: "本委員會為決議時，應有全體成員二分之一以上同意。表決時如經委員會主席徵詢無異議者，視為通過，其效力與投票表決同。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "前項表決之結果，應當場報告，並作成紀錄。"  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"第十一條　議事錄", 
                            contents:[ 
                                {
                                    item: "本委員會之議事，應作成議事錄，議事錄應詳實記載下列事項："  ,
                                    sub_items: [
                                        "一、 會議屆次及時間地點。 	",
                                        "二、 主席之姓名。 	",
                                        "三、 成員出席狀況， 包括出席、請假及缺席者之姓名與人數。",
                                        "四、 列席者之姓名及職稱。 	",
                                        "五、 紀錄之姓名。 	",
                                        "六、 報告事項。 	",
                                        "七、 討論事項：各議案之決議方法與結果、委員會成員之反對或保留意見。",
                                        "八、 臨時動議：提案人姓名、議案之決議方法與結果、委員會之成員、專家及其他人員發言摘要、反對或保留意見。",
                                        "九、 其他應記載事項。"
                                    ]  
                                },
                                {
                                    item: "本委員會簽到簿為議事錄之一部分；以視訊會議召開者，其視訊影音資料亦為議事錄之一部分。"  ,
                                    sub_items: []  
                                },   
                                {
                                    item: "議事錄須由會議主席及記錄人員簽名或蓋章，於會後二十日內分送委員會成員，並應呈報董事會及列入公司重要檔案，且應保存五年；議事錄之製作及分發，得以電子方式為之。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "前項保存期限未屆滿前，發生關於本委員會相關事項之訴訟時，應保存至訴訟終止為止。"  ,
                                    sub_items: []  
                                },             
                            ]
                        }, 
                        {   
                            title:"第十二條　會議決議之辦理", 
                            contents:[ 
                                {
                                    item: "本委員會基於第七條所定職權之決議事項，或依第十三條第二項決議委任專業人員等之後續執行工作，得授權召集人或委員會其他成員續行辦理，並於執行期間向本委員會為書面報告；必要時應於下一次會議提報本委員會追認或報告。"  ,
                                    sub_items: []  
                                }
                            ]
                        },
                        {   
                            title:"第十三條　行使職權之資源", 
                            contents:[ 
                                {
                                    item: "本委員會召開時，得請本公司董事、相關部門經理人員、內部稽核人員、會計師、法律顧問或其他人員列席會議，並提供相關必要之資訊。"  ,
                                    sub_items: []  
                                },
                                {
                                    item: "本委員會得經決議，委任律師、會計師或其他專業人員，就行使職權有關之事項為必要之查核或提供諮詢，其相關費用由公司負擔。"  ,
                                    sub_items: []  
                                }]
                        },
                        {   
                            title:"第十四條　施行", 
                            contents:[ 
                                {
                                    item: "本組織規程經董事會通過後施行，修正時亦同。"  ,
                                    sub_items: []  
                                }
                            ]
                        },
                        {   
                            title:"第十五條 本規程訂立於民國一○○年十二月二十九日。", 
                            contents:[ 
                                {
                                    item: ""  ,
                                    sub_items: []  
                                }
                            ]
                        }
                        
                      ],
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