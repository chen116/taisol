
  class SinglePageApp extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        init:false,
        foucusedPage : 0,
        navItems : ['公司治理','董事會','董事會(Board of Directors)','薪酬委員會','組織及職掌','規章','內部稽核','企業社會責任','供應商管理','客戶服務','投資人關係','人力資源','與利害關係人對話'],
        navItemsPageFile : ["corporate_governance","board_of_directors_ch","board_of_directors_eng","compensation_committee","organization","regulations","internal_audit",
        "social","suppliers","customer_service","investor_relations","human_resources","stakeholders"]
      };
    }
    focusThisPage(index){
      var page = this.state.navItemsPageFile[index];
      this.setState({foucusedPage: page},function(){
        console.log("FoucusThisPage:",this.state.foucusedPage);
      });
    };

    render(){
      const navItems = this.state.navItems.map( (item,index) =>
      <li class="nav-item">
          <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.focusThisPage(index);}}>{item}</a>
      </li>
      );
      if (!this.state.init)
      {
        var initFoucusedPage=window.location.href.split('?')[1];
        if (initFoucusedPage==null){initFoucusedPage=this.state.navItemsPageFile[0]}
        else {initFoucusedPage=initFoucusedPage }
        this.state.foucusedPage=initFoucusedPage;
        console.log("initFoucusedPage:",this.state.foucusedPage)
        this.state.init=true
      }
      return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark sub-navbar fixedheader">
            <div class="container-fluid">
              <ul class="list-group list-group-horizontal">
                {navItems}
              </ul>
            </div>
          </nav>
          <Page_corporate_governance currentPage={this.state.foucusedPage}/>
          <Page_board_of_directors_ch currentPage={this.state.foucusedPage}/>
          <Page_board_of_directors_eng currentPage={this.state.foucusedPage}/>
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

        </div>  
      )
    }
  }



