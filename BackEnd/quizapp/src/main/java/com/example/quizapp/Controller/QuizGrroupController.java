package com.example.quizapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.quizapp.Entities.Quiz;
import com.example.quizapp.Entities.QuizGroup;
import com.example.quizapp.Entities.Registration;
import com.example.quizapp.Repository.QuizGroupRepository;
import com.example.quizapp.Service.QuizGrroupService;





@RestController
@RequestMapping("/quizGroup")
@CrossOrigin(origins = "http://localhost:3000") 

public class QuizGrroupController {
@Autowired
private QuizGrroupService quiz_service;


    @PostMapping
    public  ResponseEntity<?>CreateQuiz(@RequestBody QuizGroup Quiz){
        this.quiz_service.makeQuiz(Quiz);
          return ResponseEntity.ok("Quiz Created Succesfully");

    }

    @GetMapping
    public Iterable<QuizGroup> getQuiz(){
        return this.quiz_service.findquiz();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getQuizById(@PathVariable Long id){
        QuizGroup q = quiz_service.findQuizById(id);
        if (q == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("Quiz with ID " + id + " does not exist");
        }
        return ResponseEntity.ok(q);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
         QuizGroup q  = quiz_service.findQuizById(id);
        if (q == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("Quiz with ID " + id + " does not exist");
        }
        quiz_service.deleteQuiz(id);
        return ResponseEntity.ok("Quiz with ID " + id + " deleted successfully");
    }

    // PUT: Update user by ID
    @PutMapping("/{id}")
    public ResponseEntity<?> updateQuiz(@PathVariable Integer id,
                                        @RequestBody QuizGroup updatedquiz) {
        QuizGroup q  = quiz_service.findQuizById(id);
        if (q == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("Quiz with ID " + id + " does not exist");
        }
        quiz_service.updateQuiz(id ,updatedquiz);
        return ResponseEntity.ok("Quiz with ID " + id + " updated successfully");
    }
    }

    

