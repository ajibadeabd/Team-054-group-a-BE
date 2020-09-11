const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const apiRoute = require("../routes/users");

module.exports = (app) => {
  var corsOption = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["x-auth-token"],
  };
  
  app.use("/api", apiRoute);
  
  app.use(cors(corsOption));
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static("/public"));
  app.use(passport.initialize());

  return app;
};
