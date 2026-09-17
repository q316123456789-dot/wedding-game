const pages = [
  {
    type:"input",story:`很開心今天能與大家相聚
一起見證我們人生的重要時刻

所以今天的婚禮
也偷偷準備了一場
屬於大家的冒險

接下來的婚宴中
網頁不只是搜尋工具
更是大家破解謎題的重要夥伴

不用擔心
就算沒有玩過密室逃脫
也一定能慢慢上手

那麼……`,
    prompt:"（請輸入「新手村」）", placeholder:"請輸入答案…", answer:"新手村"
  },
  {
    type:"input", story:`從現在開始
你們就是今天的——「現場偵探」

放心
這裡沒有體力值
也沒有 Game Over

只要仔細觀察
勇敢猜測
再加上一點點……

「不要臉的直覺」

就能繼續往下走

接下來先來一道簡單的暖身題`,
    prompt:"（請輸入「暖身題」）", placeholder:"請輸入答案…", answer:"暖身題"
  },
  {
    type:"input", title:"", story:"今天的主角是誰?",
    prompt:"（請輸入「___________」）\nPS. 無告知答案數量，需要自行解答，輸入「」內答案",
    placeholder:"請輸入答案…", answer:"couple"
  },
  {
    type:"imageText", story:`沒錯
今天就是這兩位主角

而且……

你們現在看到的
就是他們本人`,
    image:["001.jpg"], next:true
  },
  { type:"text", story:"接下來稍微增加一點難度", next:true },
  {
    type:"input", title:"", story:"新郎新娘都是位很有愛心的人，請問他們分別做過哪些公益?",
    prompt:"（請輸入「□□□□」）\nPS.有告知答案數量，輸入「」內答案",
    placeholder:"請輸入答案…", answer:"charity"
  },
  { type:"image", image:["002.jpg"], next:true },
  { type:"image", image:["003.jpg"], next:true },
  {
    type:"text", story:`原來你們兩個
不只很會放閃
還真的有在做好事`, next:true
  },
  {
    type:"text", story:`新手村教學完成！

恭喜各位偵探
你們已經學會最重要的事情：

① 看線索
② 找答案
③ 直接輸入答案
④ 不要害怕猜錯

從現在開始
遊戲正式開始

準備好了嗎？`, next:true
  },
  {
    type:"input", title:"", story:`新手村教學已完成
請大家放下手機先享用餐點
待主詞人提示後再繼續遊戲
感謝大家配合`,
    prompt:"請輸入 「□□□□□」 ",
    placeholder:"請輸入答案…", answer:"我獨自升級", locked:true
  },
  {
    type:"input", title:"", story:`準備好了嗎?
後續每道關卡
請認真觀看提示
可能會有意想不到的驚喜唷(つ≧▽≦)つ`,
    prompt:"請輸入 「□□□」 ",
    placeholder:"請輸入答案…", answer:"新娘篇", locked:true
  },
  {
    type:"input", title:"", story:`婚禮當天
    新娘突然失去了記憶
她隱約知道今天是個非常重要的日子
卻怎麼也想不起來究竟發生了什麼
婚禮即將開始
時間所剩不多
請各位賓客化身偵探
在婚宴結束前
協助新娘拼湊遺失的回憶
找回屬於今天的幸福`,
    prompt:"（請輸入「開始調查」）\n展開這場尋找記憶的旅程",
    placeholder:"請輸入答案…", answer:"開始調查"
  },
  {
    type:"inputImage", image:["w1.jpg"], story:`新娘緩緩睜開眼睛
    發現自己正躺在地上
她揉了揉腦袋
只覺得頭昏昏的
卻完全想不起來剛才發生了什麼

環顧四周

只看到桌上放著一本筆記本以及一個空瓶子
但筆記本被密碼鎖鎖住了!!`,
    prompt:"（請輸入「新娘好正」）\n已獲得提示",
    placeholder:"請輸入答案…", answer:"新娘好正"
  },
  {
    type:"inputImage", image:["w2.jpg"], story:"發現一張紙條，或許……答案就在裡面",
    hint:"提示：密碼絕對不是我生日",
    prompt:"（請輸入「□□□□」）",
    placeholder:"請輸入4位數密碼", answer:"0517"
  },
  {
    type:"imageText", image:["w3.jpg"], story:`「密碼不是我生日ㄛ」
既然都特地寫了這句話……
那就先試試生日吧！
喀──
還以為多難
還真的打開了！
果然
越刻意否認的東西
越值得先試試看`, next:true
  },
  {type:"image", image:["wd1.jpg"], next:true},
  {type:"image", image:["wd2.jpg"], next:true},
  {type:"image", image:["wd3.jpg"], next:true},
  {type:"image", image:["wd4.jpg"], next:true},
  {
    type:"inputImage", story:`翻閱著筆記本
    一張張照片、一段段回憶慢慢浮現在腦海
其中
有一個人總是不斷出現在每一頁
一起旅行、一起吃飯、一起笑、一起拍照……

可是……
她卻怎麼也想不起他的名字

但……他是誰?`,
    prompt:"（請輸入「□□□」）",
    placeholder:"請輸入答案…", answer:"林恩澤"
  },
  { type:"imageText", image:["w4.jpg"], story:`對！就是今天最帥的新郎官`, next:true },
  {
    type:"inputImage", image:["w51.jpg","w52.jpg"], story:`等等……
我怎麼會躺在地上？
難道……
剛剛喝的飲料有問題？`,
    prompt:"（請輸入「□□」）",
    placeholder:"請輸入答案…", answer:"梅酒"
  },
  {
    type:"imageText", image:["w6.jpg"], story:`什麼？！
我一直以為那是梅子汁！
沒想到竟然是梅酒？！
難怪越喝越順口……

我到底喝了多少啊？
雖然我平常就有點迷迷糊糊的
但喝幾口就直接失億
也太誇張了吧！`, next:true
  },
  {
    type:"input", story:`等等……
如果今天不是普通的一天
那今天到底是什麼日子？`,
    prompt:"（請輸入___________）",
    placeholder:"請輸入答案…", answer:"20261122"
  },
  {
    type:"imageText", image:["w7.jpg"], story:`我終於想起來了
原來
今天不是我忘記要做什麼的日子
而是我要永遠記住的一天

謝謝每一位幫助我找回記憶的偵探
因為有你們~

我才能想起這份屬於今天的幸福`, next:true
  },
  {
    type:"input", story:`新娘篇已完成
請大家放下手機先享用餐點
待主詞人提示後再繼續遊戲
感謝大家配合`,
    prompt:"(請輸入___________）",
    placeholder:"請輸入答案…", answer:"開始玩耍", locked:true
  },
  {
    type:"input", story:`準備好了嗎?
後續每道關卡
請認真觀看提示
可能會有意想不到的驚喜唷(つ≧▽≦)つ`,
    prompt:"請輸入 「□□□」 ",
    placeholder:"請輸入答案…", answer:"新郎篇", locked:true
  },
  {
    type:"text", story:`婚禮前夕
    新郎忙著確認婚宴大小事
桌次、菜單、流程、禮物……
腦袋裡塞滿了各種待辦事項

連續好幾天都沒睡好
眼看明天就是人生最重要的一天
家人看不下去
決定拿出「祖傳秘方」
讓他今晚好好睡上一覺

只是……
這一覺好像睡得太好了`, next:true
  },
  {
    type:"inputImage", image:["e1.jpg"], story:`新郎醒來後
    腦袋昏昏沉沉
一切都準備好了……
等等！
好像少了一樣最重要的東西！

他翻遍了桌面
卻怎麼也找不到`,
    prompt:"（請輸入「□□」）",
    placeholder:"請輸入答案…", answer:"ring"
  },
  {
    type:"imageText", story:`原來是婚戒！
怎麼躲在這裡啊！
也不會自己出來打聲招呼
害我找了老半天

有了婚戒
終於可以放心出門了

等等……

今天還得去迎接新娘
可是平常上班騎的機車偏偏在今天罷工……
看來只好派出我的寶貝了！`, next:true
  },
  {
    type:"inputImage", image:["e650.jpg"], story:"",
    prompt:"（請輸入新郎寶貝的「□□□」cc 重型機車）",
    placeholder:"請輸入數字", answer:"650"
  },
  {
    type:"imageText", image:["ec650.jpg"], story:`沒錯！
就是陪伴我許多旅程的 C650！
今天就靠你載我去迎接人生最重要的另一半！`, next:true
  },
  {
    type:"input", story:`我們要抵達的位置於：
    靚點飯店的天日廳 2 樓
    共有 200 位賓客需要前往會場

館內設有電梯，其規格如下：

最大載重：900 公斤
每趟最多搭乘：12 人

賓客體重統計如下：`,
    table:true,
    tableRows:[["50 公斤","42 人"],["60 公斤","58 人"],["70 公斤","46 人"],["80 公斤","34 人"],["90 公斤","20 人"]],
    extra:`婚宴主持人提供上述資料
    希望大家能思考如何讓所有賓客盡快且安全地抵達會場

請問：賓客們要怎麼抵達會場？`,
    prompt:"（請輸入「___________」）",
    placeholder:"請輸入答案…", answer:"transport"
  },
  {
    type:"inputImage", image:["E2.jpg"], story:`終於順利抵達婚宴現場
接著要把最重要的東西放到指定位置……
可是……
我到底該放在哪裡？`,
    prompt:"（請輸入「□□□」）",
    placeholder:"請輸入答案…", answer:"新娘房"
  },
  {
    type:"inputImage", image:["E9487.jpg"], story:`等等……
事情好像還沒結束
因為太擔心婚禮還有哪些地方沒準備好
我一邊檢查、一邊思考

結果……

竟然把自己反鎖在房間裡了！


各位偵探
拜託救救我！`,
    prompt:"（請輸入「9□□□」）",
    placeholder:"請輸入4位數密碼", answer:"9487"
  },
  {
    type:"input", story:`嗯!真是 9487 呢!!
把自己關在房內
再晚一點
新娘可能就要逃婚了

總算一切都準備完成
接下來
就輪到今天最重要的另一件事了……`,
    prompt:"（請輸入「開飯」）",
    placeholder:"請輸入答案…", answer:"開飯"
  },
  {
    type:"inputImage", image:["E5.jpg"], story:`感謝您們配合我們玩到現在
希望我們準備的餐點您們還滿意
期盼今天大家能吃得開心、聊得盡興`,
    prompt:"（請輸入___________）",
    placeholder:"請輸入答案…", answer:"彩蛋", locked:true
  },
  {
    type:"inputImage", image:["E94520.jpg"], story:"", 
    prompt:"（請輸入「__________」）",
    placeholder:"請輸入答案…", answer:"131494520", locked:true
  },
  {
    type:"imageText", image:["Egg.jpg"], story:`彩蛋已解鎖！

謝謝各位偵探一路玩到最後
記得找我們拿彩蛋禮物唷！`, final:true
  }
];

