package com.example.quizapp.Entities;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import jakarta.persistence.Id;


@Data
@Entity

public class Registration {

    public Integer getId() {
        return Id;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
     public enum Role {
        ADMIN, USER
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Integer Id;

    @NotBlank(message = "Full name cannot be empty")
    private String fullName ;

    @Column(nullable = false , unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;



    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime  createdAt;




    public void setFullname(String fullName) {
        this.fullName = (fullName != null) ? fullName.trim() : null;
    }


    public String getEmail(){
        return this.email;
    }

    public void setId(int Id)
    {
        this.Id=Id;
    }

    public String getPassword(){
        return this.password ;
    
    }

  


    
}
