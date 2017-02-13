webpackJsonp([1],{

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; /**
                                   * Created by shen on 2017/2/7.
                                   */


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(36);

var _post = __webpack_require__(312);

var _post2 = _interopRequireDefault(_post);

var _connect = __webpack_require__(308);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = (_dec = (0, _connect2.default)(_post2.default), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post(args) {
        var _ref;

        _classCallCheck(this, Post);

        var _this = _possibleConstructorReturn(this, (_ref = Post.__proto__ || Object.getPrototypeOf(Post)).call.apply(_ref, [this].concat(_toConsumableArray(args))));

        _this.goToEitPost = function () {
            _this.props.actions.userLogin().then(function (resp) {
                if (resp.code === '200') {
                    _this.context.router.push('/editpost');
                } else {
                    alert('请先登录');
                    _this.context.router.push('/login');
                }
            });
        };

        _this.goToPreOrNexPage = function (num) {
            var page = parseInt(_this.props.router.location.query.page);
            var local = _this.props.router;
            var pageNum = page + parseInt(num);
            if (pageNum > _this.props.pageArr.length - 1 || pageNum < 0) return;
            _this.props.actions.fetchList(pageNum).then(function () {
                local.location.query.page = pageNum;
                local.replace('/post?page=' + pageNum);
            });
        };

        _this.goToAssignPage = function (num) {
            _this.props.actions.fetchList(num).then(function () {
                var local = _this.props.router;
                local.location.query.page = num;
                local.replace('/post?page=' + num);
            });
        };

        _this.deletePost = function (_id) {
            _this.props.actions.deletePost(_id).then(function (resp) {
                _this.state.postList.map(function (item, index) {
                    if (item._id === _id) {
                        _this.state.postList.splice(index, 1);
                        _this.setState({
                            postList: _this.state.postList
                        });
                    }
                });
            });
        };

        _this.findAssignPost = function () {
            var postTitle = _this.refs.postTitle;

            _this.props.actions.findAssignPost(postTitle.value);
        };

        _this.state = {
            postList: []
        };
        return _this;
    }

    _createClass(Post, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.props.actions.fetchList(0).then(function () {
                _this2.setState({
                    postList: _this2.props.postList
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                pageArr = _props.pageArr,
                assignPost = _props.assignPost;
            var postList = this.state.postList;

            if (!postList) return null;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'span',
                        { onClick: function onClick() {
                                return _this3.goToEitPost();
                            } },
                        '\u5199\u65B0\u6587\u7AE0'
                    ),
                    _react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u6587\u7AE0\u7684\u6807\u9898', ref: 'postTitle' }),
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this3.findAssignPost();
                            } },
                        '\u63D0\u4EA4'
                    ),
                    assignPost.length ? _react2.default.createElement(
                        'p',
                        null,
                        '\u67E5\u8BE2\u7ED3\u679C'
                    ) : null,
                    assignPost.map(function (item) {
                        return _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/showpost/' + item._id, key: item._id },
                            _react2.default.createElement(
                                'p',
                                null,
                                item.title
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                '(',
                                item.postTime,
                                ')'
                            )
                        );
                    })
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    postList.map(function (item, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: item._id },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/showpost/' + item._id },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    item.title
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '(',
                                    item.postTime,
                                    ')'
                                )
                            ),
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/editpost?postId=' + item._id },
                                '\u7F16\u8F91'
                            ),
                            _react2.default.createElement(
                                'span',
                                { onClick: function onClick() {
                                        return _this3.deletePost(item._id);
                                    } },
                                '\u5220\u9664'
                            )
                        );
                    })
                ),
                _react2.default.createElement(
                    'span',
                    { onClick: function onClick() {
                            return _this3.goToPreOrNexPage(-1);
                        } },
                    '\u4E0A\u4E00\u9875'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    pageArr.map(function (item, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: index, onClick: function onClick() {
                                    return _this3.goToAssignPage(index);
                                } },
                            index + 1
                        );
                    })
                ),
                _react2.default.createElement(
                    'span',
                    { onClick: function onClick() {
                            return _this3.goToPreOrNexPage(1);
                        } },
                    '\u4E0B\u4E00\u9875'
                )
            );
        }
    }]);

    return Post;
}(_react2.default.Component), _class2.contextTypes = {
    router: _react2.default.PropTypes.object
}, _temp)) || _class);
exports.default = Post;

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

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reselect = __webpack_require__(309);

var getPostList = function getPostList(state) {
    return state.post.postList;
}; /**
    * Created by shen on 2017/2/7.
    */

var getPostPageCount = function getPostPageCount(state) {
    return state.post.pageArr;
};
var getPostCount = function getPostCount(state) {
    return state.post.count;
};
var getAssignPost = function getAssignPost(state) {
    return state.post.assignPost;
};

exports.default = (0, _reselect.createSelector)(getPostList, getPostPageCount, getPostCount, getAssignPost, function (postList, pageArr, count, assignPost) {
    return {
        postList: postList,
        pageArr: pageArr,
        count: count,
        assignPost: assignPost
    };
});

/***/ })

});