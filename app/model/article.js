module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 下面得操作是连接数据库
    const ArticleSchema = new Schema({
      // 修改和新增用到，规定字段得类型和其他条件等
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    }, { versionKey: false });
      return mongoose.model('Article', ArticleSchema, 'site')
   };