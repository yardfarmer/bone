/**
 * Created by Andy on 15/3/17.
 */
var config = {
  bbc: {
    login: 'http://api.fed.alibaba-inc.com/sso',
    user: 'http://api.fed.alibaba-inc.com/fork',
    info: 'http://api.fed.alibaba-inc.com/user/getUserInfoByEmpId',
      check:'http://facebook.fed.taobao.net/api/infed'
  },
  tmpDir: './tmp/',
  tfs: {
    host:'api.fed.taobao.net',
    path: '/tfs/postPrivate',
    maxSize: 10*1024*1024*1024,
    api: 'http://api.fed.taobao.net/tfs/postPrivate'
  },
  mongo:{
    port:27017,//mongodb端口 默认27017
    options:{
      server: {
        poolSize: 1,
          socketOptions :{
          auto_reconnect: true
        }
      }
    }
  }
};

module.exports = config;


