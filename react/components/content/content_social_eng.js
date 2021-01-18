class Content_social_eng extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "social",
            lang: "eng",
            data : {
                title: "Social Responsibility",
               list1 : [

                 "Comply with relevant labor laws and respect the internationally recognized principles of basic labor human rights, protect the legitimate rights and interests of employees, have no discrimination in employment policies, and have established relevant management mechanisms.",
                 "In order to protect the earth and reduce damage to the ecosystem, and to enable products to meet the requirements of EU ROHS and other related environmental directives, the company's raw material suppliers have signed a restricted substance commitment guarantee, promising that the product design and manufacturing they supply are all Strictly abide by environmental protection laws and regulations, and work together with the company to achieve the goals of the world's environmental protection policies, effectively control raw materials and manufacturing processes, and ensure that the products they provide meet the ROHS specifications.",
                 "The company encourages energy-saving and carbon-reduction operations, and will review all relevant issues or measures that can save energy, and implement them if feasible.",
                 "The company provides a safe and healthy working environment, and regular health checks and safety seminars.",
                 "The publicity of company policies and the understanding of employees’ opinions are all conducted in an open two-way communication method.",
                 "The company has set up customer complaint handling operations, and established a customer-oriented quality system, using objective methods and standard processes to evaluate customer satisfaction with the company's products or services.",
                 "The company enthusiastically participates in various charity activities and encourages employees to actively participate.",
                 "The company regularly discloses the implementation of information related to corporate social responsibility in the annual report of the shareholders meeting.",


               ],

               
               list2 : [
                 {title:"Greenhouse Gas Information Management Program",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E8%B3%87%E8%A8%8A%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Greenhouse Gas Management Manual",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E7%AE%A1%E7%90%86%E6%89%8B%E5%86%8A.pdf"},
                 {title:"Greenhouse Gas Report Management Procedure",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E5%A0%B1%E5%91%8A%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"}, 
                 {title:"Greenhouse gas inventory description management procedures",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E6%B8%85%E5%96%AE%E8%AA%AA%E6%98%8E%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Greenhouse gas internal verification procedures",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E5%85%A7%E9%83%A8%E6%9F%A5%E8%AD%89%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Emergency plan for sewage treatment system",href:"http://w3.taisol.com.tw/file/%E6%B1%99%E6%B0%B4%E8%99%95%E7%90%86%E7%B3%BB%E7%B5%B1%E7%B7%8A%E6%80%A5%E9%A0%90%E6%A1%88.pdf"},
                 {title:"Water Pollutant Management Measures",href:"http://w3.taisol.com.tw/file/%E6%B0%B4%E6%B1%99%E6%9F%93%E7%89%A9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
                 {title:"Noise Pollution Management Measures",href:"http://w3.taisol.com.tw/file/%E5%99%AA%E9%9F%B3%E6%B1%99%E6%9F%93%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
                 {title:"Noise Measurement Management Measures",href:"http://w3.taisol.com.tw/file/%E5%99%AA%E8%81%B2%E6%B8%AC%E9%87%8F%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
                 {title:"Waste Management Measures",href:"http://w3.taisol.com.tw/file/%E5%BB%A2%E6%A3%84%E7%89%A9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
                 {title:"Measures for the Administration of Dangerous Chemicals",href:"http://w3.taisol.com.tw/file/%E5%8C%96%E5%AD%B8%E5%8D%B1%E9%9A%AA%E5%93%81%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
                 {title:"Air Pollutant Management Measures",href:"http://w3.taisol.com.tw/file/%E5%A4%A7%E6%B0%A3%E6%B1%A1%E6%9F%93%E7%89%A9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
                 {title:"Run, run, drip, and leak management methods",href:"http://w3.taisol.com.tw/file/%E8%B7%91%E3%80%81%E5%86%92%E3%80%81%E6%BB%B4%E3%80%81%E6%BC%8F%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
                 {title:"Emergency plan for liquid ammonia leakage",href:"http://w3.taisol.com.tw/file/%E6%B6%B2%E6%B0%A8%E6%B4%A9%E6%BC%8F%E7%B7%8A%E6%80%A5%E9%A0%90%E6%A1%88.pdf"},
                 {title:"List of environment-related substances and reduction plan",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%9B%B8%E9%97%9C%E7%89%A9%E8%B3%AA%E6%B8%85%E5%96%AE%E5%8F%8A%E5%89%8A%E6%B8%9B%E8%A8%88%E5%8A%83%E8%A1%A8.pdf"},
                 {title:"Environmental objectives, indicators, management plan management procedures",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%9B%AE%E6%A8%99%E3%80%81%E6%8C%87%E6%A8%99%E3%80%81%E7%AE%A1%E7%90%86%E6%96%B9%E6%A1%88%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Environmental management responsibility procedures",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%AE%A1%E7%90%86%E8%81%B7%E8%B2%AC%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Environmental Management Substance Ban (Restriction) Standard",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%AE%A1%E7%90%86%E7%89%A9%E8%B3%AA%E7%A6%81(%E9%99%90)%E7%94%A8%E6%A8%99%E6%BA%96.pdf"},
                 {title:"Environmental management policy and objectives",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%AE%A1%E7%90%86%E6%96%B9%E9%87%9D%E5%92%8C%E7%9B%AE%E6%A8%99.pdf"},
                 {title:"Environmental monitoring program",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%9B%A3%E6%B8%AC%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Environmental product control procedures",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E4%BF%9D%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Environmental management procedures",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E4%BF%9D%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Environmental Manual",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E6%89%8B%E5%86%8A.pdf"},
                 {title:"Resources and Energy Management Measures",href:"http://w3.taisol.com.tw/file/%E8%B3%87%E6%BA%90%E3%80%81%E8%83%BD%E6%BA%90%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
                 {title:"Operation control program",href:"http://w3.taisol.com.tw/file/%E9%81%8B%E8%A1%8C%E6%8E%A7%E5%88%B6%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Emergency preparation and response procedures",href:"http://w3.taisol.com.tw/file/%E7%B7%8A%E6%80%A5%E6%BA%96%E5%82%99%E8%88%87%E5%9B%9E%E6%87%89%E7%A8%8B%E5%BA%8F.pdf"},
                 {title:"Emergency Response Manual",href:"http://w3.taisol.com.tw/file/%E7%B7%8A%E6%80%A5%E6%87%89%E8%AE%8A%E6%89%8B%E5%86%8A.pdf"},
                 {title:"Measures for the Evaluation and Management of Important Environmental Factors",href:"http://w3.taisol.com.tw/file/%E9%87%8D%E8%A6%81%E7%92%B0%E5%A2%83%E5%9B%A0%E7%B4%A0%E8%A9%95%E5%83%B9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
                 {title:"Environmental Impact Assessment Management Measures for Contractors and Service Providers ",href:"http://w3.taisol.com.tw/file/%E6%89%BF%E5%8C%85%E5%95%86%E3%80%81%E6%9C%8D%E5%8B%99%E5%95%86%E7%92%B0%E5%A2%83%E5%BD%B1%E9%9F%BF%E8%A9%95%E5%83%B9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
               ],
               table1: [
                 {date:"2019.09",event:"Xinnantian Dongmi (Friendly Farming)-Gifts for Mid-Autumn Festival"},
                 {date:"2020.01",event:"Nurturing Social Welfare Foundation/Jixian Sheltered Workshop-Gifts for Spring Festival Activities"},
                 {date:"2020.01",event:"Taichung City Welfare and Care Association for the Disabled/Smiling Angel Bakery-Gifts for Spring Festival Activities"},
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