const fullFlow = pages;
let current = 0;

function esc(s){
  return String(s ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}
function normalize(s){
  return String(s||"").trim().replace(/\s+/g,"").replace(/[，,。．.!！、/／\-—_「」『』（）()：:；;]/g,"");
}
function isCorrect(kind, value){
  const v = normalize(value);
  if(kind==="couple"){
    const a = "林恩澤黄筱雯", b = "黄筱雯林恩澤";
    return v===a || v===b;
  }
  if(kind==="charity"){
    const x = (v.match(/捐血/g)||[]).length;
    const y = (v.match(/捐髮/g)||[]).length;
    return x===1 && y===1;
  }
  if(kind==="ring") return v.includes("婚戒") || v.includes("戒指");
  if(kind==="transport") return v.includes("搭手扶梯") || v.includes("電梯") || v.includes("手扶梯");
  if(kind==="我獨自升級") return v==="我獨自升級";
  return v===normalize(kind);
}
function asset(src){
  return `<div class="media-frame"><img src="${esc(src)}" alt="" loading="eager"></div>`;
}
function render(page, pageNo){
  const el = document.querySelector(`[data-page="${((pageNo-1)%23)+1}"]`);
  if(!el) return;
  let html = "";
  html += `<div class="brand"><span class="crown">♛</span> WEDDING QUEST </div>`;

  if(page.title) html += `<h1 class="hero-title">${esc(page.title)}</h1>`;
  if(page.subtitle) html += `<div class="hero-subtitle">${esc(page.subtitle)}</div>`;
  html += `<div class="ornament">— ♥ —</div>`;

  html += `<div class="card">`;
  if(page.image){
    html += `<div class="image-card">${page.image.map(asset).join('<div class="spacer"></div>')}</div>`;
  }
  if(page.story) html += `<div class="story ${page.type==="text"?"large":""}">${esc(page.story)}</div>`;
  if(page.hint) html += `<div class="hint"><div class="hint-title">💡 提示</div>${esc(page.hint)}</div>`;
  if(page.table){
    html += `<table class="data-table"><thead><tr><th>體重</th><th>人數</th></tr></thead><tbody>`;
    html += page.tableRows.map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("");
    html += `</tbody></table>`;
    html += `<div class="story">${esc(page.extra)}</div>`;
  }
  if(page.prompt){
    html += `<div class="prompt">${esc(page.prompt)}</div>`;
    const numericCode = page.answer==="0517" || page.answer==="9487";
    if(numericCode){
      html += `<div class="code-grid" data-code-grid style="--code-count:4">
        <input inputmode="numeric" maxlength="1" aria-label="第1位">
        <input inputmode="numeric" maxlength="1" aria-label="第2位">
        <input inputmode="numeric" maxlength="1" aria-label="第3位">
        <input inputmode="numeric" maxlength="1" aria-label="第4位">
      </div>`;
    }else{
      html += `<div class="input-wrap"><input class="answer-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(page.placeholder||"請輸入答案…")}" aria-label="答案輸入"></div>`;
    }
    html += `<button class="submit-btn" data-action="submit">送出 →</button>`;
  } else if(page.next || page.final){
    html += `<button class="next-btn" data-action="next">${page.final ? "完成遊戲 ♥" : "下一步 →"}</button>`;
  }
  html += `</div>`;

  html += `<div class="bottom-flower"><span>🌹</span><div class="gold-script">${page.final?"Thank You ♥":"Together We Begin ♡"}</div><span>🌷</span></div>`;
  el.innerHTML = html;
}

function buildPetals(){
  const host=document.getElementById("petals");
  if(!host) return;
  for(let i=0;i<16;i++){
    const p=document.createElement("i");
    p.className="petal";
    p.style.left=(Math.random()*100)+"%";
    p.style.animationDelay=(Math.random()*9)+"s";
    p.style.animationDuration=(8+Math.random()*7)+"s";
    host.appendChild(p);
  }
}
function showPage(i){
  current=Math.max(0,Math.min(fullFlow.length-1,i));
  document.querySelectorAll(".game-page").forEach(el=>{
    el.classList.remove("active");
    el.innerHTML="";
  });
  const slot=document.querySelector(`[data-page="${(current%23)+1}"]`);
  if(slot){
    render(fullFlow[current], current+1);
    slot.classList.add("active");
  }
  window.scrollTo({top:0,behavior:"smooth"});
}
function readAnswer(page){
  const grid=document.querySelector(`[data-page="${(current%23)+1}"] [data-code-grid]`);
  if(grid) return [...grid.querySelectorAll("input")].map(x=>x.value).join("");
  const input=document.querySelector(`[data-page="${(current%23)+1}"] .answer-input`);
  return input ? input.value : "";
}
function shake(){
  const host=document.querySelector(`[data-page="${(current%23)+1}"] [data-code-grid]`) ||
              document.querySelector(`[data-page="${(current%23)+1}"] .answer-input`);
  if(host){
    host.classList.remove("error");
    void host.offsetWidth;
    host.classList.add("error");
  }
}
function correctFeedback(){
  const f=document.getElementById("feedback");
  const c=document.getElementById("confetti");
  if(c){
    c.innerHTML="";
    for(let i=0;i<22;i++){
      const x=document.createElement("i");
      x.style.setProperty("--x",(Math.random()*260-130)+"px");
      x.style.setProperty("--y",(Math.random()*260-130)+"px");
      x.style.transform=`rotate(${Math.random()*180}deg)`;
      x.style.background=["#E88D9C","#F2C76E","#EFA6B5","#D4AF37"][i%4];
      c.appendChild(x);
    }
  }
  if(f){
    f.classList.add("show");
    f.setAttribute("aria-hidden","false");
  }
  setTimeout(()=>{
    if(f){
      f.classList.remove("show");
      f.setAttribute("aria-hidden","true");
    }
    showPage(current+1);
  },1000);
}
function handleSubmit(page){
  const value=readAnswer(page);
  let ok=false;
  if(page.answer==="couple") ok=isCorrect("couple",value);
  else if(page.answer==="charity") ok=isCorrect("charity",value);
  else if(page.answer==="ring") ok=isCorrect("ring",value);
  else if(page.answer==="transport") ok=isCorrect("transport",value);
  else ok=isCorrect(page.answer,value);

  if(ok) correctFeedback();
  else {
    shake();
    const prompt=document.querySelector(`[data-page="${(current%23)+1}"] .prompt`);
    if(prompt){
      const old=prompt.innerHTML;
      prompt.innerHTML=`<span style="color:#C65B6D;font-weight:800">答案好像不太對唷，再努力想想看</span>`;
      setTimeout(()=>{prompt.innerHTML=old},1400);
    }
  }
}
document.addEventListener("click",e=>{
  const btn=e.target.closest("[data-action]");
  if(!btn) return;
  const page=fullFlow[current];
  if(btn.dataset.action==="submit") handleSubmit(page);
  if(btn.dataset.action==="next") showPage(current+1);
});
document.addEventListener("keydown",e=>{
  const grid=e.target.closest("[data-code-grid]");
  if(grid && e.target.tagName==="INPUT"){
    if(e.key==="Backspace" && !e.target.value){
      const all=[...grid.querySelectorAll("input")], idx=all.indexOf(e.target);
      if(idx>0) all[idx-1].focus();
    }else if(e.key.length===1 && /\d/.test(e.key)){
      setTimeout(()=>{
        const all=[...grid.querySelectorAll("input")], idx=all.indexOf(e.target);
        if(idx<all.length-1) all[idx+1].focus();
      },0);
    }
  }
  if(e.key==="Enter"){
    const btn=document.querySelector(`[data-page="${(current%23)+1}"] [data-action="submit"]`);
    if(btn) btn.click();
  }
});

buildPetals();
showPage(0);