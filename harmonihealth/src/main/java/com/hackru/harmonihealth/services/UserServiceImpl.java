package com.hackru.harmonihealth.services;

import com.hackru.harmonihealth.exceptions.RecordNotFoundException;
import com.hackru.harmonihealth.models.UserEntity;
import com.hackru.harmonihealth.repositories.UserRepository;
import com.hackru.harmonihealth.web.requests.SearchUserRequest;
import com.hackru.harmonihealth.web.requests.UpdateUserRequest;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class UserServiceImpl implements UserService<UserEntity> {
    private final UserRepository userRepository;

    @Override
    public UserEntity getUser(SearchUserRequest request) {
        UserEntity user = userRepository.findByEmail(request.getEmail());
        return user;
    }

    @Override
    public UserEntity insertUser(UpdateUserRequest request) {
        UserEntity user = new UserEntity(request.getEmail(), request.getUsername(), request.getRole());
        userRepository.save(user);
        return user;
    }

    @Override
    public UserEntity updateUser(UpdateUserRequest request) {
        Optional<UserEntity> userEntityOptional = Optional.ofNullable(userRepository.findByEmail(request.getEmail()));
        if (userEntityOptional.isEmpty()) {
            throw new RecordNotFoundException("Could not update: No user was found with email: " + request.getEmail());
        }
        else {
            UserEntity user = userEntityOptional.get();
            user.setUsername(request.getUsername());
            user.setEmail(request.getEmail());
            user.setRole(UserEntity.UserRole.values()[request.getRole()]);
        }
        return userEntityOptional.get();
    }

    @Override
    public UserEntity deleteUser(UpdateUserRequest request) {
        Optional<UserEntity> userEntityOptional = Optional.ofNullable(userRepository.findByEmail(request.getEmail()));
        if (userEntityOptional.isEmpty()) {
            throw new RecordNotFoundException("Could not delete: No user was found with email: " + request.getEmail());
        }
        else {
            userRepository.delete(userEntityOptional.get());
        }

        return userEntityOptional.get();
    }

}
