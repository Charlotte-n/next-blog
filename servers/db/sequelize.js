import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'
const sequelize = new Sequelize(process.env.NEXT_PUBLIC_DATABASE,process.env.NEXT_PUBLIC_USERNAME,process.env.NEXT_PUBLIC_PASSWORD,{
  host: process.env.NEXT_PUBLIC_HOST,
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
