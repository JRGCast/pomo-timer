(this["webpackJsonppomo-timer"]=this["webpackJsonppomo-timer"]||[]).push([[0],{23:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(17),i=n.n(o),s=n(13),r=n(2),d=n(10),l=n.p+"static/media/acabou.7eab0dfa.mp3",m=(n(23),n(1)),u=function(){var e=Object(a.useState)("Nenhuma"),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(-1),i=Object(d.a)(o,2),s=i[0],r=i[1],u=Object(a.useState)(-1),j=Object(d.a)(u,2),p=j[0],b=j[1];Object(a.useEffect)((function(){s>0&&p<0&&b(Math.round(s/5))}),[s,p]),Object(a.useEffect)((function(){(s>0&&setTimeout((function(){return r(s-1)}),1e3),0===s)&&new Audio(l).play()}),[s]),Object(a.useEffect)((function(){0===s&&p>0&&setTimeout((function(){return b(p-1)}),1e3)}),[s,p]);return Object(m.jsxs)("div",{children:[Object(m.jsxs)("header",{style:{margin:"0 auto",width:"80%"},children:[Object(m.jsx)("h1",{children:"Bem-vindo ao m\xe9todo Pomodoro Personalizado!"}),Object(m.jsx)("p",{children:"A T\xe9cnica Pomodoro \xe9 um m\xe9todo de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A t\xe9cnica usa um cron\xf4metro para dividir o trabalho em intervalos, tradicionalmente de 25 minutos de dura\xe7\xe3o, separados por intervalos curtos - 5 minutos."}),Object(m.jsx)("p",{children:"Aqui a t\xe9cnica pode ser aplicada com alguma personaliza\xe7\xe3o, mas, para respeitar a t\xe9cnica original, o intervalo seguir\xe1 o par\xe2metro de 1/5 do tempo da tarefa. "})]}),Object(m.jsxs)("main",{className:"main-wrapper",children:[Object(m.jsx)("hr",{}),"Nenhuma"===n?Object(m.jsxs)("div",{className:"content-wrapper",children:[Object(m.jsxs)("div",{className:"task-wrapper",children:[Object(m.jsx)("label",{htmlFor:"input-task",children:"Qual \xe9 a tarefa? "}),Object(m.jsx)("input",{id:"input-task",className:"input-tsk",type:"text"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{style:{marginBottom:"2em"},children:[Object(m.jsx)("label",{htmlFor:"input-time",children:" E qual o tempo estimado? "}),Object(m.jsx)("input",{id:"input-time",className:"input-number",type:"number",defaultValue:25,min:5}),"\xa0",Object(m.jsxs)("select",{id:"select-time",className:"slct-time",children:[Object(m.jsx)("option",{children:"segundos"}),Object(m.jsx)("option",{children:"minutos"})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"init-button",className:"init-btn",type:"submit",onClick:function(){var e=document.getElementById("input-task"),t=document.getElementById("input-time"),n=document.getElementById("select-time");c(""!==e.value?e.value:"Inominada"),"minutos"===n.value?r(60*t.value):r(t.value)},children:" Iniciar tarefa "})]}):Object(m.jsxs)("div",{className:"content-wrapper",children:[Object(m.jsxs)("h2",{children:["Tarefa: ",n]}),Object(m.jsxs)("h2",{children:[" Tempo restante da tarefa: ",s," segundos "]}),Object(m.jsxs)("h2",{children:[" Tempo restante do intervalo: ",p," segundos "]})]})]}),Object(m.jsxs)("footer",{style:{margin:"0 auto",width:"80%"},children:[Object(m.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXJJBul3Ro37snNJJe-1lAXOW2sN4aiGWNV-6ipwrifTxg3kzE3wRwzeaBfL_ItzX8hc&usqp=CAU",alt:"pomodoro-clock"}),Object(m.jsx)("p",{children:"O m\xe9todo se chama \u201cPomodoro\u201d (tomate, em italiano) porque Cirillo usava um daqueles rel\xf3gios de cozinha em formato de tomate para controlar o seu tempo."})]})]})},j=function(){return Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{exact:!0,path:"/pomo-timer",component:u})})};var p=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(j,{})})},b=(n(32),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))});i.a.render(Object(m.jsx)(s.a,{children:Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})})}),document.getElementById("root")),b()}},[[33,1,2]]]);
//# sourceMappingURL=main.d0f1fea7.chunk.js.map