package com.example.quizapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.quizapp.Entities.Quiz;
import com.example.quizapp.Repository.QuizRepository;

@Service
public class QuizService {


@Autowired
    private QuizRepository quizobj;




    public String addQuestion(Quiz question){

            quizobj.save(question);
             return"question added successfully ";

    }

    public List<Quiz> findall() {

        return (List<Quiz>) quizobj.findAll();
    }


    public List<Quiz> getPostsByCategory(String category) {
        return  quizobj.findByCategory(category);
    }







    
    
}
