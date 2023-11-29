package com.csit321.Espanot.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.csit321.Espanot.Entity.UserEntity;
import com.csit321.Espanot.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<?> registerUser(UserEntity user) {
        try {
            if (user == null) {
                throw new IllegalArgumentException("User entity cannot be null");
            }

            // Validate if required fields are present
            if (user.getFirstName() == null || user.getLastName() == null || user.getEmail() == null || user.getPassword() == null) {
                throw new IllegalArgumentException("All fields (firstName, lastName, email, password) are required");
            }

            // Validate email format
            String emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$";
            if (!user.getEmail().matches(emailRegex)) {
                throw new IllegalArgumentException("Invalid email format");
            }

            // Validate password
            String password = user.getPassword();
            if (password.length() < 8 || !password.matches(".*[a-z].*") || !password.matches(".*[A-Z].*")) {
                throw new IllegalArgumentException("Password must be at least 8 characters and include both upper and lower case");
            }

            // Check if the email is already registered
            if (userRepository.findByEmail(user.getEmail()).isPresent()) {
                throw new IllegalArgumentException("Email is already registered");
            }

            // Save the user if all validations pass
            UserEntity savedUser = userRepository.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);

        } catch (IllegalArgumentException e) {
            Map<String, String> errors = new HashMap<>();
            errors.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(errors);

        } catch (Exception e) {
            Map<String, String> errors = new HashMap<>();
            errors.put("error", "An unexpected error occurred.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errors);
        }
    }
    
    
    public UserEntity getUserByEmailAndPassword(String email, String password) {
        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        // Here you should compare the password with the one stored in the database.
        // This is a simplistic example and you should implement proper password encryption and checking.
        // For instance, you could use BCryptPasswordEncoder in a real application.
        if (!password.equals(user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        return user;
    }

    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    @SuppressWarnings("finally")
    public UserEntity updateUser(Long userId, UserEntity newUserDetails) {
        UserEntity user = new UserEntity();
        try {
            user = userRepository.findById(userId).get();
            user.setFirstName(newUserDetails.getFirstName());
            user.setLastName(newUserDetails.getLastName());
            user.setEmail(newUserDetails.getEmail());
            user.setPassword(newUserDetails.getPassword());
        } catch (NoSuchElementException ex) {
            throw new NoSuchElementException("User " + userId + " does not exist!");
        } finally {
            return userRepository.save(user);
        }
    }

    public String deleteUser(Long userId) {
        String msg = "";
        if (userRepository.findById(userId).isPresent()) {
            userRepository.deleteById(userId);
            msg = "User " + userId + " is successfully deleted!";
        } else
            msg = "User " + userId + " does not exist.";
        return msg;
    }
    
    
    
    public void deleteAllUsers() {
        userRepository.deleteAll();
    }
}