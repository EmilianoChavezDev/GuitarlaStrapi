module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cem60h14reb3865n4a30-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitala'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'oEsEVWVamVXLN3MxS3KFMX4bPz8u5QV0'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
