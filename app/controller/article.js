const Controller = require('egg').Controller;
 
class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.article.getProjectById();
    ctx.body = res; // 返回值显示
  }
  async add() {
    const { ctx } = this;
    const content = ctx.query;
    console.log(content);
    const res = await ctx.service.article.addProject(content);
    ctx.body = res; // 返回值显示
  }
}
module.exports = ArticleController;