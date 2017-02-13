webpackJsonp([0],{

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /**
                   * Created by shen on 2017/2/7.
                   */


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(36);

var _showpost = __webpack_require__(313);

var _showpost2 = _interopRequireDefault(_showpost);

var _connect = __webpack_require__(308);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowPost = (_dec = (0, _connect2.default)(_showpost2.default), _dec(_class = function (_React$Component) {
    _inherits(ShowPost, _React$Component);

    function ShowPost(args) {
        var _ref;

        _classCallCheck(this, ShowPost);

        var _this = _possibleConstructorReturn(this, (_ref = ShowPost.__proto__ || Object.getPrototypeOf(ShowPost)).call.apply(_ref, [this].concat(_toConsumableArray(args))));

        _this.sendComment = function (_id) {
            var userComment = _this.refs.userComment;

            var date = new Date();
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDay();

            var params = {
                commentName: '游客',
                commentContent: userComment.value,
                commentTime: y + '\u5E74' + m + '\u6708' + d + '\u65E5',
                type: 'comment' + _id
            };
            _this.props.actions.userSendComment(params).then(function (resp) {
                _this.setState({
                    commentState: _this.state.commentState.concat(resp.doc)
                });
            });
        };

        _this.state = {
            commentState: []
        };
        return _this;
    }

    _createClass(ShowPost, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var post_id = this.props.params.post_id;


            this.props.actions.fetchSinglePost(post_id);
            this.props.actions.fetchUserComment(post_id).then(function (resp) {
                _this2.setState({
                    commentState: _this2.props.userComment
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var singlePost = this.props.singlePost;
            var commentState = this.state.commentState;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        singlePost.title
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        singlePost.postTime
                    )
                ),
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: singlePost.content } })
                ),
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u7528\u6237\u8BC4\u8BBA'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        commentState.map(function (item) {
                            return _react2.default.createElement(
                                'li',
                                { key: item._id },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    item.commentName
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    item.commentContent
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    item.commentTime
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'footer',
                    null,
                    '\u7528\u6237\u540D\uFF1A',
                    _react2.default.createElement(
                        'span',
                        { ref: 'commentName' },
                        '\u6E38\u5BA2'
                    ),
                    _react2.default.createElement(
                        'article',
                        null,
                        '\u8BC4\u8BBA\u5185\u5BB9:',
                        _react2.default.createElement('textarea', { name: '', id: '', cols: '30', rows: '10', ref: 'userComment' }),
                        _react2.default.createElement(
                            'span',
                            { onClick: function onClick() {
                                    return _this3.sendComment(singlePost._id);
                                } },
                            '\u53D1\u8868\u8BC4\u8BBA'
                        )
                    )
                )
            );
        }
    }]);

    return ShowPost;
}(_react2.default.Component)) || _class);
exports.default = ShowPost;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by shen on 2017/2/4.
 */
function Fetch(url, options) {
    return fetch(url, _extends({ credentials: 'include' }, options)).then(function (res) {
        return res.json();
    }).then(function (json) {
        return json;
    }).catch(function (e) {
        return console.log(e);
    });
}

function GET(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.send = function () {

        return Fetch(url, {
            method: 'GET'
        }).then(function (res) {
            return res;
        }).catch(function (err) {
            throw err;
        });
    };
}

function POST(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    this.send = function () {
        return Fetch(url, _extends({
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? JSON.stringify(data) : data
        }, option)).then(function (res) {
            return res;
        }).catch(function (err) {
            throw err;
        });
    };
}

exports.GET = GET;
exports.POST = POST;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by shen on 2017/2/7.
                                                                                                                                                                                                                                                                   */


exports.sendPost = sendPost;
exports.fetchNaturePost = fetchNaturePost;
exports.editPost = editPost;

var _ActionTypes = __webpack_require__(35);

var types = _interopRequireWildcard(_ActionTypes);

var _request = __webpack_require__(301);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function sendPost(option) {
    return function (dispatch, getState) {
        return new _request.POST('/create', _extends({}, option)).send().then(function (resp) {
            return resp;
        }).catch(function (err) {
            throw err;
        });
    };
}

function fetchNaturePost(_id) {
    return function (dispatch, getState) {
        return new _request.GET('/naturePost?_id=' + _id).send().then(function (resp) {
            dispatch({
                type: types.FETCH_NATURE_POST,
                naturePost: resp
            });
        });
    };
}

function editPost(params) {
    return function (dispatch, getState) {
        return new _request.POST('/updatePost', _extends({}, params)).send().catch(function (err) {
            throw err;
        });
    };
}

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ActionTypes = __webpack_require__(35);

var types = _interopRequireWildcard(_ActionTypes);

var _request = __webpack_require__(301);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(303);

Object.keys(_home).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _home[key];
    }
  });
});

var _login = __webpack_require__(305);

Object.keys(_login).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _login[key];
    }
  });
});

var _editpost = __webpack_require__(302);

Object.keys(_editpost).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _editpost[key];
    }
  });
});

var _post = __webpack_require__(306);

Object.keys(_post).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _post[key];
    }
  });
});

