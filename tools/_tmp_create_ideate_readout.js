const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI for Finovators';
pptx.company = 'RBI Innovation School 2026';
pptx.subject = 'Design Thinking Stage 3 - Ideate';
pptx.title = 'Ideate - RBI Readout';
pptx.lang = 'en-US';
pptx.theme = {
  headFontFace: 'Arial', bodyFontFace: 'Arial', lang: 'en-US'
};
pptx.defineSlideMaster({
  title: 'BASE',
  background: { color: 'F5F6F8' },
  objects: [
    { rect: { x: 0, y: 0, w: 13.333, h: 0.08, fill: { color: 'C8102E' }, line: { color: 'C8102E' } } },
    { text: { text: 'FINOVATORS | RBI INNOVATION SCHOOL 2026', options: { x: 0.55, y: 7.12, w: 4.7, h: 0.18, fontFace: 'Arial', fontSize: 8.5, color: '7A8390', margin: 0 } } },
    { text: { text: 'Stage 3 - Ideate | 14.10.2026', options: { x: 9.4, y: 7.12, w: 3.35, h: 0.18, fontFace: 'Arial', fontSize: 8.5, color: '7A8390', align: 'right', margin: 0 } } }
  ],
  slideNumber: { x: 12.70, y: 7.08, w: 0.42, h: 0.18, fontFace: 'Arial', fontSize: 8.5, color: '8A919C' }
});

const C = {
  bg:'F5F6F8', white:'FFFFFF', ink:'182230', muted:'667085', line:'DDE2E8', red:'C8102E', red2:'E11D3A',
  yellow:'FFD633', yellowP:'FFF7CC', blue:'3369B1', blueP:'EAF2FC', green:'16835A', greenP:'E9F7F1',
  purple:'7257B7', purpleP:'F1EDFB', orange:'C96D17', orangeP:'FFF0E2', dark:'111827', grayP:'EEF1F4'
};
const S = pptx.ShapeType;
function addText(s,text,x,y,w,h,fs=16,color=C.ink,bold=false,align='left',opts={}){
  s.addText(text,{x,y,w,h,fontFace:'Arial',fontSize:fs,color,bold,align,margin:0,breakLine:false,fit:'shrink',valign:opts.valign||'mid',italic:opts.italic||false,bullet:opts.bullet,paraSpaceAfterPt:opts.paraSpaceAfterPt||0});
}
function box(s,x,y,w,h,fill=C.white,line=C.line,r=0.12){
  s.addShape(S.roundRect,{x,y,w,h,rectRadius:r,fill:{color:fill},line:{color:line,width:1}});
}
function title(s,head,sub=''){
  addText(s,head,0.62,0.38,12.0,0.5,25,C.ink,true);
  if(sub) addText(s,sub,0.64,0.91,11.9,0.32,12.5,C.muted,false);
}
function pill(s,text,x,y,w,fill,color=C.ink){
  box(s,x,y,w,0.34,fill,fill,0.17); addText(s,text,x+0.06,y+0.02,w-0.12,0.29,9.2,color,true,'center');
}
function bulletList(s,items,x,y,w,fs=15,gap=0.62,color=C.ink,bulletColor=C.red){
  items.forEach((it,i)=>{
    const yy=y+i*gap;
    s.addShape(S.ellipse,{x:x,y:yy+0.12,w:0.10,h:0.10,fill:{color:bulletColor},line:{color:bulletColor}});
    addText(s,it,x+0.2,yy,w-0.2,0.38,fs,color,false);
  });
}
function stageTrack(s,active=3,y=1.45){
  const labels=['UNDERSTAND','EMPATHIZE','IDEATE','PROTOTYPE','PITCH'];
  const xs=[0.68,3.12,5.56,8.0,10.44];
  labels.forEach((lab,i)=>{
    const on=(i+1===active); const done=(i+1<active);
    const fill=on?C.red:(done?'F3D4DA':'ECEFF3'); const col=on?'FFFFFF':(done?C.red:C.muted);
    box(s,xs[i],y,1.85,0.5,fill,fill,0.22); addText(s,lab,xs[i]+0.06,y+0.13,1.73,0.18,10.2,col,true,'center');
    if(i<4) s.addShape(S.line,{x:xs[i]+1.85,y:y+0.25,w:0.59,h:0,line:{color:'C9CED6',width:1.3,endArrowType:'triangle'}});
  });
}
function metric(s,x,y,num,label,fill=C.white,numColor=C.red){
  box(s,x,y,2.16,1.18,fill,fill); addText(s,num,x+0.18,y+0.16,1.8,0.48,26,numColor,true); addText(s,label,x+0.18,y+0.72,1.78,0.26,10.5,C.muted,true);
}
function tinySource(s,text){ addText(s,text,0.72,6.72,11.8,0.22,8.7,'89919C',false,'left',{italic:true}); }

