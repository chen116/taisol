app.component('notice-2-E', {
  data() {
    return {
      tables_data :{},
      table1 : [

        {title:"Chairman",from:"R.O.C",name:"Ching-Sung, Yu",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"11/06/1999",
        stock1:"11,799,516",stock_per1:"16.9",stock2:"14,155,046",stock_per2:"16.22",stock3:"773.431",stock_per3:"0.89",stock4:"3151000",stock_per4:"3.09",
        exps:["Bachelor Degree in Business Administration, Tatung University"],
        other_titles:["Director, TaiSol Electronics Co., Ltd., HongKong","Director, Techmaster Electronics CO., Ltd., HongKong","Director, TAISOL ELEC, JAPAN","Director, VSELL ENTERPRISE CO., LTD."],
        relative_title:"",relative_name:"",relative_relation:""},

        {title:"Director",from:"R.O.C",name:"Jaan-Lieh, Lin",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"04/22/2013",
        stock1:"-",stock_per1:"-",stock2:"104.000",stock_per2:"0.12",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
        exps:["Associate Degree in Mechanical Engineering, National Tainan Industrial High School","CEO, Wanshih Electronic Co., Ltd.","Director, Wanshih Electronic Co., Ltd."],
        other_titles:["Consultant, Wanshih Electronic Co., Ltd.","Director, Wanshih Electronic Co., Ltd.","Independent Director, Hu Lane Associate Inc.","Supervisor, APAQ TECHNOLOGY CO., LTD.",
        "Director, TAISOL ELEC, JAPAN","Director, Suzhou TaiSol Electronics Co., Ltd.","Director/COO, TaiSol Electronics Co., Ltd.","Legal representative and director, Siyang TaiSol Electronics Co., Ltd."],relative_title:"",relative_name:"",relative_relation:""},

        {title:"Director",from:"R.O.C",name:"Chun-Hsin, Liang ",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"06/19/2018",
        stock1:"38000",stock_per1:"0.05",stock2:"98.813",stock_per2:"0.11",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
        exps:["Bachelor Degree in Economics, Tunghai University","CEO/COO/Consultant, SINBON Electronics Co., Ltd."],
        other_titles:["Director, DongGuan TaiSol Electronics Co., Ltd.","CEO, TaiSol Electronics Co., Ltd.","Director, Siyang TaiSol Electronics Co., Ltd.","Director, Suzhou TaiSol Electronics Co., Ltd."],relative_title:"",relative_name:"",relative_relation:""},

        {title:"Director",from:"Japan",name:"Kingo,Ashihara",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"06/19/2018",
        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
        exps:["Bachelor Degree in Land Economics, National Chung Hsing University","Director, SINBON Electronics Co., Ltd."],
        other_titles:["Oriental Computer Inc.  President"],relative_title:"",relative_name:"",relative_relation:""},

        {title:"Independent Director",from:"R.O.C",name:"Wen-Tien, Chang",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"04/22/2013 (Note5)",
        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
        exps:["Master Degree in International Business Administration , Chinese Culture University","Assistant Manager, Bank of Communications Co., Ltd.",
        "Vice President and Spokesman, FEDERAL CORPORATION","Assistant Vice President/R&D Director/Adm Manager/Secretary Director, Good Bank","Adjunct Instructor,  Chinese Culture University and Feng Chia University","Adjunct Instructor,  Shih Chien University","Independent Director, Oasis Technology Co., Ltd."],
        other_titles:["None"],relative_title:"",relative_name:"",relative_relation:""},

        {title:"Independent Director",from:"R.O.C",name:"Tien-Yun, Tsen",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"06/19/2018",
        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
        exps:["Master Degree in Law , National Chung Hsing University","Financial Vice President, Champion Building Materials Co. Ltd.","Financial Vice President, Wonderful Hi Tech Co., Ltd.","Remuneration Committee Member, Wanshih Electronic Co., Ltd. "],
        other_titles:["Co-Owner Accountant, 大哲Certified Public Accounting Firm","Arbitrator, Chinese Arbitration Association","Independent Director, Wonderful Hi Tech Co., Ltd."],relative_title:"",relative_name:"",relative_relation:""},

        {title:"Independent Director",from:"R.O.C",name:"Chih-Hung, Chen",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"06/19/2018",
        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
        exps:["Bachelor Degree in Business Management, Tatung University","Executive Assistant to Vice President/Chief of Director Office and QA Managerin Factory/Deputy Factory","Director of Adm in Kaohsiung/Factory Director of Adm in Kaohsiung/Executive Assistant to President in Factory , Southeast Cement Corporation"],
        other_titles:["CEO, PENGHU CABLE TV. CO., LTD."],relative_title:"",relative_name:"",relative_relation:""},

        {title:"Supervisor",from:"R.O.C",name:"Chun-san, Hsieh",sex:"M",start_date:"06/19/2018",duration:"3years",first_start_date:"04/22/2013 (Note6)",
        stock1:"1205197",stock_per1:"1.73",stock2:"1,571,276",stock_per2:"1.82",stock3:"288466",stock_per3:"0.33",stock4:"-",stock_per4:"-",
        exps:["Associate Degree, Provincial Tainan Industrial High School","Consultant, COOLPC COMPUTER CO., LTD","Director, TaiSol Electronics Co., Ltd."],
        other_titles:["None"],relative_title:"",relative_name:"",relative_relation:""},

        {title:"Supervisor",from:"R.O.C",name:"Cien-Ya, Lin",sex:"F",start_date:"06/19/2018",duration:"3years",first_start_date:"05/15/2015 (Note7)",
        stock1:"1818316",stock_per1:"2.6",stock2:"2,074,321",stock_per2:"2.4",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
        exps:["Bachelor Degree in Land Resources, Chinese Culture University","Financial Junior Manager, Fubon Securities Co.,Ltd."],
        other_titles:["Financial Junior Manager, LONG-THIN ENTERPRISE CO., LTD."],relative_title:"",relative_name:"",relative_relation:""},

        {title:"Supervisor",from:"R.O.C",name:"Ming-Chun, Chang",sex:"F",start_date:"06/19/2018",duration:"3years",first_start_date:"07/05/2013",
        stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",
        exps:["Master Degree in International Business of College of Management, National Taiwan University","President of HTC Japan Branch Office, HTC Corporation"],
        other_titles:["COO, Noodoe Corporation"],relative_title:"",relative_name:"",relative_relation:""}

      ],
      table2 : [
        {name:"Ching-Sung,Yu",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
        {name:"Jaan-Lieh, Lin",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"1"},
        {name:"Chun-Hsin,Liang",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
      {name:"Kingo,Ashihara",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:" ",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
        {name:"Wen-Tien, Chang",pro_exp1:"-",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"1"},
        {name:"Tien-Yun, Tseng",pro_exp1:"✔",pro_exp2:"-",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
        {name:"Chih-Hung, Chen",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
        {name:"Chun-san, Hsieh",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
        {name:"Cien-Ya, Lin",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:"✔",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
        {name:"Ming-Chun, Chang",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"None"},
      ],
      tableStyle:
      {
        fontSize:'13px',
        zIndex:-1,

      },

      showExpandedTable: -1
      ,
      showExpandedTableButton: 'Expand All',
      expandList:{}
    }
  },
  props: {},
  template:
  /*html*/
  `
  <div class="content">
    <h5 style="color:blue;"><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>董事會(Board of Director) </h5>
    <p><span>&nbsp;&nbsp;</span></p>
    <h5 class="content-p"><b>
     Company's Directors and supervisors are composed of 2 female and 7 male with professional experiences and qualification in marketing planning, operation management, industry knowledge and financial accounting, who respectively involve in various industries including electronic components and appliances, industrial rubber, banking, electro-optical, glass and ceramics, communication network, cement, securities, telecommunications etc.
    </b></h5>
    <div class="accordion " id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header " id="flush-headingOne">
          <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> Board Members, Supervisors, and Management Team(1)
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body" >
            <div  style=" overflow: scroll;">
              <button style="float: left;" v-on:click="expandTable('table1',2)" class="btn btn-secondary" type="button" >
              {{ showExpandedTableButton }}
              </button> 
                <!-- https://css-tricks.com/complete-guide-table-element/ -->
                <table  class="table table-bordered table-hover">
                  <thead :style="tableStyle">
                    <tr>
                      <th rowspan="2">Title (Note1) </th>
                      <th rowspan="2">Nationality or Place of registration</th>
                      <th rowspan="2">Name</th>
                      <th rowspan="2">Gender</th>
                      <th rowspan="2">Date Elected</th>
                      <th rowspan="2">Term</th>
                      <th rowspan="2">Date First Elected (Note2)</th>
                    
                      <th colspan="2">Shares Held When Elected</th>
                      <th colspan="2">Shares Currently Held</th>
                      <th colspan="2">Shares held by spouse and underage children Current shareholding</th>
                      <th colspan="2">Shares held by proxy</th>
                      <th rowspan="2">Major career (academic) achievements (Note3)</th>

                      <th rowspan="2">Selected Current Position sheldcon currently in the company and/or anyother companies</th>
                      <th colspan="3">Spouse or relatives of second degree or closer acting as Directors, Supervisors, or department heads</th>
                      </tr>

                      <tr>
                      <th>Shares</th>
                      <th>%</th>
                      <th>Shares</th>
                      <th>%</th>                
                      <th>Shares</th>
                      <th>%</th>                
                      <th>Shares</th>
                      <th>%</th>
                      <th>Title</th>
                      <th>Name</th>
                      <th>Relationship</th>
                      </tr>
                    </thead>
                  
                  
                  <tbody v-bind:style="tableStyle">
                    <tr v-for="(user,index)  in table1" :key="user.name">
                      <!--<td v-for="key in Object.keys(user)">{{ user[key] }}</td>-->
                      <td>{{user.title}}</td>
                      <td>{{user.from}}</td>
                      <td>{{user.name}}</td>
                      <td>{{user.sex}}</td>
                      <td>{{user.start_date}}</td>
                      <td>{{user.duration}}</td>
                      <td>{{user.first_start_date}}</td>
                      <td>{{user.stock1}}</td>
                      <td>{{user.stock_per1}}</td>
                      <td>{{user.stock2}}</td>
                      <td>{{user.stock_per2}}</td>
                      <td>{{user.stock3}}</td>
                      <td>{{user.stock_per3}}</td>
                      <td>{{user.stock4}}</td>
                      <td>{{user.stock_per4}}</td>
                      <td>  
                        <span style="font-size: 13px;" v-if=" user.exps.length>1 && (!expandMe('sub_entry1-1_' + index) )">{{user.exps[0]}}...</span>
                        <button class="btn-group-lg btn-light dropdown-toggle borderless" style="padding: none;first-line :13px" :id="'sub_entry1-1_' + index" v-on:click="sub_entry_list_toggle" type="button"  v-if=" user.exps.length>1 && (!expandMe('sub_entry1-1_' + index) )">
                        
                        </button> 
                        <ul class="list-group list-group-flush"  v-for="exp in user.exps"  v-if=" user.exps.length<2" >
                          <li  class="list-group-item">{{exp}}</li>
                          </ul>
                          <ul class="list-group list-group-flush"   v-on:click="sub_entry_list_toggle" v-for="exp in user.exps"  v-if=" expandMe('sub_entry1-1_' + index)">
                            <li class="list-group-item" :id="'sub_entry1-1_' + index" >{{exp}}</li>
                          </ul>
                            <!--<ul class="list-group list-group-flush " v-for="exp in user.exps">
                              <li class="list-group-item">{{exp}}</li>
                            </ul>-->
                          </td>
                      <td>   



                        <span style="font-size: 13px;" v-if=" user.other_titles.length>1 && (!expandMe('sub_entry1-2_' + index) )">{{user.other_titles[0]}}...</span>
                        <button class="btn-group-lg btn-light dropdown-toggle borderless" style="padding: none;first-line :13px" :id="'sub_entry1-2_' + index" v-on:click="sub_entry_list_toggle" type="button"  v-if=" user.other_titles.length>1 && (!expandMe('sub_entry1-2_' + index) )">
                        
                        </button>


                        <ul class="list-group list-group-flush"  v-for="other_title in user.other_titles"  v-if=" user.other_titles.length<2">
                          <li class="list-group-item">{{other_title}}</li>
                        </ul>
                        <ul class="list-group list-group-flush"   v-on:click="sub_entry_list_toggle" v-for="other_title in user.other_titles"  v-if=" expandMe('sub_entry1-2_' + index)">
                          <li class="list-group-item" :id="'sub_entry1-2_' + index" >{{other_title}}</li>
                        </ul>
                        <!--<ul class="list-group list-group-flush " v-for="other_title in user.other_titles">
                          <li class="list-group-item">{{other_title}}</li>
                        </ul>-->
                      </td>
                      <td>{{user.relative_title}}</td>
                      <td>{{user.relative_name}}</td>
                      <td>{{user.relative_relation}}</td>
                    </tr> 
                  </tbody>
                </table>
              </div>
              <p><span>&nbsp;&nbsp;</span></p>

            <h6><b> Note: </b></h6>
            <ul class="list-group list-group-flush ">
              <li class="list-group-item"> 1. Corporate shareholders shall list the names of corporate shareholders and representatives separately (The name of corporate shareholder shall be indicated if representative belongs to corporate shareholder).
              </li>
              <li class="list-group-item"> 2. While filling in  the date to first acted corporate director or supervisor, it shoule be noted if there is any interruption.
              </li>
              <li class="list-group-item"> 3. Above list name with experience related to the current position shall specify job title and duty to whom had worked in a certification audit firm or affiliated company during the previous disclosure period.			
              </li>	
              <li class="list-group-item"> 4.	Chairman and CEO or person with equivalent position (the top manager) are the same one, each others' spouse or relatives, who shall specify the information of reason, rationality, necessity corresponding alternative. (e.g. increasing the number of independent directors, and more than half of the directors do not serve as employees or managers, etc.)  
              </li>
              <li class="list-group-item"> 4-1.	Due to the slaes business operation, company requires Chairman Ching-Sung Yu concurrently to served as CEO, and the board of directors discussed and all approved on January 27, 2013.  According to Article 24 of the corporate governance principles of listed companies, a listed company shall have two or more	independent directors in accordance with the provisions of the articles of association, and no less than one-fifth of the number of directors. In addition to the 3 independent directors specified in the company's articles of association, the company has actually set up 3 independent directors, which complies with the law.			
              </li>
              <li class="list-group-item"> 5.	 Wen-Tien, Chang resigned as the supervisor on June 6, 1995, then he was rehired by company to serve as an independent director on April 22, 2013.								
              </li>
              <li class="list-group-item"> 6.	Chun-san, Hsieh resigned as a director and became a supervisor on April 22, 2013.		 
              </li>
              <li class="list-group-item"> 7.	Cien-Ya, Lin resigned on April 22, 2013, then she was rehired by company to serve as the same title of a supervisor on May 15, 2015.		  
              </li>
            
            </ul>

          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header " id="flush-headingOne">
          <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> Board Members, Supervisors, and Management Team(2)
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
          <div class="accordion-body">
            <table  class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th rowspan="2">Criteria Name (Note 1)</th>
                  <th colspan="3">Having Met One of the Following Professional Qualifications combined with at Least Five Years Work Experience</th>
                  <th colspan="10">Independence Criteria (Note2)</th>
                  <th rowspan="2">Number of Other Public Companies in Which the Individual is Concurrently Serving as an Independent Director</th>
                </tr>
                <tr>
                  <th>An Instructor or Higher Position in a Department of Commerce, Law, Finance, Accounting, or Other Academic Department Related to the Business Needs of the Company in a Public or Private Junior College, College or University</th>
                  <th>A Judge, Public Prosecutor, Attorney, Certified Public Accountant, or Other Professional or Technical Specialist Who has Passed a National Examination and been Awarded a Certificate in a Profession Necessary for the Business of the Company</th>
                  <th>Having Work Experience in the Areas of Commerce, Law, Finance, or Accounting, or Otherwise Necessary for the Business of the Company</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                </tr>
              </thead>
              
              <tbody>
                <tr v-for="user in table2">
                  <!--  <td v-for="entry in user">{{ entry }}</td> -->
                  <td v-for="key in Object.keys(user)">{{ user[key] }}</td>
                </tr> 
              </tbody>
            </table>

            <h6><b>Note:</b></h6>
              <ul class="list-group list-group-flush ">
                <li class="list-group-item">1.  The number ofcolumns shall be adjusted according to the actual numbers			 
                </li>
                <li class="list-group-item"> 2.	If the director or supervisor meets the following conditions in the two years before the election and during the term of office, please mark “✔” in the space below each condition code.					
                  <ul class="list-group list-group-flush ">
                    <li class="list-group-item">(1)	Not an employee of the Company or its affiliated enterprises.	
                    </li>
                    <li class="list-group-item">(2)	Not a director or a supervisor of the Company or its affiliated enterprises (except for concurrent independent directors of the Company and its parent company, subsidiaries, or subsidiaries of the same parent company in accordance with this Act or local laws and regulations).	
                    </li>
                    <li class="list-group-item">(3)	A natural person shareholder who or whose spouse or minor children or in another person’s name does not hold more than 1% of the total issued shares of the Company or is not a top-ten shareholder.				
                    </li>
                    <li class="list-group-item">(4)	Not a manager in (1) or the spouse, second-tier relatives, or third-tier relatives of the persons listed in (2) or (3).
                    </li>
                    <li class="list-group-item">(5)	A director, supervisor, or employee of a corporate shareholder who does not directly hold more than 5% of the total issued shares of the Company, is a top-five shareholder, or is designated as a representative to serve as a director or supervisor of the Company in accordance with paragraph 1 or 2 of Article 27 of the Company Act (except for concurrent independent directors of the Company and its parent company, subsidiaries, or subsidiaries of the same parent company in accordance with this Act or local laws and regulations).
                    </li>
                    <li class="list-group-item">(6)	A director, supervisor, or employee of another company who does not have a seat on the board of directors or more than half of the shares with voting rights are controlled by the same person of this company (except for concurrent independent directors of the Company and its parent company, subsidiaries, or subsidiaries of the same parent company in accordance with this Act or local laws and regulations).
                    </li>
                    <li class="list-group-item">(7)	A director, supervisor, or employee of another company or institution who is not the same person or spouse as the Chairman, President, or an equivalent position of the Company (except for concurrent independent directors of the Company and its parent company, subsidiaries, or subsidiaries of the same parent company in accordance with this Act or local laws and regulations).
                    </li>
                    <li class="list-group-item">(8)	A director, supervisor, or manager of another company or institution which does not have financial or business dealings with the Company, or a shareholder holding more than 5% of the shares of the Company (not applicable if the Company or institution holds more than 20% but no more than 50% of the total issued shares of the Company, with concurrent independent directors of the Company and its parent company, subsidiaries, or subsidiaries of the same parent company in accordance with this Act or local laws and regulations).
                    </li>
                    <li class="list-group-item">(9)	A professional, sole proprietor, partner, business owner or partner, director, supervisor, manager, or the spouse of the above of a company or institution which does not provide audit services to the Company or its affiliated enterprises or the cumulative remuneration amount of which in the past two years does not exceed NT$500,000 for business, legal affairs, finance or accounting related services. However, this does not apply to the members of the remuneration committee, public takeover review committee, or special merger and acquisition committee who perform their functions in accordance with the Securities and Exchange Act or the Business Mergers and Acquisitions Act.
                    </li>
                    <li class="list-group-item">(10)	Not a spouse or have a second-tier relative relationship with other directors.
                    </li>
                    <li class="list-group-item">(11)	There are no such circumstances as in Article 30 of the Company Act.			
                    </li>
                    <li class="list-group-item">(12)	Not the government, legal person, or their representatives are elected as stipulated in Article 27 of the Company Act.
                    </li>
                  </ul>
                </li>
              </ul>					
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  computed: {},
  methods: {
    expandMe(id){
      if (this.expandList[id]==null)
      {
        this.expandList[id]==true
      }
      console.log("expandMe",id, this.expandList[id])
      return this.expandList[id]
  
    },
    expandTable(table,numCols){
      tableNum=table.split("table")[1]



      showing=true
      if (this.showExpandedTable==-1){ this.showExpandedTable=1;showing=true}
      else if (this.showExpandedTable==0){ this.showExpandedTable=1;showing=true}
      else if (this.showExpandedTable==1){ this.showExpandedTable=0;showing=false}

      if (this.showExpandedTable<=0)
      {
        // this.tableStyle.fontSize = '13px'
        this.showExpandedTableButton ='Expand All'//+this.showExpandedTable
      }
      else
      {
        // this.tableStyle.fontSize = '13px'
        this.showExpandedTableButton='Close All'//+this.showExpandedTable

      }

      allSubEntries=document.querySelectorAll('[id^="sub_entry"]')

      while (numCols>0)
      {
        prefix = tableNum+"-"+numCols
        regex = new RegExp(`^sub_entry${prefix}`);
        realindex=0
        for (let index = 0; index < allSubEntries.length; index++) {
          if (regex.test(allSubEntries[index].id)) { // or whatever attribute you want to search
            this.expandList["sub_entry"+prefix+"_"+realindex]=showing
            console.log('toggle:'+"sub_entry"+prefix+"_"+realindex,this.expandList["sub_entry"+prefix+"_"+realindex]);
            realindex++
          }
        }
        numCols-=1
      }


    }
    ,
    sub_entry_list_toggle(e){

      id = e.target.id//.split("-")[0]
      console.log(e, this.expandList[id],  this.expandList[id]==null)
      this.expandList[id]=! this.expandList[id]
      console.log(id,this.expandList[id])

    }


  },
  beforeMount() {}

})