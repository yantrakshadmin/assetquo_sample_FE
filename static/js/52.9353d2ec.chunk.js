(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[52],{276:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var l={INPUT:"input",MULTIPLE_CHECKBOX:"MULTIPLE_CHECKBOX",INPUT_NUMBER:"input-number",PASSWORD:"password",TEXTAREA:"textarea",MARKDOWN:"markdown",SELECT:"select",CAPTCHA:"captcha",MONTH_PICKER:"month-picker",FILE_DRAG_DROP:"file-drag-drop",RANGE_PICKER:"range-picker",RADIO:"radio",SWITCH:"switch",HIDDEN:"hidden",DATE:"date",CASCADER:"cascader"};l.CAPTCHA},314:function(e,t,a){"use strict";a(366);var l=a(375),n=(a(367),a(371)),r=(a(352),a(283)),c=(a(368),a(372)),s=(a(370),a(374)),o=(a(270),a(271)),i=(a(172),a(285)),u=(a(326),a(279)),m=(a(353),a(282)),p=a(0),d=a.n(p),E=a(436),y=a(276),b=m.a.Option,C=u.a.Group,f={name:"file",action:function(e){return new Promise((function(t,a){setTimeout((function(){var a=new FileReader;a.addEventListener("load",(function(){t(a.result)}),!1),e&&a.readAsDataURL(e)}),1e3)}))}};t.a=function(e){var t=e.key,a=e.rules,p=e.kwargs,P=e.type,h=e.others,T=e.customLabel,O=e.noLabel,k={};switch(h&&h.formOptions&&(k=h.formOptions),P){case y.a.INPUT:return d.a.createElement(o.a.Item,Object.assign({key:t,label:O?null:T||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},k),d.a.createElement(i.a,Object.assign({},p,{size:"middle"})));case y.a.INPUT_NUMBER:return d.a.createElement(o.a.Item,Object.assign({key:t,label:O?null:T||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},k),d.a.createElement(s.a,Object.assign({},p,{size:"middle"})));case y.a.FILE_DRAG_DROP:return d.a.createElement(o.a.Item,Object.assign({key:t,label:O?null:T||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},k),d.a.createElement(c.a.Dragger,Object.assign({},p,f,{style:{maxHeight:"75px",width:"150px"}}),d.a.createElement("p",{className:"ant-upload-drag-icon"},d.a.createElement(E.a,{type:"inbox"})),h?d.a.createElement(d.a.Fragment,null,d.a.createElement("p",{className:"ant-upload-text p-1"},h.p1),d.a.createElement("p",{className:"ant-upload-hint p-1"},h.p2)):null));case y.a.SELECT:return d.a.createElement(o.a.Item,Object.assign({shouldUpdate:!0,key:t,label:O?null:T||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},k),d.a.createElement(m.a,p,h.selectOptions.map((function(e,t){return d.a.createElement(b,{key:t.toString(),search:e[h.customTitle],value:e.value||e[h.key]||e},h.customTitle?d.a.createElement("text",{style:{fontSize:13,fontWeight:"bold"}},e[h.customTitle]):e.label||e[h.key]||e,h.dataKeys?d.a.createElement("div",{className:"row",style:{flexWrap:"wrap"}},h.dataKeys.map((function(t){return d.a.createElement("text",{style:{fontSize:11,marginLeft:5,marginRight:5}},e[t])}))):null)}))));case y.a.RADIO:return d.a.createElement(o.a.Item,Object.assign({key:t,label:O?null:T||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},k),d.a.createElement(r.a.Group,{value:"Ggg"},h.radioOptions.map((function(e){return d.a.createElement(r.a,{key:e.value,value:e.value},e.label)}))));case y.a.DATE:return d.a.createElement(o.a.Item,Object.assign({key:t},k,{label:O?null:T||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a}),d.a.createElement(n.a,{onChange:function(e){}}));case y.a.MULTIPLE_CHECKBOX:return d.a.createElement(o.a.Item,Object.assign({key:t,label:O?null:T||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},k),d.a.createElement(C,{onChange:h.onChange},h.checkOptions.map((function(e){return d.a.createElement(u.a,{value:e.value},e.label)}))));case y.a.SWITCH:return d.a.createElement(o.a.Item,Object.assign({key:t,valuePropName:"checked"},k,{label:O?null:T||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a}),d.a.createElement(l.a,p));default:return null}}},878:function(e,t,a){"use strict";a.r(t),a.d(t,"SolutionProposalCreateCPForm",(function(){return N}));a(267);var l=a(268),n=(a(101),a(62)),r=(a(272),a(274)),c=(a(273),a(275)),s=(a(359),a(365)),o=(a(171),a(103)),i=a(55),u=a.n(i),m=a(10),p=a(86),d=(a(270),a(271)),E=a(102),y=a(0),b=a.n(y),C=a(299),f=a(314),P=a(52),h=a(22),T=a(276),O=["Insert Type 1","Insert Type 2","Separator Sheet","Mould Cost","HDPE Trays"],k=["Crate LID"].concat(O),g=["Palletized LID","Pallet 1200x100"].concat(O),I=[],R=["Palletized LID","Pallet"],L=["Palletized LID"],j=function(e){return e.map((function(e){return{specification:e,quantity:0,quantity_per_kit:0,rate:"",total_cost:0,month:"",dep_cost:""}}))},_=[{key:"standard_assets",type:T.a.SELECT,others:{selectOptions:["FLC","FSC","CRT6412","CRT6418","CRT6423","CRT6435","Palletized CRT6412","Palletized CRT6418","Palletized CRT6423","Palletized CRT6435","PP BOX","Palletized PP Box","Plastic Pallet","Wooden Pallet"]},customLabel:"Standard Assets"},{key:"cost",type:T.a.INPUT,kwargs:{placeholder:"Cost",type:"number"},customLabel:"Cost"}],v=[{key:"specification",kwargs:{placeholder:"Specification",disabled:!0},type:T.a.INPUT,customLabel:"Specification"},{key:"quantity",kwargs:{placeholder:"Quantity",type:"number"},type:T.a.INPUT,others:null,customLabel:"Quantity"},{key:"quantity_per_kit",kwargs:{placeholder:"Qyt/KIT",type:"number"},type:T.a.INPUT,others:null,customLabel:"Qyt/KIT"},{key:"rate",kwargs:{placeholder:"Rate"},type:T.a.INPUT,customLabel:"Rate"},{key:"total_cost",kwargs:{placeholder:"Total Cost",type:"number"},type:T.a.INPUT,others:null,customLabel:"Total Cost"},{key:"month",kwargs:{placeholder:"Month"},type:T.a.INPUT,others:null,customLabel:"Month"},{key:"dep_cost",kwargs:{placeholder:"Dep Cost"},type:T.a.INPUT,others:null,customLabel:"Dep Cost"}],N=function(e){e.id;var t=e.onCancel,a=(e.lead,e.onNext),i=e.active,T=Object(y.useState)(!1),N=Object(E.a)(T,2),S=N[0],w=N[1],A=d.a.useForm(),U=Object(E.a)(A,1)[0],D=Object(P.c)(),z=Object(P.d)((function(e){return e.data.createCPData})),x=function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,D({type:h.b,data:Object(m.a)({},t)});case 3:w(!1),1===i&&a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(y.useEffect)((function(){1!==i&&(U.submit(),D({type:h.n}))}),[i]);return b.a.createElement(l.a,{spinning:S},b.a.createElement(d.a,{initialValues:Object(m.a)({},z),onFinish:x,form:U,layout:"vertical",onFieldsChange:function(e){var t;e[0]&&e[0].name&&"standard_assets"===e[0].name[0]&&U.setFieldsValue({solutions:(t=e[0].value,{FLC:j(O),FSC:j(O),CRT6412:j(k),CRT6418:j(k),CRT6423:j(k),CRT6435:j(k),"Palletized CRT6412":j(g),"Palletized CRT6418":j(g),"Palletized CRT6423":j(g),"Palletized CRT6435":j(g),"PP BOX":j(I),"Palletized PP Box":j(R),"Plastic Pallet":j(L),"Wooden Pallet":j(L)}[t])})},autoComplete:"off"},b.a.createElement(o.a,{orientation:"left"},"Capex"),b.a.createElement("div",{className:"row px-2"},z.solution_flc?b.a.createElement(s.a,null,"FLC"):null,z.solution_fsc?b.a.createElement(s.a,null,"FSC"):null,z.solution_crate?b.a.createElement(s.a,null,"Crate"):null,z.solution_ppbox?b.a.createElement(s.a,null,"PP Box"):null,z.solution_palletized_box?b.a.createElement(s.a,null,"Solution Palletized Box"):null,z.solution_palletized_crate?b.a.createElement(s.a,null,"Solution Palletized Crate"):null,z.solution_pp?b.a.createElement(s.a,null,"Solution PP"):null,z.solution_stacking_nesting?b.a.createElement(s.a,null,"Solution Stacking Nesting"):null,z.solution_wp?b.a.createElement(s.a,null,"Solution WP"):null),b.a.createElement(r.a,{style:{justifyContent:"left"}},_.map((function(e,t){return b.a.createElement(c.a,{span:6},b.a.createElement("div",{key:t.toString(),className:"p-2"},Object(f.a)(e)))}))),b.a.createElement(d.a.List,{name:"solutions"},(function(e,t){t.add,t.remove;return b.a.createElement("div",null,e.map((function(e,t){return b.a.createElement(r.a,{align:"middle"},v.slice(0,1).map((function(a){return b.a.createElement(c.a,{span:4},b.a.createElement("div",{className:"p-2"},Object(f.a)(Object(m.a)(Object(m.a)({},a),{},{noLabel:0!==t,form:U,others:{formOptions:Object(m.a)(Object(m.a)({},e),{},{name:[e.name,a.key],fieldKey:[e.fieldKey,a.key]})}}))))})),v.slice(1,7).map((function(a){return b.a.createElement(c.a,{span:3},b.a.createElement("div",{className:"p-2"},Object(f.a)(Object(m.a)(Object(m.a)({},a),{},{noLabel:0!==t,form:U,others:{formOptions:Object(m.a)(Object(m.a)({},e),{},{name:[e.name,a.key],fieldKey:[e.fieldKey,a.key]})}}))))})))})))})),b.a.createElement(r.a,{justify:"space-between"},b.a.createElement("div",{className:"row"},b.a.createElement(n.a,{type:"primary",htmlType:"submit",disabled:!0},"Submit"),b.a.createElement("div",{className:"p-2"}),b.a.createElement(n.a,{type:"primary",onClick:t},"Cancel")),b.a.createElement(n.a,{type:"link",htmlType:"submit"},b.a.createElement(C.a,{style:{fontSize:30}})))))};t.default=N}}]);
//# sourceMappingURL=52.9353d2ec.chunk.js.map