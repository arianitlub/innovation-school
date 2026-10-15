const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Innovation School';
pptx.title = 'My Wealth - 5 minute leadership pitch v3';
pptx.subject = 'Mass-affluent wealth guidance leadership pitch';
pptx.theme = { headFontFace:'Liberation Sans', bodyFontFace:'Liberation Sans', lang:'en-US' };

const C={Y:'FFD500',Y2:'FFF0A8',INK:'171717',MUTED:'6E6A62',BG:'FFFDF3',W:'FFFFFF',LINE:'E6DFC7',GREEN:'2E7D5A',RED:'B84E4E'};
pptx.defineSlideMaster({title:'M',background:{color:C.BG},objects:[{rect:{x:0,y:0,w:13.333,h:0.08,fill:{color:C.Y},line:{color:C.Y}}},{text:{text:'MY WEALTH',options:{x:11.35,y:7.03,w:1.45,h:0.18,fontSize:8,bold:true,color:'77736A',align:'right',margin:0}}}],slideNumber:{x:12.85,y:7.03,w:0.25,h:0.18,fontSize:8,color:'8E8A82',align:'right'}});
function s(){return pptx.addSlide('M')}
function t(sl,txt,x,y,w,h,fs=22,b=false,c=C.INK,a='left',o={}){sl.addText(txt,{x,y,w,h,fontFace:'Liberation Sans',fontSize:fs,bold:b,color:c,align:a,valign:'mid',margin:o.margin??0,fit:'shrink',...o})}
function box(sl,x,y,w,h,fill=C.W,line=C.LINE){sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.16,fill:{color:fill},line:{color:line,pt:1}})}
function pill(sl,txt,x,y,w,fill=C.Y,c=C.INK){sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h:0.34,rectRadius:0.08,fill:{color:fill},line:{color:fill}});t(sl,txt,x+0.05,y,w-0.1,0.34,9,true,c,'center')}
function head(sl,k,title,sub){pill(sl,k,0.65,0.42,1.55);t(sl,title,0.65,0.92,12,0.66,28,true);if(sub)t(sl,sub,0.65,1.58,11.9,0.42,13,false,C.MUTED)}
function notes(sl,txt){sl.addNotes(txt)}

// 1 HOOK
{
 const sl=s();sl.background={color:C.INK};sl.addShape(pptx.ShapeType.rect,{x:0,y:0,w:13.333,h:0.1,fill:{color:C.Y},line:{color:C.Y}});pill(sl,'5-MINUTE PITCH',0.72,0.52,1.58);
 t(sl,'You have',0.72,1.35,2.7,0.5,25,false,C.W);t(sl,'€50,000',0.72,1.80,4.0,1.0,52,true,C.Y);t(sl,'saved.',4.55,2.0,2.0,0.5,28,true,C.W);t(sl,'What would you do tomorrow?',0.72,2.95,7.8,0.7,32,true,C.W);
 const a=[['CASH','Leave it in cash'],['SEARCH','Search on your own'],['CALL','Call a banker']];a.forEach((r,i)=>{let x=0.82+i*3.66;box(sl,x,4.12,3.16,1.22,'242424','3B3B3B');pill(sl,r[0],x+0.18,4.32,0.80,C.Y,'171717');t(sl,r[1],x+1.08,4.24,1.8,0.55,15,true,C.W)});
 sl.addShape(pptx.ShapeType.line,{x:0.78,y:5.86,w:11.78,h:0,line:{color:C.Y,pt:2,dash:'dash'}});t(sl,'For many mass-affluent customers, none of these feels quite right.',0.78,6.05,11.7,0.48,20,true,C.W);t(sl,'That is the space we are designing for.',0.78,6.55,7.2,0.26,12,false,'BFBFBF');
 notes(sl,'Ask the room: “Imagine €50,000 is sitting in your account. What would you do tomorrow?” Pause. Then introduce the gap between self-service and full Premium advice.');
}

