class Content_compensation_committee_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "compensation_committee",
            lang: "eng",
            data:{
                    title:"Compensation Committee ",
                    p1:"Compensation Committee Charter",
                    p2:"Compensation Committee Composition ",
                    p3:"Compensation Committee Responsibilities",
                    p4:"Compensation Committee Opeartion",
                    salary_regulations: [
                        {   
                            title:"Article 1: Purpose and Basis", 
                            contents:[ 
                                {   
                                    item: 'In order to improve the compensation system for directors, supervisors and managers of the company, we follow Article 3 of the "Regulations Governing the Appointment and Exercise of Powers by the Remuneration Committee of a Company Whose Stock is Listed on the Taiwan Stock Exchange or the Taipei Exchange" (hereinafter referred to as "Measures for Compensation Committees") The organization rules of the compensation committee (hereinafter referred to as the "organization rules") are formulated for the purpose of compliance.',
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"Article 2: Scope of Application", 
                            contents:[ 
                                {
                                    item: "The matters related to the functions and powers of the company's compensation committee (hereinafter referred to as the committee) shall be in accordance with the regulations of the organization, unless otherwise provided by laws or regulations."  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"Article 3: Announcement for Reference", 
                            contents:[ 
                                {
                                    item: "The company should place the contents of the organization's regulations on the company's website and public information observation station for inquiries."  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"Article 4: Functions of the Committee", 
                            contents:[ 
                                {
                                    item: "The function of this committee is to evaluate the compensation policies and systems of the directors, supervisors and managers of the company with professionalism, and to make recommendations to the board of directors for its decision-making reference."  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"Article 5: Composition of the Committee", 
                            contents:[ 
                                {
                                    item: "The number of members of this committee is three, appointed by the board of directors, and one of committee memeber is the convener."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "The professional qualifications and independence status of the members of this committee shall comply with the provisions of Article 5 and Article 6 of the Compensation Committee’s Terms of Reference."  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"Article 6: The Term of the Committee Memeber and Re-election", 
                            contents:[ 
                                {
                                    item: "The term of the committe member is the same as the term of the appointed board of directors."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "If the members of this committee are dismissed for some reason, and the number of members is fewer than three, the board of directors shall make new appointment(s) within three months."  ,
                                    sub_items: []  
                                },
                            ]
                        }, 
                        {   
                            title:"Article 7: Scope of Duties", 
                            contents:[ 
                                {

                                    item: "The committee should faithfully perform the following duties, and submit their suggestions to the board of directors for discussion. However, the supervisor’s compensation proposal shall be submitted to the board of directors for discussion, and the supervisor’s compensation shall be specified in the company’s articles of association or the board of directors authorized by the resolution of the shareholders meeting only:"  ,
                                    sub_items: [
                                        "1. Review this regulation regularly and propose amendments.",
                                        "2. Formulate and regularly review the company's directors, supervisors and managers' annual and long-term performance targets and compensation policies, systems, standards and structures.",
                                        "3. Regularly evaluate the achievement of the performance targets of the directors, supervisors and managers of the company, and determine the content and amount of their individual compensation."
                                    ]  
                                },
                                {
                                    item: "When performing the duties, the committee shall follow the following principles:"  ,
                                    sub_items: [
                                        "1. Ensure that the company's compensation arrangements comply with relevant laws and regulations and are sufficient to attract outstanding talents.",
                                        "2. The performance evaluation and compensation of directors, supervisors and managers should refer to the usual level of payment in the industry, and consider the time invested by the individual, the responsibilities of the individual, the status of achieving personal goals, the performance of other positions, and the company's recent years pay to the same position. Also the company's short-term and long-term business goals, the company's financial status, etc., are also taken into consideration to evaluate the rationality of the relationship between personal performance and company's operating performance and future risks.",
                                        "3. Directors and managers should not be guided to engage in behaviors that risk company's well-being in pursuit of compensation.",
                                        "4. The ratio of the short-term performance of the directors and senior managers and the payment time of part of the variable salary payment should be determined by considering the characteristics of the industry and the nature of the company's business.",
                                        "5. The members of this committee shall not participate in discussion and voting on their personal compensation decisions."
                                    ]  
                                },   
                                {
                                    item: "The compensation referred in the preceding two paragraphs include cash compensation, stock options, dividends, retirement benefits or severance payments, various allowances and other measures with substantial incentives; the scope of which shall be in accordance with the criteria for items to be recorded in the annual report of the public issuing company The directors, supervisors and managers have the same compensation."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "If the compensation of directors and managers of a subsidiary of the company is subject to the approval of the company’s board of directors, the committee should make recommendations before submitting it to the board for discussion."  ,
                                    
                                    sub_items: []  
                                },             
                            ]
                        }, 
                        {   
                            title:"Article 8: Meeting and Convening", 
                            contents:[ 
                                {
                                    item: "The committee is convened twice a year, and the reason for the convening shall be stated at the time of convening, and the committee members shall be notified seven days in advance. However, those who have an emergency are not limited to this."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "All members of this committee shall mutually recommend one person as the convener and chairman of the meeting; if the convener asks for leave or cannot convene the meeting for some reason, he shall designate other members of the committee to act on behalf of him; if the convener does not designate an agent, one shall be nominated by other members of the committee as replacement."  ,
                                    sub_items: []  
                                }]
                        }, 
                        {   
                            title:"Article 9: Agenda Setup",
                            contents:[
                                {
                                    item: "The agenda of the committee meeting is set by the convener, and other members may also provide proposals for the committee to discuss. The meeting agenda should be provided to the members of the committee in advance."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "When this committee is convened, the company shall set up a signature book for attending members to sign in and for examination."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "The members of this committee should attend the committee in person. If they cannot attend in person, they may entrust other members to attend the meeting on their behalf; those who participate in the meeting by conference call are deemed to be present in person."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "When a member of this committee entrusts another member to attend the committee as an agent, he shall issue a letter of authorization each time and list the authorized scope of the reason for convening."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "The third-party representatives limited to being entrusted by only one person."  ,
                                    sub_items: []  
                                }]
                        },

                        {   
                            title:"Article 10: Resolution Method",
                            contents:[
                                {
                                    item: "To reach a resolution, more than half of all members should agree. If there is no objection after consultation by the chairman of the committee at the time of voting, it shall be deemed passed, and its effect shall be the same as that of voting."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "The results of the voting in the preceding paragraph shall be reported on the spot and recorded."  ,
                                    sub_items: []  
                                }]
                        },


                        {   
                            title:"Article 11: Proceedings",
                            contents:[
                                {
                                    item: "The proceedings of this committee shall be prepared as a record of the proceedings, which shall record the following items in detail:"  ,
                                    sub_items: [
                                        "1. Session, time and place of the meeting. ",
                                        "2. The name of the chairman. ",
                                        "3. The attendance status of the members, including the names and numbers of those who attended, asked for leave, and were absent or not.",
                                        "4. The names and titles of attendees.     ",
                                        "5. The name of the record. ",
                                        "6. Reported matters. ",
                                        "7. Matters for discussion: resolution methods and results of each proposal, opposition or reservations of committee members.",
                                        "8. Temporary motion: the name of the proposer, the resolution method and results of the proposal, the summary of the speeches of the members of the committee, experts, or other personnel, and objections or reservations.",
                                        "9. Other matters to be recorded."
                                    ]  
                                },
                                {
                                    item: "The sign-in book of this committee is a part of the proceedings; if a video conference is held, the video and audio materials are also part of the proceedings."  ,
                                    sub_items: []  
                                },   
                                {
                                    item: "The proceedings must be signed or stamped by the chairman and distributed to the committee members within 20 days after the meeting, and should be reported to the board of directors and included in the company’s important files, and should be kept for five years; the production and distribution method can be in digital format."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "Before the expiry of the preservation period mentioned in the preceding paragraph, when a lawsuit occurs regarding matters related to this committee, it shall be preserved until the lawsuit is terminated."  ,
                                    sub_items: []  
                                },             
                            ]
                        },
 
                        {   
                            title:"Article 12: Handling of Meeting Resolutions",
                            contents:[
                                {
                                    item: "The committee may authorize the convener or other members of the committee to continue the implementation of the resolutions based on Article 7, or the appointment of professionals in accordance with the resolution of Article 13, paragraph .  It is required to have a written report; if necessary, it should be submitted to the committee for ratification or report at the next meeting."  ,
                                    sub_items: []  
                                }
                            ]
                        },
                        {   
                            title:"Article 13: Resources for Execution",
                            contents:[
                                {
                                    item: "When this committee is convened, the company’s directors, relevant department managers, internal auditors, accountants, legal advisers or other personnel may be invited to attend the meeting and provide relevant and necessary information."  ,
                                    sub_items: []  
                                },
                                {
                                    item: "The committee may, by resolution, appoint lawyers, accountants or other professionals to conduct necessary inspections or provide consultations on matters related to the execution, and the relevant expenses shall be borne by the company."  ,
                                    sub_items: []  
                                }]
                        },
                        {   
                            title:"Article 14: Implementation",
                            contents:[
                                {
                                    item: "The rules of the organization will be implemented after the board of directors has approved them, and the same applies when they are revised."  ,
                                    sub_items: []  
                                }
                            ]
                        },
                        {   
                            title:"Article 15: These regulations were established on December 29, 2011.",
                            contents:[
                                {
                                    item: ""  ,
                                    sub_items: []  
                                }
                            ]
                        }
                        
                      ]
                  ,
                  table1 : [
                    {"title": "Convener/ Independent Director","name":"Wen-Tien, Chang","pro_exp1":"✔","pro_exp2":"-","pro_exp3":"✔","fit_item1":"✔","fit_item2":"✔","fit_item3":"✔","fit_item4":"✔","fit_item5":"✔","fit_item6":"✔","fit_item7":"✔","fit_item8":"✔","fit_item9":"✔","fit_item10":"✔","num_company":"-","note":"-"},
                    {"title": "Member/ Independent Director","name":"Tien-Yun, Tseng","pro_exp1":"-","pro_exp2":"✔","pro_exp3":"✔","fit_item1":"✔","fit_item2":"✔","fit_item3":"✔","fit_item4":"✔","fit_item5":"✔","fit_item6":"✔","fit_item7":"✔","fit_item8":"✔","fit_item9":"✔","fit_item10":"✔","num_company":"-","note":"-"},
                    {"title": "Member/ Independent Director","name":"Chih-Hung, Chen","pro_exp1":"-","pro_exp2":"-","pro_exp3":"✔","fit_item1":"✔","fit_item2":"✔","fit_item3":"✔","fit_item4":"✔","fit_item5":"✔","fit_item6":"✔","fit_item7":"✔","fit_item8":"✔","fit_item9":"✔","fit_item10":"✔","num_company":"-","note":"-"},
                  ],
                  table2 : [
                      {"title": "Convener","name":"Wen-Tien, Chang","real_show":"5","asked_show":"5","real_show_per":"100.00%", "note": "re-elected on 2018.6.19" },
                      {"title": "Member","name":" Tien-Yun, Tseng","real_show":"5","asked_show":"5","real_show_per":"100.00%", "note": "re-elected on 2018.6.19" },
                      {"title": "Member","name":"Chih-Hung, Chen","real_show":"5","asked_show":"5","real_show_per":"100.00%", "note": "re-elected on 2018.6.19" },
                    ],

                    list2:[
                        {title:"(1) With the attention of good managers, faithfully perform the following duties, and submit the suggestions to the board of directors for discussion:",
                        contents:[
                            "1. Formulate and regularly review the policies, systems, standards and structures for performance evaluation and compensation of directors, supervisors and managers.",
                            "2. Set and regularly evaluate the compensation of directors, supervisors and managers.",
                            "3. Recommendations on the compensation of supervisors shall be limited to those authorized by the board of directors by the company's articles of association (or resolution of the shareholders meeting).",
                            "4. If the compensation of directors and managers of a subsidiary company needs to be approved by the parent company's board of directors according to the company's regulations, the parent company's compensation committee should first make recommendations.",
                        ]},
                        {title:"(2) The definition of salary compensation :",
                        contents:[
                            "1. Cash",
                            "2. Stock Option",
                            "3. Share dividends",
                            "4. Retirement benefits",
                            "5. Termination benefits",
                            "6. Various allowances",
                            "7. Other measures with substantial incentives",
                        ]}
    
                    ],

                    meetings : [
                        {
                            "date" : "Date of Compensation Committee: January 25, 2019",
                            "contents": [
                                {summary: "(1)  The year-end bonus for 2018 and the standard and proposed amount for employee compensation for 2017.",
                                  result:"The bill passed without objection."},
                                {summary: "(2) To draw up a proposal for the compensation of employees, directors and supervisors of the company for 2018, and submit it for discussion.",
                                result:"The bill passed without objection."}
                            ]
                        },
                        {
                            "date" : "Date of Compensation Committee: August 12, 2019",
                            "contents": [
                                {"summary": "(1) Discussion proposal on salary adjustment of directors and managers for 2019.", "result":"The bill passed without objection."},
                                {"summary": "(2) In order to meet the needs of the company's operation and management, the promotion of managers was discussed.", result:"The bill passed without objection."}
                            ]
                        },    
                        {
                            "date" : "Date of Compensation Committee: October 4, 2019",
                            "contents": [
                                {"summary": "(1) Subsidiary Siyang TaiSol Electronics Co., Ltd. (hereinafter referred to as Siyang TaiSol), due to management needs, has increased the compensation of managers and submitted it for deliberation.", result:"The bill passed without objection."},
                                {"summary": "(2) In order to meet the needs of the company's operation and management, the promotion of managers was discussed.", result:"The bill passed without objection."}
                            ]
                        },   
                        {
                            "date" : "Date of Compensation Committee: January 16, 2020",
                            "contents": [
                                {"summary": "(1) The year-end bonus for 2019 and the standard and proposed amount for employee compensation for 2018", result:"The bill passed without objection."}
                            ]
                        },    
                        {
                            "date" : "Date of Compensation Committee: March 13, 2020",
                            "contents": [
                                {"summary": "(1) To draw up a proposal for the compensation of employees, directors and supervisors of the company for the year 2019 and submit it for discussion.",result:"The bill passed without objection."},
                                {"summary": "(2) Amend the company's 'Directors and Managers Performance Evaluation Measures' proposal and submit it for discussion.", result:"The bill passed without objection."}
                            ]
                        },        
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