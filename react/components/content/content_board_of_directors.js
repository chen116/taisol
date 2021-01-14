class Content_board_of_directors extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "board_of_directors",
            data:{
                ch:{
                    title: "董事會",
                    p1:"本公司之董事、監察人含2名女性、7名男性；分別在電子零組件或周邊產品業、橡膠業、銀行業、光電業、玻璃陶瓷業、通信網路業、水泥工業、證券業、電信業等，具有行銷企劃、經營管理、領導決策、產業知識、財務會計之專業經驗與素養。",
                    p2:"董事(含獨立董事)及監察人資料(1)",
                    p3:"董事(含獨立董事)及監察人資料(2)",
                       table1 : [
                        {title:"董事長",from:"臺灣",name:"余清松",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"88.11.06",stock1:"11,799,516",stock_per1:"16.9",stock2:"14,155,046",stock_per2:"16.37",stock3:"773.431",stock_per3:"0.89",stock4:"3151000",stock_per4:"3.64",exps:["大同工學院工商管理系畢"],other_titles:["泰碩電子(香港)有限公司 董事","世窗電子(香港)有限公司 董事","TAISOL ELEC. JAPAN 董事","衡國企業(股)公司 董事長"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                        {title:"董  事",from:"臺灣",name:"林展列",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"102.04.22",stock1:"-",stock_per1:"-",stock2:"104.000",stock_per2:"0.12",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["台南高工機械工程科","萬旭電業股份有限公司 總經理","萬旭電業股份有限公司 董事"],other_titles:["萬旭電業股份有限公司 顧問","萬旭電業股份有限公司 董事","胡連精密股份有限公司 獨立董事","泗陽泰碩電子有限公司 董事兼法人代表","泰碩電子(股)公司 董事/營運長","蘇州泰碩電子有限公司 董事","TAISOL ELEC. JAPAN 董事","鈺邦科技股份有限公司 監察人"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                        {title:"董  事",from:"臺灣",name:"梁竣興",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"107.06.19",stock1:"38000",stock_per1:"0.05",stock2:"98.813",stock_per2:"0.11",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["東海大學經濟系","信邦電子(股)公司 總經理/營運長/顧問"],other_titles:["東莞泰碩電子有限公司 董事","泰碩電子(股)公司 總經理","泗陽泰碩電子有限公司 董事"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                        {title:"董  事",from:"日本",name:"蘆原錦吾",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"107.06.19",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["中興大學地政系","信邦電子(股)公司 董事"],other_titles:["Oriental Computer Inc.  President"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                        {title:"獨立董事",from:"臺灣",name:"張文添",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"102.04.22 (註4)",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["文化大學企業管理研究所碩士","交通銀行副理","泰豐輪胎(股)公司 副總經理兼發言人","寶華銀行協理、研發處長、管理部經理、祕書處長","文化大學、逢甲大學 兼任講師","實踐大學企管系 兼任講師"],other_titles:["李洲科技(股)公司 獨立董事"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                        {title:"獨立董事",from:"臺灣",name:"曾天運",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"107.06.19",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["中興大學科技法律研究所碩士","冠軍建材股份有限公司 財務副總","萬泰科技股份有限公司 財務副總"],other_titles:["大哲聯合會計師事務所 合夥會計師","中華民國仲裁協會 仲裁人","萬旭電業股份有限公司 薪酬委員"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                        {title:"獨立董事",from:"臺灣",name:"陳志弘",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"107.06.19",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["大同工學院事業經營系","東南水泥股份有限公司","副董事長室特別助理/駐廠董事室主任兼品保部經理/高雄廠行政副廠長/高雄廠廠長/駐廠董事長室特別助理"],other_titles:["澎湖有線電視股份有限公司 總經理"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                        {title:"監察人",from:"臺灣",name:"謝君山",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"102.04.22 (註5)",stock1:"1205197",stock_per1:"1.73",stock2:"1,571,276",stock_per2:"1.82",stock3:"288466",stock_per3:"0.33",stock4:"-",stock_per4:"-",exps:["省立台南高級工業職業學校","原價屋電腦有限公司 顧問","泰碩電子股份有限公司 董事"],other_titles:["無"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                        {title:"監察人",from:"臺灣",name:"林千雅",sex:"女",start_date:"107.06.19",duration:"3年",first_start_date:"104.05.15 (註6)",stock1:"1818316",stock_per1:"2.6",stock2:"2,074,321",stock_per2:"2.4",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["文化大學土地資源學系畢","富邦證券 財務部襄理"],other_titles:["隆昕實業股份有限公司 財務部襄理"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                        {title:"監察人",from:"臺灣",name:"張敏君",sex:"女",start_date:"107.06.19",duration:"3年",first_start_date:"102.07.05",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["台大商學院國際企業組碩士","宏達電子HTC日本分公司社長/全球行銷處處長"],other_titles:["拓連科技股份有限公司 營運長"],relative_title:"-",relative_name:"-",relative_relation:"-"}
                    ],
                    table2 : [
                        {name:"余清松",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
                        {name:"林展列",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"1"},
                        {name:"梁竣興",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
                        {name:"蘆原錦吾",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:" ",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
                        {name:"張文添",pro_exp1:"-",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"1"},
                        {name:"曾天運",pro_exp1:"✔",pro_exp2:"-",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
                        {name:"陳志弘",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
                        {name:"謝君山",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
                        {name:"林千雅",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:"✔",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
                        {name:"張敏君",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
                    ],

                    list1 : [
                        {item:"一、本公司依107年董事會通過之「董事及經理人績效評估辦法」，於每年定期辦理董事會及其成員之績效評估。",content:[]},
                        {item:"二、上述績效評估辦法之合宜性需每年定期檢討。",content:[]},
                        {item:"三、董事會績效評估之衡量項目為下列五大面向：",content:["1. 對公司營運之參與程度。","2. 提升董事會決策品質。","3. 董事會組成與結構。","4. 董事的選任及持續進修。","5. 內部控制。"]},
                        {item:"四、董事成員績效評估之衡量項目為下列六大面向：",content:["1. 公司目標與任務之掌握。","2. 董事職責認知。","3. 對公司營運之參與程度。","4. 內部關係經營與溝通。","5. 董事之專業及持續進修。","6. 內部控制。"]},
                    ],
                    list2: {
                        title:"績效評估結果：",
                        date: "108年度",
                        links:[ ["董事會","./assets/docs/board.pdf"] ,["薪酬委員會","./assets/docs/payout_member.pdf"]]

                    }
                },
                eng:{
                    title: "Board of Directors",
                    p1:" Company's Directors and supervisors are composed of 2 females and 7 males with professional experiences and qualifications in marketing planning, operation management, industry knowledge, and accounting. The board members are involved in various industries including electronic components, appliances, industrial rubber, banking, electro-optical, glass, ceramics, communication network, cement, securities ,and telecommunications etc.",                             
                    p2: "Board Members, Supervisors, and Management Team(1)",
                    p3: "Board Members, Supervisors, and Management Team(2)",
                    table1 : [
                        {title:"Chairman",from:"R.O.C",name:"Ching-Sung, Yu",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"11/06/1999",
                        stock1:"11,799,516",stock_per1:"16.9",stock2:"14,155,046",stock_per2:"16.22",stock3:"773.431",stock_per3:"0.89",stock4:"3151000",stock_per4:"3.09",
                        exps:["Bachelor Degree in Business Administration, Tatung University"],
                        other_titles:["Director, TaiSol Electronics Co., Ltd., HongKong","Director, Techmaster Electronics CO., Ltd., HongKong","Director, TAISOL ELEC, JAPAN","Director, VSELL ENTERPRISE CO., LTD."],
                        relative_title:"-",relative_name:"-",relative_relation:"-"},
                
                        {title:"Director",from:"R.O.C",name:"Jaan-Lieh, Lin",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"04/22/2013",
                        stock1:"-",stock_per1:"-",stock2:"104.000",stock_per2:"0.12",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
                        exps:["Associate Degree in Mechanical Engineering, National Tainan Industrial High School","CEO, Wanshih Electronic Co., Ltd.","Director, Wanshih Electronic Co., Ltd."],
                        other_titles:["Consultant, Wanshih Electronic Co., Ltd.","Director, Wanshih Electronic Co., Ltd.","Independent Director, Hu Lane Associate Inc.","Supervisor, APAQ TECHNOLOGY CO., LTD.",
                        "Director, TAISOL ELEC, JAPAN","Director, Suzhou TaiSol Electronics Co., Ltd.","Director/COO, TaiSol Electronics Co., Ltd.","Legal representative and director, Siyang TaiSol Electronics Co., Ltd."],relative_title:"-",relative_name:"-",relative_relation:"-"},
                
                        {title:"Director",from:"R.O.C",name:"Chun-Hsin, Liang ",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"06/19/2018",
                        stock1:"38000",stock_per1:"0.05",stock2:"98.813",stock_per2:"0.11",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
                        exps:["Bachelor Degree in Economics, Tunghai University","CEO/COO/Consultant, SINBON Electronics Co., Ltd."],
                        other_titles:["Director, DongGuan TaiSol Electronics Co., Ltd.","CEO, TaiSol Electronics Co., Ltd.","Director, Siyang TaiSol Electronics Co., Ltd.","Director, Suzhou TaiSol Electronics Co., Ltd."],relative_title:"-",relative_name:"-",relative_relation:"-"},
                
                        {title:"Director",from:"Japan",name:"Kingo, Ashihara",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"06/19/2018",
                        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
                        exps:["Bachelor Degree in Land Economics, National Chung Hsing University","Director, SINBON Electronics Co., Ltd."],
                        other_titles:["Oriental Computer Inc.  President"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                
                        {title:"Independent Director",from:"R.O.C",name:"Wen-Tien, Chang",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"04/22/2013 (Note5)",
                        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
                        exps:["Master Degree in International Business Administration , Chinese Culture University","Assistant Manager, Bank of Communications Co., Ltd.",
                        "Vice President and Spokesman, FEDERAL CORPORATION","Assistant Vice President/R&D Director/Adm Manager/Secretary Director, Good Bank","Adjunct Instructor,  Chinese Culture University and Feng Chia University","Adjunct Instructor,  Shih Chien University","Independent Director, Oasis Technology Co., Ltd."],
                        other_titles:["None"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                
                        {title:"Independent Director",from:"R.O.C",name:"Tien-Yun, Tsen",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"06/19/2018",
                        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
                        exps:["Master Degree in Law , National Chung Hsing University","Financial Vice President, Champion Building Materials Co. Ltd.","Financial Vice President, Wonderful Hi Tech Co., Ltd.","Remuneration Committee Member, Wanshih Electronic Co., Ltd. "],
                        other_titles:["Co-Owner Accountant, 大哲Certified Public Accounting Firm","Arbitrator, Chinese Arbitration Association","Independent Director, Wonderful Hi Tech Co., Ltd."],relative_title:"-",relative_name:"-",relative_relation:"-"},
                
                        {title:"Independent Director",from:"R.O.C",name:"Chih-Hung, Chen",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"06/19/2018",
                        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
                        exps:["Bachelor Degree in Business Management, Tatung University","Executive Assistant to Vice President/Chief of Director Office and QA Managerin Factory/Deputy Factory","Director of Adm in Kaohsiung/Factory Director of Adm in Kaohsiung/Executive Assistant to President in Factory , Southeast Cement Corporation"],
                        other_titles:["CEO, PENGHU CABLE TV. CO., LTD."],relative_title:"-",relative_name:"-",relative_relation:"-"},
                
                        {title:"Supervisor",from:"R.O.C",name:"Chun-san, Hsieh",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"04/22/2013 (Note6)",
                        stock1:"1205197",stock_per1:"1.73",stock2:"1,571,276",stock_per2:"1.82",stock3:"288466",stock_per3:"0.33",stock4:"-",stock_per4:"-",
                        exps:["Associate Degree, Provincial Tainan Industrial High School","Consultant, COOLPC COMPUTER CO., LTD","Director, TaiSol Electronics Co., Ltd."],
                        other_titles:["None"],relative_title:"-",relative_name:"-",relative_relation:"-"},
                
                        {title:"Supervisor",from:"R.O.C",name:"Cien-Ya, Lin",sex:"F",start_date:"06/19/2018",duration:"3years",first_start_date:"05/15/2015 (Note7)",
                        stock1:"1818316",stock_per1:"2.6",stock2:"2,074,321",stock_per2:"2.4",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
                        exps:["Bachelor Degree in Land Resources, Chinese Culture University","Financial Junior Manager, Fubon Securities Co.,Ltd."],
                        other_titles:["Financial Junior Manager, LONG-THIN ENTERPRISE CO., LTD."],relative_title:"-",relative_name:"-",relative_relation:"-"},
                
                        {title:"Supervisor",from:"R.O.C",name:"Ming-Chun, Chang",sex:"F",start_date:"06/19/2018",duration:"3years",first_start_date:"07/05/2013",
                        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
                        exps:["Master Degree in International Business of College of Management, National Taiwan University","President of HTC Japan Branch Office, HTC Corporation"],
                        other_titles:["COO, Noodoe Corporation"],relative_title:"-",relative_name:"-",relative_relation:"-"}
                        ],
                    table2 : [
                        {name:"Ching-Sung,Yu",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
                        {name:"Jaan-Lieh, Lin",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"1"},
                        {name:"Chun-Hsin, Liang",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
                    {name:"Kingo, Ashihara",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:" ",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
                        {name:"Wen-Tien, Chang",pro_exp1:"-",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"1"},
                        {name:"Tien-Yun, Tseng",pro_exp1:"✔",pro_exp2:"-",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
                        {name:"Chih-Hung, Chen",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
                        {name:"Chun-san, Hsieh",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
                        {name:"Cien-Ya, Lin",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:"✔",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
                        {name:"Ming-Chun, Chang",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
                    ], 
                    list1 : [
                        {item:'1. In accordance with the "Measures for Performance Evaluation of Directors and Managers" approved by the Board of Directors in 107, the company regularly conducts annual performance evaluations of the Board and its members.',content:[]},
                        {item:"2. The suitability of the above performance evaluation methods needs to be reviewed regularly every year.",content:[]},
                        {item:"3. The measurement items for board performance evaluation are the following five aspects:",content:["1. The degree of participation in the company's operations.","2. Improve the quality of board decisions.","3. The composition and structure of the board of directors.","4. The selection and continuing education of directors.","5. Internal control."]},
                        {item:"4. The measurement items for the performance evaluation of directors include the following six aspects:",content:["1. Understanding of the company's goals and tasks.","2. Awareness of directors' responsibilities.","3. The degree of participation in the company's operations.","4. Internal relationship management and communication.","5. Professional and continuing education of directors.","6. Internal control."]},
                    ],
                    list2: {
                        title:"Performance evaluation results:",
                        date: "2019",
                        links:[ ["Board of Directors","./assets/docs/board.pdf"] ,["Remuneration Committee","./assets/docs/payout_member.pdf"]]

                    }           

                    },

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