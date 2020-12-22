app.component('notice-2-2', {
    data() {
      return {



        table1 : [
          {"title": "2-1title","name":"2-1a","pro_exp1":"b","pro_exp2":"c","pro_exp3":"d","fit_item1":"1","fit_item2":"2","fit_item3":"3","fit_item4":"4","fit_item5":"5","fit_item6":"6","fit_item7":"7","fit_item8":"8","fit_item9":"9","fit_item10":"10","num_company":"z","note":"qq"},
          {"title": "2-1title","name":"a","pro_exp1":"b","pro_exp2":"c","pro_exp3":"d","fit_item1":"1","fit_item2":"2","fit_item3":"3","fit_item4":"4","fit_item5":"5","fit_item6":"6","fit_item7":"7","fit_item8":"8","fit_item9":"9","fit_item10":"10","num_company":"z","note":"qq"},
          {"title": "2-1title","name":"a","pro_exp1":"b","pro_exp2":"c","pro_exp3":"d","fit_item1":"1","fit_item2":"2","fit_item3":"3","fit_item4":"4","fit_item5":"5","fit_item6":"6","fit_item7":"7","fit_item8":"8","fit_item9":"9","fit_item10":"10","num_company":"z","note":"qq"},
          {"title": "2-1title","name":"a","pro_exp1":"b","pro_exp2":"c","pro_exp3":"d","fit_item1":"1","fit_item2":"2","fit_item3":"3","fit_item4":"4","fit_item5":"5","fit_item6":"6","fit_item7":"7","fit_item8":"8","fit_item9":"9","fit_item10":"10","num_company":"z","note":"qq"}
        ],
        table2 : [
            {"title": "2-1title","name":"2-1a","real_show":"b","asked_show":"aa","real_show_per":"SS", "note": "ss" },
            {"title": "2-1title","name":"2-1a","real_show":"b","asked_show":"aa","real_show_per":"SS", "note": "ss" },
            {"title": "2-1title","name":"2-1a","real_show":"b","asked_show":"aa","real_show_per":"SS", "note": "ss" },
          ]
        }

    },
    props: {},
    template:
    /*html*/
    `
    <div class="content">
        <div class="accordion " id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header " id="flush-headingOne">
                    <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 薪酬委員會章程
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ul class="list-group list-group-flush " v-for="regulation in salary_regulations">

                            <li class="list-group-item">
                            <b>{{regulation.title}}</b>
                                <ul class="list-group list-group-flush " v-for="(content,index) in regulation.contents">
                                    <li class="list-group-item">{{ content.item }}
                                        <ul class="list-group list-group-flush " v-for="(sub_item,index2) in content.sub_items">
                                            <li class="list-group-item"> {{ sub_item }}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> 



                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header " id="flush-headingOne">
                    <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 薪酬委員會之組成
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
                    <div class="accordion-body">
                        <table  class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th rowspan="2">身份別（註1）</th>
                                <th rowspan="2">姓名</th>
                                <th colspan="3">是否具有五年以上工作經驗及下列專業資格</th>
                                <th colspan="10">符合獨立性情形（註2）</th>
                                <th rowspan="2">兼任其他公開發行公司獨立董事家數</th>
                                <th rowspan="2">備註</th>

                            </tr>
                            <tr>
                                <th>商務、法務、財務、會計或公司業務所須相關科系之公私立大專院校講師以上</th>
                                <th>法官、檢察官、律師、會計師或其他與公司業務所需之國家考試及格領有證書之專門職業及技術人員</th>
                                <th>商務、法務、財務、會計或公司業務所須之工作經驗</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user in table1">
                            <!--  <td v-for="entry in user">{{ entry }}</td> -->
                                <td v-for="key in Object.keys(user)">{{ user[key] }}</td>
                            </tr> 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header " id="flush-headingOne">
                    <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 薪酬委員會之職責
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
                    <div class="accordion-body">
                       
                        <ul class="list-group list-group-flush ">
                            <li class="list-group-item"><b>(一)以善良管理人之注意， 忠實履行下列職權， 並將所提建議提交董事會討論：</b>
                            </li>
                            <li class="list-group-item">
                                <ul class="list-group list-group-flush ">
                                    <li class="list-group-item">1. 訂定並定期檢討董事、監察人及經理人績效評估與薪資報酬之政策、制度、標準與結構。
                                    </li>
                                    <li class="list-group-item">2. 訂定並定期評估董事、監察人及經理人之薪資報酬。
                                    </li>
                                    <li class="list-group-item">3. 對監察人報酬之建議， 以公司章程明定(或股東會決議)授權董事會辦理者為限。
                                    </li>
                                    <li class="list-group-item">4. 子公司董事及經理人之薪資報酬， 依公司規定需經母公司董事會核定者， 應先請母公司薪資報酬委員會提出建議。
                                    </li>
                                </ul>
                            </li>

                            <li class="list-group-item"><b>(二)薪資報酬之定義</b>：
                                <ul class="list-group list-group-flush ">
                                    <li class="list-group-item">1. 現金
                                    </li>
                                    <li class="list-group-item">2. 認股權
                                    </li>
                                    <li class="list-group-item">3. 分紅入股
                                    </li>
                                    <li class="list-group-item">4. 退休福利
                                    </li>
                                    <li class="list-group-item">5. 離職給付
                                    </li>
                                    <li class="list-group-item">6. 各項津貼
                                    </li>
                                    <li class="list-group-item">7. 其他具有實質獎勵之措施
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header " id="flush-headingOne">
                    <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 薪酬委員會運作情形
                    </button>
                </h2>


                


                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" >
                    <div class="accordion-body">
                       
                        <ul class="list-group list-group-flush ">
                            <li class="list-group-item"><b>薪資報酬委員會運作情形資訊：</b>
                            </li>
                            <li class="list-group-item">
                                <ul class="list-group list-group-flush ">
                                    <li class="list-group-item">(1)   本公司之薪資報酬委員會委員計3人。
                                    </li>
                                    <li class="list-group-item">(2)   本屆委員任期：107年6月19日至110年6月18日，最近年度(108年度至年報刊印日止)薪資報酬委員會開會 5 次(Ａ)，委員資格及出席情形如下：
                                        <table  class="table table-bordered table-hover">
                                            <thead>
                                            <tr>
                                                <th rowspan="1">職稱</th>
                                                <th rowspan="1">姓名</th>
                                                <th rowspan="1">實際出(列)席次數B</th>
                                                <th rowspan="1">委託出席次數</th>
                                                <th rowspan="1">實際出(列)席率(%)【B/A】</th>
                                                <th rowspan="1">備註</th>
                                                		
                                                			
                                            </tr>

                                            </thead>
                                            <tbody>
                                            <tr v-for="user in table2">
                                            <!--  <td v-for="entry in user">{{ entry }}</td> -->
                                                <td v-for="key in Object.keys(user)">{{ user[key] }}</td>
                                            </tr> 
                                            </tbody>
                                        </table>
                                        <ul class="list-group list-group-flush ">
                                            <li class="list-group-item">其他應記載事項：
                                            </li>
                                            <li class="list-group-item">一、108年度至年報刊印日止薪資報酬委員會開會討論議案如下：
                                            </li>
                                            <li class="list-group-item">
                                                <ul class="list-group list-group-flush " v-for="(meeting,index) in meetings" >
                                                    <li class="list-group-item">{{ index+1 }}. 薪酬委員會日期： {{ meeting.date }}
                                                        <li class="list-group-item" v-for="(content, index2) in meeting.contents">
                                                            <ul class="list-group list-group-flush ">({{ index2+1}})議案內容： {{ content.summary }}
                                                                <li class="list-group-item">決議結果：{{ content.result }}
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li class="list-group-item">二、董事會如不採納或修正薪資報酬委員會之建議，應敘明董事會日期、期別、議案內容、董事會決議結果以及公司對薪資報酬委員會意見之處理 (如董事會通過之薪資報酬優於薪資報酬委員會之建議，應敘明其差異情形及原因)：無。
                                            </li>
                                            <li class="list-group-item">三、薪資報酬委員會之議決事項，如成員有反對或保留意見且有紀錄或書面聲明者，應敘明薪資報酬委員會日期、期別、議案內容、所有成員意見及對成員意見之處理：無。
                                            </li>
                                            
                                        </ul>
                                    
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
    `,
    computed: {},
    methods: {},
    beforeMount() {}
})