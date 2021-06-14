(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(11),r=n.n(s),i=(n(18),n(12)),o=n(6),l=n(2),u=n(3),b=n(5),h=n(4),d=(n(19),n(0)),j=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("habit: ".concat(this.props.habit.name," mounted"))}},{key:"componentWillUnmount",value:function(){console.log("habit: ".concat(this.props.habit.name," will unmount"))}},{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"habit-name",children:t}),Object(d.jsx)("span",{className:"habit-count",children:n}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),m=Object(a.memo)((function(e){var t=c.a.createRef(),n=c.a.createRef();return Object(d.jsxs)("form",{ref:t,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&e.onAdd(c),t.current.reset()},children:[Object(d.jsx)("input",{ref:n,type:"Text",className:"add-input",placeholder:"Habit"}),Object(d.jsx)("button",{className:"add-button",children:"Add"})]})})),p=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return console.log("habits"),Object(d.jsxs)("div",{className:"habits",children:[Object(d.jsx)(m,{onAdd:this.handleAdd}),Object(d.jsx)("ul",{children:this.props.habits.map((function(t){return Object(d.jsx)(j,{habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete},t.id)}))}),Object(d.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),f=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(d.jsx)("span",{children:"Habit Tracker"}),Object(d.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),O=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){var n=e.state.habits.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},t),{},{count:t.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){var n=e.state.habits.map((function(e){if(e.id===t.id){var n=t.count-1;return Object(o.a)(Object(o.a)({},t),{},{count:n<0?0:n})}return e}));e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(i.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return 0!==e.count?Object(o.a)(Object(o.a)({},e),{},{count:0}):e}));e.setState({habits:t})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),Object(d.jsx)(p,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset})]})}}]),n}(a.Component),v=(n(21),n(13)),x=function(e){var t=Object(a.useState)(0),n=Object(v.a)(t,2),c=n[0],s=n[1],r=Object(a.useRef)(),i=Object(a.useCallback)((function(){s(c+1)}),[c]);return Object(a.useEffect)((function(){console.log("mounted & updated!: ".concat(c))}),[c]),Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{ref:r,className:"habit-name",children:"Reading"}),Object(d.jsx)("span",{className:"habit-count",children:c}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:i,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})})]})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{children:Object(d.jsx)(x,{})})}),document.getElementById("root")),console.log("test3")}},[[25,1,2]]]);
//# sourceMappingURL=main.6be5cae6.chunk.js.map