// Slide 1 cover
{
 const s=pptx.addSlide('BASE');
 pill(s,'DESIGN THINKING - STAGE 3',0.78,0.80,2.28,C.yellowP,C.orange);
 stageTrack(s,3,1.48);
 addText(s,'Ideate',0.78,2.35,5.5,0.64,40,C.ink,true);
 addText(s,'From evidence to a concept worth prototyping',0.82,3.07,6.5,0.52,22,C.muted,false);
 addText(s,'We deliberately diverged beyond the first idea, challenged the seed, then converged using transparent criteria.',0.82,3.83,5.85,0.98,16.5,C.ink,false);
 box(s,7.72,2.38,4.72,3.55,'FFFFFF','E4E7EC');
 addText(s,'WHAT THIS READOUT SHOWS',8.04,2.68,3.9,0.22,10.5,C.red,true);
 bulletList(s,[
  'The HMW and research insights we started from',
  'How we generated 116+ ideas using multiple lenses',
  'How 12 ideas were shortlisted and scored',
  'Why My Wealth emerged as the concept to prototype',
  'What must still be tested before we call it a solution'
 ],8.03,3.03,3.96,13.0,0.47);
 tinySource(s,'Source of truth: docs/challenges/04-ideate.md + all 4 RBI Ideate prompt outputs on main.');
}

// Slide 2 start point
{
 const s=pptx.addSlide('BASE'); title(s,'We did not start with a solution','Stage 3 starts from the synthesized problem, not from “let’s build an AI bot”.');
 box(s,0.72,1.55,12.0,1.26,C.red,C.red);
 addText(s,'HOW MIGHT WE',0.98,1.78,1.5,0.2,10.5,'FFE0E5',true);
 addText(s,'Give mass-affluent customers outside full Premium advice clear, affordable guidance that starts from their own situation and is there when they choose to ask for it, so they can make confident investment decisions with their bank?',2.35,1.72,10.0,0.72,17,'FFFFFF',true);
 const insights=[
  ['1','LIFE-LED','Guidance should start from goals and life situation, not a product.'],
  ['2','CUSTOMER CONTROL','Help when the customer asks; channel may be app or branch.'],
  ['3','CLARITY + COST','Unclear/costly journeys push decisions to family, ChatGPT or cheaper providers.'],
  ['4','REUSE CAPABILITY','My Life, RaiConnect, advisory tools and Learn to Invest already provide building blocks.'],
  ['5','MULTIPLE ENTRY POINTS','Different customers need different paths; do not make AI mandatory.']
 ];
 insights.forEach((v,i)=>{
   const x=0.72+(i%3)*4.02, y=3.15+Math.floor(i/3)*1.48, w=(i<3?3.62:3.62);
   box(s,x,y,w,1.15, i===0?C.yellowP:(i===1?C.blueP:(i===2?C.orangeP:(i===3?C.greenP:C.purpleP))), 'FFFFFF');
   addText(s,v[0],x+0.18,y+0.16,0.34,0.34,18,C.red,true,'center');
   addText(s,v[1],x+0.62,y+0.14,w-0.82,0.2,10.2,C.ink,true);
   addText(s,v[2],x+0.62,y+0.42,w-0.82,0.50,11.2,C.muted,false);
 });
 box(s,8.76,4.63,3.96,1.15,'FFFFFF','E0E4EA');
 addText(s,'Evidence base',9.0,4.82,1.2,0.2,10.5,C.red,true);
 addText(s,'2 experts + 2 street interviews + 1 UX study',9.0,5.10,3.3,0.3,12.5,C.ink,true);
 addText(s,'Strong enough to ideate; not enough to claim customer validation.',9.0,5.45,3.3,0.24,9.3,C.muted,false);
 tinySource(s,'Evidence is provisional; Stage 3 outputs are team inputs, not validated customer outcomes.');
}

