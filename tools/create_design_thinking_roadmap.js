const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Arianit Lubishtani';
pptx.subject = 'Innovation School 2026 - Design Thinking roadmap';
pptx.title = 'Design Thinking Roadmap - Mass-Affluent Wealth Advice';
pptx.company = 'RBI Innovation School 2026';
pptx.lang = 'en-US';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'en-US'
};
pptx.defineSlideMaster({
  title: 'MASTER',
  background: { color: 'F7F8FA' },
  objects: [
    { rect: { x: 0, y: 0, w: 13.333, h: 0.16, fill: { color: 'F5C400' }, line: { color: 'F5C400' } } },
    { text: { text: 'INNOVATION SCHOOL 2026  |  DRAFT FOR TEAM DISCUSSION', options: { x: 0.55, y: 7.12, w: 8.5, h: 0.2, fontFace: 'Aptos', fontSize: 9, color: '707782', margin: 0 } } },
    { text: { text: '13-16.10.2026', options: { x: 11.55, y: 7.12, w: 1.2, h: 0.2, fontFace: 'Aptos', fontSize: 9, color: '707782', align: 'right', margin: 0 } } }
  ],
  slideNumber: { x: 12.83, y: 7.12, w: 0.25, h: 0.2, fontFace: 'Aptos', fontSize: 9, color: '707782', align: 'right' }
});

const C = { yellow:'F5C400', dark:'1F2937', mid:'4B5563', light:'EEF1F4', white:'FFFFFF', blue:'DDEAF7', green:'DDEFE5', peach:'F7E5D8', purple:'E9E2F7', red:'F6E1E1' };
function addTitle(slide, title, sub='') {
  slide.addText(title, { x:0.65, y:0.45, w:12.0, h:0.55, fontFace:'Aptos Display', fontSize:28, bold:true, color:C.dark, margin:0 });
  if(sub) slide.addText(sub, { x:0.67, y:1.03, w:11.8, h:0.4, fontSize:14, color:C.mid, margin:0 });
}
function addCard(slide, x,y,w,h,title,body,fill='FFFFFF') {
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.08,fill:{color:fill},line:{color:'D6DADE',width:1}});
  slide.addText(title,{x:x+0.22,y:y+0.18,w:w-0.44,h:0.32,fontSize:17,bold:true,color:C.dark,margin:0});
  slide.addText(body,{x:x+0.22,y:y+0.62,w:w-0.44,h:h-0.8,fontSize:13,color:C.mid,breakLine:false,margin:0.02,valign:'top'});
}
function addPhaseChip(slide,x,y,num,label,fill){
  slide.addShape(pptx.ShapeType.ellipse,{x,y,w:0.48,h:0.48,fill:{color:fill},line:{color:fill}});
  slide.addText(String(num),{x:x,y:y+0.04,w:0.48,h:0.28,fontSize:14,bold:true,align:'center',color:C.dark,margin:0});
  slide.addText(label,{x:x+0.6,y:y+0.04,w:2.1,h:0.3,fontSize:15,bold:true,color:C.dark,margin:0});
}