// 2 PROBLEM
{
 const sl=s();head(sl,'PROBLEM','There is a missing middle','Basic self-service on one side. Full Premium advice on the other.');
 box(sl,0.72,2.25,3.55,3.40);pill(sl,'SELF-SERVICE',0.98,2.52,1.16,C.Y2);t(sl,'Fast and available',0.98,3.02,2.4,0.28,18,true);t(sl,'• product information\n• digital execution\n• limited context when unsure',0.98,3.55,2.95,1.0,14,false,C.INK,'left',{breakLine:true});pill(sl,'LOW FRICTION',0.98,5.05,1.15,C.Y2);
 t(sl,'?',5.72,2.65,1.45,0.9,46,true,C.INK,'center');sl.addShape(pptx.ShapeType.chevron,{x:4.70,y:3.72,w:3.02,h:0.72,fill:{color:C.Y},line:{color:C.Y}});t(sl,'GUIDANCE GAP',5.08,4.66,2.24,0.36,15,true,C.INK,'center');
 box(sl,8.42,2.25,4.12,3.40,C.INK,'2B2B2B');pill(sl,'PREMIUM / PRIVATE',8.72,2.52,1.70,C.Y);t(sl,'Rich human support',8.72,3.02,2.5,0.28,18,true,C.W);t(sl,'• dedicated adviser\n• personalised discussion\n• remote / video support',8.72,3.55,3.15,1.0,14,false,C.W,'left',{breakLine:true});pill(sl,'HIGH TOUCH',8.72,5.05,1.10,C.Y);
 box(sl,0.72,5.96,11.82,0.78,'FFF8D8','E9D469');t(sl,'“I felt it was more of a product push.”',0.98,6.10,4.5,0.30,14,true);t(sl,'C1 - direct customer interview',5.40,6.12,2.8,0.24,10,false,C.MUTED);t(sl,'Cost was also a reason to leave the bank investment account.',8.15,6.07,3.95,0.34,11,false,C.INK,'right');
 notes(sl,'The bank already has strong capabilities. The problem is not “no tool”; it is the gap between low-touch self-service and high-touch Premium advice.');
}

// 3 INSIGHT
{
 const sl=s();head(sl,'INSIGHT','They do not need more products. They need more confidence and control.','Our early evidence changed the problem we thought we had.');
 const cards=[['UNDERSTAND','Start from life goals, not from product push.','C1'],['TRY','Learn and experiment before risking real money.','C1 + UX'],['ASK','Get human help when needed - on the customer’s terms.','C1 + experts']];cards.forEach((r,i)=>{let x=0.72+i*3.76;box(sl,x,2.36,3.45,2.46);pill(sl,r[0],x+0.22,2.62,1.08,C.Y2);t(sl,r[1],x+0.24,3.22,2.94,0.88,14,false,C.INK,'left',{breakLine:true});pill(sl,r[2],x+0.24,4.35,1.02,'F4F0E4',C.MUTED)});
 t(sl,'What changed in our hypotheses',0.72,5.23,3.6,0.32,16,true);const rr=[['Personalisation','PARTLY SUPPORTED','FFF0A8',C.INK],['Hybrid digital + human','STRONG SIGNAL','DDEFE4',C.GREEN],['“Advisers lack tools”','CONTRADICTED','F3DDDD',C.RED]];rr.forEach((r,i)=>{let y=5.68+i*0.40;t(sl,r[0],0.84,y,3.1,0.24,11);pill(sl,r[1],4.02,y-0.02,1.82,r[2],r[3])});box(sl,7.04,5.20,5.5,1.46,C.INK,'2A2A2A');t(sl,'Evidence discipline',7.34,5.38,2.3,0.28,14,true,C.W);t(sl,'2 direct customer interviews + expert interviews + internal UX study. Strong signal - not full validation yet.',7.34,5.78,4.74,0.60,12,false,'D8D8D8','left',{breakLine:true});
 notes(sl,'Explain that the research changed the solution direction. We stopped looking for another adviser tool and started designing a bridge.');
}

