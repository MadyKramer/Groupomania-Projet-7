const yup = require("yup");

const signupSchema = yup.object().shape({


  Firstname: yup.string().max(45).required("Quel est votre prénom?"),

  Lastname: yup
    .string()
    .max(45)
    .required("Quel est votre nom de famille?"),

  Workstation: yup.string().max(45).required("Quel poste occupez-vous?"),

  Email: yup
    .string()
    .matches(/^[a-zA-Z0-9]+@groupomania.fr$/, "Indiquez votre adresse e-mail Groupomania")
    .min(8)
    .max(150)
    .required("Veuillez nous renseigner une adresse mail 💌"),

  Password: yup
    .string()
    .matches(/^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Votre mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre ainsi qu'un caractère spécial: ?=. [!@#$%^& ()- =+{};:,<.>") 
    .required("Définissez ici votre mot de passe"),
});

module.exports = (req, res, next) => {
  console.log(req.body.email)
  signupSchema
    .validate({
      Firstname: req.body.firstname,
      Lastname: req.body.lastname,
      Workstation: req.body.workstation,
      Email: req.body.email.toLowerCase(),
      Password: req.body.password,
    })
    .then(function (valid) {
      
      next();
     
    })
    .catch(function (err) {
      res.status(400).json({ message: err.errors });
    });
};

