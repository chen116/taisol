
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
          eng:['Corporate Governance','Board of Directors','Compensation Committee','Organization','Regulations','Internal Audit','Social Responsibility','Shareholder Relations','Human Resources','Stakeholders Relations']
        },
        
        navItemsPageFile : {
          ch: ["corporate_governance","board_of_directors","compensation_committee","organization","regulations","internal_audit",
            "social","suppliers","customer_service","investor_relations","human_resources","stakeholders"],
          eng:["corporate_governance_eng","board_of_directors_eng","compensation_committee_eng","organization_eng","regulations_eng","internal_audit_eng",
            "social_eng","suppliers_eng","customer_service_eng","investor_relations_eng","human_resources_eng","stakeholders_eng"  ]
      }


      };
    }
    focusThisPage(index){
      var page = this.state.navItemsPageFile[this.state.lang][index];
      this.setState({foucusedPage: page},function(){
        console.log("FoucusThisPage:",this.state.foucusedPage);
        this.setState({foucusedPageIndex: index});
        
      });
    };
    changeLang(lang){
      this.setState({lang: lang},function(){
        console.log("language:",this.state.lang);
        this.setState({foucusedPage: this.state.navItemsPageFile[this.state.lang][this.state.foucusedPageIndex]});
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


        // var initFoucusedPage=window.location.href.split('?')[1];
        // if (initFoucusedPage==null){initFoucusedPage=this.state.navItemsPageFile["ch"][0]}
        // else {initFoucusedPage=initFoucusedPage; this.state.lang="ch" }
        // this.state.foucusedPage=initFoucusedPage;
        // console.log("initFoucusedPage:",this.state.foucusedPage)


        var foo = this.getParameterByName('foo'); 
        console.log("foo:",foo)

        var lang = window.location.href.split('?')[1];
        if (lang==null){this.state.lang="ch"}
        else{this.state.lang=lang}
        console.log("initLang:",this.state.lang)
        this.state.foucusedPage=this.state.navItemsPageFile[this.state.lang][0];
        this.state.foucusedPageIndex=0;
        console.log("initFoucusedPage:",this.state.foucusedPage)


        this.state.init=true
      }
      return [
        
          <nav class="navbar navbar-expand-sm navbar-dark fixedTopHeader" >
     
     <a class="navbar-brand" href="https://www.taisol.com"><img src='./assets/images/logo.png' /></a>


     <div class="collapse navbar-collapse" id="navbarSupportedContent">

       <ul class="navbar-nav me-auto mb-2 mb-lg-0 header-nav">
         <li class="nav-item">
           <a class="nav-link" aria-current="page" href="https://www.taisol.com/?lang=zh">{this.state.lang=='eng' ? 'Home' : '首頁'}</a>
         </li>
         <li class="nav-item dropdown">
 
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           {this.state.lang=='eng' ? 'About TaiSol' : '關於泰碩'}
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><a class="dropdown-item" href="https://www.taisol.com/about/about-taisol?lang=zh">{this.state.lang=='eng' ? 'Company Profile':'公司簡介'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/global-location?lang=zh">{this.state.lang=='eng' ? 'Global Operation':'據點分佈圖'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/company-yearbook?lang=zh">{this.state.lang=='eng' ? 'Milestone':'大事年鑑'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/patents/2018?lang=zh">{this.state.lang=='eng' ? 'D&B D-U-N-S Registered':'鄧白氏專區'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/china-factory?lang=zh">{this.state.lang=='eng' ? 'Quality':'品質政策'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/company-location?lang=zh">{this.state.lang=='eng' ? 'TaiSol Access Information':'公司位置圖'}</a></li>
           </ul>
         </li>
  
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-expanded="false">
           {this.state.lang=='eng' ? 'News':'最新消息'} 
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
             <li><a class="dropdown-item" href="https://www.taisol.com/news?lang=zh">{this.state.lang=='eng' ? 'News & Events':'新聞中心'}</a></li>
           </ul>
         </li>
 
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-expanded="false">
           {this.state.lang=='eng' ? 'Products': '產品訊息'  }
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
             <li><a class="dropdown-item" href={this.state.lang=='eng' ? "https://www.taisol.com/product/product-list/1?lang=eng" : "https://www.taisol.com/product/product-list/1?lang=zh "}>
               {this.state.lang=='eng' ? 'Thermal Management Solution': '散熱管理解決方案'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/37?lang=zh">{this.state.lang=='eng' ? 'Consumer Electronics': '消費性電子產品'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/38?lang=zh">{this.state.lang=='eng' ? 'Enterprise Computing & Data Center': '企業運算系統'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/39?lang=zh">{this.state.lang=='eng' ? 'LED Lighting': 'LED照明'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/40?lang=zh">{this.state.lang=='eng' ? 'Telecommunication': '無線通訊系統'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/41?lang=zh">{this.state.lang=='eng' ? 'Industrial Application': '工業應用'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/42?lang=zh">{this.state.lang=='eng' ? 'Heat Pipe/Vapor Chamber': '散熱技術'  }</a></li>
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
           <a class="nav-link" href="https://www.taisol.com/contact/contact-us?lang=zh"> {this.state.lang=='eng' ? 'Contact Us' :'聯絡我們'} </a>
         </li>
 
       </ul>
     </div>
     <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.changeLang('ch');}}>中文</a>
     <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.changeLang('eng');}}>English</a>
 </nav> 

        ,
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark sub-navbar fixedheader">
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
          <Page_corporate_governance currentPage={this.state.foucusedPage}/>
          <Page_board_of_directors currentPage={this.state.foucusedPage}/>
          <Page_compensation_committee currentPage={this.state.foucusedPage}/>
          <Page_organization currentPage={this.state.foucusedPage}/>
          <Page_regulations currentPage={this.state.foucusedPage}/>
          <Page_internal_audit currentPage={this.state.foucusedPage}/>
          <Page_social currentPage={this.state.foucusedPage}/>
          <Page_suppliers currentPage={this.state.foucusedPage}/>
          <Page_customer_service currentPage={this.state.foucusedPage}/>
          <Page_investor_relations currentPage={this.state.foucusedPage}/>
          <Page_human_resources currentPage={this.state.foucusedPage}/>
          <Page_stakeholders currentPage={this.state.foucusedPage}/>


          <Page_corporate_governance_eng currentPage={this.state.foucusedPage}/>
          <Page_board_of_directors_eng currentPage={this.state.foucusedPage}/>
          <Page_compensation_committee_eng currentPage={this.state.foucusedPage}/>
          <Page_organization_eng currentPage={this.state.foucusedPage}/>
          <Page_regulations_eng currentPage={this.state.foucusedPage}/>
          <Page_internal_audit_eng currentPage={this.state.foucusedPage}/>
          <Page_social_eng currentPage={this.state.foucusedPage}/>
          <Page_suppliers_eng currentPage={this.state.foucusedPage}/>
          <Page_customer_service_eng currentPage={this.state.foucusedPage}/>
          <Page_investor_relations_eng currentPage={this.state.foucusedPage}/>
          <Page_human_resources_eng currentPage={this.state.foucusedPage}/>
          <Page_stakeholders_eng currentPage={this.state.foucusedPage}/>

        </div>  
      ]
    }
  }



