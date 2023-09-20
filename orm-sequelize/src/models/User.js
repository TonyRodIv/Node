const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            // sequelize é o objeto que vai fazer a conexão com banco de dados e ele já tem as configurações do BD
            sequelize: connection
        }
        )
    }
}

module.exports = User;