// Slide 3 process
{
 const s=pptx.addSlide('BASE'); title(s,'Our ideation process: diverge first, converge later','The workshop was designed to prevent the first idea from becoming the answer by default.');
 const steps=[
  ['1','ALIGN','HMW + personas + journey + guardrails',C.grayP,C.ink],
  ['2','DIVERGE','Reverse brainstorm + Crazy 8s + analogies',C.blueP,C.blue],
  ['3','CHALLENGE','Build on / Break it - including our own seed idea',C.yellowP,C.orange],
  ['4','CLUSTER','Group similar ideas into themes',C.greenP,C.green],
  ['5','SELECT','Dot vote + impact/effort + multi-criteria scoring',C.purpleP,C.purple]
 ];
 steps.forEach((v,i)=>{
   const x=0.72+i*2.49;
   box(s,x,1.75,2.15,2.36,v[3],v[3]);
   pill(s,v[0],x+0.18,1.94,0.44,C.white,C.red);
   addText(s,v[1],x+0.18,2.50,1.79,0.26,14,v[4],true);
   addText(s,v[2],x+0.18,2.93,1.78,0.78,11.5,C.ink,false);
   if(i<4) s.addShape(S.line,{x:x+2.15,y:2.93,w:0.34,h:0,line:{color:'B8C0CA',width:1.5,endArrowType:'triangle'}});
 });
 box(s,0.72,4.55,12.0,1.42,C.white,C.line);
 addText(s,'90-minute workshop rules',0.98,4.85,2.0,0.2,12,C.red,true);
 const rules=['Defer judgment','Build on others','Wild ideas welcome','Quantity before quality','Everyone writes before discussion'];
 rules.forEach((r,i)=>pill(s,r,3.0+i*1.78,4.78,1.58,i%2===0?'F7F8FA':'FFFFFF',C.ink));
 addText(s,'Key facilitation move: the “Money Guide” was shown only as a seed to break, improve or replace.',0.98,5.55,11.1,0.28,13.5,C.ink,true,'center');
 tinySource(s,'RBI prompt 3.1.1: workshop design. Actual 90-minute agenda uses HMW split, reverse brainstorm, Crazy 8s, analogies, seed challenge, clustering and voting.');
}

