package com.example.quizapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.quizapp.Entities.Quiz;
import com.example.quizapp.Service.QuizService;


@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "http://localhost:3000") 

public class QuizController {


    @Autowired
    private QuizService  quizservice ;

     @PostMapping("/addq")
     public String addQuestion(@RequestBody Quiz question)
     {
           quizservice.addQuestion(question);
           return "question saved " ;
     }

     @GetMapping("/getallq")
     public List<Quiz> getquestion(){

       return  quizservice.findall() ;
       
     }

    @GetMapping("/category/{category}")
    public List<Quiz> getPostsByCategory(@PathVariable String category) {
        return quizservice.getPostsByCategory(category);
    }
    
}
