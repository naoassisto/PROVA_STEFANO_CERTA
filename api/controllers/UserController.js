const Users = require('../models/Users'); // Ensure this path is correct

module.exports = {
  create: async (req, res) => {
    try {
      const url = await sails.helpers.upload(req, "profile_photo");
      await Users.novo({ ...req.body, id: "sas", profile_photo: url });
      return res.json({
        success: true,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const foundUser = await Users.findOne({ email: req.body.email });
      if (!foundUser || foundUser.password !== req.body.password) {
        return res.json({
          code: "INVALID_CREDENTIALS",
          message: "Invalid email or password",
        });
      }

      const currentDate = new Date();
      const result = {
        expiration_date: new Date(currentDate.getTime() + 2 * 60 * 60 * 1000),
        session: foundUser.id,
      };

      const stringfyResult = JSON.stringify(result);
      return res.json({ access_token: Buffer.from(stringfyResult).toString('base64') });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
