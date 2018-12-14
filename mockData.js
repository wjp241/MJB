
// const mockData = {
//     primaryKeyNames = {
//         0: userId,
//         1: 'favorites'
//     },

//     0: {
//         tableName: 'User',
//         primaryKey: {
//             name: userId,
//             dataType: Number
//         },
//         firstName: String,
//         lastName: String,
//         age: Number,
//     },
//     1: {
//         tableName:'userFavorites',
//         primaryKey: {
//             name: 'favorites',
//             dataType: Number
//         },
//         userId: Number,
//         movie: String,
//         book: String,
//         codingLanguage: String
//     }
// }

const mockData = [
    {
        tableName: 'user',
         table: {
            0: 'user_id serial PRIMARY KEY',
            1: 'firstName VARCHAR',
            2: 'lastName VARCHAR'
        },
    },
     {
        tableName: 'team',
        table: {
            0: 'ID: serial FOREIGN KEY',
            1: 'TNAME: VARCHAR'
        }
    }
]