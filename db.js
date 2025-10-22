import mysql from 'mysql2';

export const connectDB = () => {
  const pool = mysql.createPool({
    host: 'mysql',
    user: 'alfa',
    password: 'nasandratra',
    database: 'user_manager',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('❌ Erreur de connexion MySQL :', err.message);
    } else {
      console.log('✅ Connexion MySQL établie');
      connection.release();
    }
  });

  return pool;
};
