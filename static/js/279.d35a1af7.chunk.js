"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[279],{1279:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r=t(2791),o=t(9434),a=t(5162),s=t(3721),i=t(184);function c(n){var e=n.id,t=n.name,r=n.number,c=(0,o.I0)();return(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"#DCEDC8",color:"#33691E"},children:[(0,i.jsxs)("p",{style:{marginLeft:10},children:[t,": ",r]}),(0,i.jsx)("button",{type:"button",onClick:function(){return c((0,a.GK)(e))},style:{borderColor:"transparent",backgroundColor:"transparent",cursor:"pointer"},children:(0,i.jsx)(s.Ivx,{size:24,style:{fill:"#33691E"}})})]})}var l=function(n){return n.contacts.loading},u=function(n){return n.contacts.items};function d(){var n=(0,o.v9)(u);return(0,i.jsx)("ul",{style:{listStyle:"none",padding:0},children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,i.jsx)("li",{style:{marginBottom:10,fontSize:20},children:(0,i.jsx)(c,{id:e,name:t,number:r})},e)}))})}var m,p,x,h=t(168),b=t(6444),f=b.ZP.label(m||(m=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 10px;\n    margin-bottom: 8px;\n    color: #33691E;\n"]))),g=b.ZP.input(p||(p=(0,h.Z)(["\n    height: 40px;\n    margin-bottom: 8px;\n    border: 1px solid #33691E;\n    color: #33691E;\n    backgroundColor: #DCEDC8;\n"]))),j=b.ZP.button(x||(x=(0,h.Z)(["\n    border: 1px solid #33691E;\n    color: #33691E;\n    backgroundColor: #DCEDC8;\n    width: 150px;\n    height: 40px;\n    margin-bottom: 8px;\n    border-radius: 5%;\n    cursor: pointer;\n    font-size: 20px; \n"])));function v(){var n=(0,o.I0)();return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,r=t.elements.name.value,o={name:r,number:t.elements.number.value};console.log(o),o.name!==r?(n((0,a.uK)(o)),t.reset()):alert("".concat(r," is already in contacts"))},children:[(0,i.jsxs)(f,{children:["Name",(0,i.jsx)(g,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,i.jsxs)(f,{children:["Number",(0,i.jsx)(g,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,i.jsx)(j,{type:"submit",children:"Add contact"})]})}var y=t(8977);function C(){var n=(0,o.I0)(),e=(0,o.v9)(l);return(0,r.useEffect)((function(){n((0,a.yF)())}),[n]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.D,{children:"Your Contacts"}),(0,i.jsx)(v,{}),(0,i.jsx)("div",{children:e&&"Request in progress..."}),(0,i.jsx)(d,{})]})}},8977:function(n,e,t){t.d(e,{D:function(){return i},b:function(){return c}});var r,o,a=t(168),s=t(6444),i=s.ZP.h2(r||(r=(0,a.Z)(["\n    color: #33691E;\n"]))),c=s.ZP.h1(o||(o=(0,a.Z)(["\n    color: #33691E;\n"])))}}]);
//# sourceMappingURL=279.d35a1af7.chunk.js.map