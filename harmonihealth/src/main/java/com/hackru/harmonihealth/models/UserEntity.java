package com.hackru.harmonihealth.models;

import java.time.LocalDateTime;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
        this.updatedAt = LocalDateTime.now();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
        this.updatedAt = LocalDateTime.now();
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
        this.updatedAt = LocalDateTime.now();
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
        this.updatedAt = LocalDateTime.now();
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

}