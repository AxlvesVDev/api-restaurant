import { Router } from "express"
import { ProductController } from "../controllers/product-controllers"

const productsRoutes = Router()
const productsController = new ProductController()

productsRoutes.get("/", productsController.index)


export { productsRoutes }