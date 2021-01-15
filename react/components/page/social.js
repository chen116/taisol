function Page_social(props) {
    const myPage = "social";
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
                <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>{item}
              </li>
              ]);
            return (
              <ul class="list-group list-group-flush" >
                {list}
              </ul>
            )
        }
      }  
      class ActiveList2 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            };
        }
        render() {
            const list =  this.props.data.map( (item,index) => [
              <li class="list-item list-unstyled  col-4 border-bottom py-2 ">
                <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>
                <a href={item.href} target="_blank">   
                 {item.title} {/* <img class="rounded" src="./assets/images/investor04_7.jpg"/> */}
                </a> 
              </li>
              ])
            return (
              <ul class="list-unstyled row">
                {list}
              </ul>
            )
        }
      } 
      class ActiveTable1 extends React.Component {
        constructor(props){
            super(props);
            this.state={};
        }
          render() {
              const table =  this.props.data.map( (item,index) => [
                <tr>
                  <td> {item.date}</td>
                  <td> {item.event}</td>
                </tr> 
              ]);
              return (
                <table  class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th rowspan="1">時間</th>
                        <th rowspan="1">愛心採購</th>
                    </tr>
                  </thead>
                <tbody>
                    {table}
                </tbody>
                </table>
              )
          }
        }
      
      return [
          <div class="content">
              <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>{props.data[props.lang].title} </h4>
              <p><span>&nbsp;&nbsp;</span></p>  
              <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>環境永續 </h5>
  
              {/* <p><b>環境永續:</b></p> */}
              <ul class="list-group list-group-flush" >
                <li class="list-group-item" >
                  <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span><b>ISO14001 環境管理體系 </b> 
                    <a href="http://w3.taisol.com.tw/important/EMS-ARES-ISO14001.pdf" target="_blank">   
                    (證書)
                    </a>: <br/ >
                    為致力於提升各項資源之利用效率，積極使用再生物料，並對空氣、噪音、水資源等各項汙染防制進行管理，已制定多項相關作業辦法，以資遵循。
                </li>
                <li class="list-group-item" >
                  <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span><b>EICC 電子產業行為準則 </b> 
                    <a href="http://cn.taisol.com.cn/eicc" target="_blank">   
                    (EICC專區)
                    </a> :<br />
                    工作環境均已列入規範管理，並設有專人管理或推動EICC相關規範。
                </li>
                <li class="list-group-item" >
                  <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span><b>ISO14064-1 溫室氣體管理體系 </b> :
                    <br />
                    為提高對溫室氣體管理之標準，已制定多項相關作業辦法，以資遵循。
                </li>
                <li></li>
              
              
              </ul>
              <ActiveList1 data={props.data[props.lang].list1} />  
  
              <p><span>&nbsp;&nbsp;</span></p>
  
              <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>相關作業辦法 </h5>
              <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
  
              <div class="col-12 container" >
                <ActiveList2 data={props.data[props.lang].list2} />
              </div>
  
              <p><span>&nbsp;&nbsp;</span></p>
              <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>公益關懷 </h5>
              <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
  
              <p> <b>｢散發熱情，傳愛千里｣ </b></p>
              <p>2020年是泰碩的公益啟動年，泰碩電子秉持著「取之於社會、回饋於社會」的公益理念，在董事長余清松的支持下，由總經理梁竣興親自率領成立了泰碩志工團，並開啟了第一屆【耶誕圓夢鞋盒】活動。 </p>
              <p>首年辦理耶誕圓夢鞋盒活動，泰碩與失親兒福利基金會、藍迪兒童之家合作，由社工老師一對一的了解每位失親或單親孩子的耶誕願望，再由泰碩來協助孩子們圓夢，2020年我們一共送出了118個耶誕圓夢鞋盒，在每個鞋盒內除了有孩子許願的禮物外，還附上由同仁及主管們親手撰寫的鼓勵卡片，希望透過良善的互動，溫暖孩子的童年，讓這群弱勢家庭的孩童年年都能過個有溫度的耶誕節。 </p>
              <p>透過這次活動，我們深刻的發現在台灣仍有很多需要被關懷的弱勢孩童，雖然第一屆志工團的力量有限，但我們堅信只要一直做著對的事，愛的力量便會無限的壯大，良善的循環將會一屆傳承一屆，將泰碩的愛心傳送千里。</p>
  
               <div class="container">
                  <div class="row">
                    <div class="col">
                      <img src="http://w3.taisol.com.tw/image/notice2-5/A.JPG" class="img-thumbnail rounded " alt="..." />
                    </div>
                    <div class="col">
                    <img src="http://w3.taisol.com.tw/image/notice2-5/C.JPG" class="img-thumbnail rounded " alt="..." />
                    </div>
                    
                  </div>
                  <div class="row">
                    <div class="col">
                    <p><span>&nbsp;&nbsp;</span></p>
                    </div>
                  </div>
                </div> 
                <div class="row">
                  <div class="col-sm">
                  <img src="http://w3.taisol.com.tw/image/notice2-5/D.JPG" class="img-thumbnail rounded " alt="..." />
                  </div>
                  <div class="col-sm">
                    <img src="http://w3.taisol.com.tw/image/notice2-5/F.JPG" class="img-thumbnail rounded " alt="..." />
                  </div>
                  <div class="col-sm">
                    <img src="http://w3.taisol.com.tw/image/notice2-5/B.JPG" class="img-thumbnail rounded " alt="..." />
                  </div>
                </div>
  
             
  
  
  
                   
  
              <p><span>&nbsp;&nbsp;</span></p>
              <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>環境關懷 </h5>
              <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
  
              <p> <b>｢關懷土地，用行動支持在地友善農業｣</b></p>
                <p>隨著環保意識抬頭，在台灣有越來越多的小農秉持著無毒無化肥的環保理念，致力將環保生態與農業發展進行結合，而這群在地友善農友就是泰碩要支持的對象。  </p>
                <p>2020年中秋節，泰碩首次購入新南田董米，以行動支持友善農友!</p>
                <p> 不同於一般稻米求豐收，田董米以「水鳥棲地保育」做為品牌使命，所以全年採用無農藥耕種，並以米糠作為肥料灌溉，用最自然的方式守護水田，進而提供珍貴水鳥們一個天然又安全的家，達到生態與農作共存的理念。</p>
                <p>展望未來，泰碩仍會持續以行動支持環保、關懷土地，將綠色幸福的理念，年年不斷的傳遞下去。</p>
  
                <div class="row justify-content-md-center">
                  <div class="col-md-auto">
                    <img src="http://w3.taisol.com.tw/image/notice2-5/E.JPG" class="card-img-top img-thumbnail rounded " alt="..." />
                  </div>
                </div> 
  
                <p><span>&nbsp;&nbsp;</span></p>
              <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>愛心採購 </h5>
              <spacer type="horizontal" width="100" height="100">&nbsp;</spacer>
  
              <p> 泰碩電子以行動支持在地友善農友及弱勢團體，每年透過愛心採購向在地小農及公益團體採買各大年節活動贈禮，讓愛傳遞到台灣各個需要的角落。</p>
              <ActiveTable1 data={props.data[props.lang].table1} />
  
  
          </div>
  
  
      ];
  
  }
  
  