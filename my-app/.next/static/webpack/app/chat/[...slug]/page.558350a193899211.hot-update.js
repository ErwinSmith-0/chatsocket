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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/socket */ \"(app-pages-browser)/./lib/socket.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chats = (props)=>{\n    _s();\n    const { sender, receiver } = props;\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [rom, setRom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const Rooming = async ()=>{\n            const getroom = async ()=>{\n                const res = await fetch(\"http://localhost:3050/api/v1/room\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        //   sender: params.slug[0],\n                        //   receiver: params.slug[1],\n                        sender: sender,\n                        receiver: receiver\n                    })\n                });\n                return res.json();\n            };\n            const room = await getroom();\n            // const room = res.json();\n            // console.log(res.json());\n            console.log(\"room.data\");\n            console.log(room.data);\n            setRom(room.data._id);\n            _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.emit(\"join_room\", room.data._id);\n        };\n        Rooming();\n    }, []);\n    const handleNewMessageSubmit = (e, msg)=>{\n        e.preventDefault();\n        if (msg.length > 0) {\n            const data = {\n                text: msg,\n                sender: sender,\n                receiver: receiver,\n                room: rom\n            };\n            _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.emit(\"send_message\", data);\n        // socket.emit(\"receive_message\", rom);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.on(\"update_messages\", (msg)=>{\n            setMessages(msg);\n        });\n    });\n    console.log(messages);\n    console.log(\"messages\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-lg mx-auto mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"UserName: \",\n                                sender\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Send To: \",\n                                receiver\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"flex justify-center mt-2\",\n                            children: \"MESSAGES\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: messages.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: e.text\n                                }, e._id, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"text-black rounded-md\",\n                                    value: msg,\n                                    onChange: (e)=>setMsg(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-1.5\",\n                                    children: [\n                                        \"+\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full hidden h-full rounded text-gray-950\",\n                                            type: \"file\",\n                                            name: \"attachment\",\n                                            placeholder: \"Attachment\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: (e)=>handleNewMessageSubmit(e, msg),\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-0.5\",\n                                    children: \"send\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chats, \"VisIMiFPRDqS7RdHcYs036D4ldU=\");\n_c = Chats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chats);\nvar _c;\n$RefreshReg$(_c, \"Chats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ1Q7QUFFMUMsTUFBTUksUUFBUSxDQUFDQzs7SUFDYixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdGO0lBQzdCLE1BQU0sQ0FBQ0csS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLEtBQUtDLE9BQU8sR0FBR1gsK0NBQVFBO0lBQzlCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLFVBQVU7WUFDZCxNQUFNQyxVQUFVO2dCQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxxQ0FBcUM7b0JBQzNEQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFDbkIsNEJBQTRCO3dCQUM1Qiw4QkFBOEI7d0JBQzlCaEIsUUFBUUE7d0JBQ1JDLFVBQVVBO29CQUNaO2dCQUNGO2dCQUNBLE9BQU9TLElBQUlPLElBQUk7WUFDakI7WUFDQSxNQUFNQyxPQUFPLE1BQU1UO1lBQ25CLDJCQUEyQjtZQUMzQiwyQkFBMkI7WUFDM0JVLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLElBQUk7WUFDckJkLE9BQU9XLEtBQUtHLElBQUksQ0FBQ0MsR0FBRztZQUNwQnpCLCtDQUFNQSxDQUFDMEIsSUFBSSxDQUFDLGFBQWFMLEtBQUtHLElBQUksQ0FBQ0MsR0FBRztRQUN4QztRQUNBZDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1nQix5QkFBeUIsQ0FBQ0MsR0FBR3ZCO1FBQ2pDdUIsRUFBRUMsY0FBYztRQUNoQixJQUFJeEIsSUFBSXlCLE1BQU0sR0FBRyxHQUFHO1lBQ2xCLE1BQU1OLE9BQU87Z0JBQ1hPLE1BQU0xQjtnQkFDTkYsUUFBUUE7Z0JBQ1JDLFVBQVVBO2dCQUNWaUIsTUFBTVo7WUFDUjtZQUNBVCwrQ0FBTUEsQ0FBQzBCLElBQUksQ0FBQyxnQkFBZ0JGO1FBQzVCLHVDQUF1QztRQUN6QztJQUNGO0lBRUExQixnREFBU0EsQ0FBQztRQUNSRSwrQ0FBTUEsQ0FBQ2dDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzNCO1lBQzVCRyxZQUFZSDtRQUNkO0lBQ0Y7SUFFQWlCLFFBQVFDLEdBQUcsQ0FBQ2hCO0lBQ1plLFFBQVFDLEdBQUcsQ0FBQztJQUNaLHFCQUNFLDhEQUFDVTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7O2dDQUFHO2dDQUFXaEM7Ozs7Ozs7c0NBQ2YsOERBQUNnQzs7Z0NBQUc7Z0NBQVUvQjs7Ozs7Ozs7Ozs7Ozs4QkFFaEIsOERBQUNnQzs7Ozs7OEJBRUQsOERBQUNIOztzQ0FDQyw4REFBQ0U7NEJBQUdELFdBQVU7c0NBQTJCOzs7Ozs7c0NBQ3pDLDhEQUFDRztzQ0FDRTlCLFNBQVMrQixHQUFHLENBQUMsQ0FBQ1Ysa0JBQ2IsOERBQUNXOzhDQUFnQlgsRUFBRUcsSUFBSTttQ0FBZEgsRUFBRUgsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFXcEIsOERBQUNRO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTTtvQ0FDQ04sV0FBVTtvQ0FDVk8sT0FBT3BDO29DQUNQcUMsVUFBVSxDQUFDZCxJQUFNdEIsT0FBT3NCLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhDQUV4Qyw4REFBQ0c7b0NBQU1WLFdBQVU7O3dDQUF5QztzREFFeEQsOERBQUNNOzRDQUNDTixXQUFVOzRDQUNWVyxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMQyxhQUFZOzs7Ozs7Ozs7Ozs7OENBSWhCLDhEQUFDQztvQ0FDQ0MsU0FBUyxDQUFDckIsSUFBTUQsdUJBQXVCQyxHQUFHdkI7b0NBQzFDNkIsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0E3R01qQztLQUFBQTtBQStHTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0cy5qc3g/ZGMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSBcIi4uLy4uL2xpYi9zb2NrZXRcIjtcclxuXHJcbmNvbnN0IENoYXRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzZW5kZXIsIHJlY2VpdmVyIH0gPSBwcm9wcztcclxuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JvbSwgc2V0Um9tXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IFJvb21pbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdldHJvb20gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwNTAvYXBpL3YxL3Jvb21cIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAvLyAgIHNlbmRlcjogcGFyYW1zLnNsdWdbMF0sXHJcbiAgICAgICAgICAgIC8vICAgcmVjZWl2ZXI6IHBhcmFtcy5zbHVnWzFdLFxyXG4gICAgICAgICAgICBzZW5kZXI6IHNlbmRlcixcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHJlY2VpdmVyLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJvb20gPSBhd2FpdCBnZXRyb29tKCk7XHJcbiAgICAgIC8vIGNvbnN0IHJvb20gPSByZXMuanNvbigpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJyb29tLmRhdGFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvb20uZGF0YSk7XHJcbiAgICAgIHNldFJvbShyb29tLmRhdGEuX2lkKTtcclxuICAgICAgc29ja2V0LmVtaXQoXCJqb2luX3Jvb21cIiwgcm9vbS5kYXRhLl9pZCk7XHJcbiAgICB9O1xyXG4gICAgUm9vbWluZygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV3TWVzc2FnZVN1Ym1pdCA9IChlLCBtc2cpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChtc2cubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHRleHQ6IG1zZyxcclxuICAgICAgICBzZW5kZXI6IHNlbmRlcixcclxuICAgICAgICByZWNlaXZlcjogcmVjZWl2ZXIsXHJcbiAgICAgICAgcm9vbTogcm9tLFxyXG4gICAgICB9O1xyXG4gICAgICBzb2NrZXQuZW1pdChcInNlbmRfbWVzc2FnZVwiLCBkYXRhKTtcclxuICAgICAgLy8gc29ja2V0LmVtaXQoXCJyZWNlaXZlX21lc3NhZ2VcIiwgcm9tKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uKFwidXBkYXRlX21lc3NhZ2VzXCIsIChtc2cpID0+IHtcclxuICAgICAgc2V0TWVzc2FnZXMobXNnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhtZXNzYWdlcyk7XHJcbiAgY29uc29sZS5sb2coXCJtZXNzYWdlc1wiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvIG10LTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGgxPlVzZXJOYW1lOiB7c2VuZGVyfTwvaDE+XHJcbiAgICAgICAgICA8aDE+U2VuZCBUbzoge3JlY2VpdmVyfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yXCI+TUVTU0FHRVM8L2gxPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7bWVzc2FnZXMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17ZS5faWR9PntlLnRleHR9PC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgey8qIHttZXNzYWdlcy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgPHAga2V5PXtlfT5lPC9wPlxyXG4gICAgICAgICAgKSl9ICovfVxyXG4gICAgICAgICAgey8qIHtcIm1lc3NhZ2VzWzBdLl9pZFwifSAqL31cclxuICAgICAgICAgIHsvKiB7bWVzc2FnZXNbMF0uX2lkfSAqL31cclxuICAgICAgICAgIHsvKiB7bWVzc2FnZXN9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21zZ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TXNnKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCByb3VuZGVkLW1kIHBsLTQgcHItNCBwLTEuNVwiPlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoaWRkZW4gaC1mdWxsIHJvdW5kZWQgdGV4dC1ncmF5LTk1MFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImF0dGFjaG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkF0dGFjaG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgcGwtNCBwci00XCI+KzwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTmV3TWVzc2FnZVN1Ym1pdChlLCBtc2cpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcm91bmRlZC1tZCBwbC00IHByLTQgcC0wLjVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHNlbmRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic29ja2V0IiwiQ2hhdHMiLCJwcm9wcyIsInNlbmRlciIsInJlY2VpdmVyIiwibXNnIiwic2V0TXNnIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInJvbSIsInNldFJvbSIsIlJvb21pbmciLCJnZXRyb29tIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwicm9vbSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiX2lkIiwiZW1pdCIsImhhbmRsZU5ld01lc3NhZ2VTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJ0ZXh0Iiwib24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImhyIiwidWwiLCJtYXAiLCJsaSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImxhYmVsIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Chats.jsx\n"));

/***/ })

});