// Slide 4 ideas generated
{
 const s=pptx.addSlide('BASE'); title(s,'We opened the solution space before choosing','The goal was diversity: technology, process, human support, quick wins and bigger bets.');
 metric(s,0.72,1.55,'70','SOLUTION IDEAS',C.blueP,C.blue);
 metric(s,3.12,1.55,'46','SCAMPER IDEAS',C.yellowP,C.orange);
 metric(s,5.52,1.55,'10','IDEA CATEGORIES',C.greenP,C.green);
 metric(s,7.92,1.55,'12','SHORTLISTED',C.purpleP,C.purple);
 metric(s,10.32,1.55,'5','TOP CLUSTER',C.orangeP,C.red);
 const cats=[
  ['Technology',C.blueP,C.blue],['Process redesign',C.grayP,C.ink],['Human support',C.greenP,C.green],['Hybrid',C.purpleP,C.purple],['Communication',C.yellowP,C.orange],
  ['Trust',C.orangeP,C.orange],['Cross-industry',C.blueP,C.blue],['Unconventional',C.purpleP,C.purple],['Quick wins',C.greenP,C.green],['Strategic bets',C.grayP,C.ink]
 ];
 cats.forEach((v,i)=>{
   const col=i<5?0:1, row=i%5;
   const x=0.82+col*6.08, y=3.12+row*0.58;
   box(s,x,y,5.60,0.43,v[1],v[1]); addText(s,v[0],x+0.16,y+0.10,2.0,0.18,10.5,v[2],true);
   const examples=[
    'Life Profile layer, AI explainer, cost comparer, handover',
    'Life before product, no cold calls, fair exit, 3 paths',
    'Expert on demand, branch support, yearly check-in',
    'Self-service + expert escalation + context handover',
    'Plain-language fees, contextual learning, decision clarity',
    'Opt-in contact, control, transparent cost and risk',
    'Family doctor / telecom / tax software analogies',
    'Bring your family, bring your ChatGPT answer, radical access',
    'Booking questions, opt-in invitation, exit script',
    'Shared guidance desk, new service model, platform integration'
   ][i];
   addText(s,examples,x+2.05,y+0.07,3.38,0.24,9.2,C.muted,false);
 });
 tinySource(s,'3.2.1 generated 70 ideas across 10 lenses; 3.2.2 added 46 SCAMPER ideas by reworking the current journey.');
}

// Slide 5 seed challenge
{
 const s=pptx.addSlide('BASE'); title(s,'We challenged our own “Money Guide” idea','The team seed was not treated as the winner; it had to survive the same criticism as everything else.');
 box(s,0.72,1.56,3.65,4.55,C.orangeP,C.orange);
 addText(s,'BREAK IT',1.0,1.87,1.5,0.28,16,C.orange,true);
 addText(s,'Why might a customer reject it?',1.0,2.26,2.9,0.34,13.5,C.ink,true);
 bulletList(s,[
  'Feels like another sales funnel',
  'AI may reduce trust for some customers',
  'Too many features at once',
  'Unclear legal line between explaining and recommending',
  'Branch-first customers may never enter the app'
 ],1.0,2.76,2.95,11.6,0.59,C.ink,C.orange);
 box(s,4.84,1.56,3.65,4.55,C.greenP,C.green);
 addText(s,'BUILD ON IT',5.12,1.87,1.7,0.28,16,C.green,true);
 addText(s,'What would make it simpler and safer?',5.12,2.26,2.95,0.34,13.5,C.ink,true);
 bulletList(s,[
  'Life Profile before any product',
  'AI optional - human path always visible',
  'Show yearly costs and alternatives',
  'Pass context to the banker',
  'Use the same journey in branch'
 ],5.12,2.76,2.95,11.6,0.59,C.ink,C.green);
 box(s,8.96,1.56,3.65,4.55,C.blueP,C.blue);
 addText(s,'CREATE ALTERNATIVES',9.24,1.87,2.5,0.28,16,C.blue,true);
 addText(s,'Ideas that do not depend on the seed',9.24,2.26,2.9,0.34,13.5,C.ink,true);
 bulletList(s,[
  'Fair exit moment',
  'Standalone clear cost comparer',
  'Guidance desk for non-Premium',
  'Branch guide + printed plan',
  'Opt-in invitation / “you call us”'
 ],9.24,2.76,2.95,11.6,0.59,C.ink,C.blue);
 tinySource(s,'This “Build on / Break it” round was explicitly designed to avoid confirmation bias around the first team concept.');
}

