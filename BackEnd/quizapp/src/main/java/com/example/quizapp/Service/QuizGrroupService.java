package com.example.quizapp.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.quizapp.Entities.QuizGroup;
import com.example.quizapp.Repository.QuizGroupRepository;



@Service
public class QuizGrroupService {


    @Autowired
    private QuizGroupRepository quizrepo;


    public String makeQuiz(QuizGroup quiz){
        quizrepo.save(quiz);
        return "Quiz created successfully";
    }

      public Iterable<QuizGroup> findquiz() {

        return  quizrepo.findAll();
    }


    public QuizGroup findQuizById(long id){
        return this.quizrepo.findById(id).orElse(null);
    }

    public void deleteQuiz(long id){
        quizrepo.deleteById(id);
        
    }

    public String updateQuiz(long id , QuizGroup updatequiz){
    updatequiz.setId(id);
     this.quizrepo.save(updatequiz);
     return "Quiz Updated Successfully" ;

    }
    
}
