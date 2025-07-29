package com.example.quizapp.Entities;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String quizTitle;
    private String userEmail;
    private int score;
    private LocalDate date;

    public Result() {}

    public Result(String quizTitle, String userEmail, int score, LocalDate date) {
        this.quizTitle = quizTitle;
        this.userEmail = userEmail;
        this.score = score;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public String getQuizTitle() {
        return quizTitle;
    }

    public void setQuizTitle(String quizTitle) {
        this.quizTitle = quizTitle;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
