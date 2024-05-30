import sequelize from '../db/sequelize'
import { DataTypes } from 'sequelize';
const Links = sequelize.define('links',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'Merikle',
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'123',
    },
    category:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1,
    }
})
await Links.sync({alter:true})
export default Links