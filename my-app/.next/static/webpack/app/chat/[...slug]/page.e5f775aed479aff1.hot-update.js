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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/socket */ \"(app-pages-browser)/./lib/socket.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Chats = (props)=>{\n    _s();\n    const { sender, receiver } = props;\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [rom, setRom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.on(\"update_messages\", (messages)=>{\n            console.log(\"meeee\");\n            setMessages(messages);\n        });\n        return ()=>_lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.off(\"update_messages\");\n    }, []);\n    // useEffect(() => {\n    //   const Rooming = async () => {\n    //     const getroom = async () => {\n    //       const res = await fetch(\"http://localhost:3050/api/v1/room\", {\n    //         method: \"POST\",\n    //         headers: {\n    //           \"Content-Type\": \"application/json\",\n    //         },\n    //         body: JSON.stringify({\n    //           //   sender: params.slug[0],\n    //           //   receiver: params.slug[1],\n    //           sender: sender,\n    //           receiver: receiver,\n    //         }),\n    //       });\n    //       return res.json();\n    //     };\n    //     const room = await getroom();\n    //     // const room = res.json();\n    //     // console.log(res.json());\n    //     console.log(\"room.data\");\n    //     console.log(room.data);\n    //     setRom(room.data._id);\n    //     socket.emit(\"join_room\", room.data._id);\n    //   };\n    //   Rooming();\n    // }, []);\n    const handleNewMessageSubmit = (e, msg)=>{\n        e.preventDefault();\n        if (msg.length > 0) {\n            const data = {\n                text: msg,\n                sender: sender,\n                receiver: receiver,\n                room: rom\n            };\n            _lib_socket__WEBPACK_IMPORTED_MODULE_2__.socket.emit(\"send_message\", data);\n        // socket.emit(\"receive_message\", rom);\n        }\n    };\n    // console.log(messages);\n    // console.log(\"messages\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-lg mx-auto mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"UserName: \",\n                                sender\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Send To: \",\n                                receiver\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"flex justify-center mt-2\",\n                            children: \"MESSAGES\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: messages.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: e.text\n                                }, e._id, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"text-black rounded-md\",\n                                    value: msg,\n                                    onChange: (e)=>setMsg(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-1.5\",\n                                    children: [\n                                        \"+\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full hidden h-full rounded text-gray-950\",\n                                            type: \"file\",\n                                            name: \"attachment\",\n                                            placeholder: \"Attachment\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: (e)=>handleNewMessageSubmit(e, msg),\n                                    className: \"bg-blue-500 rounded-md pl-4 pr-4 p-0.5\",\n                                    children: \"send\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chats, \"P8fYNoFD+2ZtqsAepc7Pit3R+Gg=\");\n_c = Chats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chats);\nvar _c;\n$RefreshReg$(_c, \"Chats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ1Q7QUFFMUMsTUFBTUksUUFBUSxDQUFDQzs7SUFDYixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdGO0lBQzdCLE1BQU0sQ0FBQ0csS0FBS0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLEtBQUtDLE9BQU8sR0FBR1gsK0NBQVFBO0lBRTlCRCxnREFBU0EsQ0FBQztRQUNSRSwrQ0FBTUEsQ0FBQ1csRUFBRSxDQUFDLG1CQUFtQixDQUFDSjtZQUM1QkssUUFBUUMsR0FBRyxDQUFDO1lBQ1pMLFlBQVlEO1FBQ2Q7UUFDQSxPQUFPLElBQU1QLCtDQUFNQSxDQUFDYyxHQUFHLENBQUM7SUFDMUIsR0FBRyxFQUFFO0lBRUwsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMsdUVBQXVFO0lBQ3ZFLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZ0RBQWdEO0lBQ2hELGFBQWE7SUFDYixpQ0FBaUM7SUFDakMseUNBQXlDO0lBQ3pDLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QiwrQ0FBK0M7SUFDL0MsT0FBTztJQUNQLGVBQWU7SUFDZixVQUFVO0lBRVYsTUFBTUMseUJBQXlCLENBQUNDLEdBQUdYO1FBQ2pDVyxFQUFFQyxjQUFjO1FBQ2hCLElBQUlaLElBQUlhLE1BQU0sR0FBRyxHQUFHO1lBQ2xCLE1BQU1DLE9BQU87Z0JBQ1hDLE1BQU1mO2dCQUNORixRQUFRQTtnQkFDUkMsVUFBVUE7Z0JBQ1ZpQixNQUFNWjtZQUNSO1lBQ0FULCtDQUFNQSxDQUFDc0IsSUFBSSxDQUFDLGdCQUFnQkg7UUFDNUIsdUNBQXVDO1FBQ3pDO0lBQ0Y7SUFFQSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHFCQUNFLDhEQUFDSTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7O2dDQUFHO2dDQUFXdEI7Ozs7Ozs7c0NBQ2YsOERBQUNzQjs7Z0NBQUc7Z0NBQVVyQjs7Ozs7Ozs7Ozs7Ozs4QkFFaEIsOERBQUNzQjs7Ozs7OEJBRUQsOERBQUNIOztzQ0FDQyw4REFBQ0U7NEJBQUdELFdBQVU7c0NBQTJCOzs7Ozs7c0NBQ3pDLDhEQUFDRztzQ0FDRXBCLFNBQVNxQixHQUFHLENBQUMsQ0FBQ1osa0JBQ2IsOERBQUNhOzhDQUFnQmIsRUFBRUksSUFBSTttQ0FBZEosRUFBRWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFXcEIsOERBQUNQO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTztvQ0FDQ1AsV0FBVTtvQ0FDVlEsT0FBTzNCO29DQUNQNEIsVUFBVSxDQUFDakIsSUFBTVYsT0FBT1UsRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhDQUV4Qyw4REFBQ0c7b0NBQU1YLFdBQVU7O3dDQUF5QztzREFFeEQsOERBQUNPOzRDQUNDUCxXQUFVOzRDQUNWWSxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMQyxhQUFZOzs7Ozs7Ozs7Ozs7OENBSWhCLDhEQUFDQztvQ0FDQ0MsU0FBUyxDQUFDeEIsSUFBTUQsdUJBQXVCQyxHQUFHWDtvQ0FDMUNtQixXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQWhITXZCO0tBQUFBO0FBa0hOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRzLmpzeD9kYzM2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tIFwiLi4vLi4vbGliL3NvY2tldFwiO1xyXG5cclxuY29uc3QgQ2hhdHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHNlbmRlciwgcmVjZWl2ZXIgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcm9tLCBzZXRSb21dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNvY2tldC5vbihcInVwZGF0ZV9tZXNzYWdlc1wiLCAobWVzc2FnZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJtZWVlZVwiKTtcclxuICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZXMpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4gc29ja2V0Lm9mZihcInVwZGF0ZV9tZXNzYWdlc1wiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBSb29taW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCBnZXRyb29tID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDUwL2FwaS92MS9yb29tXCIsIHtcclxuICAvLyAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIC8vICAgICAgICAgfSxcclxuICAvLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAvLyAgICAgICAgICAgLy8gICBzZW5kZXI6IHBhcmFtcy5zbHVnWzBdLFxyXG4gIC8vICAgICAgICAgICAvLyAgIHJlY2VpdmVyOiBwYXJhbXMuc2x1Z1sxXSxcclxuICAvLyAgICAgICAgICAgc2VuZGVyOiBzZW5kZXIsXHJcbiAgLy8gICAgICAgICAgIHJlY2VpdmVyOiByZWNlaXZlcixcclxuICAvLyAgICAgICAgIH0pLFxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgICBjb25zdCByb29tID0gYXdhaXQgZ2V0cm9vbSgpO1xyXG4gIC8vICAgICAvLyBjb25zdCByb29tID0gcmVzLmpzb24oKTtcclxuICAvLyAgICAgLy8gY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwicm9vbS5kYXRhXCIpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhyb29tLmRhdGEpO1xyXG4gIC8vICAgICBzZXRSb20ocm9vbS5kYXRhLl9pZCk7XHJcbiAgLy8gICAgIHNvY2tldC5lbWl0KFwiam9pbl9yb29tXCIsIHJvb20uZGF0YS5faWQpO1xyXG4gIC8vICAgfTtcclxuICAvLyAgIFJvb21pbmcoKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5ld01lc3NhZ2VTdWJtaXQgPSAoZSwgbXNnKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAobXNnLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB0ZXh0OiBtc2csXHJcbiAgICAgICAgc2VuZGVyOiBzZW5kZXIsXHJcbiAgICAgICAgcmVjZWl2ZXI6IHJlY2VpdmVyLFxyXG4gICAgICAgIHJvb206IHJvbSxcclxuICAgICAgfTtcclxuICAgICAgc29ja2V0LmVtaXQoXCJzZW5kX21lc3NhZ2VcIiwgZGF0YSk7XHJcbiAgICAgIC8vIHNvY2tldC5lbWl0KFwicmVjZWl2ZV9tZXNzYWdlXCIsIHJvbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cobWVzc2FnZXMpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwibWVzc2FnZXNcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgbXgtYXV0byBtdC0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxoMT5Vc2VyTmFtZToge3NlbmRlcn08L2gxPlxyXG4gICAgICAgICAgPGgxPlNlbmQgVG86IHtyZWNlaXZlcn08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMlwiPk1FU1NBR0VTPC9oMT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2UuX2lkfT57ZS50ZXh0fTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIHsvKiB7bWVzc2FnZXMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgIDxwIGtleT17ZX0+ZTwvcD5cclxuICAgICAgICAgICkpfSAqL31cclxuICAgICAgICAgIHsvKiB7XCJtZXNzYWdlc1swXS5faWRcIn0gKi99XHJcbiAgICAgICAgICB7Lyoge21lc3NhZ2VzWzBdLl9pZH0gKi99XHJcbiAgICAgICAgICB7Lyoge21lc3NhZ2VzfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttc2d9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1zZyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcm91bmRlZC1tZCBwbC00IHByLTQgcC0xLjVcIj5cclxuICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaGlkZGVuIGgtZnVsbCByb3VuZGVkIHRleHQtZ3JheS05NTBcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhdHRhY2htZW50XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdHRhY2htZW50XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCByb3VuZGVkLW1kIHBsLTQgcHItNFwiPis8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZU5ld01lc3NhZ2VTdWJtaXQoZSwgbXNnKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgcGwtNCBwci00IHAtMC41XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBzZW5kXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNvY2tldCIsIkNoYXRzIiwicHJvcHMiLCJzZW5kZXIiLCJyZWNlaXZlciIsIm1zZyIsInNldE1zZyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb20iLCJzZXRSb20iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJvZmYiLCJoYW5kbGVOZXdNZXNzYWdlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiZGF0YSIsInRleHQiLCJyb29tIiwiZW1pdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaHIiLCJ1bCIsIm1hcCIsImxpIiwiX2lkIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Chats.jsx\n"));

/***/ })

});