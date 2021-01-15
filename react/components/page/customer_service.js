function Page_customer_service(props) {
    const myPage = "customer_service";

  
      if ((myPage != props.currentPage ) || (props.data==null) || (props.data["ch"]==null) || props.data["eng"]==null) {return null;}

  
        class ActiveList1 extends React.Component {
          constructor(props){
              super(props);
              this.state={
              };
          }
          render() {
              const list =  this.props.data.map( (item,index) => [
                    <li class="list-group-item" >
                      {item}
                    </li>
                ]);
              return (
                <ul class="list-group list-group-flush ">
                  {list}
                  <li  class="list-group-item">   郭尚仁 先生
                  (副總經理暨發言人) <img src="./assets/images/investor04_6.jpg"  />：<a href="mailto:sales@taisol.com">sales@taisol.com</a>
                  </li>
                </ul>
    
              )
          }
        }  
  
  
  
        return  [
        <div class="content">
  
          <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
          <p><span>&nbsp;&nbsp;</span></p>  
  
          <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>違反從業道德行為舉報系統 </h5>
  
          <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
          <p>在泰碩電子股份有限公司，誠信正直是公司文化最重要之核心價值， 也是公司經營理念之首。泰碩公司一向承諾以誠信從事所有業務活動 ，絕不允許貪污及任何形式之舞弊行為。
          </p>
          <p>若您發現泰碩公司員工或任何代表泰碩公司的相關人士進行可疑行為 或可能違反泰碩公司的道德行為準則時，請告訴我們。
          您的舉報事項，我們將交由公司副總經理直接處理。
          </p>
          <p>除法律另有規定外，對於您提供關於您的個人資料，我們將予以保密 ，並依法採取適當之保護措施，保護您的個人資料及隱私。 
          </p>
          <p><span>&nbsp;&nbsp;</span></p>
          <p><b>提醒您：</b></p>
          <ActiveList1 data={props.data[props.lang].list1} />
  
        </div>
        ];
      
     
      
    }
  