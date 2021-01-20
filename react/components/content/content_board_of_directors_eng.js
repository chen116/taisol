class Content_board_of_directors_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "board_of_directors",
            lang:"eng",
            data:{
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
                        {item:'1. In accordance with the "Methods for Performance Evaluation of Directors and Managers" approved by the Board of Directors in 2018, the company regularly conducts annual performance evaluations of the Board and its members.',content:[]},
                        {item:"2. The suitability of the above performance evaluation methods needs to be reviewed annually.",content:[]},
                        {item:"3. The following five aspects are evaluated for the performance of the board:",content:["1. The degree of participation in the company's operations.","2. Improvement of the quality of board decisions.","3. The composition and structure of the board of directors.","4. The selection and continuing education of directors.","5. Internal control."]},
                        {item:"4. The following six aspects are evaluated for the performance of the board members:",content:["1. Understanding of the company's goals and tasks.","2. Awareness of directors' responsibilities.","3. The degree of participation in the company's operations.","4. Internal relationship management and communication.","5. Professionalism and continuing education of directors.","6. Internal control."]},
                    ],
                    list2: {
                        title:"Performance evaluation results:",
                        date: "2019",
                        links:[ ["Board of Directors","./assets/docs/board.pdf"] ,["Remuneration Committee","./assets/docs/payout_member.pdf"]]

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