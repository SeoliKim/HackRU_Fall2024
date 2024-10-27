package com.hackru.harmonihealth.repositories;

import com.hackru.harmonihealth.models.MatchEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

public interface MatchRepository extends MongoRepository<MatchEntity, String> {
    public MatchEntity findByMatchID(String matchID);
    public List<MatchEntity> findByEmail(String email);
}