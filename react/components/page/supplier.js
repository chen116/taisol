function Page_supplier(props) {
    const myPage = "supplier";
  
      if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}

  
  
  
          const list1 = props.data[props.lang].list1.map( (item,index) =>
          <li class="list-group-item" >
            {item}
          </li>
          );
  
          const list2 = props.data[props.lang].list2.map(item=>
          <li class="list-group-item" >
    {item}
  </li>);
  
  
        return  [
        <div class="content">
  
  <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
  <p><span>&nbsp;&nbsp;</span></p>  
  <p>泰碩公司重視企業社會責任，已要求採購「非衝突(conflict-free)」的原物料; 提倡人道精神與實踐人性尊嚴的社會道德準則，是泰碩公司理應善盡的企業社會責任。目前係以符合經濟合作暨發展組織(OECD)於 2011 年所發布之「受衝突影響與高風險地區之全球責任礦物供應鏈模範政策(Model Supply Chain Policy for a Responsible Global Supply Chain of Mineral from Conflict-Affected and High Risk Areas)」的盡職調查(due diligence)架構為依據。
  </p>
  <p> 泰碩公司鼓勵供應商向經特定產業組織(如 EICC 等)所認可為非衝突之原物料供應廠商進行採購，並要求供應商積極督促尚未取得此認可的供應廠商接受 EICC 或其他同等之獨立第三方稽核計劃檢驗，以符合「非衝突」之原則。
  </p>
  <p> 透過供應商管理，將對環保的理念向外延伸推廣，促使供應商夥伴也能共同關心環保議題，共同提升更美好的環境與社會。 
  </p>
  
  <p><span>&nbsp;&nbsp;</span></p>
  
  <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>對供應商有關環境保護之要求 (2018年-已完成共37家供應商評鑑) </h5>
  
  <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
  
  <ul class="list-group list-group-flush" >
   {list1}
  </ul>
  
  
  <p><span>&nbsp;&nbsp;</span></p>
  <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>客戶及供應商投訴中心 </h5>
  <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
  
  <h6><b>違反從業道德行為舉報系統</b></h6>
  
  <p>在泰碩電子股份有限公司，誠信正直是公司文化最重要之核心價值， 也是公司經營理念之首。泰碩公司一向承諾以誠信從事所有業務活動 ，絕不允許貪污及任何形式之舞弊行為。
  </p>
  <p>若您發現泰碩公司員工或任何代表泰碩公司的相關人士進行可疑行為 或可能違反泰碩公司的道德行為準則時，請告訴我們。
  您的舉報事項，我們將交由公司副總經理直接處理。
  </p>
  <p>除法律另有規定外，對於您提供關於您的個人資料，我們將予以保密 ，並依法採取適當之保護措施，保護您的個人資料及隱私。 
  </p>
  <p><span>&nbsp;&nbsp;</span></p>
  
  <h6><b>提醒您：</b></h6>
  
  <ul class="list-group list-group-flush" >
  {list2}
  <li  class="list-group-item">   郭尚仁 先生
  (副總經理暨發言人) <img src="./assets/images/investor04_6.jpg"  />：<a href="mailto:sales@taisol.com">sales@taisol.com</a>
  </li>
  </ul>
  
  
  
  </div>
        ];
      
     
      
    }
  