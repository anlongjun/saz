const Service = require('egg').Service;
 
class ArticleService extends Service {
  /**
     * 根据ID获取单个项目
     */
  async getProjectById() {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Article.find({});
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  async addProject(content) {
    return await this.ctx.model.Article.create(content);
  }
}
module.exports = ArticleService;