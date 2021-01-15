
  class SinglePageApp extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        init:false,
        foucusedPage : 0,
        foucusedPageIndex: 0,
        lang:　null,

        navItems:{ 
          ch:['公司治理','董事會','薪酬委員會','組織及職掌','規章','內部稽核','企業社會責任','供應商管理','客戶服務','投資人關係','人力資源','與利害關係人對話'],
          eng:['Corporate Governance','Board of Directors','Compensation Committee','Organization and Responsibility','Regulations and Legislations','Internal Audit','Social Responsibility','Supplier Management','Customer Service','Shareholder Relations','Human Resources','Stakeholder Relations']
        },
        
        navItemsPageFile : 
          ["corporate_governance","board_of_directors","compensation_committee","organization","regulations","internal_audit",
            "social","supplier","customer_service","shareholder_relations","human_resources","stakeholder"]
        


      };
    }
    getPageData = (pageData, whichPage,lang) => {
      this.setState({[whichPage]: pageData},function(){
        console.log("in singleApp:",whichPage,this.state[whichPage])
      });


    }

    getPageDataWithLang = (pageData, whichPage,lang) => {
      const newData = { ...this.state[whichPage], [lang]: pageData }
      this.setState({[whichPage]: newData},function(){
        console.log("in singleApp:",whichPage,this.state[whichPage])
      });
    }



    focusThisPage(index){
      var page = this.state.navItemsPageFile[index];
      this.setState({foucusedPage: page},function(){
        this.setState({foucusedPageIndex: index}, function(){
          console.log("FoucusThisPage:",this.state.foucusedPage,"FoucusThisPageIndex:",this.state.foucusedPageIndex);

        });
        
      });
    };

    changeLang(lang){
      this.setState({lang: lang},function(){
        console.log("change lang to:",this.state.lang,"FoucusThisPage:",this.state.foucusedPage);
        // this.setState({foucusedPage: this.state.navItemsPageFile[this.state.lang][this.state.foucusedPageIndex]},function(){
        //   console.log("change lang to:",this.state.lang,"FoucusThisPage:",this.state.foucusedPage,"FoucusThisPageIndex:",this.state.foucusedPageIndex);
        // });
      });
    };


     getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

    render(){
      const navItems = this.state.navItems["ch"].map( (item,index) =>
      <li class="nav-item">
          <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.focusThisPage(index);}}>{item}</a>
      </li>
      );
      const navItems_eng = this.state.navItems["eng"].map( (item,index) =>
      <li class="nav-item">
          <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.focusThisPage(index);}}>{item}</a>
      </li>
      );
      if (!this.state.init)
      {
        var lang =  this.getParameterByName('lang'); 
        if (lang==null){this.state.lang="ch"}
        else{this.state.lang=lang}
        console.log("initLang:",this.state.lang)

        var page =  this.getParameterByName('page'); 
        if (page==null){
          this.state.foucusedPage=this.state.navItemsPageFile[0];
          console.log("initFoucusedPage:",this.state.foucusedPage)
        }
        else{
            this.setState({foucusedPage: page},function(){
              var initPageIndex=this.state.navItemsPageFile.indexOf(page);
                  this.setState({foucusedPageIndex:initPageIndex},function(){
                    console.log("initFoucusedPage:",this.state.foucusedPage)
                    console.log("initFoucusedPageIndex:",this.state.foucusedPageIndex)
                  } )
          });

        }




        this.state.init=true
      }


      return [
        
          <nav class="navbar navbar-expand-sm navbar-dark fixedTopHeader" >
     
     <a class="navbar-brand" href={this.state.lang=='eng' ? "https://www.taisol.com?lang=eng" : "https://www.taisol.com?lang=zh"}><img src='./assets/images/logo.png' /></a>


     <div class="collapse navbar-collapse" id="navbarSupportedContent">

       <ul class="navbar-nav me-auto mb-2 mb-lg-0 header-nav">
         <li class="nav-item">
           <a class="nav-link" aria-current="page" href={this.state.lang=='eng' ? "https://www.taisol.com?lang=eng" : "https://www.taisol.com?lang=zh"}>{this.state.lang=='eng' ? 'Home' : '首頁'}</a>
         </li>
         <li class="nav-item dropdown">
 
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           {this.state.lang=='eng' ? 'About TaiSol' : '關於泰碩'}
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><a class="dropdown-item" href={this.state.lang=='eng' ? "https://www.taisol.com/about/about-taisol?lang=eng":"https://www.taisol.com/about/about-taisol?lang=zh"}>{this.state.lang=='eng' ? 'Company Profile':'公司簡介'}</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ?"https://www.taisol.com/about/global-location?lang=eng" :"https://www.taisol.com/about/global-location?lang=zh"}>{this.state.lang=='eng' ? 'Global Operation':'據點分佈圖'}</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ?"https://www.taisol.com/about/company-yearbook?lang=eng" :"https://www.taisol.com/about/company-yearbook?lang=zh"}>{this.state.lang=='eng' ? 'Milestone':'大事年鑑'}</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ?"https://www.taisol.com/about/patents/2018?lang=eng" :"https://www.taisol.com/about/patents/2018?lang=zh"}>{this.state.lang=='eng' ? 'D&B D-U-N-S Registered':'鄧白氏專區'}</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ?"https://www.taisol.com/about/china-factory?lang=eng" :"https://www.taisol.com/about/china-factory?lang=zh"}>{this.state.lang=='eng' ? 'Quality':'品質政策'}</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ?"https://www.taisol.com/about/company-location?lang=eng" :"https://www.taisol.com/about/company-location?lang=zh"}>{this.state.lang=='eng' ? 'TaiSol Access Information':'公司位置圖'}</a></li>
           </ul>
         </li>
  
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-expanded="false">
           {this.state.lang=='eng' ? 'News':'最新消息'} 
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
             <li><a class="dropdown-item" href={this.state.lang=='eng' ?"https://www.taisol.com/news?lang=eng":"https://www.taisol.com/news?lang=zh"}>{this.state.lang=='eng' ? 'News & Events':'新聞中心'}</a></li>
           </ul>
         </li>
 
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-expanded="false">
           {this.state.lang=='eng' ? 'Products': '產品訊息'  }
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
             <li><a class="dropdown-item" href={this.state.lang=='eng' ? "https://www.taisol.com/product/product-list/1?lang=eng" : "https://www.taisol.com/product/product-list/1?lang=zh "}>
               {this.state.lang=='eng' ? 'Thermal Management Solution': '散熱管理解決方案'  }</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ? "https://www.taisol.com/product/product-list/1/37?lang=eng" :"https://www.taisol.com/product/product-list/1/37?lang=zh"}>{this.state.lang=='eng' ? 'Consumer Electronics': '消費性電子產品'  }</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ? "https://www.taisol.com/product/product-list/1/38?lang=eng":"https://www.taisol.com/product/product-list/1/38?lang=zh"}>{this.state.lang=='eng' ? 'Enterprise Computing & Data Center': '企業運算系統'  }</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ? "https://www.taisol.com/product/product-list/1/39?lang=eng":"https://www.taisol.com/product/product-list/1/39?lang=zh"}>{this.state.lang=='eng' ? 'LED Lighting': 'LED照明'  }</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ? "https://www.taisol.com/product/product-list/1/40?lang=eng":"https://www.taisol.com/product/product-list/1/40?lang=zh"}>{this.state.lang=='eng' ? 'Telecommunication': '無線通訊系統'  }</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ? "https://www.taisol.com/product/product-list/1/41?lang=eng":"https://www.taisol.com/product/product-list/1/41?lang=zh"}>{this.state.lang=='eng' ? 'Industrial Application': '工業應用'  }</a></li>
             <li><a class="dropdown-item" href={this.state.lang=='eng' ? "https://www.taisol.com/product/product-list/1/42?lang=eng":"https://www.taisol.com/product/product-list/1/42?lang=zh"}>{this.state.lang=='eng' ? 'Heat Pipe/Vapor Chamber': '散熱技術'  }</a></li>
           </ul>
         </li>
         {this.state.lang=='ch' ?
         <li class="nav-item dropdown">
           <a ref="navbarDropdown4"  class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-expanded="false" >
           利害關係人專區
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown4" ref="navbarDropdown4-1">
             <li><a class="dropdown-item" href="https://www.taisol.com/investor/investor-news?lang=zh">最新消息</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/investor/corporate-info?lang=zh">公司基本資料</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/investor/monthly-income?lang=zh">財務資訊</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/investor/shareholder?lang=zh">股東關係人專區</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/investor/foundation?lang=zh">公司治理</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/investor/major-info?lang=zh">公司重大訊息</a></li>
           </ul>
         </li>
         : null}
 
         <li class="nav-item">
           <a class="nav-link"href={this.state.lang=='eng' ? "https://www.taisol.com/investor/contact-us?lang=eng" :"https://www.taisol.com/contact/contact-us?lang=zh"}> {this.state.lang=='eng' ? 'Contact Us' :'聯絡我們'} </a>
         </li>
 
       </ul>
     </div>
     <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.changeLang('ch');}}>中文</a>
     <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.changeLang('eng');}}>English</a>
 </nav> 

        ,
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark sub-navbar ">
            <div class="container-fluid">
              <ul class="list-group list-group-horizontal">
              {this.state.lang=='eng' ? navItems_eng : navItems}
              </ul>
            </div>
          </nav>
          {/* <nav class="navbar navbar-expand-lg navbar-dark sub-navbar fixedheader">
            <div class="container-fluid">
              <ul class="list-group list-group-horizontal">
                {navItems}
              </ul>
            </div>
          </nav> */}

          {/* <Test onPassingChildData={this.handleChild}/> */}
          
          <Content_corporate_governance_ch onLoadData={this.getPageDataWithLang} />
          <Content_corporate_governance_eng onLoadData={this.getPageDataWithLang} />
          <Content_board_of_directors_ch onLoadData={this.getPageDataWithLang} />
          <Content_board_of_directors_eng onLoadData={this.getPageDataWithLang} />
          <Content_compensation_committee_ch onLoadData={this.getPageDataWithLang} />
          <Content_compensation_committee_eng onLoadData={this.getPageDataWithLang} />
          <Content_organization_ch onLoadData={this.getPageDataWithLang} />
          <Content_organization_eng onLoadData={this.getPageDataWithLang} />
          <Content_regulations_ch onLoadData={this.getPageDataWithLang} />
          <Content_regulations_eng onLoadData={this.getPageDataWithLang} />
          <Content_internal_audit_ch onLoadData={this.getPageDataWithLang} />
          <Content_internal_audit_eng onLoadData={this.getPageDataWithLang} />
          <Content_social_eng onLoadData={this.getPageDataWithLang} />
          <Content_social_ch onLoadData={this.getPageDataWithLang} />
          <Content_supplier_ch onLoadData={this.getPageDataWithLang} />
          <Content_supplier_eng onLoadData={this.getPageDataWithLang} />
          <Content_customer_service_ch onLoadData={this.getPageDataWithLang} />
          <Content_customer_service_eng onLoadData={this.getPageDataWithLang} />
          <Content_shareholder_relations_ch onLoadData={this.getPageDataWithLang} />
          <Content_shareholder_relations_eng onLoadData={this.getPageDataWithLang} />
          <Content_human_resources_ch onLoadData={this.getPageDataWithLang} />
          <Content_human_resources_eng onLoadData={this.getPageDataWithLang} />
          <Content_stakeholder_ch onLoadData={this.getPageDataWithLang} />
          <Content_stakeholder_eng onLoadData={this.getPageDataWithLang} />

          <Page_corporate_governance currentPage={this.state.foucusedPage} data={this.state.corporate_governance} lang={this.state.lang}/>
          <Page_board_of_directors currentPage={this.state.foucusedPage} data={this.state.board_of_directors} lang={this.state.lang} />
          <Page_compensation_committee currentPage={this.state.foucusedPage} data={this.state.compensation_committee} lang={this.state.lang} />
          <Page_organization currentPage={this.state.foucusedPage} data={this.state.organization} lang={this.state.lang}/>
          <Page_regulations currentPage={this.state.foucusedPage} data={this.state.regulations} lang={this.state.lang} />
          <Page_internal_audit currentPage={this.state.foucusedPage} data={this.state.internal_audit} lang={this.state.lang} />
          <Page_social currentPage={this.state.foucusedPage} data={this.state.social} lang={this.state.lang} />
          <Page_supplier currentPage={this.state.foucusedPage} data={this.state.supplier} lang={this.state.lang} />
          <Page_customer_service currentPage={this.state.foucusedPage} data={this.state.customer_service} lang={this.state.lang} />
          <Page_shareholder_relations currentPage={this.state.foucusedPage} data={this.state.shareholder_relations} lang={this.state.lang} />
          <Page_human_resources currentPage={this.state.foucusedPage} data={this.state.human_resources} lang={this.state.lang} />
          <Page_stakeholder currentPage={this.state.foucusedPage} data={this.state.stakeholder} lang={this.state.lang} />




          {/* <Page_corporate_governance_ch currentPage={this.state.foucusedPage} />
          <Page_board_of_directors_ch currentPage={this.state.foucusedPage} data={this.state.qq} lang={this.state.lang} />
          <Page_compensation_committee_ch currentPage={this.state.foucusedPage}/>
          <Page_organization_ch currentPage={this.state.foucusedPage}/>
          <Page_regulations_ch currentPage={this.state.foucusedPage}/>
          <Page_internal_audit_ch currentPage={this.state.foucusedPage}/>
          <Page_social_ch currentPage={this.state.foucusedPage}/>
          <Page_suppliers_ch currentPage={this.state.foucusedPage}/>
          <Page_customer_service_ch currentPage={this.state.foucusedPage}/>
          <Page_shareholder_relations_ch currentPage={this.state.foucusedPage}/>
          <Page_human_resources_ch currentPage={this.state.foucusedPage}/>
          <Page_stakeholders_ch currentPage={this.state.foucusedPage}/>


          <Page_corporate_governance_eng currentPage={this.state.foucusedPage}/>
          <Page_board_of_directors_eng currentPage={this.state.foucusedPage}/>
          <Page_compensation_committee_eng currentPage={this.state.foucusedPage}/>
          <Page_organization_eng currentPage={this.state.foucusedPage}/>
          <Page_regulations_eng currentPage={this.state.foucusedPage}/>
          <Page_internal_audit_eng currentPage={this.state.foucusedPage}/>
          <Page_social_eng currentPage={this.state.foucusedPage}/>
          <Page_suppliers_eng currentPage={this.state.foucusedPage}/>
          <Page_customer_service_eng currentPage={this.state.foucusedPage}/>
          <Page_shareholder_relations_eng currentPage={this.state.foucusedPage}/>
          <Page_human_resources_eng currentPage={this.state.foucusedPage}/>
          <Page_stakeholders_eng currentPage={this.state.foucusedPage}/> */}


        </div>  
      ]
    }
  }



