import sequelize from '../db/sequelize'
import { DataTypes } from 'sequelize';
const Message = sequelize.define('message',{
   nickname:{
    type:DataTypes.TEXT,
    allowNull:false
   },
   email:{
    type:DataTypes.TEXT,
    allowNull:false
   },
   website:{
    type:DataTypes.TEXT,
    allowNull:true
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
})

await Message.sync({alter:true})
export default Message