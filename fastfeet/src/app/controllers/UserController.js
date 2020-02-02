class UserController {

  async store(req, res) {
    const {name, email} = req.body;
  }

}

export default new UserController();