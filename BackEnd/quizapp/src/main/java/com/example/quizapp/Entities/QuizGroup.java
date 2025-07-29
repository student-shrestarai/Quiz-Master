package com.example.quizapp.Entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

 @Entity
@Table(name = "quiz_groups")
public class QuizGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false)
    private String title;

    @Column(nullable=false)
    private String category;

    @ManyToOne
    @JoinColumn(name="created_by")
    private Registration createdBy;

    @OneToMany(mappedBy="quizGroup", cascade=CascadeType.ALL)
    private List<Quiz> questions = new ArrayList<>();


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Registration getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Registration createdBy) {
        this.createdBy = createdBy;
    }

    public List<Quiz> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Quiz> questions) {
        this.questions = questions;
    }

    
    // Getters and setters

    
}
