
  class SinglePageApp extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        init:false,
        foucusedPage : 0,
        language: 'ch', 
        navItems : ['董事會','薪酬委員會','組織及職掌','規章','內部稽核','企業社會責任','供應商管理','客戶服務','投資人關係','人力資源','與利害關係人對話'],
        navItems_eng : ['Board of Directors','Compensation Committee','Organization','Regulations','Internal Audit','Social Responsibility','Shareholder Relations','Human Resources','Stakeholders Relations']
      };
    }
    focusThisPage(index){
      this.setState({foucusedPage: index},function(){
        console.log("FoucusThisPage:",this.state.foucusedPage);
      });
    };
    changeLang(lang){
      this.setState({language: lang},function(){
        console.log("language:",this.state.language);
      });
    };
    render(){
      const navItems = 
        this.state.navItems.map( (item,index) =>
      <li class="nav-item">
          <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.focusThisPage(index);}}>{item}</a>
      </li>
      );
      
      const navItems_eng = this.state.navItems_eng.map( (item,index) =>
      <li class="nav-item">
          <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.focusThisPage(index);}}>{item}</a>
      </li>
      );
      



      if (!this.state.init)
      {
        var initFoucusedPage=window.location.href.split('?')[1];
        if (initFoucusedPage==null){initFoucusedPage=0}
        else {initFoucusedPage=parseInt(initFoucusedPage) }
        this.state.foucusedPage=initFoucusedPage;
        var initLang=window.location.href.split('?')[2];
        if (initLang==null){initLang='ch'}
        
        this.state.language=initLang;
        console.log("initFoucusedPage :",this.state.foucusedPage)
        console.log("initLang :",this.state.language)
        this.state.init=true
      }
      return [
<nav class="navbar navbar-expand-sm navbar-dark fixedTopHeader" >
     
     <a class="navbar-brand" href="https://www.taisol.com"><img src='./assets/images/logo.png' /></a>
     <h3 style={{color: `white`}}> <span>&nbsp;&nbsp;</span>{this.state.language=='eng' ? 'Corporate Governance' : '公司治理'}</h3>


     <div class="collapse navbar-collapse" id="navbarSupportedContent">

       <ul class="navbar-nav me-auto mb-2 mb-lg-0 header-nav">
         <li class="nav-item">
           <a class="nav-link" aria-current="page" href="https://www.taisol.com/?lang=zh">{this.state.language=='eng' ? 'Home' : '首頁'}</a>
         </li>
         <li class="nav-item dropdown">
 
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           {this.state.language=='eng' ? 'About TaiSol' : '關於泰碩'}
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><a class="dropdown-item" href="https://www.taisol.com/about/about-taisol?lang=zh">{this.state.language=='eng' ? 'Company Profile':'公司簡介'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/global-location?lang=zh">{this.state.language=='eng' ? 'Global Operation':'據點分佈圖'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/company-yearbook?lang=zh">{this.state.language=='eng' ? 'Milestone':'大事年鑑'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/patents/2018?lang=zh">{this.state.language=='eng' ? 'D&B D-U-N-S Registered':'鄧白氏專區'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/china-factory?lang=zh">{this.state.language=='eng' ? 'Quality':'品質政策'}</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/about/company-location?lang=zh">{this.state.language=='eng' ? 'TaiSol Access Information':'公司位置圖'}</a></li>
           </ul>
         </li>
  
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-expanded="false">
           {this.state.language=='eng' ? 'News':'最新消息'} 
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
             <li><a class="dropdown-item" href="https://www.taisol.com/news?lang=zh">{this.state.language=='eng' ? 'News & Events':'新聞中心'}</a></li>
           </ul>
         </li>
 
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-expanded="false">
           {this.state.language=='eng' ? 'Products': '產品訊息'  }
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1?lang=zh">{this.state.language=='eng' ? 'Thermal Management Solution': '散熱管理解決方案'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/37?lang=zh">{this.state.language=='eng' ? 'Consumer Electronics': '消費性電子產品'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/38?lang=zh">{this.state.language=='eng' ? 'Enterprise Computing & Data Center': '企業運算系統'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/39?lang=zh">{this.state.language=='eng' ? 'LED Lighting': 'LED照明'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/40?lang=zh">{this.state.language=='eng' ? 'Telecommunication': '無線通訊系統'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/41?lang=zh">{this.state.language=='eng' ? 'Industrial Application': '工業應用'  }</a></li>
             <li><a class="dropdown-item" href="https://www.taisol.com/product/product-list/1/42?lang=zh">{this.state.language=='eng' ? 'Heat Pipe/Vapor Chamber': '散熱技術'  }</a></li>
           </ul>
         </li>
         {this.state.language=='ch' ?
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
           <a class="nav-link" href="https://www.taisol.com/contact/contact-us?lang=zh"> {this.state.language=='eng' ? 'Contact Us' :'聯絡我們'} </a>
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
              {this.state.language=='eng' ? navItems_eng : navItems}
              </ul>
            </div>
          </nav>
          <Page0 currentPage={this.state.foucusedPage} lang={this.state.language}/>
          <Page0E currentPage={this.state.foucusedPage} lang={this.state.language}/>
          <Page2 currentPage={this.state.foucusedPage+1}/>
          <Page3 currentPage={this.state.foucusedPage+1}/>
          <Page4 currentPage={this.state.foucusedPage+1}/>
          <Page5 currentPage={this.state.foucusedPage+1}/>
          <Page6 currentPage={this.state.foucusedPage+1}/>
          <Page7 currentPage={this.state.foucusedPage+1}/>
          <Page8 currentPage={this.state.foucusedPage+1}/>
          <Page9 currentPage={this.state.foucusedPage+1}/>
          <Page10 currentPage={this.state.foucusedPage+1}/>
          <Page11 currentPage={this.state.foucusedPage+1}/>

        </div>  
      ]
    }
  }



