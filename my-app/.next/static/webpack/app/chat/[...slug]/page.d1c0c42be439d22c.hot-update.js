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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/socket */ \"(app-pages-browser)/./lib/socket.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chats = (props)=>{\n    _s();\n    const { sender, receiver } = props;\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [rom, setRom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.on(\"update_messages\", (messages)=>{\n            setMessages(messages);\n        });\n        return ()=>_lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.off(\"update_messages\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const Rooming = async ()=>{\n            const getroom = async ()=>{\n                const res = await fetch(\"http://localhost:3050/api/v1/room\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        //   sender: params.slug[0],\n                        //   receiver: params.slug[1],\n                        sender: sender,\n                        receiver: receiver\n                    })\n                });\n                return res.json();\n            };\n            const room = await getroom();\n            setRom(room.data._id);\n            _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.emit(\"join_room\", room.data._id);\n        };\n        Rooming();\n    }, []);\n    const handleNewMessageSubmit = (e, msg)=>{\n        e.preventDefault();\n        if (msg.length > 0) {\n            const data = {\n                text: msg,\n                sender: sender,\n                receiver: receiver,\n                room: rom\n            };\n            _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.emit(\"send_message\", data);\n        // socket.on(\"update_messages\", (messages) => {\n        //   console.log(\"meeee\");\n        //   setMessages(messages);\n        // });\n        }\n    };\n    console.log(messages);\n    // console.log(\"messages\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-lg mx-auto mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"UserName: \",\n                                sender\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Send To: \",\n                                receiver\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"flex justify-center mt-2\",\n                            children: \"MESSAGES\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: messages.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: e.text\n                                }, e._id, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"text-black rounded-md\",\n                                    value: msg,\n                                    onChange: (e)=>setMsg(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-1.5\",\n                                    children: [\n                                        \"+\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full hidden h-full rounded text-gray-950\",\n                                            type: \"file\",\n                                            name: \"attachment\",\n                                            placeholder: \"Attachment\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: (e)=>handleNewMessageSubmit(e, msg),\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-0.5\",\n                                    children: \"send\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chats, \"VisIMiFPRDqS7RdHcYs036D4ldU=\");\n_c = Chats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chats);\nvar _c;\n$RefreshReg$(_c, \"Chats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ1Q7QUFFMUMsTUFBTUksUUFBUSxDQUFDQzs7SUFDYixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdGO0lBQzdCLE1BQU0sQ0FBQ0csS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLEtBQUtDLE9BQU8sR0FBR1gsK0NBQVFBO0lBRTlCRCxnREFBU0EsQ0FBQztRQUNSRSwrQ0FBTUEsQ0FBQ1csRUFBRSxDQUFDLG1CQUFtQixDQUFDSjtZQUM1QkMsWUFBWUQ7UUFDZDtRQUNBLE9BQU8sSUFBTVAsK0NBQU1BLENBQUNZLEdBQUcsQ0FBQztJQUMxQixHQUFHLEVBQUU7SUFFTGQsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxVQUFVO1lBQ2QsTUFBTUMsVUFBVTtnQkFDZCxNQUFNQyxNQUFNLE1BQU1DLE1BQU0scUNBQXFDO29CQUMzREMsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxnQkFBZ0I7b0JBQ2xCO29CQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7d0JBQ25CLDRCQUE0Qjt3QkFDNUIsOEJBQThCO3dCQUM5QmxCLFFBQVFBO3dCQUNSQyxVQUFVQTtvQkFDWjtnQkFDRjtnQkFDQSxPQUFPVyxJQUFJTyxJQUFJO1lBQ2pCO1lBQ0EsTUFBTUMsT0FBTyxNQUFNVDtZQUNuQkosT0FBT2EsS0FBS0MsSUFBSSxDQUFDQyxHQUFHO1lBQ3BCekIsK0NBQU1BLENBQUMwQixJQUFJLENBQUMsYUFBYUgsS0FBS0MsSUFBSSxDQUFDQyxHQUFHO1FBQ3hDO1FBQ0FaO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTWMseUJBQXlCLENBQUNDLEdBQUd2QjtRQUNqQ3VCLEVBQUVDLGNBQWM7UUFDaEIsSUFBSXhCLElBQUl5QixNQUFNLEdBQUcsR0FBRztZQUNsQixNQUFNTixPQUFPO2dCQUNYTyxNQUFNMUI7Z0JBQ05GLFFBQVFBO2dCQUNSQyxVQUFVQTtnQkFDVm1CLE1BQU1kO1lBQ1I7WUFDQVQsK0NBQU1BLENBQUMwQixJQUFJLENBQUMsZ0JBQWdCRjtRQUM1QiwrQ0FBK0M7UUFDL0MsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQixNQUFNO1FBQ1I7SUFDRjtJQUVBUSxRQUFRQyxHQUFHLENBQUMxQjtJQUNaLDJCQUEyQjtJQUMzQixxQkFDRSw4REFBQzJCO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs7Z0NBQUc7Z0NBQVdqQzs7Ozs7OztzQ0FDZiw4REFBQ2lDOztnQ0FBRztnQ0FBVWhDOzs7Ozs7Ozs7Ozs7OzhCQUVoQiw4REFBQ2lDOzs7Ozs4QkFFRCw4REFBQ0g7O3NDQUNDLDhEQUFDRTs0QkFBR0QsV0FBVTtzQ0FBMkI7Ozs7OztzQ0FDekMsOERBQUNHO3NDQUNFL0IsU0FBU2dDLEdBQUcsQ0FBQyxDQUFDWCxrQkFDYiw4REFBQ1k7OENBQWdCWixFQUFFRyxJQUFJO21DQUFkSCxFQUFFSCxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzhCQVdwQiw4REFBQ1M7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNNO29DQUNDTixXQUFVO29DQUNWTyxPQUFPckM7b0NBQ1BzQyxVQUFVLENBQUNmLElBQU10QixPQUFPc0IsRUFBRWdCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhDQUV4Qyw4REFBQ0c7b0NBQU1WLFdBQVU7O3dDQUF5QztzREFFeEQsOERBQUNNOzRDQUNDTixXQUFVOzRDQUNWVyxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMQyxhQUFZOzs7Ozs7Ozs7Ozs7OENBSWhCLDhEQUFDQztvQ0FDQ0MsU0FBUyxDQUFDdEIsSUFBTUQsdUJBQXVCQyxHQUFHdkI7b0NBQzFDOEIsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0E5R01sQztLQUFBQTtBQWdITiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0cy5qc3g/ZGMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSBcIi4uLy4uL2xpYi9zb2NrZXRcIjtcclxuXHJcbmNvbnN0IENoYXRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzZW5kZXIsIHJlY2VpdmVyIH0gPSBwcm9wcztcclxuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JvbSwgc2V0Um9tXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzb2NrZXQub24oXCJ1cGRhdGVfbWVzc2FnZXNcIiwgKG1lc3NhZ2VzKSA9PiB7XHJcbiAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHNvY2tldC5vZmYoXCJ1cGRhdGVfbWVzc2FnZXNcIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgUm9vbWluZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZ2V0cm9vbSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA1MC9hcGkvdjEvcm9vbVwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIC8vICAgc2VuZGVyOiBwYXJhbXMuc2x1Z1swXSxcclxuICAgICAgICAgICAgLy8gICByZWNlaXZlcjogcGFyYW1zLnNsdWdbMV0sXHJcbiAgICAgICAgICAgIHNlbmRlcjogc2VuZGVyLFxyXG4gICAgICAgICAgICByZWNlaXZlcjogcmVjZWl2ZXIsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfTtcclxuICAgICAgY29uc3Qgcm9vbSA9IGF3YWl0IGdldHJvb20oKTtcclxuICAgICAgc2V0Um9tKHJvb20uZGF0YS5faWQpO1xyXG4gICAgICBzb2NrZXQuZW1pdChcImpvaW5fcm9vbVwiLCByb29tLmRhdGEuX2lkKTtcclxuICAgIH07XHJcbiAgICBSb29taW5nKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXdNZXNzYWdlU3VibWl0ID0gKGUsIG1zZykgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgdGV4dDogbXNnLFxyXG4gICAgICAgIHNlbmRlcjogc2VuZGVyLFxyXG4gICAgICAgIHJlY2VpdmVyOiByZWNlaXZlcixcclxuICAgICAgICByb29tOiByb20sXHJcbiAgICAgIH07XHJcbiAgICAgIHNvY2tldC5lbWl0KFwic2VuZF9tZXNzYWdlXCIsIGRhdGEpO1xyXG4gICAgICAvLyBzb2NrZXQub24oXCJ1cGRhdGVfbWVzc2FnZXNcIiwgKG1lc3NhZ2VzKSA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJtZWVlZVwiKTtcclxuICAgICAgLy8gICBzZXRNZXNzYWdlcyhtZXNzYWdlcyk7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2VzKTtcclxuICAvLyBjb25zb2xlLmxvZyhcIm1lc3NhZ2VzXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnIG14LWF1dG8gbXQtMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8aDE+VXNlck5hbWU6IHtzZW5kZXJ9PC9oMT5cclxuICAgICAgICAgIDxoMT5TZW5kIFRvOiB7cmVjZWl2ZXJ9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTJcIj5NRVNTQUdFUzwvaDE+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtlLl9pZH0+e2UudGV4dH08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICB7Lyoge21lc3NhZ2VzLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICA8cCBrZXk9e2V9PmU8L3A+XHJcbiAgICAgICAgICApKX0gKi99XHJcbiAgICAgICAgICB7Lyoge1wibWVzc2FnZXNbMF0uX2lkXCJ9ICovfVxyXG4gICAgICAgICAgey8qIHttZXNzYWdlc1swXS5faWR9ICovfVxyXG4gICAgICAgICAgey8qIHttZXNzYWdlc30gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bXNnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNc2coZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgcGwtNCBwci00IHAtMS41XCI+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGhpZGRlbiBoLWZ1bGwgcm91bmRlZCB0ZXh0LWdyYXktOTUwXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYXR0YWNobWVudFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXR0YWNobWVudFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcm91bmRlZC1tZCBwbC00IHByLTRcIj4rPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVOZXdNZXNzYWdlU3VibWl0KGUsIG1zZyl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCByb3VuZGVkLW1kIHBsLTQgcHItNCBwLTAuNVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgc2VuZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzb2NrZXQiLCJDaGF0cyIsInByb3BzIiwic2VuZGVyIiwicmVjZWl2ZXIiLCJtc2ciLCJzZXRNc2ciLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwicm9tIiwic2V0Um9tIiwib24iLCJvZmYiLCJSb29taW5nIiwiZ2V0cm9vbSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsInJvb20iLCJkYXRhIiwiX2lkIiwiZW1pdCIsImhhbmRsZU5ld01lc3NhZ2VTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaHIiLCJ1bCIsIm1hcCIsImxpIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Chats.jsx\n"));

/***/ })

});