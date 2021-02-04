(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),i=(n(0),n(84)),r={id:"use-navigation-modal-attempted-to-dismiss",title:"useNavigationModalAttemptedToDismiss",sidebar_label:"useNavigationModalAttemptedToDismiss",hide_title:!0,hide_table_of_contents:!0},s={unversionedId:"use-navigation-modal-attempted-to-dismiss",id:"use-navigation-modal-attempted-to-dismiss",isDocsHomePage:!1,title:"useNavigationModalAttemptedToDismiss",description:"useNavigationModalAttemptedToDismiss",source:"@site/docs/use-navigation-modal-attempted-to-dismiss.mdx",permalink:"/react-native-navigation-hooks/docs/use-navigation-modal-attempted-to-dismiss",editUrl:"https://github.com/underscopeio/react-native-navigation-hooks/edit/master/website/docs/use-navigation-modal-attempted-to-dismiss.mdx",sidebar_label:"useNavigationModalAttemptedToDismiss",sidebar:"docs",previous:{title:"useNavigationCommandComplete",permalink:"/react-native-navigation-hooks/docs/use-navigation-command-complete"},next:{title:"useNavigationModalDismiss",permalink:"/react-native-navigation-hooks/docs/use-navigation-modal-dismiss"}},c=[{value:"<code>useNavigationModalAttemptedToDismiss</code>",id:"usenavigationmodalattemptedtodismiss",children:[{value:"Examples",id:"examples",children:[]},{value:"Reference",id:"reference",children:[]}]}],d={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usenavigationmodalattemptedtodismiss"},Object(i.b)("inlineCode",{parentName:"h2"},"useNavigationModalAttemptedToDismiss")),Object(i.b)("p",null,"Invoked only on iOS pageSheet modal when swipeToDismiss flag is set to true and modal swiped down to dismiss. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#registermodalattemptedtodismisslistenerios-13-only"}),"more info")),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("h4",{id:"using-navigation-context"},"Using Navigation Context"),Object(i.b)("samp",{id:"use-navigation-modal-attempted-to-dismiss-using-navigation-context"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationModalAttemptedToDismiss } from 'react-native-navigation-hooks'\n\nconst ExampleScreen = () => {\n  // Listen events only for this screen if screen was wrapped with NavigationProvider\n  useNavigationModalAttemptedToDismiss((e) => {\n    console.log(`Modal attempted dismissed on componentId: ${e.componentId}`)\n  })\n\n  return <Text>Example Screen</Text>\n}\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Provide a Navigation Context")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If your screen wasn't wrapped with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"contexts#navigationprovider"}),"NavigationProvider")," nor using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"hocs#withnavigationproviders"}),"withNavigationProvider")," HOC it will ",Object(i.b)("inlineCode",{parentName:"p"},"console.warn")," you about it!"))),Object(i.b)("h4",{id:"manually"},"Manually"),Object(i.b)("samp",{id:"use-navigation-modal-attempted-to-dismiss-without-navigation-context"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationModalAttemptedToDismiss } from 'react-native-navigation-hooks'\n\nconst ExampleScreen = ({ componentId }) => {\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationModalAttemptedToDismiss(\n    (e) => {\n      console.log(`Modal attempted dismissed on componentId: ${e.componentId}`)\n    },\n    { componentId }\n  )\n\n  return <Text>Example Screen</Text>\n}\n")),Object(i.b)("h3",{id:"reference"},"Reference"),Object(i.b)("h4",{id:"methods"},"Methods"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"useNavigationModalAttemptedToDismiss(handler: (event: ModalAttemptedToDismissEvent) => any, options: Options): void")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"useNavigationModalAttemptedToDismiss(handler: (event: ModalAttemptedToDismissEvent) => any, componentId?: string): void")),Object(i.b)("h4",{id:"types"},"Types"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Options: { componentId?: string, global?: boolean }")),Object(i.b)("h4",{id:"options"},"Options"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"componentId?: string")),Object(i.b)("p",null,"Filters the event from being triggered on every mounted screen but rather the one you've hooked with the event."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"global?: boolean")),Object(i.b)("p",null,"Disables the ",Object(i.b)("inlineCode",{parentName:"p"},"console.warn")," for the cases you don't provide a ",Object(i.b)("inlineCode",{parentName:"p"},"componentId")," through options nor context. In case you want to handle events globally for doing stuff like tracking/logging we encourage you to use the ",Object(i.b)("inlineCode",{parentName:"p"},"Navigation.events()")," from ",Object(i.b)("strong",{parentName:"p"},"React Native Navigation")))}p.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,u=m["".concat(r,".").concat(b)]||m[b]||l[b]||i;return n?o.a.createElement(u,s(s({ref:t},d),{},{components:n})):o.a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);