// Slide 6 shortlist
{
 const s=pptx.addSlide('BASE'); title(s,'The 12 shortlisted ideas cover different moments in the journey','We kept stand-alone ideas and component ideas so the team could see what creates value by itself.');
 const cols=[
  {x:0.72, head:'START / INVITATION', color:C.blue, fill:C.blueP, ids:[['I-02','Life Profile before products'],['I-10','Opt-in invitation'],['I-09','Branch guide + printed plan'],['I-06','Three help paths']]},
  {x:4.55, head:'DECISION / GUIDANCE', color:C.green, fill:C.greenP, ids:[['I-01','Money Guide - full bundle'],['I-03','Clear comparer + yearly cost'],['I-07','Ask an expert by tomorrow'],['I-08','Guidance desk for non-Premium']]},
  {x:8.38, head:'HANDOVER / EXIT', color:C.orange, fill:C.orangeP, ids:[['I-05','Tell-it-once handover'],['I-04','Fair exit moment'],['I-11','Bring family / ChatGPT answer'],['I-12','Paid one-off guidance session']]}
 ];
 cols.forEach(c=>{
  box(s,c.x,1.55,3.55,4.93,C.white,C.line); box(s,c.x,1.55,3.55,0.55,c.fill,c.fill); addText(s,c.head,c.x+0.18,1.72,3.18,0.18,10.8,c.color,true,'center');
  c.ids.forEach((v,i)=>{
    const yy=2.33+i*0.95; pill(s,v[0],c.x+0.18,yy,0.60,c.fill,c.color);
    addText(s,v[1],c.x+0.94,yy-0.01,2.25,0.35,12.1,C.ink,true);
    if(i<3) s.addShape(S.line,{x:c.x+0.18,y:yy+0.69,w:3.18,h:0,line:{color:'ECEFF3',width:1}});
  });
 });
 addText(s,'Important: I-02, I-03, I-04, I-05 and I-10 can also be components of a larger concept - not only competitors.',0.78,6.54,11.85,0.25,10.8,C.muted,true,'center');
}

// Slide 7 evaluation framework
{
 const s=pptx.addSlide('BASE'); title(s,'We used explicit criteria instead of “I like this idea”','Scores are AI-assisted estimates on a small evidence base; the team still owns the decision.');
 const crit=[
  ['Customer impact','30%','Does it help a confident, suitable decision?',C.red,C.red],
  ['Feasibility','25%','Can we test or implement it with realistic effort?',C.blue,C.blue],
  ['Retention impact','20%','Does it keep the bank in the customer relationship?',C.green,C.green],
  ['Innovation','15%','Is it meaningfully different from current patterns?',C.purple,C.purple],
  ['Strategic alignment','5%','Does it fit hybrid / reuse existing capability?',C.orange,C.orange],
  ['Risk','5%','Regulatory, privacy, reputation and adoption risk',C.ink,C.ink]
 ];
 crit.forEach((v,i)=>{
   const x=i<3?0.72:6.65, y=1.55+(i%3)*1.36;
   box(s,x,y,5.95,1.04,C.white,C.line);
   pill(s,v[1],x+0.18,y+0.17,0.72,i===0?C.yellowP:'F1F3F5',v[3]);
   addText(s,v[0],x+1.08,y+0.13,2.0,0.22,12.8,v[3],true);
   addText(s,v[2],x+1.08,y+0.44,4.44,0.35,10.6,C.muted,false);
 });
 box(s,0.72,5.78,11.88,0.57,C.red,C.red); addText(s,'Guardrail: “make customers invest more” is NOT a customer-impact criterion.',0.98,5.95,11.36,0.20,13.5,'FFFFFF',true,'center');
 tinySource(s,'3.3.1 also checked alternative weightings, ICE, RICE, MoSCoW and risk. The same top cluster stayed broadly stable.');
}

