(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[57],{887:function(e,t,a){"use strict";a.r(t),a.d(t,"PFEPSolutionRequiredForm",(function(){return w}));a(267);var n=a(268),l=(a(175),a(118)),o=(a(101),a(62)),r=(a(272),a(274)),s=(a(273),a(275)),c=(a(171),a(103)),i=a(55),m=a.n(i),u=a(86),p=(a(270),a(271)),y=a(102),f=(a(181),a(49)),b=a(0),d=a.n(b),S=a(314),k=a(52),E=a(22),h=a(276),O=[{key:"solution_flc",type:h.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"FLC"},{key:"solution_fsc",type:h.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"FSC"},{key:"solution_crate",type:h.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Crate"},{key:"solution_ppbox",type:h.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"PP Box"},{key:"solution_pp",type:h.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Plastic Pallet"},{key:"solution_palletized_crate",type:h.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Palletized Crate"},{key:"solution_palletized_box",type:h.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Palletized Box Solution"},{key:"solution_wp",others:{defaultValue:!1,formOptions:{noStyle:!0}},type:h.a.SWITCH,customLabel:"Wooden Pallet"},{key:"solution_stacking_nesting",type:h.a.SWITCH,customLabel:"Stacking or Nesting of parts",others:{defaultValue:!1,formOptions:{noStyle:!0}}},{key:"p2p_contact",type:h.a.INPUT,customLabel:"Part to Part Contact Permissible?",kwargs:{placeholder:"Part to Part Contact Permissible"},others:{formOptions:{noStyle:!0}}},{key:"mul_parts_single_pocket",type:h.a.INPUT,kwargs:{placeholder:"Multiple Parts in Single Packet"},customLabel:"Multiple Parts in Single Packet",others:{formOptions:{noStyle:!0}}},{key:"min_max_margin",kwargs:{placeholder:"Min/Max Margin from Wall"},others:{formOptions:{noStyle:!0}},type:h.a.INPUT,customLabel:"Min/Max Margin from Wall"},{key:"other_spec",kwargs:{placeholder:"Other Specification"},others:{formOptions:{noStyle:!0}},type:h.a.INPUT,customLabel:"Other Specification"},{key:"parts_orientation",kwargs:{placeholder:"Part Orientation"},others:{formOptions:{noStyle:!0}},type:h.a.INPUT,customLabel:"Part Orientation"},{key:"parts_pm",kwargs:{placeholder:"Parts/PM"},others:{formOptions:{noStyle:!0}},type:h.a.INPUT,customLabel:"Parts/PM"}],P=a(300),g=a(302),C=a(299),v=f.a.Item,w=function(e){var t=e.onCancel,a=e.active,i=e.onNext,h=Object(b.useState)(!1),w=Object(y.a)(h,2),_=w[0],j=w[1],L=Object(b.useState)(!1),N=Object(y.a)(L,2),T=N[0],I=N[1],W=p.a.useForm(),x=Object(y.a)(W,1)[0],V=Object(k.c)(),M=Object(k.d)((function(e){return e.data.pfepData})),H=function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,V({type:E.d,data:t});case 3:j(!1),4===a&&i();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){4!==a&&(x.submit(),V({type:E.n}))}),[a]);var F=d.a.createElement(f.a,{onClick:function(e){"close"===e.key&&I(!1)}},d.a.createElement(v,{key:"close"},d.a.createElement("div",{className:"row justify-between align-center"},"Close",d.a.createElement(P.a,null))),O.slice(0,9).map((function(e,t){return d.a.createElement(v,{key:t.toString()},d.a.createElement("div",{className:"row justify-between"},d.a.createElement("div",{style:{flexWrap:"wrap",marginRight:"5px"}},e.customLabel," "),Object(S.a)(e)))})));return d.a.createElement(n.a,{spinning:_},d.a.createElement(c.a,{orientation:"left"},"Solution Required"),d.a.createElement(p.a,{onFinish:H,form:x,initialValues:M,layout:"vertical",autoComplete:"off"},d.a.createElement(r.a,{style:{justifyContent:"left"}},O.slice(9,10).map((function(e,t){return d.a.createElement(s.a,{span:4},d.a.createElement("div",{key:t.toString(),className:"p-2"},e.customLabel))})),O.slice(10,14).map((function(e,t){return d.a.createElement(s.a,{span:5},d.a.createElement("div",{key:t.toString(),className:"p-2"},e.customLabel))}))),d.a.createElement(r.a,{style:{justifyContent:"left"}},O.slice(9,10).map((function(e,t){return d.a.createElement(s.a,{span:4},d.a.createElement("div",{key:t.toString(),className:"p-2"},Object(S.a)(e)))})),O.slice(10,14).map((function(e,t){return d.a.createElement(s.a,{span:5},d.a.createElement("div",{key:t.toString(),className:"p-2"},Object(S.a)(e)))}))),d.a.createElement(r.a,{style:{justifyContent:"left"}},O.slice(14,15).map((function(e,t){return d.a.createElement(s.a,{span:5},d.a.createElement("div",{key:t.toString(),className:"p-2"},e.customLabel))}))),d.a.createElement(r.a,{style:{justifyContent:"left"}},O.slice(14,15).map((function(e,t){return d.a.createElement(s.a,{span:5},d.a.createElement("div",{key:t.toString(),className:"p-2"},Object(S.a)(e)))})),d.a.createElement(s.a,{span:5},d.a.createElement("div",{className:"p-2"},d.a.createElement(l.a,{trigger:["click"],overlay:F,onVisibleChange:function(e){I(e)},visible:T},d.a.createElement(o.a,{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},"Solution Required"," ",d.a.createElement(g.a,null)))),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null))),d.a.createElement(r.a,{justify:"space-between"},d.a.createElement("div",{className:"row"},d.a.createElement(o.a,{type:"primary",htmlType:"submit",disabled:!0},"Submit"),d.a.createElement("div",{className:"p-2"}),d.a.createElement(o.a,{type:"primary",onClick:t},"Cancel")),d.a.createElement(o.a,{type:"link",htmlType:"submit"},d.a.createElement(C.a,{style:{fontSize:30}})))))};t.default=w}}]);
//# sourceMappingURL=57.70d80b28.chunk.js.map