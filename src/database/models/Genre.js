module.exports = (sequelize, DataTypes) =>{

    const alias ="Genero"
    
    const cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type : DataTypes.BOOLEAN,
            defaultValue : 1,
            allowNull : false
        }
    }


    const config = {
        underscored : true,
        tableName : 'genres', // si la tabla o coincide con el plural del modelo va esta configuracion
        timetamps : true, //si no tiene timestamps va false
    }


    const Genre = sequelize.define(alias,cols,config)

    return Genre
}