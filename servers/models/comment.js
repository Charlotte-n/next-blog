import sequelize from '../db/sequelize'
import { DataTypes } from 'sequelize';
import Message from './message';
const Comment = sequelize.define('comment',{
   nickname:{
    type:DataTypes.TEXT,
    allowNull:false
   },
   content:{
    type:DataTypes.TEXT,
    allowNull:false
   },
   deleted:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
   },
   childrenId:{
    type:DataTypes.INTEGER,
    allowNull:false
   },
   answerNickName:{
    type:DataTypes.TEXT,
    allowNull:false
   }
})

Comment.belongsTo(Message,{
	//创建外键 Blog.userId -> User.id
	foreignKey:'childrenId'
})
Message.hasMany(Comment,{
	//创建外键 Blog.userId -> User.id
	foreignKey:'childrenId'
})
await Comment.sync({alter:true})
export default Comment