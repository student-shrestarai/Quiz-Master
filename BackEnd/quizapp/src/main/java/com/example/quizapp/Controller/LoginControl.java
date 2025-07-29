package com.example.quizapp.Controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.quizapp.Entities.Login;
import com.example.quizapp.Entities.Registration;
import com.example.quizapp.Repository.LoginRepo;
import com.example.quizapp.Repository.UserRepository;



@RestController
@RequestMapping("/Login")
@CrossOrigin(origins = "http://localhost:3000") 
public class LoginControl {

    @Autowired
    private LoginRepo logrepo;

    @Autowired
    private UserRepository userrepo;


    @PostMapping
    public ResponseEntity<?> validateUser (@RequestBody Login loguser){
        String gmail = loguser.getEmail();
        String log_pass = loguser.getPassword();

    Optional<Registration> user_reg = userrepo.findByEmail(gmail);
    
    if(!user_reg.isPresent()) {
    return ResponseEntity.badRequest().body("User does not exist , please register");

        
    }
    else{

        Registration user = user_reg.get();
    String reg_pass = user.getPassword();


        if(reg_pass.equals(log_pass)){
            Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("id", user.getId());
        response.put("name", user.getFullName());
        response.put("email", user.getEmail());
        response.put("role", user.getRole());

        return ResponseEntity.ok(response);
        }
        else{

            return ResponseEntity.badRequest().body("Passowrd does not match");

        }

    }
    
}
}

