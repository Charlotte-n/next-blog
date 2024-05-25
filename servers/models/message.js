import sequelize from '../db/sequelize'
import { DataTypes } from 'sequelize';
const Message = sequelize.define('message',{
   nickname:{
    type:DataTypes.STRING,
    allowNull:false
   },
   email:{
    type:DataTypes.STRING,
    allowNull:false
   },
   website:{
    type:DataTypes.STRING,
    allowNull:true
   },
   content:{
    type:DataTypes.STRING,
    allowNull:false
   },
   deleted:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
   },
})

Message.sync({alter:true})
export default Message