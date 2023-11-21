package com.csit321.Espanot.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321.Espanot.Entity.UserEntity;
import com.csit321.Espanot.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserEntity registerUser(UserEntity user) {
        // Additional logic for user registration (e.g., validation)
    	
    	 if (user == null) {
    	        throw new IllegalArgumentException("User entity cannot be null");
    	    }

    	    // Validate if required fields are present
    	    if (user.getFirstName() == null || user.getLastName() == null || user.getEmail() == null || user.getPassword() == null) {
    	        throw new IllegalArgumentException("All fields (firstName, lastName, email, password) are required");
    	    }

    	    String emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$";
            if (!user.getEmail().matches(emailRegex)) {
                throw new IllegalArgumentException("Invalid email format");
            }

            // Check if the email is already registered
            if (userRepository.findByEmail(user.getEmail()).isPresent()) {
                throw new IllegalArgumentException("Email is already registered");
            }
    	
        return userRepository.save(user);
    }
    
    
    public UserEntity getUserByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password)
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));
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
