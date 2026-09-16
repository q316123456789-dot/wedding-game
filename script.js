const A='assets/';
const pages = [
{type:'question', title:'新手村', text:`很開心今天能與大家相聚，一起見證我們人生的重要時刻。\n所以今天的婚禮，也偷偷準備了一場屬於大家的冒險。\n接下來的婚宴中，網頁不只是搜尋工具，更是大家破解謎題的重要夥伴。\n不用擔心，就算沒有玩過密室逃脫，也一定能慢慢上手。\n\n那麼……`, prompt:'（請輸入「新手村」）', button:'開始遊戲', answer:'新手村'},
{type:'question', text:`從現在開始，\n你們就是今天的——「現場偵探」\n放心，\n這裡沒有體力值，\n也沒有 Game Over。\n只要仔細觀察、\n勇敢猜測，\n再加上一點點……\n「不要臉的直覺」。\n就能繼續往下走。\n接下來先來一道簡單的暖身題。`, prompt:'（請輸入「暖身題」）', button:'開始遊戲', answer:'暖身題'},
{type:'question', text:'今天的主角是誰?', prompt:'（請輸入「___________」）', ps:'PS. 無告知答案數量，需要自行解答，輸入「」內答案', answer:'protagonists'},
{type:'story', text:`沒錯，\n今天就是這兩位主角。\n而且……\n\n你們現在看到的，\n就是他們本人。`, image:'001.jpg', next:'繼續'},
{type:'story', text:'接下來稍微增加一點難度。', next:'下一關'},
{type:'question', text:'新郎新娘都是位很有愛心的人，請問他們分別做過哪些公益?', prompt:'（請輸入「 」） □□□□', ps:'PS.有告知答案數量，輸入「」內答案', answer:'charity'},
{type:'image', image:'002.jpg', next:'下一關'},
{type:'image', image:'003.jpg', next:'下一關'},
{type:'story', text:`原來你們兩個，\n不只很會放閃，\n還真的有在做好事。`, next:'下一關'},
{type:'story', text:`新手村教學完成！\n恭喜各位偵探，\n你們已經學會最重要的事情：\n① 看線索\n② 找答案\n③ 直接輸入答案\n④ 不要害怕猜錯\n從現在開始，\n遊戲正式開始。\n準備好了嗎？`, next:'下一關'},
{type:'question', text:`新手村教學已完成\n請大家放下手機先享用餐點\n待主詞人提示後再繼續遊戲\n感謝大家配合`, prompt:'請輸入「 」 □□□□□', answer:'我獨自升級', control:true},
{type:'question', text:`準備好了嗎?\n後續每道關卡\n請認真觀看提示\n可能會有意想不到的驚喜唷☺`, prompt:'請輸入「 」 □□□', answer:'新娘篇', control:true},
{type:'question', text:`婚禮當天，新娘突然失去了記憶。\n她隱約知道今天是個非常重要的日子，卻怎麼也想不起來究竟發生了什麼。\n婚禮即將開始，時間所剩不多。\n請各位賓客化身偵探，在婚宴結束前，協助新娘拼湊遺失的回憶，找回屬於今天的幸福。`, prompt:'請輸入 「開始調查」，展開這場尋找記憶的旅程。', answer:'開始調查', hideHeading:true},
{type:'question', text:`新娘緩緩睜開眼睛，發現自己正躺在地上。\n她揉了揉腦袋，只覺得頭昏昏的，卻完全想不起來剛才發生了什麼。\n環顧四周，只看到桌上放著一本筆記本，以及一個空瓶子。\n但筆記本被密碼鎖鎖住了!!`, image:'w1.jpg', prompt:'（請輸入「新娘好正」，已獲得提示）', answer:'新娘好正'},
{type:'question', text:'發現一張紙條，或許……答案就在裡面。', image:'w2.jpg', clue:'提示：密碼絕對不是我生日', prompt:'（請輸入「 」） □□□□', answer:'0517'},
{type:'story', text:`「密碼不是我生日ㄛ」\n\n既然都特地寫了這句話……\n那就先試試生日吧！\n\n喀──\n還以為多難呢，還真的打開了！\n果然，越刻意否認的東西，越值得先試試看。`, image:'w3.jpg', next:'下一關'},
{type:'diary', images:['wd1.jpg','wd2.jpg','wd3.jpg','wd4.jpg'], next:'下一關'},
{type:'question', text:`翻閱著筆記本，一張張照片、一段段回憶慢慢浮現在腦海。\n其中，有一個人總是不斷出現在每一頁。\n一起旅行、一起吃飯、一起笑、一起拍照……\n可是……\n她卻怎麼也想不起他的名字。\n但……\n他是誰。`, prompt:'（請輸入「 」） □□□', answer:'林恩澤'},
{type:'story', text:'對！\n就是今天最帥的新郎官', image:'w4.jpg', next:'下一關'},
{type:'question', text:`等等……\n我怎麼會躺在地上？\n難道……\n剛剛喝的飲料有問題？`, prompt:'（請輸入「 」） □□', answer:'梅酒', images:['w51.jpg','w52.jpg']},
{type:'story', text:`什麼？！\n我一直以為那是梅子汁！\n沒想到竟然是梅酒？！\n難怪越喝越順口……\n我到底喝了多少啊？\n雖然我平常就有點迷迷糊糊的，\n但喝幾口就直接失憶，也太誇張了吧！`, image:'w6.jpg', next:'下一關'},
{type:'question', text:`等等……\n如果今天不是普通的一天，\n那今天到底是什麼日子？`, prompt:'（請輸入___________）', answer:'20261122'},
{type:'story', text:`我終於想起來了。\n原來，\n今天不是我忘記要做什麼的日子。\n而是我要永遠記住的一天。\n謝謝每一位幫助我找回記憶的偵探。\n因為有你們，\n我才能想起這份屬於今天的幸福。`, image:'w7.jpg', next:'下一關'},
{type:'question', text:`新娘篇已完成\n請大家放下手機先享用餐點\n待主詞人提示後再繼續遊戲\n感謝大家配合`, prompt:'請輸入___________', answer:'開始玩耍', control:true},
{type:'question', text:`準備好了嗎?\n後續每道關卡\n請認真觀看提示\n可能會有意想不到的驚喜唷☺`, prompt:'請輸入 「 」 □□□', answer:'新郎篇', control:true},
{type:'story', text:`婚禮前夕，新郎忙著確認婚宴大小事。\n桌次、菜單、流程、禮物……\n腦袋裡塞滿了各種待辦事項，連續好幾天都沒睡好。\n眼看明天就是人生最重要的一天，家人看不下去，決定拿出「祖傳秘方」，讓他今晚好好睡上一覺。\n只是……\n這一覺，好像睡得太好了。`, next:'下一關'},
{type:'question', text:`新郎醒來後，腦袋昏昏沉沉。\n一切都準備好了……\n等等！\n好像少了一樣最重要的東西！\n他翻遍了桌面，卻怎麼也找不到。`, prompt:'（請輸入「 」） □□', answer:'ring', image:'e1.jpg'},
{type:'story', text:`原來是婚戒！\n怎麼躲在這裡啊！\n也不會自己出來打聲招呼，害我找了老半天。\n有了婚戒，終於可以放心出門了。\n等等……\n今天還得去迎接新娘。\n可是平常上班騎的機車偏偏在今天罷工……\n看來，只好派出我的寶貝了！`, next:'下一關'},
{type:'question', text:'', prompt:'（請輸入新郎寶貝的「 」 □□□ cc 重型機車）', answer:'650', image:'e650.jpg'},
{type:'story', text:`沒錯！\n就是陪伴我許多旅程的 C650！\n今天，就靠你載我去迎接人生最重要的另一半！`, image:'ec650.jpg', next:'下一關'},
{type:'question', text:`我們要抵達的位置於：靚點飯店的天日廳 2 樓，共有 200 位賓客需要前往會場。\n館內設有電梯，其規格如下：\n最大載重：900 公斤\n每趟最多搭乘：12 人\n賓客體重統計如下：\n50 公斤 42 人\n60 公斤 58 人\n70 公斤 46 人\n80 公斤 34 人\n90 公斤 20 人\n婚宴主持人提供上述資料，希望大家能思考如何讓所有賓客盡快且安全地抵達會場。\n\n請問：賓客們要怎麼抵達會場？`, prompt:'（請輸入「___________」）', answer:'arrival'},
{type:'question', text:`終於順利抵達婚宴現場。\n接著要把最重要的東西放到指定位置……\n可是……\n我到底該放在哪裡？`, prompt:'（請輸入「 」） □□□', answer:'新娘房', image:'E2.jpg'},
{type:'question', text:`等等……\n事情好像還沒結束。\n因為太擔心婚禮還有哪些地方沒準備好，\n我一邊檢查、一邊思考，\n結果……\n竟然把自己反鎖在房間裡了！\n各位偵探，\n拜託救救我！`, prompt:'（請輸入「9□□□」）', answer:'9487', image:'E9487.jpg'},
{type:'story', text:`嗯!真是 9487 呢!!\n把自己關在房內\n再晚一點，新娘可能就要逃婚了。\n總算一切都準備完成。`, next:'下一關'},
{type:'question', text:`接下來，\n就輪到今天最重要的另一件事了……`, prompt:'（請輸入「開飯」）', answer:'開飯'},
{type:'question', text:`感謝您們配合我們玩到現在\n希望我們準備的餐點您們還滿意\n期盼今天大家能吃得開心、聊得盡興。`, image:'E5.jpg', prompt:'（請輸入___________）', answer:'彩蛋', control:true},
{type:'question', text:'彩蛋篇', prompt:'（請輸入「__________」）', answer:'131494520', image:'E94520.jpg'},
{type:'story', text:'', image:'Egg.jpg', next:'查看封底'},
{type:'end', text:'記得找我們拿彩蛋禮物唷 💕'}
];