// 4 IDEA
{
 const sl=s();head(sl,'IDEA','My Wealth - a guided layer inside the banking app','Personalised guidance without forcing every customer into a full Premium relationship.');
 box(sl,0.86,2.16,4.02,4.47,C.INK,C.INK);box(sl,1.06,2.42,3.62,3.92,C.BG,C.BG);t(sl,'My Wealth',1.31,2.68,2.4,0.34,20,true);t(sl,'Learn. Practice. Decide.',1.31,3.03,2.9,0.24,10,false,C.MUTED);const tiles=['Learn','Playground','AI Assistant','Wealth Insights','Goals','Talk to Adviser'];tiles.forEach((r,i)=>{let x=1.27+(i%2)*1.62,y=3.48+Math.floor(i/2)*0.82;box(sl,x,y,1.42,0.64,i===3?'FFF0A8':C.W,i===3?C.Y:C.LINE);t(sl,r,x+0.12,y+0.12,1.18,0.34,9,true,C.INK,'center')});
 t(sl,'The journey',5.44,2.30,2.2,0.36,18,true);const st=[['1','Life profile','Goal, horizon, liquidity, confidence'],['2','Learn / Playground','Simple education + safe experimentation'],['3','Explore ideas','Possible directions and trade-offs'],['4','Human handover','Adviser sees context already collected'],['5','Suitable action','Invest, keep cash, or another step']];st.forEach((r,i)=>{let y=2.78+i*0.72;sl.addShape(pptx.ShapeType.ellipse,{x:5.48,y,w:0.42,h:0.42,fill:{color:C.Y},line:{color:C.Y}});t(sl,r[0],5.48,y,0.42,0.40,11,true,C.INK,'center');t(sl,r[1],6.08,y-0.02,2.2,0.26,14,true);t(sl,r[2],8.24,y-0.02,3.8,0.28,11,false,C.MUTED)});box(sl,5.44,6.38,6.65,0.48,'FFF7D4','E5D165');t(sl,'AI explains. The adviser recommends. The customer stays in control.',5.68,6.46,6.12,0.25,12,true,C.INK,'center');
 notes(sl,'My Wealth is the guidance layer between information and advice. AI stays explanatory; regulated personal recommendations remain in the approved advisory process.');
}

// 5 TANGIBLE PORTFOLIO
{
 const sl=s();head(sl,'MAKE IT TANGIBLE','What could personalised guidance actually look like?','An illustrative €20k scenario - to explain trade-offs, not to give advice.');
 sl.addChart(pptx.ChartType.doughnut,[{name:'Allocation',labels:['Cash buffer','Bond fund','Balanced fund','Global equity'],values:[40,25,25,10]}],{x:0.72,y:2.05,w:4.10,h:4.10,holeSize:58,showLegend:false,showTitle:false,showValue:false,showCategoryName:false,chartColors:['171717','FFD500','FFE56A','AFAFAF'],showPercent:false,border:{pt:0,color:C.BG}});t(sl,'€20k',1.91,3.62,1.40,0.42,24,true,C.INK,'center');t(sl,'illustrative',1.91,4.02,1.40,0.20,9,false,C.MUTED,'center');t(sl,'Example allocation',1.45,6.10,2.62,0.28,13,true,C.INK,'center');
 const lg=[['40%','Cash buffer','Liquidity / emergencies','171717'],['25%','Bond fund','Stability / income','FFD500'],['25%','Balanced fund','Diversified growth','FFE56A'],['10%','Global equity','Long-term growth','AFAFAF']];lg.forEach((r,i)=>{let y=2.23+i*0.83;box(sl,5.18,y,3.45,0.64);sl.addShape(pptx.ShapeType.ellipse,{x:5.35,y:y+0.17,w:0.28,h:0.28,fill:{color:r[3]},line:{color:r[3]}});t(sl,r[0],5.78,y+0.08,0.62,0.30,15,true);t(sl,r[1],6.46,y+0.06,1.66,0.26,13,true);t(sl,r[2],6.46,y+0.33,1.82,0.20,9,false,C.MUTED)});
 t(sl,'Then make it interactive',9.02,2.24,3.1,0.34,17,true);const aa=[['AI explains','Why might this fit my goal?'],['Playground tests','What happens in a market fall?'],['Adviser checks','Suitability, fees, products, regulation']];aa.forEach((r,i)=>{let y=2.82+i*1.02;box(sl,9.02,y,3.55,0.82,i===1?'FFF8D9':C.W,i===1?'EAD56E':C.LINE);t(sl,r[0],9.27,y+0.10,2.85,0.25,13,true);t(sl,r[1],9.27,y+0.39,2.85,0.25,10,false,C.MUTED)});box(sl,9.02,6.02,3.55,0.58,C.INK,C.INK);t(sl,'Illustrative only - not investment advice',9.22,6.14,3.15,0.26,10,true,C.W,'center');
 notes(sl,'Use the portfolio only to show trade-offs: liquidity, stability, growth. It is not a recommendation.');
}

