class Content_regulations_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "regulations",
            lang: "eng",
            data : {
                title:"Regulations and Legislations",
                p1:"At TaiSol, we uphold the responsibility of corporate operators, and protect the legitimate rights and interests of shareholders and take into account the interests of other stakeholders. We believe that good corporate governance should be achieved by the board of directors and management in a manner that is in the best interests of the company and all shareholders, assisting in corporate management operations, and providing effective supervision mechanisms to encourage companies to make good use of resources, improve efficiency, and thereby improve Competitiveness and promote the social well-being of all people.",
                links: [
                   
                   {title :"公司章程",
                   href:"http://w3.taisol.com.tw/important/%E5%85%AC%E5%8F%B8%E7%AB%A0%E7%A8%8B.pdf"},
           
                   {title :"董事及監察人選舉辦法",
                   href:"http://w3.taisol.com.tw/important/%E8%91%A3%E7%9B%A3%E9%81%B8%E8%88%89%E8%BE%A6%E6%B3%95.pdf"},
           
                   {title:"股東會議事規則",href:"http://w3.taisol.com.tw/important/%E8%82%A1%E6%9D%B1%E6%9C%83%E8%AD%B0%E4%BA%8B%E8%A6%8F%E5%89%87.pdf"},
                   {title:"取得或處分資產處理程序",href:"http://w3.taisol.com.tw/important/%E5%8F%96%E5%BE%97%E6%88%96%E8%99%95%E5%88%86%E8%B3%87%E7%94%A2%E8%99%95%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
                   {title:"背書保證作業程序",href:"http://w3.taisol.com.tw/important/%E8%83%8C%E6%9B%B8%E4%BF%9D%E8%AD%89.pdf"},
                   {title:"資金貸與他人作業程序",href:"http://w3.taisol.com.tw/important/%E8%B3%87%E9%87%91%E8%B2%B8%E8%88%87.pdf"},
                   {title:"內部重大資訊處理作業程序",href:"http://w3.taisol.com.tw/important/%E5%85%A7%E9%83%A8%E9%87%8D%E5%A4%A7%E8%B3%87%E8%A8%8A%E8%99%95%E7%90%86%E4%BD%9C%E6%A5%AD%E7%A8%8B%E5%BA%8F.pdf"},
                   {title:"誠信經營作業程序及行為指南",href:"./assets/docs/誠信經營作業程序及行為指南.pdf"},
                   {title:"道德行為準則",href:"http://w3.taisol.com.tw/important/%E9%81%93%E5%BE%B7%E8%A1%8C%E7%82%BA%E6%BA%96%E5%89%87.pdf"},
                   {title:"企業社會責任實務守則",href:"http://w3.taisol.com.tw/important/%E4%BC%81%E6%A5%AD%E7%A4%BE%E6%9C%83%E8%B2%AC%E4%BB%BB%E5%AF%A6%E5%8B%99%E5%AE%88%E5%89%87.pdf"},
                   {title:"公司治理實務守則",href:"http://w3.taisol.com.tw/important/%E5%85%AC%E5%8F%B8%E6%B2%BB%E7%90%86%E5%AF%A6%E5%8B%99%E5%AE%88%E5%89%87.pdf"},
                   {title:"提名委員會組織規程",href:"http://w3.taisol.com.tw/important/%E6%8F%90%E5%90%8D%E5%A7%94%E5%93%A1%E6%9C%83%E7%B5%84%E7%B9%94%E8%A6%8F%E7%A8%8B.pdf"},
           
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