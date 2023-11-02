"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/[...slug]/page",{

/***/ "(app-pages-browser)/./src/components/Chats.jsx":
/*!**********************************!*\
  !*** ./src/components/Chats.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/socket */ \"(app-pages-browser)/./lib/socket.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chats = (props)=>{\n    _s();\n    const { sender, receiver } = props;\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [rom, setRom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const Rooming = async ()=>{\n            const getroom = async ()=>{\n                const res = await fetch(\"http://localhost:3050/api/v1/room\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        //   sender: params.slug[0],\n                        //   receiver: params.slug[1],\n                        sender: sender,\n                        receiver: receiver\n                    })\n                });\n                return res.json();\n            };\n            const room = await getroom();\n            // const room = res.json();\n            // console.log(res.json());\n            console.log(\"room.data\");\n            console.log(room.data);\n            setRom(room.data._id);\n            _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.emit(\"join_room\", room.data._id);\n        };\n        Rooming();\n    }, []);\n    const handleNewMessageSubmit = (e, msg)=>{\n        e.preventDefault();\n        const data = {\n            msg: msg,\n            user: sender,\n            room: rom\n        };\n        console.log(data);\n        _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.emit(\"send_message\", data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-lg mx-auto mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"UserName: \",\n                                sender\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Send To: \",\n                                receiver\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"text-black rounded-md\",\n                                    value: msg,\n                                    onChange: (e)=>setMsg(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-1.5\",\n                                    children: [\n                                        \"+\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full hidden h-full rounded text-gray-950\",\n                                            type: \"file\",\n                                            name: \"attachment\",\n                                            placeholder: \"Attachment\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: (e)=>handleNewMessageSubmit(e, msg),\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-0.5\",\n                                    children: \"send\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chats, \"ridsHP58rTUGHeSTeMlsbDOfG+A=\");\n_c = Chats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chats);\nvar _c;\n$RefreshReg$(_c, \"Chats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ1Q7QUFFMUMsTUFBTUksUUFBUSxDQUFDQzs7SUFDYixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdGO0lBQzdCLE1BQU0sQ0FBQ0csS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNRLEtBQUtDLE9BQU8sR0FBR1QsK0NBQVFBO0lBQzlCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLFVBQVU7WUFDZCxNQUFNQyxVQUFVO2dCQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxxQ0FBcUM7b0JBQzNEQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFDbkIsNEJBQTRCO3dCQUM1Qiw4QkFBOEI7d0JBQzlCZCxRQUFRQTt3QkFDUkMsVUFBVUE7b0JBQ1o7Z0JBQ0Y7Z0JBQ0EsT0FBT08sSUFBSU8sSUFBSTtZQUNqQjtZQUNBLE1BQU1DLE9BQU8sTUFBTVQ7WUFDbkIsMkJBQTJCO1lBQzNCLDJCQUEyQjtZQUMzQlUsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0csSUFBSTtZQUNyQmQsT0FBT1csS0FBS0csSUFBSSxDQUFDQyxHQUFHO1lBQ3BCdkIsK0NBQU1BLENBQUN3QixJQUFJLENBQUMsYUFBYUwsS0FBS0csSUFBSSxDQUFDQyxHQUFHO1FBQ3hDO1FBQ0FkO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTWdCLHlCQUF5QixDQUFDQyxHQUFHckI7UUFDakNxQixFQUFFQyxjQUFjO1FBQ2hCLE1BQU1MLE9BQU87WUFDWGpCLEtBQUtBO1lBQ0x1QixNQUFNekI7WUFDTmdCLE1BQU1aO1FBQ1I7UUFDQWEsUUFBUUMsR0FBRyxDQUFDQztRQUNadEIsK0NBQU1BLENBQUN3QixJQUFJLENBQUMsZ0JBQWdCRjtJQUM5QjtJQUVBLHFCQUNFLDhEQUFDTztrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7O2dDQUFHO2dDQUFXNUI7Ozs7Ozs7c0NBQ2YsOERBQUM0Qjs7Z0NBQUc7Z0NBQVUzQjs7Ozs7Ozs7Ozs7Ozs4QkFFaEIsOERBQUM0Qjs7Ozs7OEJBQ0QsOERBQUNIO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRztvQ0FDQ0gsV0FBVTtvQ0FDVkksT0FBTzdCO29DQUNQOEIsVUFBVSxDQUFDVCxJQUFNcEIsT0FBT29CLEVBQUVVLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhDQUV4Qyw4REFBQ0c7b0NBQU1QLFdBQVU7O3dDQUF5QztzREFFeEQsOERBQUNHOzRDQUNDSCxXQUFVOzRDQUNWUSxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMQyxhQUFZOzs7Ozs7Ozs7Ozs7OENBSWhCLDhEQUFDQztvQ0FDQ0MsU0FBUyxDQUFDaEIsSUFBTUQsdUJBQXVCQyxHQUFHckI7b0NBQzFDeUIsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0FqRk03QjtLQUFBQTtBQW1GTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0cy5qc3g/ZGMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSBcIi4uLy4uL2xpYi9zb2NrZXRcIjtcclxuXHJcbmNvbnN0IENoYXRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzZW5kZXIsIHJlY2VpdmVyIH0gPSBwcm9wcztcclxuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JvbSwgc2V0Um9tXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IFJvb21pbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdldHJvb20gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwNTAvYXBpL3YxL3Jvb21cIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAvLyAgIHNlbmRlcjogcGFyYW1zLnNsdWdbMF0sXHJcbiAgICAgICAgICAgIC8vICAgcmVjZWl2ZXI6IHBhcmFtcy5zbHVnWzFdLFxyXG4gICAgICAgICAgICBzZW5kZXI6IHNlbmRlcixcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHJlY2VpdmVyLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJvb20gPSBhd2FpdCBnZXRyb29tKCk7XHJcbiAgICAgIC8vIGNvbnN0IHJvb20gPSByZXMuanNvbigpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJyb29tLmRhdGFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvb20uZGF0YSk7XHJcbiAgICAgIHNldFJvbShyb29tLmRhdGEuX2lkKTtcclxuICAgICAgc29ja2V0LmVtaXQoXCJqb2luX3Jvb21cIiwgcm9vbS5kYXRhLl9pZCk7XHJcbiAgICB9O1xyXG4gICAgUm9vbWluZygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV3TWVzc2FnZVN1Ym1pdCA9IChlLCBtc2cpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG1zZzogbXNnLFxyXG4gICAgICB1c2VyOiBzZW5kZXIsXHJcbiAgICAgIHJvb206IHJvbSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHNvY2tldC5lbWl0KFwic2VuZF9tZXNzYWdlXCIsIGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnIG14LWF1dG8gbXQtMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8aDE+VXNlck5hbWU6IHtzZW5kZXJ9PC9oMT5cclxuICAgICAgICAgIDxoMT5TZW5kIFRvOiB7cmVjZWl2ZXJ9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21zZ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TXNnKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCByb3VuZGVkLW1kIHBsLTQgcHItNCBwLTEuNVwiPlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoaWRkZW4gaC1mdWxsIHJvdW5kZWQgdGV4dC1ncmF5LTk1MFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImF0dGFjaG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkF0dGFjaG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgcGwtNCBwci00XCI+KzwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTmV3TWVzc2FnZVN1Ym1pdChlLCBtc2cpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcm91bmRlZC1tZCBwbC00IHByLTQgcC0wLjVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHNlbmRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic29ja2V0IiwiQ2hhdHMiLCJwcm9wcyIsInNlbmRlciIsInJlY2VpdmVyIiwibXNnIiwic2V0TXNnIiwicm9tIiwic2V0Um9tIiwiUm9vbWluZyIsImdldHJvb20iLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJyb29tIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJfaWQiLCJlbWl0IiwiaGFuZGxlTmV3TWVzc2FnZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImhyIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Chats.jsx\n"));

/***/ })

});