// 6 PLAYGROUND
{
 const sl=s();head(sl,'PLAYGROUND','Let customers feel risk before they take risk','A simple simulation turns abstract words like “balanced” into something understandable.');
 t(sl,'Illustrative 1-year scenario ranges',0.92,2.38,4.0,0.28,14,true);const x0=2.15,x1=7.18,mid=(x0+x1)/2;sl.addShape(pptx.ShapeType.line,{x:mid,y:2.82,w:0,h:2.66,line:{color:'C9C3AE',pt:1.2,dash:'dash'}});const ranges=[['Higher',-18,24,3.20],['Balanced',-8,12,4.10],['Lower',-4,7,5.00]];const mp=v=>mid+(v/25)*(x1-mid);ranges.forEach(r=>{let a=mp(r[1]),b=mp(r[2]),y=r[3];t(sl,r[0],0.96,y-0.13,1.0,0.28,12,true);sl.addShape(pptx.ShapeType.line,{x:a,y,w:b-a,h:0,line:{color:C.Y,pt:7}});sl.addShape(pptx.ShapeType.ellipse,{x:a-0.055,y:y-0.055,w:0.11,h:0.11,fill:{color:C.INK},line:{color:C.INK}});sl.addShape(pptx.ShapeType.ellipse,{x:b-0.055,y:y-0.055,w:0.11,h:0.11,fill:{color:C.INK},line:{color:C.INK}});t(sl,`${r[1]}%`,a-0.36,y-0.34,0.58,0.22,9,true,C.INK,'center');t(sl,`+${r[2]}%`,b-0.20,y-0.34,0.68,0.22,9,true,C.INK,'center')});t(sl,'Prototype simulation - not a forecast',0.95,5.88,3.5,0.22,9,false,C.MUTED);
 box(sl,8.25,2.45,4.2,3.35,C.INK,'242424');t(sl,'The point is not prediction.',8.58,2.78,3.5,0.42,20,true,C.W);t(sl,'The point is understanding.',8.58,3.22,3.5,0.42,20,true,C.Y);t(sl,'Move the slider, see what higher risk might mean, then decide whether to learn more or speak to an adviser.',8.58,4.05,3.25,1.05,14,false,'E3E3E3','left',{breakLine:true});pill(sl,'LEARN BY DOING',8.58,5.24,1.48);
 notes(sl,'Risk is hard to understand from a brochure. A simulation makes it intuitive. It is education, not a forecast.');
}

// 7 IMPACT
{
 const sl=s();head(sl,'IMPACT','Better decisions for customers. Better relationships for the bank.','We test value on both sides - not just “did the customer invest?”');
 box(sl,0.72,2.28,5.78,3.48);t(sl,'Customer value',1.0,2.58,2.2,0.34,20,true);const cv=[['Confidence','Understand choices and trade-offs'],['Control','Choose digital or human support'],['Clarity','See goals, fees, liquidity and risk'],['Continuity','No restart when handed to adviser']];cv.forEach((r,i)=>{let y=3.23+i*0.57;t(sl,'✓',1.02,y,0.26,0.26,15,true,C.GREEN,'center');t(sl,r[0],1.42,y,1.25,0.24,12,true);t(sl,r[1],2.68,y,3.15,0.24,11,false,C.MUTED)});
 box(sl,6.82,2.28,5.78,3.48,C.INK,C.INK);t(sl,'Bank value',7.10,2.58,2.2,0.34,20,true,C.W);const bv=[['Engagement','More meaningful digital interactions'],['Retention','Fewer customers deciding elsewhere'],['AUM potential','More suitable investment activity'],['Adviser capacity','Human time at higher-value moments']];bv.forEach((r,i)=>{let y=3.23+i*0.57;t(sl,'→',7.10,y,0.28,0.24,15,true,C.Y,'center');t(sl,r[0],7.50,y,1.36,0.24,12,true,C.W);t(sl,r[1],8.86,y,3.14,0.24,11,false,'CACACA')});box(sl,0.72,6.05,11.88,0.66,'FFF7D2','E6D26E');t(sl,'Pilot metrics:',0.98,6.18,1.12,0.24,11,true);t(sl,'Profile completion  •  Learn/Playground use  •  Adviser handoff  •  Suitable action  •  Satisfaction  •  Repeat engagement',2.04,6.15,10.20,0.30,10,false);
 notes(sl,'The first success metric is a confident, suitable decision. Bank upside includes engagement, retention, AUM and adviser capacity.');
}

