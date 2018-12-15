

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
            0: 'ID INTEGER REFERENCES USERNAME(USERID)',
            1: 'TNAME: VARCHAR'
        }
    }
]