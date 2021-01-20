class Content_human_resources_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "human_resources",
            lang: "eng",
            data : {      
                title:"Human Resources",


                list1:[
                  "Cash for three major festivals, labor day, birthday, birth, wedding and funeral subsidies, travel subsidies, hospitalization allowances, retirement allowances, etc.",
                  "In addition to the mandatory labor and health insurance, TaiSol also provides free group insurance (including life insurance, accident insurance, accident medical treatment, hospitalization, etc., which is better than general company group insurance) and travel insurance for colleagues.",
                  "Free parking spaces, cell phone charges, car allowances, fuel allowances, insured group annuities, and other subsidies for specific personnel.",
                  "Free coffee drinks.",
                  "Performance bonus, patent proposal bonus, patent right bonus and patent application bonus.",
                  "Two days off every week, flexible time.",
                  "Host sports competitions, domestic and foreign tourism, employee movie tickets, winter solstice dumplings, departmental dinners and other leisure activities are held irregularly.",
                  "Every year, we will treat employees with end-of-the-year dinner, lucky draws, and senior employees' recognition, and provide year-end gifts (such as high-end GORE-TEX jackets, etc.) based on company's operating conditions.",
                  "Provides better care than the standard Labor Standards Law (such as adding engagement leave, etc.).",
                  "Various other matters related to employee welfare."],
                  list2:[
          
                    {title:"Newcomer training"},
                    {title:"Professional training" },
                    {title:"Management training"},
                    {title:"Common training"},
                    {title:"Expat training subsidy"},
                    {title:"Integrity management and insider trading prevention training :",
                    content:"In addition to regular training on integrity management and insider transaction prevention for all colleagues, the company also conducts relevant training and advocacy for all new colleagues as soon as they arrive in order to thoroughly implement the integrity management policy."}
                  ],
          
                  list3: [ 
                    {title: "1. Working environment",
                    details:[
                    "Environmental care (for example: environmentally friendly stationery, LED lamps, office equipment, etc.).",
                    "The company complies with public safety regulations, such as the use of flame-proof equipment (carpets, curtains, paint, etc.), explosion-proof doors, escape equipment, etc.",
                    "The company's access control cooperates with Xinguang Security Company, computer-controlled and regular security personnel patrols to maintain employee safety.",
                    "Clean and disinfect the office environment regularly."]
                    },
                    {title:"2. Personal safety protection measures",
                    details:[

                      "Handling free employee health checks (better than the legally prescribed years and items) to maintain employee health.",
                      "Regular fire drills are held to strengthen employees’ awareness of fire fighting.",
                      "Implement free special corporate taxi service for employees who leave work at night to protect the safety of employees who return at night.",]
                    }
                  ],
          
                  table1: [

                    {date:"June 12, 2019"	,content:"Self-inspection for fire hazard"},
                    {date:"July 25, 2019"	,content:"First aid training and fire escape training"},
                    {date:"September 17, 2019"	,content:"Building repairs and lack of fire protection"},
                    {date:"September 27, 2019"	,content:"Municipal fire brigade safety review"},

                  ],
                  table2: [

                    {date:"April 10, 2018",content:	"Taichung Bank (1st floor) - Taipei City Fire Department inspection"},
                    {date:"May 11, 2018",content:	"Self-inspection on buildings and companies"},
                    {date:"July 23, 2018",content:	"Fire drills for buildings and companies"},
                    {date:"October 12, 2018",content:	"Building and various companies - Taipei Fire Department Inspection"},
                    {date:"December 07, 2018",content:	"Post office self-test on the 1st floor"},
                    {date:"December 14, 2018",content:	"Post Office on the 1st Floor - Taipei City Fire Department Inspection"},
                    {date:"January 14, 2019",content:	"Fire drills for buildings and companies"},
                              
                        
                  
                  ],
          
          
          
          
          
                  list4:[
                    {
                      title:"1. Diversity, inclusiveness and equal opportunity", 
                      content:"The company implements workplace diversity, regardless of race, class, language, ideology, religion, party, national origin, place of birth, gender, sexual orientation, age, marriage, appearance, facial features, disability, horoscope, blood type, or previous union membership status Differential treatment or any form of discrimination is given for reasons, etc."
                    },
                    {
                      title:"2. Reasonable working hours",
                      content:"In order to ensure the health of employees, TaiSol makes policy on working hours, including overtime, and regularly cares and manages employees' attendance."
                    },
                    {
                      title:"3. Healthy Workplace",
                      content:"In order to care for the physical and mental health of employees, TaiSol regularly provides employees with free health check-ups, and has corporate stress massage services and irregular employee activities, such as: employee travel, Christmas activities, professional and life lectures, etc. to activate employee interaction. To achieve work-life balance and take care of employees' physical, mental health."
                    },
                    {
                      title:"4. Labor Relations",
                      content: 'In order to provide employees with a accessible communication channel, the company has set up "employee suggestion and complaint mailbox: talk@taisol.com", and regularly holds labor and management meetings to ensure the rights and interests of both employees and employees.'
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