function normalize(s){return String(s||'').replace(/\s+/g,'').trim();}
function valid(kind, raw){
  const s=normalize(raw);
  switch(kind){
    case 'protagonists': return s.includes('林恩澤') && s.includes('黄筱雯') && !s.includes('黄筱雯黄筱雯') && !s.includes('林恩澤林恩澤');
    case 'charity': return s.includes('捐血') && s.includes('捐髮') && !/(捐血.*捐血|捐髮.*捐髮)/.test(s);
    case 'ring': return s.includes('婚戒') || s.includes('戒指');
    case 'arrival': return s.includes('搭手扶梯') || s.includes('電梯');
    default: return s === kind;
  }
}
let current=0;
const game=document.getElementById('game');
const feedback=document.getElementById('feedback');
const feedbackText=document.getElementById('feedbackText');
const feedbackIcon=document.getElementById('feedbackIcon');

function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function render(){
  const p=pages[current];
  let inner='<div class="screen"><section class="card">';
  inner+='<div class="ornament">WEDDING QUEST</div>';
  if(p.title) inner+=`<h1>${esc(p.title)}</h1>`;
  if(p.type==='end'){
    inner+=`<div class="center"><div class="pill">THANK YOU</div><p class="story center">${esc(p.text)}</p></div>`;
  }else{
    if(p.text) inner+=`<p class="story">${esc(p.text)}</p>`;
    const imgs=p.images || (p.image?[p.image]:[]);
    if(imgs.length===1) inner+=`<img class="photo" src="${A}${esc(imgs[0])}" alt="遊戲圖片">`;
    if(imgs.length>1) inner+=`<div class="photo-grid">${imgs.map(x=>`<img class="photo" src="${A}${esc(x)}" alt="遊戲圖片">`).join('')}</div>`;
    if(p.type==='diary') inner+=`<div class="secret-note">日記線索</div>`;
    if(p.clue) inner+=`<div class="clue">💡 ${esc(p.clue)}</div>`;
    if(p.prompt){
      inner+=`<div class="input-wrap"><div class="input-label">${esc(p.prompt)}</div>`;
      if(p.ps) inner+=`<div class="ps">${esc(p.ps)}</div>`;
      inner+=`<input id="answer" class="answer" autocomplete="off" inputmode="text" aria-label="答案輸入" placeholder="請輸入答案…">`;
      inner+=`<button class="submit" onclick="submitAnswer()">送出　→</button></div>`;
    }else{
      inner+=`<div class="continue-area"><button class="next" onclick="goNext()">${esc(p.next||'下一關')}　→</button></div>`;
    }
  }
  inner+='</section></div>';
  game.innerHTML=inner;
  const input=document.getElementById('answer');
  if(input){input.focus(); input.addEventListener('keydown',e=>{if(e.key==='Enter')submitAnswer()});}
}
function confetti(){
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    for(let i=0;i<26;i++){
      const el=document.createElement('span');
      el.className='confetti';
      el.style.setProperty('--x',(Math.random()*180-90)+'px');
      el.style.setProperty('--y',(Math.random()*150+40)+'px');
      el.style.setProperty('--r',(Math.random()*720-360)+'deg');
      el.style.setProperty('--d',(Math.random()*.35)+'s');
      el.textContent=['✦','♥','•','✿'][i%4];
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),1100);
    }
  }
}
function showFeedback(ok){
  feedback.className='feedback '+(ok?'':'wrong')+' show';
  feedbackIcon.textContent=ok?'✓':'!';
  feedbackText.textContent=ok?'答案正確！':'答案好像不太對唷，再努力想想看';
  if(ok) confetti();
  setTimeout(()=>{feedback.classList.remove('show')},ok?900:1300);
}
function submitAnswer(){
  const p=pages[current], input=document.getElementById('answer'); if(!input)return;
  const ok=valid(p.answer,input.value);
  if(!ok){
    input.classList.remove('error-shake'); void input.offsetWidth; input.classList.add('error-shake'); showFeedback(false); return;
  }
  showFeedback(true);
  setTimeout(()=>{current++;render()},950);
}
function goNext(){current++;render();}
render();
