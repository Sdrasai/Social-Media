import App from "./app"
import UserRoute from "./routes/user.route"
import UserController from "./controller/user.controller"

const app = new App([new UserRoute(UserController)])

app.listen()
