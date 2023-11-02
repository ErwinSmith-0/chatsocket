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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/socket */ \"(app-pages-browser)/./lib/socket.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chats = (props)=>{\n    _s();\n    const { sender, receiver } = props;\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [rom, setRom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const Rooming = async ()=>{\n            const getroom = async ()=>{\n                const res = await fetch(\"http://localhost:3050/api/v1/room\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        //   sender: params.slug[0],\n                        //   receiver: params.slug[1],\n                        sender: sender,\n                        receiver: receiver\n                    })\n                });\n                return res.json();\n            };\n            const room = await getroom();\n            // const room = res.json();\n            // console.log(res.json());\n            console.log(\"room.data\");\n            console.log(room.data);\n            setRom(room.data._id);\n            _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.emit(\"join_room\", room.data._id);\n        };\n        Rooming();\n    }, []);\n    const handleNewMessageSubmit = (e, msg)=>{\n        e.preventDefault();\n        if (msg.length > 0) {\n            const data = {\n                text: msg,\n                user: sender,\n                room: rom\n            };\n            _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.emit(\"send_message\", data);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-lg mx-auto mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"UserName: \",\n                                sender\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Send To: \",\n                                receiver\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"flex justify-center\",\n                        children: \"MESSAGES\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"text-black rounded-md\",\n                                    value: msg,\n                                    onChange: (e)=>setMsg(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-1.5\",\n                                    children: [\n                                        \"+\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full hidden h-full rounded text-gray-950\",\n                                            type: \"file\",\n                                            name: \"attachment\",\n                                            placeholder: \"Attachment\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: (e)=>handleNewMessageSubmit(e, msg),\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-0.5\",\n                                    children: \"send\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chats, \"ridsHP58rTUGHeSTeMlsbDOfG+A=\");\n_c = Chats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chats);\nvar _c;\n$RefreshReg$(_c, \"Chats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ1Q7QUFFMUMsTUFBTUksUUFBUSxDQUFDQzs7SUFDYixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdGO0lBQzdCLE1BQU0sQ0FBQ0csS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNRLEtBQUtDLE9BQU8sR0FBR1QsK0NBQVFBO0lBQzlCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLFVBQVU7WUFDZCxNQUFNQyxVQUFVO2dCQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxxQ0FBcUM7b0JBQzNEQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFDbkIsNEJBQTRCO3dCQUM1Qiw4QkFBOEI7d0JBQzlCZCxRQUFRQTt3QkFDUkMsVUFBVUE7b0JBQ1o7Z0JBQ0Y7Z0JBQ0EsT0FBT08sSUFBSU8sSUFBSTtZQUNqQjtZQUNBLE1BQU1DLE9BQU8sTUFBTVQ7WUFDbkIsMkJBQTJCO1lBQzNCLDJCQUEyQjtZQUMzQlUsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0csSUFBSTtZQUNyQmQsT0FBT1csS0FBS0csSUFBSSxDQUFDQyxHQUFHO1lBQ3BCdkIsK0NBQU1BLENBQUN3QixJQUFJLENBQUMsYUFBYUwsS0FBS0csSUFBSSxDQUFDQyxHQUFHO1FBQ3hDO1FBQ0FkO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTWdCLHlCQUF5QixDQUFDQyxHQUFHckI7UUFDakNxQixFQUFFQyxjQUFjO1FBQ2hCLElBQUl0QixJQUFJdUIsTUFBTSxHQUFHLEdBQUc7WUFDbEIsTUFBTU4sT0FBTztnQkFDWE8sTUFBTXhCO2dCQUNOeUIsTUFBTTNCO2dCQUNOZ0IsTUFBTVo7WUFDUjtZQUNBUCwrQ0FBTUEsQ0FBQ3dCLElBQUksQ0FBQyxnQkFBZ0JGO1FBQzlCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1M7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOztnQ0FBRztnQ0FBVzlCOzs7Ozs7O3NDQUNmLDhEQUFDOEI7O2dDQUFHO2dDQUFVN0I7Ozs7Ozs7Ozs7Ozs7OEJBRWhCLDhEQUFDOEI7Ozs7OzhCQUVELDhEQUFDSDs4QkFDQyw0RUFBQ0U7d0JBQUdELFdBQVU7a0NBQXNCOzs7Ozs7Ozs7Ozs4QkFHdEMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRztvQ0FDQ0gsV0FBVTtvQ0FDVkksT0FBTy9CO29DQUNQZ0MsVUFBVSxDQUFDWCxJQUFNcEIsT0FBT29CLEVBQUVZLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhDQUV4Qyw4REFBQ0c7b0NBQU1QLFdBQVU7O3dDQUF5QztzREFFeEQsOERBQUNHOzRDQUNDSCxXQUFVOzRDQUNWUSxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMQyxhQUFZOzs7Ozs7Ozs7Ozs7OENBSWhCLDhEQUFDQztvQ0FDQ0MsU0FBUyxDQUFDbEIsSUFBTUQsdUJBQXVCQyxHQUFHckI7b0NBQzFDMkIsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0F2Rk0vQjtLQUFBQTtBQXlGTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0cy5qc3g/ZGMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSBcIi4uLy4uL2xpYi9zb2NrZXRcIjtcclxuXHJcbmNvbnN0IENoYXRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzZW5kZXIsIHJlY2VpdmVyIH0gPSBwcm9wcztcclxuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JvbSwgc2V0Um9tXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IFJvb21pbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdldHJvb20gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwNTAvYXBpL3YxL3Jvb21cIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAvLyAgIHNlbmRlcjogcGFyYW1zLnNsdWdbMF0sXHJcbiAgICAgICAgICAgIC8vICAgcmVjZWl2ZXI6IHBhcmFtcy5zbHVnWzFdLFxyXG4gICAgICAgICAgICBzZW5kZXI6IHNlbmRlcixcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHJlY2VpdmVyLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJvb20gPSBhd2FpdCBnZXRyb29tKCk7XHJcbiAgICAgIC8vIGNvbnN0IHJvb20gPSByZXMuanNvbigpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJyb29tLmRhdGFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvb20uZGF0YSk7XHJcbiAgICAgIHNldFJvbShyb29tLmRhdGEuX2lkKTtcclxuICAgICAgc29ja2V0LmVtaXQoXCJqb2luX3Jvb21cIiwgcm9vbS5kYXRhLl9pZCk7XHJcbiAgICB9O1xyXG4gICAgUm9vbWluZygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV3TWVzc2FnZVN1Ym1pdCA9IChlLCBtc2cpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChtc2cubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHRleHQ6IG1zZyxcclxuICAgICAgICB1c2VyOiBzZW5kZXIsXHJcbiAgICAgICAgcm9vbTogcm9tLFxyXG4gICAgICB9O1xyXG4gICAgICBzb2NrZXQuZW1pdChcInNlbmRfbWVzc2FnZVwiLCBkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvIG10LTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGgxPlVzZXJOYW1lOiB7c2VuZGVyfTwvaDE+XHJcbiAgICAgICAgICA8aDE+U2VuZCBUbzoge3JlY2VpdmVyfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPk1FU1NBR0VTPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttc2d9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1zZyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcm91bmRlZC1tZCBwbC00IHByLTQgcC0xLjVcIj5cclxuICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaGlkZGVuIGgtZnVsbCByb3VuZGVkIHRleHQtZ3JheS05NTBcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhdHRhY2htZW50XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdHRhY2htZW50XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCByb3VuZGVkLW1kIHBsLTQgcHItNFwiPis8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZU5ld01lc3NhZ2VTdWJtaXQoZSwgbXNnKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgcGwtNCBwci00IHAtMC41XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBzZW5kXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNvY2tldCIsIkNoYXRzIiwicHJvcHMiLCJzZW5kZXIiLCJyZWNlaXZlciIsIm1zZyIsInNldE1zZyIsInJvbSIsInNldFJvbSIsIlJvb21pbmciLCJnZXRyb29tIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwicm9vbSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiX2lkIiwiZW1pdCIsImhhbmRsZU5ld01lc3NhZ2VTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJ0ZXh0IiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaHIiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Chats.jsx\n"));

/***/ })

});