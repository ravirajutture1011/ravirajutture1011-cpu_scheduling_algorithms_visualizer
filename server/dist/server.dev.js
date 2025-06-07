"use strict";

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _schedulerRoutes = _interopRequireDefault(require("./routes/schedulerRoutes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use((0, _cors["default"])({
  origin: "http://localhost:5173",
  Credentials: true
}));
app.use("/api/schedule", _schedulerRoutes["default"]);
app.get("/", function (req, res) {
  res.send("API is running ");
});
app.listen(5000, function () {
  console.log("App is running ");
});