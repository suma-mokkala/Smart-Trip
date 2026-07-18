const db = require("../config/db");

const User = {

    findByEmail(email, callback) {
        const sql = "SELECT * FROM users WHERE email = ?";

        db.query(sql, [email], callback);
    },

    create(user, callback) {

        const sql = `
            INSERT INTO users
            (name, email, password)
            VALUES (?, ?, ?)
        `;

        db.query(
            sql,
            [
                user.name,
                user.email,
                user.password
            ],
            callback
        );
    }

};

module.exports = User;