(function(){var t={4458:function(t,e,a){"use strict";var n=a(5130),o=a(657),i=a(6768);const r={class:"footer"},s={class:"footer-list"};function l(t,e){const a=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("footer",r,[(0,i.Lk)("ul",s,[(0,i.Lk)("li",null,[(0,i.bF)(a,{class:"footer-link",to:"/privacypolicy"},{default:(0,i.k6)((()=>e[0]||(e[0]=[(0,i.eW)("プライバシーポリシー")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(a,{class:"footer-link",to:"/termsofservice"},{default:(0,i.k6)((()=>e[1]||(e[1]=[(0,i.eW)("利用規約")]))),_:1})])])])}var c=a(1241);const f={},u=(0,c.A)(f,[["render",l],["__scopeId","data-v-2934e2c5"]]);var d=u,p=(a(4114),a(4232)),h=a(144);const v=(0,o.nY)({id:"auth",state:()=>({user:null}),getters:{isLoggedIn:t=>t.user},actions:{setUser(t){this.user=t},clearUser(){this.user=null}}});var m=a(9399);const _="https://qdpjlaygtfizyvitphub.supabase.co",y="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcGpsYXlndGZpenl2aXRwaHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMjUyNjIsImV4cCI6MjA0MDcwMTI2Mn0.-KK7HWJ2giFs6v4R6jiRpDj6cCfwhOQAu0vgdB4vnQw",g=(0,m.UU)(_,y);var I=a(1387);const k={class:"header"},A={class:"nav-list"},b={key:0},E={key:1},w={key:2},C={key:3};var j={__name:"AppHeaders",setup(t){const e=(0,I.rd)(),a=v(),n=(0,h.KR)("Clock Safety"),o=async()=>{try{const{data:t,error:e}=await g.auth.signOut();e&&console.error("エラー:",e.message)}catch(t){console.error("エラーが発生しました:",t)}};return(t,r)=>{const s=(0,i.g2)("router-link"),l=(0,i.g2)("v-btn");return(0,i.uX)(),(0,i.CE)("header",k,[(0,i.Lk)("ul",A,[(0,i.Lk)("li",null,[(0,i.bF)(s,{class:"nav-link",to:"/"},{default:(0,i.k6)((()=>[(0,i.eW)((0,p.v_)(n.value),1)])),_:1})]),(0,h.R1)(a).isLoggedIn?((0,i.uX)(),(0,i.CE)("li",b,[(0,i.bF)(l,{class:"nav-link",onClick:o},{default:(0,i.k6)((()=>r[2]||(r[2]=[(0,i.eW)("ログアウト")]))),_:1})])):(0,i.Q3)("",!0),(0,h.R1)(a).isLoggedIn?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("li",E,[(0,i.bF)(s,{class:"nav-link",to:"/signin"},{default:(0,i.k6)((()=>r[3]||(r[3]=[(0,i.eW)("サインイン")]))),_:1})])),(0,h.R1)(a).isLoggedIn?((0,i.uX)(),(0,i.CE)("li",w,[(0,i.bF)(l,{class:"nav-link",onClick:r[0]||(r[0]=t=>(0,h.R1)(e).push({name:"helth_index"}))},{default:(0,i.k6)((()=>r[4]||(r[4]=[(0,i.eW)("健康データ")]))),_:1})])):(0,i.Q3)("",!0),(0,h.R1)(a).isLoggedIn?((0,i.uX)(),(0,i.CE)("li",C,[(0,i.bF)(l,{class:"nav-link",onClick:r[1]||(r[1]=t=>(0,h.R1)(e).push({name:"helth_anomalies"}))},{default:(0,i.k6)((()=>r[5]||(r[5]=[(0,i.eW)("異常値")]))),_:1})])):(0,i.Q3)("",!0)])])}}};const U=(0,c.A)(j,[["__scopeId","data-v-69480793"]]);var P=U,S=a(4373),O={__name:"App",setup(t){(0,i.sV)((()=>{o()}));const e=v(),a=async t=>{try{const e="-",a="2024-09-08",o="15min",i="https://api.fitbit.com/"+["1","user",e,"activities","heart","date",a,"1d",`${o}.json`].join("/"),r=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${t}`}}),s=await r.json(),l=s["activities-heart"][0].dateTime,c=s["activities-heart"][0].value.heartRateZones.find((t=>"Out of Range"==t.name)),f=145,u=50;if(c.max>=f&&n({max:c.max,abnormal_day:l}),c.min<=u&&n({min:c.min,abnormal_day:l}),s.errors)return void console.error(s.errors[0].message)}catch(e){console.log(e)}},n=(t,a)=>{const n={anomalies:t,abnormalDay:a,email:e.isLoggedIn.email};S.A.post("/api/v1/anomalies",n,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},withCredentials:!0}).then((()=>{}))};async function o(){try{const{data:t,error:e}=await g.auth.getUser();t&&r(t),e&&console.error("認証エラー:",e.message)}catch(t){console.error("エラーが発生しました:",t)}}const r=t=>{const e={email:t.user.email};S.A.get("/api/v1/authenticates",{params:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},withCredentials:!0}).then((t=>{t.data.user&&a(t.data.user.access_token)}))};return(t,e)=>{const a=(0,i.g2)("RouterView");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",null,[(0,i.bF)(P),(0,i.bF)(d)]),(0,i.bF)(a)],64)}}};const R=O;var F=R;const L={class:"main-content mt-3"};var M={__name:"HelthPage",setup(t){(0,i.sV)((()=>{o()}));const e=(0,h.KR)([]),a=(0,h.KR)([]),n=t=>{const e={email:t.user.email};S.A.get("/api/v1/authenticates",{params:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},withCredentials:!0}).then((t=>{r(t.data.user.access_token),s(t.data.user.access_token)}))};async function o(){try{const{data:t,error:e}=await g.auth.getUser();t&&n(t),e&&console.error("認証エラー:",e.message)}catch(t){console.error("エラーが発生しました:",t)}}const r=async t=>{try{const e="-",a="today",n="1sec",o="https://api.fitbit.com/"+["1","user",e,"activities","heart","date",a,"30d",`${n}.json`].join("/"),i=await fetch(o,{method:"GET",headers:{Authorization:`Bearer ${t}`}}),r=await i.json();if(f(r["activities-heart"]),r.errors)return void console.error(r.errors[0].message)}catch(e){console.log(e)}},s=async t=>{try{const e=u(),a=e.start_date,n=e.end_date,o="-",i="https://api.fitbit.com/"+["1.2","user",o,"sleep","date",`${a}`,`${n}.json`].join("/"),r=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${t}`}}),s=await r.json();if(l(s),s.errors)return void console.error(s.errors[0].message)}catch(e){console.log(e)}},l=t=>{t.sleep.forEach((t=>{const e={duration:c(t.duration),efficiency:t.efficiency,datetime:t.dateOfSleep};a.value.push(e)}))},c=t=>{const e=t/36e5,a=parseFloat(e.toFixed(1));return`${a}時間`},f=t=>{t.forEach((t=>{const a=t.dateTime,n=t.value.heartRateZones.find((t=>"Out of Range"==t.name)),o={date_time:a,value:n,heart_rate:(n.max+n.min)/2};e.value.push(o)}))},u=()=>{const t=new Date,e=t.getFullYear(),a=t.getMonth(),n=new Date(e,a-1,1),o=new Date(e,a+1,0),i=t=>{const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${n}`};return{start_date:i(n),end_date:i(o)}},d=[{title:"日時",key:"date_time"},{title:"平均心拍数",key:"heart_rate"},{title:"最大心拍数",key:"value.max"},{title:"最低心拍数",key:"value.min"}],p=[{title:"日時",key:"datetime"},{title:"睡眠時間",key:"duration"},{title:"睡眠スコア",key:"efficiency"}];return(t,n)=>{const o=(0,i.g2)("v-data-table"),r=(0,i.g2)("v-row");return(0,i.uX)(),(0,i.CE)("div",L,[(0,i.bF)(r,null,{default:(0,i.k6)((()=>[n[0]||(n[0]=(0,i.Lk)("h3",null,"心拍数",-1)),(0,i.bF)(o,{headers:d,items:e.value,class:"elevation-1"},null,8,["items"])])),_:1}),(0,i.bF)(r,{class:"mt-4"},{default:(0,i.k6)((()=>[n[1]||(n[1]=(0,i.Lk)("h3",null,"睡眠",-1)),(0,i.bF)(o,{headers:p,items:a.value,class:"elevation-1"},null,8,["items"])])),_:1})])}}};const V=M;var X=V;const J={class:"main-content"},B={class:"mt-4"};var N={__name:"TopPage",setup(t){const e=v();S.A.defaults.withCredentials=!0;const a=(0,I.rd)();async function n(){const{data:t,error:a}=await g.auth.getSession();a?(console.error("Error fetching session:",a),e.clearUser()):e.setUser(t.session?.user??null)}return(0,i.sV)((()=>{console.log("foo"),n()})),g.auth.onAuthStateChange((async(t,a)=>{"SIGNED_IN"===t&&a?e.setUser(a.user):"SIGNED_OUT"===t&&e.clearUser()})),(t,e)=>{const n=(0,i.g2)("v-row"),o=(0,i.g2)("v-btn");return(0,i.uX)(),(0,i.CE)("div",J,[(0,i.Lk)("div",B,[(0,i.bF)(n,{justify:"center"},{default:(0,i.k6)((()=>e[1]||(e[1]=[(0,i.Lk)("h1",{class:"large-text"},"Clock Safety",-1)]))),_:1}),e[3]||(e[3]=(0,i.Lk)("p",{class:"text"}," Googleスマートウォッチから得られる健康管理データを使用して、離れて暮らす高齢家族が健康な状態で暮らしているのかを確認できるサービスです。 ",-1)),(0,i.bF)(n,{style:{position:"relative",top:"120px"},class:"mt-4",justify:"center"},{default:(0,i.k6)((()=>[(0,i.bF)(o,{onClick:e[0]||(e[0]=t=>(0,h.R1)(a).push({name:"demo_helth"})),color:"orange",size:"x-large"},{default:(0,i.k6)((()=>e[2]||(e[2]=[(0,i.eW)("講師の方はこちらから")]))),_:1})])),_:1})])])}}};const z=N;var x=z;const T={class:"container"},D={class:"gsi-material-button-content-wrapper"},G={class:"gsi-material-button-icon"},Y={version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{display:"block"}},Z={key:0};var K={__name:"SignIn",setup(t){const e=(0,h.KR)(null),a=async()=>{const{error:t,data:e}=await g.auth.signInWithOAuth({provider:"google",options:{redirectTo:`${window.location.origin}/auth/callback`,queryParams:{prompt:"select_account"}}});console.log(e),t&&console.error("Login failed:",t.message)};return(t,n)=>((0,i.uX)(),(0,i.CE)("div",T,[n[4]||(n[4]=(0,i.Lk)("h1",null,"サインイン",-1)),(0,i.Lk)("button",{onClick:a,class:"gsi-material-button"},[n[3]||(n[3]=(0,i.Lk)("div",{class:"gsi-material-button-state"},null,-1)),(0,i.Lk)("div",D,[(0,i.Lk)("div",G,[((0,i.uX)(),(0,i.CE)("svg",Y,n[0]||(n[0]=[(0,i.Fv)('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-6d0ffdde></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-6d0ffdde></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-6d0ffdde></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-6d0ffdde></path><path fill="none" d="M0 0h48v48H0z" data-v-6d0ffdde></path>',5)])))]),n[1]||(n[1]=(0,i.Lk)("span",{class:"gsi-material-button-contents"},"Googleでサインイン",-1)),n[2]||(n[2]=(0,i.Lk)("span",{style:{display:"none"}},"Googleでサインイン",-1))])]),e.value?((0,i.uX)(),(0,i.CE)("p",Z,(0,p.v_)(e.value),1)):(0,i.Q3)("",!0)]))}};const Q=(0,c.A)(K,[["__scopeId","data-v-6d0ffdde"]]);var H=Q;const $={class:"main-content"};var W={__name:"AnomaliesPage",setup(t){(0,i.sV)((()=>{a()}));const e=(0,h.KR)([]);async function a(){try{const{data:t,error:e}=await g.auth.getUser();t&&n(t.user.email),e&&console.error("認証エラー:",e.message)}catch(t){console.error("エラーが発生しました:",t)}}const n=t=>{const a={email:t};S.A.get("/api/v1/anomalies",{params:a,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},withCredentials:!0}).then((t=>{e.value=t.data.anomalies}))},o=[{title:"日時",key:"abnormal_day"},{title:"異常種類",key:"anomaly_type"},{title:"最小値",key:"min"},{title:"最大値",key:"max"}];return(t,a)=>{const n=(0,i.g2)("v-data-table"),r=(0,i.g2)("v-row");return(0,i.uX)(),(0,i.CE)("div",$,[a[1]||(a[1]=(0,i.Lk)("h1",null,"異常値表示ページ",-1)),(0,i.bF)(r,null,{default:(0,i.k6)((()=>[a[0]||(a[0]=(0,i.Lk)("h3",null,"心拍数",-1)),(0,i.bF)(n,{headers:o,items:e.value,class:"elevation-1"},null,8,["items"])])),_:1})])}}};const q=W;var tt=q;const et={class:"main-content"};function at(t,e,a,n,o,r){return(0,i.uX)(),(0,i.CE)("div",et,e[0]||(e[0]=[(0,i.Fv)("<h1>プライバシーポリシー</h1><p> Clock Safety（以下「当社」といいます）は、当社が提供するウェブアプリケーションにおいて、Googleスマートウォッチを通じて取得した個人情報の取り扱いに関し、個人情報保護法、ガイドライン等の指針、その他個人情報保護に関する関係法令を遵守します。 </p><h2>1．取得する情報およびその取得方法、利用目的</h2><p> 当社が取得するユーザー情報は、以下の目的で使用されます。 </p><ul><li>Googleスマートウォッチから取得した心拍数、睡眠データ、アクティビティデータの収集および管理</li><li>遠方に住む親御さんの健康状態のモニタリングおよび異常値の通知</li><li>健康データの分析および予防的な健康管理の支援</li><li>サービス向上のためのデータ分析および機能改善</li><li>法令遵守およびデータセキュリティの確保</li></ul><p> 利用目的の変更が生じた場合には、ユーザーに通知し、同意を得た上で利用します。 </p><h2>2．個人情報の管理</h2><p> 当社は、取得した個人情報を以下の方法で管理します。 </p><ul><li>常に正確かつ最新の情報となるよう努める</li><li>個人情報の保存期間を設定し、保存期間終了後は適切に廃棄する</li><li>安全管理措置に基づく厳重なデータ管理</li><li>個人情報管理を委託する場合の適切な委託先の選定と監督</li></ul><h2>3．個人情報の第三者への提供</h2><p> 当社は、ユーザーの同意を得ない限り、取得した個人情報を第三者に提供することはありません。今後、第三者提供を行う場合は、提供する情報と目的を明示し、同意を得た上で行います。 </p><h2>4．個人情報の開示・訂正・利用停止</h2><p> 個人情報について、開示、訂正、利用停止等のお申し出があった場合には、本人確認を行った上で、当社所定の方法に基づき対応致します。詳細については、下記の受付窓口までお問い合わせください。 </p><h2>5．お問い合わせ先</h2><p> 本サービス、個人情報の取り扱いについては、以下の窓口にご連絡ください。 </p><h2>6．制定日、改定日</h2><p>制定日：年 月 日</p><p>改定日：年 月 日</p>",18)]))}var nt={name:"PrivacyPolicyPage"};const ot=(0,c.A)(nt,[["render",at]]);var it=ot;const rt={class:"main-content"};function st(t,e,a,n,o,r){return(0,i.uX)(),(0,i.CE)("div",rt,e[0]||(e[0]=[(0,i.Fv)("<div data-v-51380ff5><h1 data-v-51380ff5>利用規約</h1><p data-v-51380ff5> この利用規約（以下，「本規約」といいます。）は，Clock Safety（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。 </p><h2 data-v-51380ff5>第1条（適用）</h2><p data-v-51380ff5>本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p><p data-v-51380ff5> 当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。 </p><p data-v-51380ff5>本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。</p><h2 data-v-51380ff5>第2条（利用登録）</h2><p data-v-51380ff5> 本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。 </p><p data-v-51380ff5> 当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。 </p><ol data-v-51380ff5><li data-v-51380ff5>利用登録の申請に際して虚偽の事項を届け出た場合</li><li data-v-51380ff5>本規約に違反したことがある者からの申請である場合</li><li data-v-51380ff5>その他，当社が利用登録を相当でないと判断した場合</li></ol><h2 data-v-51380ff5>第3条（ユーザーIDおよびパスワードの管理）</h2><p data-v-51380ff5>ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</p><p data-v-51380ff5> ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。 </p><p data-v-51380ff5> ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。 </p><h2 data-v-51380ff5>第4条（利用料金および支払方法）</h2><p data-v-51380ff5> ユーザーは，本サービスの有料部分の対価として，当社が別途定め，本ウェブサイトに表示する利用料金を，当社が指定する方法により支払うものとします。 </p><p data-v-51380ff5>ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。</p><h2 data-v-51380ff5>第5条（禁止事項）</h2><p data-v-51380ff5>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p><ol data-v-51380ff5><li data-v-51380ff5>法令または公序良俗に違反する行為</li><li data-v-51380ff5>犯罪行為に関連する行為</li><li data-v-51380ff5>本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li><li data-v-51380ff5>当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li><li data-v-51380ff5>本サービスによって得られた情報を商業的に利用する行為</li><li data-v-51380ff5>当社のサービスの運営を妨害するおそれのある行為</li><li data-v-51380ff5>不正アクセスをし，またはこれを試みる行為</li><li data-v-51380ff5>他のユーザーに関する個人情報等を収集または蓄積する行為</li><li data-v-51380ff5>不正な目的を持って本サービスを利用する行為</li><li data-v-51380ff5>本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為</li><li data-v-51380ff5>他のユーザーに成りすます行為</li><li data-v-51380ff5>当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為</li><li data-v-51380ff5>面識のない異性との出会いを目的とした行為</li><li data-v-51380ff5>当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</li><li data-v-51380ff5>その他，当社が不適切と判断する行為</li></ol><h2 data-v-51380ff5>第6条（本サービスの提供の停止等）</h2><p data-v-51380ff5> 当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。 </p><ol data-v-51380ff5><li data-v-51380ff5>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li><li data-v-51380ff5>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li><li data-v-51380ff5>コンピュータまたは通信回線等が事故により停止した場合</li><li data-v-51380ff5>その他，当社が本サービスの提供が困難と判断した場合</li></ol><p data-v-51380ff5> 当社は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。 </p><h2 data-v-51380ff5>第7条（利用制限および登録抹消）</h2><p data-v-51380ff5> 当社は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。 </p><ol data-v-51380ff5><li data-v-51380ff5>本規約のいずれかの条項に違反した場合</li><li data-v-51380ff5>登録事項に虚偽の事実があることが判明した場合</li><li data-v-51380ff5>料金等の支払債務の不履行があった場合</li><li data-v-51380ff5>当社からの連絡に対し，一定期間返答がない場合</li><li data-v-51380ff5>本サービスについて，最終利用から一定期間利用がない場合</li><li data-v-51380ff5>その他，当社が本サービスの利用を適当でないと判断した場合</li></ol><p data-v-51380ff5>当社は，本条に基づき当社が行った措置によりユーザーに生じた損害について，一切の責任を負わないものとします。</p><h2 data-v-51380ff5>第8条（退会）</h2><p data-v-51380ff5>ユーザーは，当社の定める退会手続きにより，本サービスから退会することができます。</p><p data-v-51380ff5>退会手続きが完了するまでの間に発生した料金等については，ユーザーに責任があるものとします。</p><h2 data-v-51380ff5>第9条（保証の否認および免責事項）</h2><p data-v-51380ff5> 当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。 </p><p data-v-51380ff5> 当社は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。 </p><p data-v-51380ff5> 前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち，特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料金の額を上限とします。 </p><h2 data-v-51380ff5>第10条（サービス内容の変更等）</h2><p data-v-51380ff5> 当社は，ユーザーへの事前の告知なく，本サービスの内容を変更し，または本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。 </p><h2 data-v-51380ff5>第11条（利用規約の変更）</h2><p data-v-51380ff5>当社は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。</p><p data-v-51380ff5>なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。</p><h2 data-v-51380ff5>第12条（個人情報の取扱い）</h2><p data-v-51380ff5>当社は，本サービスの利用によって取得する個人情報については，当社「プライバシーポリシー」に従い適切に取り扱うものとします。</p><h2 data-v-51380ff5>第13条（通知または連絡）</h2><p data-v-51380ff5> ユーザーと当社との間の通知または連絡は，当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。 </p><h2 data-v-51380ff5>第14条（権利義務の譲渡の禁止）</h2><p data-v-51380ff5> ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。 </p><h2 data-v-51380ff5>第15条（準拠法・裁判管轄）</h2><p data-v-51380ff5>本規約の解釈にあたっては，日本法を準拠法とします。</p><p data-v-51380ff5>本サービスに関して紛争が生じた場合には，本店所在地を管轄する裁判所を専属的合意管轄とします。</p></div>",1)]))}var lt={name:"TermsofServicePage"};const ct=(0,c.A)(lt,[["render",st],["__scopeId","data-v-51380ff5"]]);var ft=ct,ut={__name:"AuthCallBack",setup(t){async function e(){try{const{data:t,error:e}=await g.auth.getUser();console.log(t),t&&(console.log("createに遷移"),a(t.user)),e&&console.error("認証エラー:",e.message)}catch(t){console.error("エラーが発生しました:",t)}}(0,i.sV)((()=>{e()}));const a=t=>{S.A.post("/api/v1/users",t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},withCredentials:!0}).then((t=>{if(201==t.status){console.log("response",t);const e="https://www.fitbit.com/oauth2/authorize?client_id=23PNS5&response_type=code&code_challenge=-4cf-Mzo_qg9-uq0F4QwWhRh4AjcAqNx7SbYVsdmyQM&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep";window.location.href=e}}))};return(t,e)=>((0,i.uX)(),(0,i.CE)("div",null,e[0]||(e[0]=[(0,i.Lk)("h1",null,"認証を処理しています...",-1)])))}};const dt=ut;var pt=dt,ht=(a(4979),a(4603),a(7566),a(8721),{__name:"FitBitCallBackPage",setup(t){const e=(0,I.lq)(),a=(0,I.rd)();async function n(t,a){console.log("userData",a);try{const n={NODE_ENV:"production",VUE_APP_API_BASE_URL:"https://clock-safety.onrender.com",VUE_APP_SUPABASE_URL:"https://qdpjlaygtfizyvitphub.supabase.co",VUE_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcGpsYXlndGZpenl2aXRwaHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMjUyNjIsImV4cCI6MjA0MDcwMTI2Mn0.-KK7HWJ2giFs6v4R6jiRpDj6cCfwhOQAu0vgdB4vnQw",BASE_URL:"/"}.VUE_APP_CLIENT_ID,i={NODE_ENV:"production",VUE_APP_API_BASE_URL:"https://clock-safety.onrender.com",VUE_APP_SUPABASE_URL:"https://qdpjlaygtfizyvitphub.supabase.co",VUE_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcGpsYXlndGZpenl2aXRwaHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMjUyNjIsImV4cCI6MjA0MDcwMTI2Mn0.-KK7HWJ2giFs6v4R6jiRpDj6cCfwhOQAu0vgdB4vnQw",BASE_URL:"/"}.VUE_APP_SECRET,r=btoa(`${n}:${i}`),s="https://api.fitbit.com/oauth2/token",l=await fetch(s,{method:"POST",headers:{Authorization:`Basic ${r}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({client_id:{NODE_ENV:"production",VUE_APP_API_BASE_URL:"https://clock-safety.onrender.com",VUE_APP_SUPABASE_URL:"https://qdpjlaygtfizyvitphub.supabase.co",VUE_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcGpsYXlndGZpenl2aXRwaHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMjUyNjIsImV4cCI6MjA0MDcwMTI2Mn0.-KK7HWJ2giFs6v4R6jiRpDj6cCfwhOQAu0vgdB4vnQw",BASE_URL:"/"}.VUE_APP_CLIENT_ID,code:e.query.code,code_verifier:t,redirect_uri:{NODE_ENV:"production",VUE_APP_API_BASE_URL:"https://clock-safety.onrender.com",VUE_APP_SUPABASE_URL:"https://qdpjlaygtfizyvitphub.supabase.co",VUE_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcGpsYXlndGZpenl2aXRwaHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMjUyNjIsImV4cCI6MjA0MDcwMTI2Mn0.-KK7HWJ2giFs6v4R6jiRpDj6cCfwhOQAu0vgdB4vnQw",BASE_URL:"/"}.VUE_APP_REDIRECT_URL,grant_type:"authorization_code"}).toString()}),c=await l.json();if(c&&o(c,a),c.errors)return void console.error(c.errors[0].message);const f="-",u="today",d="1sec",p="https://api.fitbit.com/"+["1","user",f,"activities","heart","date",u,"1d",`${d}.json`].join("/"),h=await fetch(p,{method:"GET",headers:{Authorization:`Bearer ${c["access_token"]}`}}),v=await h.json();if(console.log("dataBody",v),v.errors)return void console.error(v.errors[0].message)}catch(n){console.log(n)}}(0,i.sV)((()=>{r()}));const o=(t,e)=>{const n={token_body:t,email:e.user.email};S.A.put("/api/v1/users",n,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},withCredentials:!0}).then((t=>{console.log(t),a.push({name:"helth_index"})}))};async function r(){try{const{data:t,error:e}=await g.auth.getUser();t&&n({NODE_ENV:"production",VUE_APP_API_BASE_URL:"https://clock-safety.onrender.com",VUE_APP_SUPABASE_URL:"https://qdpjlaygtfizyvitphub.supabase.co",VUE_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcGpsYXlndGZpenl2aXRwaHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMjUyNjIsImV4cCI6MjA0MDcwMTI2Mn0.-KK7HWJ2giFs6v4R6jiRpDj6cCfwhOQAu0vgdB4vnQw",BASE_URL:"/"}.VUE_APP_VEIFIER,t),e&&console.error("認証エラー:",e.message)}catch(t){console.error("エラーが発生しました:",t)}}return(t,e)=>((0,i.uX)(),(0,i.CE)("div",null,e[0]||(e[0]=[(0,i.Lk)("h1",null,"fitbit redirect...",-1)])))}});const vt=ht;var mt=vt;const _t={class:"main-content mt-3"};var yt={__name:"DemoHelthPage",setup(t){(0,i.sV)((()=>{n()}));const e=(0,h.KR)([]),a=(0,h.KR)([]);async function n(){try{const{data:t,error:e}=await g.auth.getUser();t&&o(t),e&&console.error("認証エラー:",e.message)}catch(t){console.error("エラーが発生しました:",t)}}const o=async t=>{console.log(t)},r=[{title:"日時",key:"date_time"},{title:"平均心拍数",key:"heart_rate"},{title:"最大心拍数",key:"value.max"},{title:"最低心拍数",key:"value.min"}],s=[{title:"日時",key:"datetime"},{title:"睡眠時間",key:"duration"},{title:"睡眠スコア",key:"efficiency"}];return(t,n)=>{const o=(0,i.g2)("v-data-table"),l=(0,i.g2)("v-row");return(0,i.uX)(),(0,i.CE)("div",_t,[(0,i.bF)(l,null,{default:(0,i.k6)((()=>[n[0]||(n[0]=(0,i.Lk)("h3",null,"心拍数",-1)),(0,i.bF)(o,{headers:r,items:e.value,class:"elevation-1"},null,8,["items"])])),_:1}),(0,i.bF)(l,{class:"mt-4"},{default:(0,i.k6)((()=>[n[1]||(n[1]=(0,i.Lk)("h3",null,"睡眠",-1)),(0,i.bF)(o,{headers:s,items:a.value,class:"elevation-1"},null,8,["items"])])),_:1})])}}};const gt=yt;var It=gt;const kt=[{path:"/",name:"top",component:x},{path:"/auth/callback",name:"callback",component:pt},{path:"/signin",name:"sign_in",component:H},{path:"/helth",name:"helth_index",component:X},{path:"/anomalies",name:"helth_anomalies",component:tt},{path:"/privacypolicy",name:"privacypolicy",component:it},{path:"/termsofservice",name:"trouterermsofservice",component:ft},{path:"/fitbit/callback",name:"fitbit_callback",component:mt},{path:"/demo/helth",name:"demo_helth",component:It}],At=(0,I.aE)({history:(0,I.LA)("/"),routes:kt});var bt=At,Et=(a(5524),a(7768)),wt=a(1920),Ct=a(5741),jt=a(8221);const Ut=(0,Et.$N)({components:wt,directives:Ct,icons:{defaultSet:"mdi",aliases:jt.z,sets:{mdi:jt.r}}});var Pt=Ut,St=a(4785);S.A.defaults.baseURL="https://clock-safety.onrender.com",S.A.defaults.withCredentials=!0,S.A.defaults.xsrfHeaderName="X-CSRF-Token";const Ot=(0,o.Ey)(),Rt=(0,n.Ef)(F);Rt.use(bt),Rt.use(Pt),Rt.use(Ot),Rt.use(St.A),Rt.mount("#app")},477:function(){}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,i){if(!n){var r=1/0;for(f=0;f<t.length;f++){n=t[f][0],o=t[f][1],i=t[f][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(f--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[n,o,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);a.r(i);var r={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){r[t]=function(){return n[t]}}));return r["default"]=function(){return n},a.d(i,r),i}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+".b1b868e9.js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="clock_safety:";a.l=function(n,o,i,r){if(t[n])t[n].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var u=c[f];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+i){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+i),s.src=n),t[n]=[o];var d=function(e,a){s.onerror=s.onload=null,clearTimeout(p);var o=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={524:0};a.f.j=function(e,n){var o=a.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(a,n){o=t[e]=[a,n]}));n.push(o[2]=i);var r=a.p+a.u(e),s=new Error,l=function(n){if(a.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,o[1](s)}};a.l(r,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,r=n[0],s=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var f=l(a)}for(e&&e(n);c<r.length;c++)i=r[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(f)},n=self["webpackChunkclock_safety"]=self["webpackChunkclock_safety"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(4458)}));n=a.O(n)})();
//# sourceMappingURL=app.4d846cc5.js.map