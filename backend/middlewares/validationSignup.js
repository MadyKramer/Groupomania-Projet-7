const yup = require("yup");

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .matches("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/gm")
    .email()
    .min(8)
    .max(150)
    .required("Veuillez nous renseigner une adresse mail 💌"),

  password: yup
    .string()
    .matches("/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-.]).{8,}$/gm") //Minimum eight characters, at least one upper case letter, one lower case letter, one number and one special character
    .min(8)
    .max(255)
    .required("Définissez ici votre mot de passe"),

  lastname: yup
    .string()
    .min(3)
    .max(45)
    .required("Quel est votre nom de famille?"),

  firstname: yup.string().min(3).max(45).required("Quel est votre prénom?"),

  workstation: yup.string().min(4).max(45).required("Quel poste occupez-vous?"),
});

module.exports = (req, res, next) => {
  signupSchema
    .validate({
      email: req.body.email,
      password: req.body.password,
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      workstation: req.body.workstation,
    })
    .then(function (valid) {
      next();
    })
    .catch(function (err) {
      res.status(400).json({ message: err.errors });
    });
};
