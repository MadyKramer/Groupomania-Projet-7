const yup = require("yup");

const signupSchema = yup.object().shape({


  Firstname: yup.string().min(3).max(45).required("Quel est votre prénom?"),

  Lastname: yup
    .string()
    .min(3)
    .max(45)
    .required("Quel est votre nom de famille?"),

  Workstation: yup.string().min(4).max(45).required("Quel poste occupez-vous?"),

  Email: yup
    .string()
    .matches("^[A-Za-z0-9._%+-]+@groupomania.fr$")
    .min(8)
    .max(150)
    .required("Veuillez nous renseigner une adresse mail 💌"),

  Password: yup
    .string()
    .matches(/[a-zA-Z1-9]+/) 
    .min(6)
    .max(255)
    .required("Définissez ici votre mot de passe"),
});

module.exports = (req, res, next) => {
  console.log()
  signupSchema
    .validate({
      Firstname: req.body.firstname,
      Lastname: req.body.lastname,
      Workstation: req.body.workstation,
      Email: req.body.email,
      Password: req.body.password,
    })
    .then(function (valid) {
      
      next();
     
    })
    .catch(function (err) {
      res.status(400).json({ message: err.errors });
    });
};

