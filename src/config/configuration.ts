export default () => {
    return ({
        port: parseInt(process.env.SERVER_PORT, 10) || 3000,
        database: {
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            name: process.env.DATABASE_NAME
        },
        server: {
            host: process.env.SERVER_HOST
        }
    });
};