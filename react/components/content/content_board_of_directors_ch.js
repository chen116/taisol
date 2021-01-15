class Content_board_of_directors_ch extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "board_of_directors",
            lang: "ch",
            data:{

                
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