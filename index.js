import knex from 'knex'

let mySQL = knex({
  client: 'mysql',
  connection: {
    host : 'localhost',
    port: 3306,
    user : 'root',
    password : 'demo',
    database : 'Bookshelf'
  }
})

mySQL('books')
  .select()
  .then(x => console.log(x))
