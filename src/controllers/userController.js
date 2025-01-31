import { user } from '../models/User.js';

class UserController {

  // 1. Create a new user
  static async createUser(req, res) {
    try {
      const { firstName, lastName, email, address } = req.body;

      // Validation of mandatory fields
      if (!firstName || !lastName || !email || !address) {
        return res.status(400).json({ error: "all fields required" });
      }

      // create new user
      const newUser = await user.create(req.body);
    
      // Return created user
      res.status(201).json(newUser);
    } catch (error) {
      // Return error
      res.status(500).json({ error: "creation user error", details: error.message });
    }
  }

  // 2. Return all users
  static async getAllUsers(req, res) {
    try {
      const users = await user.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "found user error", details: error.message });
    }
  }

  // 3. Return user by ID
  static async getUserById(req, res) {
    try {
      const { id } = req.params;

      // find user by ID
      const foundUser = await user.findById(id);

      // Checks if the user has been found
      if (!foundUser) {
        return res.status(404).json({ error: "user not found" });
      }

      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json({ error: "found user error", details: error.message });
    }
  }

  // 4. Update user by ID
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { firstName, lastName, email, address } = req.body;

      // Verify exists
      const existingUser = await user.findById(id);
      if (!existingUser) {
        return res.status(404).json({ error: "user not found" });
      }

      // Update user fields
      if (firstName) existingUser.firstName = firstName;
      if (lastName) existingUser.lastName = lastName;
      if (email) existingUser.email = email;
      if (address) existingUser.address = address;

      // Save update
      const updatedUser = await existingUser.save();

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "update user error", details: error.message });
    }
  }

  // 5. Delete user by ID
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;

      // Verify exists
      const existingUser = await user.findById(id);
      if (!existingUser) {
        return res.status(404).json({ error: "user not found" });
      }

      // User delete
      await user.findByIdAndDelete(id);

      res.status(200).json({ message: "deleted user successfully" });
    } catch (error) {
      res.status(500).json({ error: "deleted user error", details: error.message });
    }
  }
}

// Export controller functions
export default UserController;
