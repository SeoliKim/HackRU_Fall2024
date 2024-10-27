package com.hackru.harmonihealth.repositories;

import com.hackru.harmonihealth.models.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

public interface UserRepository extends MongoRepository<UserEntity, String> {
    public UserEntity findByUsername(String username);
    public UserEntity findByEmail(String email);
}