{
 const s=pptx.addSlide('MASTER');
 s.background={color:'1F2937'};
 s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:13.333,h:0.16,fill:{color:C.yellow},line:{color:C.yellow}});
 s.addText('DESIGN THINKING ROADMAP',{x:0.75,y:0.9,w:8.8,h:0.45,fontSize:18,bold:true,color:C.yellow,margin:0});
 s.addText('From a broad challenge\nto a testable solution',{x:0.75,y:1.5,w:8.2,h:1.4,fontSize:42,bold:true,color:C.white,margin:0,breakLine:false});
 s.addText('Mass-affluent wealth advice  |  Innovation School 2026',{x:0.78,y:3.15,w:8.7,h:0.45,fontSize:18,color:'D7DCE2',margin:0});
 s.addShape(pptx.ShapeType.roundRect,{x:8.95,y:1.05,w:3.45,h:4.7,fill:{color:'2A3544'},line:{color:'3B4655'},radius:0.08});
 const items=[['1','Understand'],['2','Empathize'],['3','Ideate'],['4','Prototype'],['5','Business Case']];
 items.forEach((it,i)=>{ const yy=1.45+i*0.8; s.addShape(pptx.ShapeType.ellipse,{x:9.35,y:yy,w:0.44,h:0.44,fill:{color:C.yellow},line:{color:C.yellow}}); s.addText(it[0],{x:9.35,y:yy+0.03,w:0.44,h:0.26,fontSize:13,bold:true,align:'center',color:C.dark,margin:0}); s.addText(it[1],{x:10.0,y:yy+0.02,w:1.85,h:0.3,fontSize:16,bold:true,color:C.white,margin:0}); if(i<4)s.addShape(pptx.ShapeType.line,{x:9.57,y:yy+0.44,w:0,h:0.36,line:{color:'7D8794',width:2}}); });
 s.addText('Core principle: agree on the problem before choosing the solution.',{x:0.78,y:5.25,w:7.7,h:0.7,fontSize:20,bold:true,color:C.white,margin:0});
 s.addText('Draft for team alignment - not a final solution proposal',{x:0.78,y:6.25,w:7.0,h:0.35,fontSize:13,color:'B8C0CA',margin:0});
}
{
 const s=pptx.addSlide('MASTER'); addTitle(s,'What are we really trying to design?','A service level between generic retail guidance and full private banking');
 s.addShape(pptx.ShapeType.roundRect,{x:0.7,y:1.55,w:11.95,h:1.1,fill:{color:'FFF6CC'},line:{color:'E1C65A',width:1}});
 s.addText('How can we give customers with higher income or savings a level of guidance that is more valuable than generic retail guidance, but still cheaper and more scalable than full private banking?',{x:1.0,y:1.83,w:11.35,h:0.55,fontSize:22,bold:true,color:C.dark,align:'center',margin:0});
 addCard(s,0.75,3.0,3.7,2.6,'Generic retail','Education, product information, self-service tools and broad guidance.\n\nUseful, but may not be enough for more complex goals.','FFFFFF');
 addCard(s,4.82,3.0,3.7,2.6,'Our design space','Affordable guidance, clearer decisions, assisted digital support and human help at the moments that matter.','FFF9E8');
 addCard(s,8.9,3.0,3.7,2.6,'Private banking','High-touch, dedicated advisers and deeper planning.\n\nValuable, but too costly to provide at scale to everyone.','FFFFFF');
 s.addText('This is a positioning statement - not yet the final customer problem.',{x:3.0,y:6.0,w:7.3,h:0.35,fontSize:15,italic:true,color:C.mid,align:'center',margin:0});
}
{
 const s=pptx.addSlide('MASTER'); addTitle(s,'The sequence matters','We should not agree on a solution first');
 const xs=[0.75,3.23,5.71,8.19,10.67]; const labels=['UNDERSTAND','EMPATHIZE','IDEATE','PROTOTYPE','BUSINESS CASE']; const fills=[C.blue,C.green,C.peach,C.purple,'FFF2C6'];
 labels.forEach((lab,i)=>{s.addShape(pptx.ShapeType.roundRect,{x:xs[i],y:2.1,w:1.9,h:0.8,fill:{color:fills[i]},line:{color:'CED4DA'}});s.addText(lab,{x:xs[i]+0.08,y:2.33,w:1.74,h:0.25,fontSize:13,bold:true,align:'center',color:C.dark,margin:0}); if(i<4)s.addShape(pptx.ShapeType.chevron,{x:xs[i]+1.93,y:2.32,w:0.45,h:0.36,fill:{color:'AEB5BC'},line:{color:'AEB5BC'}});});
 s.addText('Agree on the problem',{x:0.8,y:3.35,w:4.2,h:0.45,fontSize:24,bold:true,color:C.dark,margin:0});
 s.addText('Who? Which market? Which moment? What evidence shows a real difficulty? Why does it matter?',{x:0.8,y:3.95,w:4.5,h:1.1,fontSize:16,color:C.mid,margin:0});
 s.addShape(pptx.ShapeType.line,{x:5.1,y:3.4,w:0,h:2.1,line:{color:'D2D7DC',width:2}});
 s.addText('Then choose a solution',{x:5.65,y:3.35,w:4.2,h:0.45,fontSize:24,bold:true,color:C.dark,margin:0});
 s.addText('Generate several options, compare them, choose one assumption to test, and change direction if the evidence says so.',{x:5.65,y:3.95,w:5.3,h:1.1,fontSize:16,color:C.mid,margin:0});
 s.addShape(pptx.ShapeType.roundRect,{x:8.85,y:5.25,w:3.5,h:0.85,fill:{color:'FDECEC'},line:{color:'E5B3B3'}});
 s.addText('Too early: “Our solution is an AI chatbot.”',{x:9.05,y:5.5,w:3.1,h:0.3,fontSize:15,bold:true,color:'8D3232',align:'center',margin:0});
}
{
 const s=pptx.addSlide('MASTER'); addTitle(s,'1. Understand','Agree on the scope and the current journey before solving anything');
 addPhaseChip(s,0.75,1.45,1,'Understand',C.blue);
 addCard(s,0.75,2.15,3.8,3.55,'Questions to answer','• Which market are we studying?\n• Which mass-affluent subgroup?\n• What service do they receive today?\n• Where in the journey could friction exist?\n• What is fact vs assumption?','FFFFFF');
 addCard(s,4.77,2.15,3.8,3.55,'What we bring','• Official challenge\n• Veljko expert interview\n• Public bank/service examples\n• Existing investment journey knowledge\n• Data or expert evidence we can access','FFFFFF');
 addCard(s,8.79,2.15,3.8,3.55,'Output / decision gate','A provisional customer + market + journey map + top unanswered questions.\n\nOnly then do we move deeper into customer evidence.','DDEAF7');
 s.addText('Do not choose the app, AI, chatbot or platform here.',{x:4.2,y:6.05,w:4.9,h:0.35,fontSize:16,bold:true,color:'8D3232',align:'center',margin:0});
}
{
 const s=pptx.addSlide('MASTER'); addTitle(s,'2. Empathize & Synthesize','Turn assumptions into evidence and one focused problem'); addPhaseChip(s,0.75,1.45,2,'Empathize & Synthesize',C.green);
 addCard(s,0.75,2.15,3.8,3.55,'Listen to real experiences','Customer: “Tell me about the last time you had savings and needed to decide what to do.”\n\nBanker: “Where does a real customer usually get stuck, and what takes most time?”','FFFFFF');
 addCard(s,4.77,2.15,3.8,3.55,'Look for patterns','Cluster needs, frustrations, workarounds and contradictions. Separate observed evidence from our interpretation.','FFFFFF');
 addCard(s,8.79,2.15,3.8,3.55,'Output / decision gate','One focused problem statement + 2-3 evidence-backed insights + a “How might we...?” question.','DDEFE5');
 s.addText('This is the point where we should be able to explain WHY the problem is worth solving.',{x:1.45,y:6.05,w:10.4,h:0.35,fontSize:17,bold:true,color:C.dark,align:'center',margin:0});
}
{
 const s=pptx.addSlide('MASTER'); addTitle(s,'3. Ideate','Now - and only now - do we decide what kind of solution to explore'); addPhaseChip(s,0.75,1.45,3,'Ideate',C.peach);
 const ideas=[['Clearer explanation','One-page recommendation rationale'],['Human handover','Carry context into banker support'],['Wealth health check','Help prioritize the next financial action'],['Guided journey','Reduce drop-off from intent to completion'],['Education','Short lessons before decision points'],['AI assistant','Only if evidence shows it solves a real gap']];
 ideas.forEach((it,i)=>{const col=i%3,row=Math.floor(i/3);addCard(s,0.75+col*4.03,2.15+row*1.85,3.65,1.45,it[0],it[1], i===5?'FFF2F2':'FFFFFF');});
 s.addText('Choose based on customer relevance, evidence, feasibility, operating cost and advisory responsibilities.',{x:1.1,y:6.18,w:11.1,h:0.35,fontSize:15,bold:true,color:C.mid,align:'center',margin:0});
}
{
 const s=pptx.addSlide('MASTER'); addTitle(s,'4. Prototype & Test','Test the riskiest assumption with the smallest useful prototype'); addPhaseChip(s,0.75,1.45,4,'Prototype & Test',C.purple);
 addCard(s,0.75,2.15,3.8,3.45,'Prototype examples','• Paper screens\n• One-page explanation\n• Banker handover summary\n• Role-play\n• Goal-review dashboard\n\nNo full platform needed.','FFFFFF');
 addCard(s,4.77,2.15,3.8,3.45,'What to observe','Can the customer complete the task?\nWhat do they misunderstand?\nWhere do they still need help?\nWhat changes after feedback?','FFFFFF');
 addCard(s,8.79,2.15,3.8,3.45,'Output / decision gate','Evidence that the idea helps - or evidence that we should change it.\n\nA failed assumption is useful learning.','E9E2F7');
 s.addText('Testing is not “Do you like our idea?” - it is watching whether the idea actually helps.',{x:1.0,y:6.02,w:11.35,h:0.4,fontSize:17,bold:true,color:C.dark,align:'center',margin:0});
}
{
 const s=pptx.addSlide('MASTER'); addTitle(s,'5. Business Case & Pitch','Explain customer value, delivery reality and the next pilot'); addPhaseChip(s,0.75,1.45,5,'Business Case & Pitch','FFF2C6');
 addCard(s,0.75,2.15,3.8,3.6,'Customer value','Does the customer understand the choice?\nReach a useful next action?\nGet help without repeating everything?\nKnow when to review?','FFFFFF');
 addCard(s,4.77,2.15,3.8,3.6,'Bank / operating value','Adviser time saved\nFewer repeated contacts\nHigher completion\nBetter use of existing capabilities\nPotential relationship value','FFFFFF');
 addCard(s,8.79,2.15,3.8,3.6,'Pitch / next step','Problem → evidence → concept → test learning → cost/benefit → uncertainties → small pilot ask.','FFF9E8');
 s.addShape(pptx.ShapeType.roundRect,{x:2.15,y:6.0,w:9.0,h:0.62,fill:{color:C.dark},line:{color:C.dark}});
 s.addText('Our job is not to defend the first idea. Our job is to learn our way to a credible solution.',{x:2.35,y:6.18,w:8.6,h:0.24,fontSize:16,bold:true,color:C.white,align:'center',margin:0});
}
{
 const s=pptx.addSlide('MASTER'); addTitle(s,'What should we agree as a team first?','A practical discussion checklist for Budapest');
 const qs=[['1','Market + customer','Who exactly are we trying to help?'],['2','Journey moment','Where does the experience break down?'],['3','Evidence','What have we actually observed or heard?'],['4','Problem','Why is this worth solving?'],['5','Only then: solution','Which idea is the best one to test first?']];
 qs.forEach((q,i)=>{const y=1.55+i*0.93; s.addShape(pptx.ShapeType.ellipse,{x:1.0,y:y,w:0.55,h:0.55,fill:{color:i===4?C.yellow:'DDEAF7'},line:{color:i===4?C.yellow:'B7CDE2'}}); s.addText(q[0],{x:1.0,y:y+0.05,w:0.55,h:0.28,fontSize:14,bold:true,align:'center',color:C.dark,margin:0}); s.addText(q[1],{x:1.8,y:y+0.02,w:2.7,h:0.32,fontSize:18,bold:true,color:C.dark,margin:0}); s.addText(q[2],{x:4.35,y:y+0.02,w:7.4,h:0.4,fontSize:16,color:C.mid,margin:0}); if(i<4)s.addShape(pptx.ShapeType.line,{x:1.275,y:y+0.55,w:0,h:0.38,line:{color:'C7CCD1',width:2}}); });
 s.addText('Recommendation for the meeting: use the first deck to align on the challenge, then use this roadmap to agree how the team will work through it.',{x:1.15,y:6.35,w:11.0,h:0.45,fontSize:16,bold:true,color:C.dark,align:'center',margin:0});
}

pptx.writeFile({ fileName: 'docs/presentation/design-thinking-roadmap-draft.pptx' });
