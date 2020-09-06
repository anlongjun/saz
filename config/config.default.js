exports.keys = "123";

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
// config.cors = {
//     origin: '*', // 访问白名单,根据你自己的需要进行设置
//     allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
// };
exports.mongoose = {
  client: {
    url: 'mongodb://127.0.0.1:27017/runoob', // 你的数据库地址，egg_article是你数据库得名字
    options: {
      useNewUrlParser: true,
    },
  },
};