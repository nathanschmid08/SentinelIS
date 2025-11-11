/*
++-------------------------------++
|| ======== SERVER 3000 ======== ||
++-------------------------------++
*/

const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config(); 

console.log("Starting server on port 3000...");

const app = express();
const PORT = 3000;

// Database connection pool
let pool;
(async () => {
    try {
        pool = mysql.createPool({
            host: 'localhost',
            port: process.env.MYSQL_PORT || 3307, 
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        console.log("Database pool created successfully.");

        // Test initial connection
        const connection = await pool.getConnection();
        console.log("Successfully connected to the database!");
        const [rows] = await connection.query('SELECT 1');
        console.log("Test query result:", rows);
        connection.release();
    } catch (err) {
        console.error("Error while connecting to the database:", err);
    }
})();

app.use(express.json());

// Test endpoint
app.get('/api/test', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        console.log("Connection acquired for /api/test endpoint");
        const [rows] = await connection.query('SELECT 1');
        console.log("Query result for /api/test:", rows);
        connection.release();
        res.json({ status: 'Database connected', data: rows });
    } catch (error) {
        console.error("Error in /api/test endpoint:", error);
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