// 8 INVESTMENT
{
 const sl=s();head(sl,'INVESTMENT','What would it take to build this inside a real banking app?','Banking-grade means integrations, security, compliance, model risk, QA and operations - not just UI.');
 t(sl,'Illustrative full-MVP build cost: ~€1.06m',0.78,2.18,4.5,0.28,14,true);const seg=[['€240k','FFD500'],['€300k','171717'],['€110k','F0C800'],['€185k','4B4B4B'],['€85k','D3AE00'],['€140k','8A8A8A']],total=1060,bx=0.78,by=2.72,bw=7.24;let cur=bx;seg.forEach(r=>{let n=parseInt(r[0].replace(/[^0-9]/g,'')),w=bw*n/total;sl.addShape(pptx.ShapeType.rect,{x:cur,y:by,w,h:0.54,fill:{color:r[1]},line:{color:r[1]}});if(w>0.68)t(sl,r[0],cur,by+0.12,w,0.25,9,true,['171717','4B4B4B','8A8A8A'].includes(r[1])?C.W:C.INK,'center');cur+=w});
 const lg=[['Experience + mobile','FFD500'],['Backend + integrations','171717'],['AI + guardrails','F0C800'],['Security/compliance/QA','4B4B4B'],['Analytics/change','D3AE00'],['Contingency','8A8A8A']];lg.forEach((r,i)=>{let x=0.80+(i%3)*2.38,y=3.47+Math.floor(i/3)*0.34;sl.addShape(pptx.ShapeType.ellipse,{x,y:y+0.05,w:0.12,h:0.12,fill:{color:r[1]},line:{color:r[1]}});t(sl,r[0],x+0.17,y,2.0,0.22,8.2,false,C.MUTED)});
 box(sl,8.36,2.18,4.12,2.10,C.INK,'242424');t(sl,'ROM full MVP',8.67,2.50,2.9,0.30,13,true,'CFCFCF');t(sl,'€0.9m–€1.3m',8.67,2.93,3.15,0.70,30,true,C.Y);t(sl,'Illustrative build range',8.67,3.62,2.85,0.26,10,false,'BDBDBD');
 t(sl,'What is inside that number?',0.78,4.70,3.2,0.30,16,true);const items=[['Experience + mobile','UX, app screens, accessibility, release'],['Backend + integrations','Data, portfolio, adviser handover, CRM'],['AI + guardrails','Knowledge, controls, monitoring, escalation'],['Banking controls','Security, privacy, legal, compliance, QA/UAT']];items.forEach((r,i)=>{let x=0.78+(i%2)*3.86,y=5.16+Math.floor(i/2)*0.78;box(sl,x,y,3.55,0.62);t(sl,r[0],x+0.16,y+0.08,1.55,0.23,11,true);t(sl,r[1],x+1.58,y+0.08,1.75,0.40,8.5,false,C.MUTED,'left',{breakLine:true})});box(sl,8.36,4.70,4.12,1.97,'FFF7D4','E5D165');t(sl,'Start smaller',8.67,4.98,1.70,0.28,13,true);t(sl,'€300k–€400k',8.67,5.35,2.88,0.54,25,true);t(sl,'4–6 month controlled pilot',8.67,5.93,2.86,0.25,10,false,C.MUTED);t(sl,'One market • limited scope • real users • cross-functional squad',8.67,6.25,3.28,0.30,9,false,C.INK,'left',{breakLine:true});
 notes(sl,'These are rough-order-of-magnitude planning numbers, not an RBI estimate. The point: do not fund the full build first; fund the learning.');
}

