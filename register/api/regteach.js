const mongoose = require("./config");
const reg_object = require("./RegData");

module.exports = (req, res) => {
  if (req.url == "/") {
    res.send({ result: "Get Teachers Records" });
  }
  if (req.url == "/display") {
    reg_object
      .find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  } else if (req.url == `/search/${req.params.name}`) {
    var name = req.params.name;
    reg_object
      .find({ name: name })
      .then((data) => {
        if (data.length > 0) {
          res.send(data);
        } else res.status(200).json({ message: "Record not found" });
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  } else if (req.url == "/save") {
    const { name, email, password, contact, isActive } = req.body;
    reg_object_ref = new reg_object({
      name,
      email,
      password,
      contact,
      isActive,
    });
    reg_object_ref
      .save()
      .then(() => {
        res.status(201).json({ message: "Record Saved" });
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  } else if (req.url == "/edit") {
    const { name, email, password, contact, isActive } = req.body;
    reg_object
      .find({ name: name })
      .then((data) => {
        if (data.length > 0) {
          reg_object
            .updateOne(
              { name: name },
              {
                $set: {
                  email: email,
                  password: password,
                  contact: contact,
                  isActive: isActive,
                },
              }
            )
            .then(() => {
              res.status(200).json({ message: "Record Updated" });
            })
            .catch((err) => {
              res.status(200).json({ message: "Record not Updated" });
            });
        } else res.status(200).json({ message: "Record not found" });
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  } else if (req.url == "/delete") {
    var name = req.body.name;
    reg_object
      .find({ name: name })
      .then((data) => {
        if (data.length > 0) {
          reg_object
            .deleteOne({ name: name })
            .then(() => {
              res.status(200).json({ message: "Record Deleted" });
            })
            .catch((err) => {
              res.status(200).json({ message: "Record not Deleted" });
            });
        } else res.status(200).json({ message: "Record not found" });
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }
};
