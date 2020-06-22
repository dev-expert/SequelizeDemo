const Express = require('express');
const Sequelize = require('sequelize')

const app = Express();
const port = 8080;

const connection = new Sequelize('learn1', 'postgres', '1997ujjwal', {
    host: 'localhost',
    dialect: 'postgres',
    storage: 'db.sqlite',
    operatorsAliases: false,
    define: {
        freezeTableName: true
    }
})

const User = connection.define('User', {
    uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        validate: {
            len: [3]
        }
    },
    bio: {
        type: Sequelize.TEXT,
        validate: {
            contains: {
                args: ['foo'],
                msg: 'ERROR: Text must contain foo'
            }
        }
    }
}, {
    timestamps: false
})

app.get('/', (req, res)=> {
    User.create({
        name: 'Joe',
        bio: 'New text added in bio fo'
    })
    .then(user => {
        res.json(user);
    })
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
})

connection
    .sync({
        logging: console.log,
        force: true
    })
    .then(() => {
        // User.create({
        //     name: 'Joe',
        //     bio: 'New text added in bio foo'
        // })
    })
    .then(() => {
        console.log('Connection to DB is successfull')
    })
    .catch(err => {
        console.log('ERROR while connection to DB', err)
    })

app.listen(port, () => {
    console.log('Running server on PORT: ', port)
});
