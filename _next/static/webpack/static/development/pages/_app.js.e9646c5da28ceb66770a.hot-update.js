webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Web/MiniDrawer.js":
/*!**************************************!*\
  !*** ./components/Web/MiniDrawer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniDrawer; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/GroupAdd */ "./node_modules/@material-ui/icons/GroupAdd.js");
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Link */ "./components/Web/Link.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles */ "./components/Web/styles.js");
var _this=undefined,_jsxFileName="C:\\Users\\5ervant\\Documents\\Node.js Projects\\Next Expo Apps\\techintel\\components\\Web\\MiniDrawer.js";var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var LIST_ITEMS_1=[{Icon:function Icon(){return __jsx(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_13___default.a,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:17}});},textKey:'screens:socialLinks.title',href:'/social-links'}];var LIST_ITEMS_2=[{Icon:function Icon(){return __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14___default.a,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:17}});},textKey:'screens:home.title',href:'/'}];var useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function(theme){return _objectSpread({},Object(_styles__WEBPACK_IMPORTED_MODULE_16__["toolbarStyle"])(theme),{drawer:{flexShrink:0,whiteSpace:'nowrap'},drawerOpen:function drawerOpen(props){return{width:props.drawerWidth,transition:theme.transitions.create('width',{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.enteringScreen})};},drawerClose:_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({transition:theme.transitions.create('width',{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.leavingScreen}),overflowX:'hidden',width:theme.spacing(7)+1},theme.breakpoints.up('sm'),{width:theme.spacing(9)+1})});});function MiniDrawer(props){var _clsx,_clsx2,_this2=this;var drawerWidth=props.drawerWidth,open=props.open,handleDrawerClose=props.handleDrawerClose;var classes=useStyles({drawerWidth:drawerWidth});var theme=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])('screens'),t=_useTranslation.t;return __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"],{variant:"permanent",className:Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.drawer,(_clsx={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_clsx,classes.drawerOpen,open),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_clsx,classes.drawerClose,!open),_clsx)),classes:{paper:Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])((_clsx2={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_clsx2,classes.drawerOpen,open),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_clsx2,classes.drawerClose,!open),_clsx2))},__self:this,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:5}},__jsx("div",{className:classes.toolbar,__self:this,__source:{fileName:_jsxFileName,lineNumber:83,columnNumber:7}},__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"],{onClick:handleDrawerClose,__self:this,__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:9}},theme.direction==='rtl'?__jsx(ChevronRightIcon,{__self:this,__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:13}}):__jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_9___default.a,{__self:this,__source:{fileName:_jsxFileName,lineNumber:88,columnNumber:13}}))),__jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:92,columnNumber:7}}),__jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:7}},LIST_ITEMS_1.map(function(item){return __jsx(_Link__WEBPACK_IMPORTED_MODULE_15__["default"],{href:item.href,key:item.textKey,style:{textDecoration:'none'},__self:_this2,__source:{fileName:_jsxFileName,lineNumber:95,columnNumber:11}},__jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"],{button:true,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:100,columnNumber:13}},__jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"],{__self:_this2,__source:{fileName:_jsxFileName,lineNumber:101,columnNumber:15}},__jsx(item.Icon,{__self:_this2,__source:{fileName:_jsxFileName,lineNumber:102,columnNumber:17}})),__jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"],{primary:t(item.textKey),__self:_this2,__source:{fileName:_jsxFileName,lineNumber:104,columnNumber:15}})));})),__jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:7}}),__jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:110,columnNumber:7}},LIST_ITEMS_2.map(function(item){return __jsx(LinkItem,{key:item.textKey,data:item,t:t,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:112,columnNumber:11}});})));}var LinkItem=function LinkItem(_ref){var data=_ref.data,t=_ref.t;return __jsx(_Link__WEBPACK_IMPORTED_MODULE_15__["default"],{href:data.href,style:{textDecoration:'none',color:'inherit'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:121,columnNumber:5}},__jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"],{button:true,key:data.textKey,__self:_this,__source:{fileName:_jsxFileName,lineNumber:122,columnNumber:7}},__jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:123,columnNumber:9}},__jsx(data.Icon,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:124,columnNumber:11}})),__jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"],{primary:t(data.textKey),__self:_this,__source:{fileName:_jsxFileName,lineNumber:126,columnNumber:9}})));};

/***/ })

})
//# sourceMappingURL=_app.js.e9646c5da28ceb66770a.hot-update.js.map