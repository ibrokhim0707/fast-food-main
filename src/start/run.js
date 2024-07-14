const app = require("./module");
const { PORT } = require("../../config/index");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
