class Content_stakeholder_ch extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key: "stakeholder",
            lang: "ch",
            data :  {   
                title: "與利害關係人對話",   
                table1:[
                  {person: "投資人", topics:["獲利情形","風險管理"], jobs:["本公司定期召開股東常會，所有管理階層也均會全程參與，詳細報告及回覆投資人所關切的議題。我們也在網頁設置與投資人關係的專區，增加公司營運的透明度。通暢的溝通管道使我們能有效管理風險，資訊的透明亦可讓投資人得以明智決策。"],results:[{txt:"最新消息",href:"http://www.taisol.com.tw/news?lang=zh"}]},
                  {person: "員工", topics:[
                    "工作環境",
                    "薪資福利",
                    "晉升遷調"
                  ]
                  , jobs:["我們希望所有同仁都能感受到自己的聲音被傾聽、被重視。為此，我們特別建立了一套無障礙的員工發聲系統和程序，提供專人處理的電話線和信箱，讓員工的意見直達最高管理階層。"],results:[{txt:"員工福利、工作環境與人身安全",href:"index.html?lang=ch&page=human_resources"}]},
                  {person: "客戶", topics:["產品品質"], jobs:[
                    "本公司積極要求業務單位必須與客戶保持密切聯繫，即時告知客戶應有的權益，並確保產品達到預期的可靠性與品質。我們也致力於提供客戶綠色產品，並與原物料供應商簽署限用物質承諾保證書、不使用衝突礦產，提供客戶符合歐盟ROHS規範的產品。",
                    "本公司除了已建立完整的客訴管理系統，另於網頁中提供讓客戶直接溝通的管道，凡客戶投訴的案件，皆由本公司副總經理直接處理。",
                  ]
                  ,results:[]},
                  {person: "供應商", topics:["採購條件","誠信經營"], jobs:["本公司嚴格落實誠信經營，採購單位每年檢討實際交易情形後，與供應商協調次年度之合約內容。並要求採購單位不得收受廠商以各種型式提供之不正當利益。","本公司已於網頁中提供供應商直接溝通的管道，對供應商投訴的案件，皆由本公司副總經理直接處理。"],results:[]},
                  
                  {person: "社會", topics:["環境保護","社會公益"], jobs:["本公司已通過ISO14001環境管理系統，並依ISO14064訂有多項作業辦法，積極推動對空氣、噪音、水資源等汙染防治管理及提高對溫室氣體管理之標準。","本公司於大學中設置獎助學金，給予品學兼優的年輕學子最實質的鼓勵。"],results:[{txt:"社會責任",href:"index.html?lang=eng&page=social"}, {txt:"ISO14001證書",href:"http://w3.taisol.com.tw/important/EMS-ARES-ISO14001.pdf"} ]},
                  
                  
               
                  
              ],
            
              list1:[
            
                {
                  title:"一、本公司為落實誠信經營政策，積極防範不誠信的行為，已設立檢舉信箱機制，嚴格禁止任何違反從業道德之行為及情事，如有違反各營運所在相關法令或本公司各項從業道德行為準則，一律秉公處理，絕不寬貸。", 
                  content:[]
                },
                {
                  title:"二、本公司提供檢舉之獎勵：糾正或檢舉違反廉潔守則情事，凡經查證屬實者，將予適當之獎勵。另針對違反從業道德之行為，除所獲取之各項不正當利益均應追繳發還被索取人或公司外，並依情節之大小，予以處分或合併處分。",
                  content:[]
                },
                {
                  title:"三、檢舉方式如下:",
                  content:["檢舉信箱 : 如下方所示"]
                },
                {
                  title:"四、檢舉人應至少提供下列資訊始得成立檢舉案件：",
                  content: 
                  [
                    "內部員工 : (1)廠別(2)工號(3)姓名。",
            　　        "外部人 : (1)姓名(2)身分證字號。",
            　　        "可聯絡到檢舉人之地址、電話、電子信箱。",
            　　        "被檢舉人之姓名或其他足資識別被檢舉人身分特徵之資料。",
            　　        "可供調查之具體事證。"
                  ]
                },
                {
                  title:"五、本公司依檢舉人及檢舉事項、對象，接受檢舉之窗口分別為管理部吳小姐或發言人郭副總，如下方所示。對於檢舉人之身份與所檢舉之內容，除依法律之規定要求外，絕對會予以保密，並承諾保護檢舉人及酌予適當獎勵。 ",
                  content:[]
                },
                {
                  title:"六、本公司對於檢舉案件一經成立即指派專人進行調查。其相關紙本文件、電子檔案等，除提供予司法檢調等單位外，將由專責人員上鎖、加密，妥善保管之。",
                            content:[]
                },
                {
                  title:"七、作業流程：",
                  content:["(1)受理窗口→董事長／總經理→管理部／稽核室→董事／監察人。" ,  "(2)管理部／稽核室→委任律師／司法及檢調等單位 。 "]
                }
            
              ],
            
              list2:[
                "1. 您所提供的個人資料，包含姓名、電話、電子郵件地址，泰碩 公司於調查期間，得為調查舉報事項與聯繫用途而處理利用； 調查若有必要，泰碩公司得傳遞您必要的個人資訊予公司內部 及司法檢調等相關單位。",
                "2. 不得明知不實而故意捏造事實，倘舉報事後被證明是出於惡意 或有故意捏造虛偽陳述之情事，您必須自負相關法律責任。",
                "3. 為能盡早調查與解決問題，請您務必提供所有可能的相關具體 資訊與文件，若相關資訊與文件不齊備，泰碩公司將無法進行 調查。",
                "4. 泰碩公司提供予您的相關聯絡內容，其全部或一部分皆不可向 任何人揭露。除依法律之規定要求外，您不得以泰碩公司與您 之間的聯絡內容提出訴訟或以該聯絡內容作為訴訟相關資料。",
                
              ],
            
            
            
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