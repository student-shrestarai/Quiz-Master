package com.example.quizapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.quizapp.Entities.Registration;
import com.example.quizapp.Repository.UserRepository;


@Service
public class RegistService {
     @Autowired
    private  UserRepository user_repo;

    public Registration saveuser( Registration newuser){
        return this.user_repo.save(newuser);
    }

    public Iterable<Registration> getuser(){
        return this.user_repo.findAll();
    }

      
    public Registration getbyId(Integer id) {
        return this.user_repo.findById(id).orElse(null);
    }



    public void deleteuser(Integer id) {

        this.user_repo.deleteById(id);

    }


    public Registration updateuser(Integer id , Registration updateduser) {
       
        updateduser.setId(id);
        return this.user_repo.save(updateduser);
    }






    


    
}