// Slide 8 top results
{
 const s=pptx.addSlide('BASE'); title(s,'The top five were extremely close','That is a signal to combine the strongest elements - not pretend one score is “the truth”.');
 const data=[
  ['1','I-02 Life Profile before products',6.55,C.red],
  ['2','I-01 Money Guide - full bundle',6.45,C.purple],
  ['3','I-04 Fair exit moment',6.35,C.orange],
  ['4','I-03 Clear comparer + yearly cost',6.20,C.blue],
  ['5','I-05 Tell-it-once handover',6.05,C.green]
 ];
 data.forEach((v,i)=>{
   const y=1.62+i*0.87;
   pill(s,v[0],0.83,y+0.09,0.46,'F0F2F5',C.ink);
   addText(s,v[1],1.46,y,4.28,0.34,13.2,C.ink,true);
   box(s,5.95,y+0.07,5.86,0.28,'E9EDF2','E9EDF2',0.14);
   const bw=(v[2]/7.0)*5.86; box(s,5.95,y+0.07,bw,0.28,v[3],v[3],0.14);
   addText(s,String(v[2].toFixed(2)),11.98,y,0.55,0.34,13,C.ink,true,'right');
 });
 box(s,0.83,6.03,11.70,0.56,C.yellowP,C.yellowP);
 addText(s,'Only 0.50 points separate #1 from #5. In practice, these five form the strongest concept bundle.',1.04,6.18,11.28,0.22,13.2,C.ink,true,'center');
 tinySource(s,'With more weight on risk, the full Money Guide drops to 3rd because the AI component is the riskiest part.');
}

// Slide 9 chosen concept
{
 const s=pptx.addSlide('BASE'); title(s,'Proposed concept to prototype: My Wealth','A concrete version of the team idea, built from the strongest-scoring components. Team confirmation is still needed.');
 box(s,0.72,1.53,6.10,4.95,C.white,C.line);
 addText(s,'MY WEALTH',1.03,1.86,2.0,0.26,17,C.red,true);
 addText(s,'New section inside the existing mobile app, unlocked when the customer enters the mass-affluent segment.',1.03,2.22,5.35,0.60,15,C.ink,true);
 const flow=[['1','Life Profile','Start from goals and situation'],['2','Learn + Compare','Explain options and yearly cost'],['3','Playground','Practice / simulate - keep simple'],['4','AI Wealth','Optional explanation layer'],['5','Expert','One tap, context passed to banker'],['6','Fair Exit','Useful alternative at the moment of doubt']];
 flow.forEach((v,i)=>{
   const yy=3.02+(i%3)*0.87, xx=i<3?1.03:3.95;
   pill(s,v[0],xx,yy,0.42,i<3?C.blueP:C.greenP,i<3?C.blue:C.green);
   addText(s,v[1],xx+0.55,yy-0.01,1.55,0.18,10.7,C.ink,true);
   addText(s,v[2],xx+0.55,yy+0.25,2.15,0.30,9.2,C.muted,false);
 });
 // preview image from improved proposal
 box(s,7.22,1.52,5.35,3.56,'FFFFFF','DDE2E8'); addText(s,'MY WEALTH',7.55,1.82,1.6,0.24,16,C.red,true); addText(s,'Wealth snapshot',7.55,2.22,1.8,0.20,11,C.muted,true); addText(s,'€68,500',7.55,2.50,1.8,0.36,24,C.ink,true); [['Life Profile',C.yellowP,C.orange],['Learn',C.blueP,C.blue],['Playground',C.greenP,C.green],['AI Wealth',C.purpleP,C.purple]].forEach((v,i)=>{const xx=7.55+(i%2)*2.25, yy=3.04+Math.floor(i/2)*0.68; box(s,xx,yy,2.0,0.50,v[1],v[1]); addText(s,v[0],xx+0.10,yy+0.13,1.8,0.18,10.5,v[2],true,'center');}); box(s,7.55,4.46,4.47,0.45,C.red,C.red); addText(s,'Talk to an adviser',7.66,4.58,4.25,0.18,10.5,'FFFFFF',true,'center');
 box(s,7.22,5.32,5.35,1.16,C.greenP,C.greenP);
 addText(s,'Core principle',7.49,5.55,1.16,0.18,10.2,C.green,true);
 addText(s,'Self-service when I want independence. Human expertise when I need confidence.',8.65,5.46,3.56,0.48,13.5,C.ink,true);
 tinySource(s,'Illustrative UI preview from the separate My Wealth proposal deck. AI explains; the approved advisory process / banker recommends.');
}

