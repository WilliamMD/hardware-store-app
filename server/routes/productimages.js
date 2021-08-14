const ProductImageRouter = require('express').Router();
const ProductImageController = require('../controllers/ProductImageController');
const {authentication} = require('../middlewares/auth')
const upload = require('../middlewares/multer')


ProductImageRouter.get("/",authentication,ProductImageController.showImages)
ProductImageRouter.post("/upload",authentication,upload.single("file"),ProductImageController.uploadImages)
ProductImageRouter.put("/update/:id",authentication,upload.single("file"),ProductImageController.updateImages)
ProductImageRouter.delete("/delete/:id",authentication,ProductImageController.deleteImages)

module.exports = ProductImageRouter;