var _showpost = __webpack_require__(307);

Object.keys(_showpost).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _showpost[key];
    }
  });
});

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by shen on 2017/2/7.
                                                                                                                                                                                                                                                                   */


exports.sendUserLogin = sendUserLogin;

var _ActionTypes = __webpack_require__(35);

var types = _interopRequireWildcard(_ActionTypes);

var _request = __webpack_require__(301);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function sendUserLogin(params) {
    return function (dispatch, getState) {
        return new _request.POST('/login', _extends({}, params)).send().then(function (resp) {
            return resp;
        }).catch(function (err) {
            throw err;
        });
    };
}

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchList = fetchList;
exports.userLogin = userLogin;
exports.deletePost = deletePost;
exports.findAssignPost = findAssignPost;

var _ActionTypes = __webpack_require__(35);

var types = _interopRequireWildcard(_ActionTypes);

var _request = __webpack_require__(301);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by shen on 2017/2/7.
 */
function receiveList(postList, pageArr, count) {
    return {
        type: types.FETCH_LIST,
        postList: postList,
        pageArr: pageArr,
        count: count

    };
}

function fetchList(num) {
    return function (dispatch, getState) {
        return new _request.GET('/list?page=' + num).send().then(function (resp) {
            dispatch(receiveList(resp.postList, resp.pageArr, resp.count));
        }).catch(function (error) {
            return console.log(error);
        });
    };
}

function userLogin() {
    return function (dispatch, getState) {
        return new _request.GET('/login').send().then(function (resp) {
            return resp;
        }).catch(function (error) {
            console.log(err);
        });
    };
}

function deletePost(id) {
    return function (dispatch, getState) {
        return new _request.POST('/delete', { _id: id }).send().then(function (resp) {
            return resp;
        });
    };
}

function findAssignPost(title) {
    return function (dispatch, getState) {
        return new _request.GET('/findPost?title=' + title).send().then(function (resp) {
            dispatch({
                type: types.FIND_ASSIGN_POST,
                assignPost: resp
            });
        });
    };
}

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by shen on 2017/2/7.
                                                                                                                                                                                                                                                                   */


exports.fetchSinglePost = fetchSinglePost;
exports.userSendComment = userSendComment;
exports.fetchUserComment = fetchUserComment;

var _ActionTypes = __webpack_require__(35);

var types = _interopRequireWildcard(_ActionTypes);

var _request = __webpack_require__(301);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function fetchSinglePost(params) {
    return function (dispatch, getState) {
        var url = '/singlepost?_id=' + params;
        return new _request.GET(url).send().then(function (resp) {
            dispatch({
                type: types.FETCH_SINGLE_POST,
                post: resp
            });
        });
    };
}

function userSendComment(params) {
    return function (dispatch, getState) {
        return new _request.POST('/userComment', _extends({}, params)).send().then(function (resp) {
            return resp;
        }).catch(function (err) {
            throw err;
        });
    };
}

function fetchUserComment(_id) {
    return function (dispatch, getState) {
        return new _request.GET('/userComment?_id=' + _id).send().then(function (resp) {
            dispatch({
                type: types.FETCH_USER_COMMENT,
                userComment: resp
            });
        }).catch(function (err) {
            throw err;
        });
    };
}

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(80);

var _redux = __webpack_require__(47);

var _actions = __webpack_require__(304);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by shen on 2017/2/4.
                                                                                                                                                                                                                   */


function mapStateToProps(props, state) {
    if (!props) return state;

    if (typeof props === 'function') return props;

    if (typeof props === 'string') return _defineProperty({}, props, state[props]);

    if (Array.isArray(props)) {
        return props.reduce(function (prev, curr) {
            return prev[curr] = state[curr];
        }, {});
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
}

exports.default = function (props) {
    return function (target) {
        return (0, _reactRedux.connect)(mapStateToProps.bind(null, props), mapDispatchToProps)(target);
    };
};

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function defaultEqualityCheck(a, b) {
  return a === b;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (lastArgs === null || lastArgs.length !== args.length || !args.every(function (value, index) {
      return equalityCheck(value, lastArgs[index]);
    })) {
      lastResult = func.apply(undefined, args);
    }
    lastArgs = args;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    memoizeOptions[_key2 - 1] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      funcs[_key3] = arguments[_key3];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      return resultFunc.apply(undefined, arguments);
    }].concat(memoizeOptions));

    var selector = function selector(state, props) {
      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      var params = dependencies.map(function (dependency) {
        return dependency.apply(undefined, [state, props].concat(args));
      });
      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
    };

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      values[_key5] = arguments[_key5];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reselect = __webpack_require__(309);

var getSinglePost = function getSinglePost(state) {
    return state.showpost.singlePost;
}; /**
    * Created by shen on 2017/2/7.
    */

var getUserComment = function getUserComment(state) {
    return state.showpost.userComment;
};

exports.default = (0, _reselect.createSelector)(getSinglePost, getUserComment, function (singlePost, userComment) {
    return {
        singlePost: singlePost,
        userComment: userComment
    };
});

/***/ })

});