import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Manav Babber',
        email: 'manav@example.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'Kewascoo',
        email: 'kewascoo@example.com',
        password: bcrypt.hashSync('123456',10)
    },
]

export default users;