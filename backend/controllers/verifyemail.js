// Remove unnecessary imports
const User = require("../models/User");

// Remove the entire checkotpv function
// Remove the entire sendmail function
// Remove the entire verifycode function

const checkifverify = async (req, res) => {
    try {
        const { mail } = req.body;
        const data = await User.findOne({ email: mail });

        if (!data) {
            return res.status(200).json({ msg: "ne" });
        }

        // Assuming you have a 'verified' field in your User model
        if (data.verify === true) {
            return res.status(200).json({ msg: "ok" });
        } else {
            return res.status(200).json({ msg: "not" });
        }
    } catch (error) {
        return res.status(400).json({ msg: "error" });
    }
};

module.exports = {
    checkifverify,
};
