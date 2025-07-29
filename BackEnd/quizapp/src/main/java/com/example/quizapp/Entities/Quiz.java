package com.example.quizapp.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;





@Entity
@Table(name = "Quiz")
public class Quiz {

    @ManyToOne
@JoinColumn(name = "quiz_group_id")
private QuizGroup quizGroup;



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id ; 
      

     @Column(nullable = false)
    private String question;

    @Column(nullable = false)
    private String option1;

    @Column(nullable = false)
    private String option2;

    @Column(nullable = false)
    private String option3;
 
    @Column(nullable = false)
    private String option4;



    @Column(nullable = false)
    private String answer;

    @Column(nullable = false)
    private String category;

    

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getOption1() {
        return option1;
    }

    public void setOption1(String option1) {
        this.option1 = option1;
    }

    public String getOption2() {
        return option2;
    }

    public void setOption2(String option2) {
        this.option2 = option2;
    }

    public String getOption3() {
        return option3;
    }

    public void setOption3(String option3) {
        this.option3 = option3;
    }

    public String getOption4() {
        return option4;
    }

    public void setOption4(String option4) {
        this.option4 = option4;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }


    public void setCategory(String category) {
       this.category=category;
    }
     public String getCategory() {
        return category;
    }
    

    
}