// Slide 10 what must be fixed
{
 const s=pptx.addSlide('BASE'); title(s,'Before prototyping, strengthen the concept in seven places','Ideation did not end with “build this”. It surfaced the weaknesses we need to design around.');
 const fixes=[
  ['1','SHOW COSTS','Yearly cost + simple deposit / bond / fund comparison.',C.blueP,C.blue],
  ['2','USE THE EXIT MOMENT','Offer a fair alternative or expert help when the customer is leaving.',C.orangeP,C.orange],
  ['3','BRANCH WAY IN','Same Life Profile on a banker tablet + one-page printed plan.',C.greenP,C.green],
  ['4','OPT-IN BELOW THRESHOLD','Let near-eligible customers request access instead of hard exclusion.',C.purpleP,C.purple],
  ['5','KEEP PLAYGROUND SIMPLE','Old simulator evidence says complexity can confuse.',C.yellowP,C.orange],
  ['6','LIFE PROFILE ≠ ADVICE','GDPR consent; formal MiFID / suitability remains later.',C.blueP,C.blue],
  ['7','NUDGES ARE CUSTOMER-CONTROLLED','Choose topics and frequency; no cold calls.',C.greenP,C.green]
 ];
 fixes.forEach((v,i)=>{
   const col=i<4?0:1, row=col===0?i:i-4;
   const x=0.72+col*6.05, y=1.50+row*1.17;
   box(s,x,y,5.65,0.94,v[3],v[3]);
   pill(s,v[0],x+0.16,y+0.18,0.42,C.white,C.red);
   addText(s,v[1],x+0.70,y+0.12,2.25,0.20,10.6,v[4],true);
   addText(s,v[2],x+0.70,y+0.40,4.55,0.34,9.7,C.ink,false);
 });
 box(s,6.77,5.01,5.65,1.15,C.red,C.red);
 addText(s,'Success = a confident, suitable decision',7.06,5.26,5.05,0.22,14,'FFFFFF',true,'center');
 addText(s,'Keeping cash can still be the right answer.',7.06,5.62,5.05,0.20,10.5,'FFE0E5',false,'center');
 tinySource(s,'These fixes come directly from the evidence and 3.3.1 scoring - especially cost, exit, channel choice and AI/regulatory risk.');
}

// Slide 11 transition
{
 const s=pptx.addSlide('BASE'); title(s,'Ideate is complete enough to move into Prototype & Test','The next phase is not “build the product” - it is “test the riskiest assumptions cheaply”.');
 stageTrack(s,4);
 const q=[
  ['UNLOCK','Does the message feel helpful or like sales?'],
  ['LIFE PROFILE','Will customers complete it, and does the result feel accurate?'],
  ['COST','Do they understand the comparison and what they pay?'],
  ['HUMAN HELP','When do they press “Talk to an Expert”?'],
  ['BRANCH','Would branch-trusting customers use the tablet / printed path?'],
  ['AI','What can it legally explain, and do customers trust it?']
 ];
 q.forEach((v,i)=>{
   const x=0.72+(i%3)*4.02, y=2.42+Math.floor(i/3)*1.17;
   box(s,x,y,3.64,0.91,C.white,C.line); addText(s,v[0],x+0.18,y+0.14,1.15,0.18,9.7,C.red,true); addText(s,v[1],x+1.16,y+0.10,2.23,0.47,10.8,C.ink,true);
 });
 box(s,0.72,5.10,12.0,1.15,C.dark,C.dark);
 addText(s,'NEXT DELIVERABLE',1.02,5.34,1.62,0.18,10.2,'AAB3C0',true);
 addText(s,'Clickable My Wealth prototype + 5–8 user tests',2.72,5.24,5.0,0.34,17,'FFFFFF',true);
 addText(s,'Core path: Unlock → Life Profile → Snapshot + costs → Learn → Expert handover',7.58,5.22,4.50,0.46,12.2,'E5E7EB',false,'center');
 tinySource(s,'Stage 4 is ready to start; no prototype has been tested yet.');
}

pptx.writeFile({ fileName: 'docs/presentation/04-ideate-rbi-readout.pptx' });
