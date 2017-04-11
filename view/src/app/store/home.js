/**
 * Created by shen on 2017/4/11.
 */
import {observable, action, useStrict} from 'mobx'
useStrict(true)
class Home {
    @observable isLogin
    constructor() {
        this.isLogin = false
    }
    @action changeLogin(bool) {
        this.isLogin = bool
    }
}

export default new Home()