package com.hackru.harmonihealth.models;

import lombok.Getter;

import java.time.LocalDateTime;


@Getter
public class UserEntity {
    private String email;
    private String username;
    private UserRole role;
    private String bio;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public enum UserRole {
        MEMBER,
        PROFESSIONAL,
        MODERATOR,
    }

    // Default constructor
    public UserEntity() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.role = UserRole.MEMBER;  // Default role
    }

    // Constructor with essential fields
    public UserEntity(String email, String username, int role) {
        this();
        this.email = email;
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
        this.updatedAt = LocalDateTime.now();
    }

    public void setUsername(String username) {
        this.username = username;
        this.updatedAt = LocalDateTime.now();
    }

    public void setRole(UserRole role) {
        this.role = role;
        this.updatedAt = LocalDateTime.now();
    }

    public void setBio(String bio) {
        this.bio = bio;
        this.updatedAt = LocalDateTime.now();
    }

    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

}