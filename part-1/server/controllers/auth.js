const bcrypt = require('bcryptjs');
const users = []

class User {
  constructor(username, email, firstName, lastName, password){
  this.username = username;
  this.email = email;
  this.firstName = firstName;
  this.lastName = lastName;
  this.password = password;
  }

}

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      //console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password,salt)
        if (users[i].username === username && bcrypt.compareSync(password,hash)) {
          var userCopy = users[i]
          delete userCopy.password

          res.status(200).send(userCopy)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        //console.log(req.body)

        let {username, email, firstName, lastName, password} = req.body
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password,salt)


        let newUser = new User(username, email, firstName, lastName, hash)
        console.log(newUser)
        users.push(newUser)
        res.status(200).send(req.body)
    }
}