import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'
const sequelize = new Sequelize('Blog','root','admin123',{
  host: 'localhost',
  dialect: "mysql",
  dialectModule:mysql2
});
sequelize.authenticate()
.then(res=>{
    console.log("数据库连接成功")
}).catch(err=>{
    console.log("数据库连接失败",err)
})
export default sequelize;
