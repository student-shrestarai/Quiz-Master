package com.example.quizapp.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.quizapp.Entities.Registration;
import com.example.quizapp.Repository.UserRepository;
import com.example.quizapp.Service.RegistService;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping("/registration")
@CrossOrigin(origins = "http://localhost:3000") 
public class RegistrationController {

    @Autowired
    private RegistService userService;

    @Autowired
    private UserRepository userRepository;

    // POST: Add new user
    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody Registration newUser) {
        String email = newUser.getEmail();
        Optional<Registration> existingUser = userRepository.findByEmail(email);

        if (existingUser.isEmpty()) {
            userService.saveuser(newUser);
            return ResponseEntity.ok("User added successfully");
        } else {
            return ResponseEntity.badRequest().body("User already exists");
        }
    }

    // GET: Get all users
    @GetMapping
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(userService.getuser());
    }

    // GET: Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Integer id) {
        Registration user = userService.getbyId(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("User with ID " + id + " does not exist");
        }
        return ResponseEntity.ok(user);
    }

    // DELETE: Delete user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        Registration user = userService.getbyId(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("User with ID " + id + " does not exist");
        }
        userService.deleteuser(id);
        return ResponseEntity.ok("User with ID " + id + " deleted successfully");
    }

    // PUT: Update user by ID
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Integer id,
                                        @RequestBody Registration updatedUser) {
        Registration user = userService.getbyId(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("User with ID " + id + " does not exist");
        }
        Registration updated = userService.updateuser(id, updatedUser);
        return ResponseEntity.ok(updated);
    }
}
