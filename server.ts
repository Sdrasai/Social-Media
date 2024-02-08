import App from "./app"
import UserRoute from "./routes/user.route"
import UserController from "./controller/user.controller"
import PostRoute from "./routes/post.route"
import PostController from "./controller/post.controller"

const app = new App([
  new UserRoute(UserController),
  new PostRoute(PostController),
])

app.listen()