// 9 BUSINESS UPSIDE
{
 const sl=s();head(sl,'BUSINESS UPSIDE','The economics can become attractive if we activate the segment','Illustrative scenarios only - actual customer counts, AUM uplift and revenue yield need RBI data.');
 t(sl,'Illustrative mature-year upside',0.82,2.19,3.2,0.28,14,true);const cx=0.88,cy=5.75,ch=3.0,bars=[['Conservative',0.225,'D8C36A','€37.5m'],['Base',1.125,'FFD500','€187.5m'],['Upside',3.60,'171717','€600m']];sl.addShape(pptx.ShapeType.line,{x:cx,y:cy,w:5.65,h:0,line:{color:'BDB7A4',pt:1}});bars.forEach((r,i)=>{let h=r[1]/4*ch,x=cx+0.68+i*1.74,y=cy-h;sl.addShape(pptx.ShapeType.rect,{x,y,w:0.92,h,fill:{color:r[2]},line:{color:r[2]}});t(sl,`€${r[1].toFixed(2)}m`,x-0.18,y-0.34,1.28,0.22,10,true,C.INK,'center');t(sl,r[3],x+0.05,y+Math.max(0.12,h*0.45),0.82,0.36,8.5,true,r[2]==='171717'?C.W:C.INK,'center',{breakLine:true});t(sl,r[0],x-0.27,cy+0.13,1.46,0.24,9,true,C.INK,'center')});
 box(sl,7.46,2.18,5.02,1.18,C.INK,C.INK);t(sl,'Simple business-case formula',7.75,2.44,3.70,0.28,13,true,C.W);t(sl,'eligible customers × activation × incremental AUM × revenue yield',7.75,2.82,4.24,0.35,11,false,C.Y);
 const rr=[['Conservative','25k','15%','€10k','€37.5m','€0.23m'],['Base','50k','25%','€15k','€187.5m','€1.13m'],['Upside','100k','30%','€20k','€600m','€3.60m']];['Scenario','Eligible','Active','+AUM/user','+AUM','Annual'].forEach((q,i)=>t(sl,q,7.50+[0,1.12,1.84,2.56,3.44,4.20][i],3.62,[1.1,0.72,0.72,0.88,0.76,0.66][i],0.23,9,true,C.MUTED,i?'center':'left'));rr.forEach((r,i)=>{let y=3.92+i*0.52;box(sl,7.48,y,4.92,0.42,i===1?'FFF7D4':C.W,i===1?'E5D165':C.LINE);const xs=[7.60,8.62,9.34,10.06,10.94,11.70],ws=[1.0,.72,.72,.88,.76,.66];r.forEach((q,j)=>t(sl,q,xs[j],y+0.08,ws[j],0.22,10,j===5||i===1&&j===0,C.INK,j?'center':'left'))});box(sl,7.48,5.72,4.92,0.82,'FFF7D4','E5D165');t(sl,'Assumption:',7.72,5.88,0.85,0.23,10,true);t(sl,'0.6% illustrative blended annual revenue contribution on incremental invested assets.',8.58,5.84,3.50,0.37,9,false);t(sl,'Not included:',7.72,6.23,0.87,0.22,9,true,C.MUTED);t(sl,'retention, Premium conversion, FX/card/deposit value, or adviser-capacity benefits.',8.58,6.19,3.46,0.31,8.7,false,C.MUTED);
 notes(sl,'This is a sensitivity model, not a forecast. Replace every assumption with internal customer counts, activation, AUM uplift and real product economics.');
}

// 10 ASK
{
 const sl=s();sl.background={color:C.INK};sl.addShape(pptx.ShapeType.rect,{x:0,y:0,w:13.333,h:0.1,fill:{color:C.Y},line:{color:C.Y}});pill(sl,'THE ASK',0.76,0.56,1.12);t(sl,'Approve a',0.76,1.36,3.18,0.65,32,true,C.W);t(sl,'€350k pilot envelope',3.68,1.32,6.55,0.72,36,true,C.Y);t(sl,'before we discuss a €1m+ production build.',0.76,2.10,8.9,0.45,20,true,C.W);t(sl,'One market. One controlled squad. Enough scope to test whether the value is real.',0.76,2.78,9.2,0.42,16,false,'D2D2D2');const it=[['€80k','DISCOVERY + UX','Research, design, compliance shaping'],['€150k','APP + BACKEND','Limited mobile journey and integrations'],['€60k','AI + ANALYTICS','Education, guardrails, measurement'],['€60k','SECURITY + UAT','Testing, security, release readiness']];it.forEach((r,i)=>{let x=0.78+i*3.06;box(sl,x,3.72,2.75,1.62,'242424','383838');t(sl,r[0],x+0.18,3.97,0.92,0.43,20,true,C.Y,'center');t(sl,r[1],x+1.04,3.92,1.48,0.30,10.5,true,C.W);t(sl,r[2],x+1.04,4.31,1.48,0.52,9,false,'BFBFBF','left',{breakLine:true})});sl.addShape(pptx.ShapeType.line,{x:0.78,y:5.85,w:11.74,h:0,line:{color:C.Y,pt:2}});t(sl,'Decision gate after pilot:',0.78,6.05,2.2,0.29,11,true,C.Y);t(sl,'Do customers engage? Do they understand? Do they request help? Do we see credible AUM / retention upside?',2.95,6.01,9.40,0.36,10.5,false,C.W);t(sl,'Right guidance. Right moment. Customer in control.',0.78,6.55,11.74,0.42,21,true,C.W,'center');
 notes(sl,'Ask for €350k to replace assumptions with RBI data. If evidence is weak, stop. If strong, prepare the scale business case.');
}

pptx.writeFile({fileName:'docs/presentation/my-wealth-5min-pitch-v3.pptx'});
