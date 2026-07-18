const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
// Register User
exports.register = async (req, res) => {
    console.log("Register API Hit");
    console.log(req.body);

    try {

        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Check existing user
        User.findByEmail(email, async (err, results) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Database error."
                });
            }

            if (results.length > 0) {
                return res.status(409).json({
                    success: false,
                    message: "Email already registered."
                });
            }

            // Hash Password
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = {
                name,
                email,
                password: hashedPassword
            };

            User.create(newUser, (err, result) => {

                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Registration failed."
                    });
                }

                return res.status(201).json({
                    success: true,
                    message: "User registered successfully."
                });

            });

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });

    }

};
// Login User
exports.login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required."
        });
    }

    User.findByEmail(email, async (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database error."
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        const user = results[0];

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid password."
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    });

};