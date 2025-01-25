const express = require("express")
const router = express.Router()
const{registerUser,
    loginUser,
    profile
    } = require("../controller/authController")
const authMiddleware = require("../middlewares/authMiddleware")
const updateProfile = require("../controller/updateProfile")
    
router.post("/register",registerUser)
router.post("/login",loginUser)

router.get("/profile", authMiddleware, profile);
router.put("/profile", authMiddleware, updateProfile);
app.post("/upload", upload.single("file"), (req, res) => {
    try {

      res.status(200).json({
        message: "File uploaded successfully!",
        fileUrl: req.file.path, 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "File upload failed", error });
    }
  });

module.exports = router
