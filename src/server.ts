import express from "express";
import "express-async-errors";
import customErrorMiddleware from "./middleware/customError";
import { routes } from "./routes";
const port = 3030;

const app = express();
app.use(express.json());

app.use(routes);

app.use(customErrorMiddleware);

app.listen(port, () => console.log(`Server is running on port ${port}`));
