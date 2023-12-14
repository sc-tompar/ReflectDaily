package com.csit321.Espanot.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import com.csit321.Espanot.LoginRequest;
import com.csit321.Espanot.Entity.UserEntity;
import com.csit321.Espanot.Service.UserService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserEntity user) {
        return userService.registerUser(user); 
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            UserEntity user = userService.getUserByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
            // Create a Map or a DTO to send necessary user information
            Map<String, Object> response = new HashMap<>();
            response.put("firstName", user.getFirstName());
            response.put("lastName", user.getLastName());
            response.put("email", user.getEmail());
            // Add more fields as necessary but DO NOT include sensitive data like password
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid email or password");
        }
    }

 

    @GetMapping("/getAllUsers")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping("/updateUser/{userId}")
    public UserEntity updateUser(@PathVariable Long userId, @RequestBody UserEntity newUserDetails) {
        return userService.updateUser(userId, newUserDetails);
    }

    @DeleteMapping("/deleteUser/{userId}")
    public String deleteUser(@PathVariable Long userId) {
        return userService.deleteUser(userId);
    }
    
    
    
    @DeleteMapping("/deleteAllUsers")
    public String deleteAllUsers() {
        // Logic to delete all users
        userService.deleteAllUsers();
        return "All users deleted successfully!";
    }
}