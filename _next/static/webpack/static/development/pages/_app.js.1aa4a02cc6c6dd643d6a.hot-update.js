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
var _this=undefined,_jsxFileName="C:\\Users\\5ervant\\Documents\\Node.js Projects\\Next Expo Apps\\techintel\\components\\Web\\MiniDrawer.js";var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var LIST_ITEMS_1=[{Icon:function Icon(){return __jsx(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_13___default.a,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:17}});},textKey:'screens:socialLinks.title',href:'/social-links'}];var LIST_ITEMS_2=[{Icon:function Icon(){return __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14___default.a,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:17}});},textKey:'screens:socialLinks.title',href:'/'}];var useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function(theme){return _objectSpread({},Object(_styles__WEBPACK_IMPORTED_MODULE_16__["toolbarStyle"])(theme),{drawer:{flexShrink:0,whiteSpace:'nowrap'},drawerOpen:function drawerOpen(props){return{width:props.drawerWidth,transition:theme.transitions.create('width',{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.enteringScreen})};},drawerClose:_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({transition:theme.transitions.create('width',{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.leavingScreen}),overflowX:'hidden',width:theme.spacing(7)+1},theme.breakpoints.up('sm'),{width:theme.spacing(9)+1})});});function MiniDrawer(props){var _clsx,_clsx2,_this2=this;var drawerWidth=props.drawerWidth,open=props.open,handleDrawerClose=props.handleDrawerClose;var classes=useStyles({drawerWidth:drawerWidth});var theme=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])('screens'),t=_useTranslation.t;return __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"],{variant:"permanent",className:Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.drawer,(_clsx={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_clsx,classes.drawerOpen,open),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_clsx,classes.drawerClose,!open),_clsx)),classes:{paper:Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])((_clsx2={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_clsx2,classes.drawerOpen,open),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_clsx2,classes.drawerClose,!open),_clsx2))},__self:this,__source:{fileName:_jsxFileName,lineNumber:71,columnNumber:5}},__jsx("div",{className:classes.toolbar,__self:this,__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:7}},__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"],{onClick:handleDrawerClose,__self:this,__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:9}},theme.direction==='rtl'?__jsx(ChevronRightIcon,{__self:this,__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:13}}):__jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_9___default.a,{__self:this,__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:13}}))),__jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:7}}),__jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:94,columnNumber:7}},LIST_ITEMS_1.map(function(item){return __jsx(_Link__WEBPACK_IMPORTED_MODULE_15__["default"],{href:item.href,key:item.textKey,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:96,columnNumber:11}},__jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"],{button:true,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:97,columnNumber:13}},__jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"],{__self:_this2,__source:{fileName:_jsxFileName,lineNumber:98,columnNumber:15}},__jsx(item.Icon,{__self:_this2,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:17}})),__jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"],{primary:item.textKey,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:101,columnNumber:15}})));})),__jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:7}}),__jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:7}},LIST_ITEMS_2.map(function(item){return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"],{button:true,key:item.textKey,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:11}},__jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"],{__self:_this2,__source:{fileName:_jsxFileName,lineNumber:110,columnNumber:13}},__jsx(item.Icon,{__self:_this2,__source:{fileName:_jsxFileName,lineNumber:111,columnNumber:15}})),__jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"],{primary:item.textKey,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:113,columnNumber:13}}));})));}

/***/ }),

/***/ "./node_modules/@material-ui/icons/Home.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Home.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
}), 'Home');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Mail.js":
false,

/***/ "./node_modules/@material-ui/icons/MoveToInbox.js":
false

})
//# sourceMappingURL=_app.js.1aa4a02cc6c6dd643d6a.hot-update.js.map