import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'
const sequelize = new Sequelize('Blog','root','1320444219wx',{
  host: '47.120.13.242',
  port:3306,
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
