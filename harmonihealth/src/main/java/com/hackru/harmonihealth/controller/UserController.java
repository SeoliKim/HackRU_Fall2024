package com.hackru.harmonihealth.controller;

import com.hackru.harmonihealth.models.UserEntity;
import com.hackru.harmonihealth.services.UserService;
import com.hackru.harmonihealth.web.requests.SearchUserRequest;
import com.hackru.harmonihealth.web.requests.UpdateUserRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService<UserEntity> userService;

    @GetMapping("/get-user")
    public ResponseEntity<UserEntity> getUser(SearchUserRequest request) {
        UserEntity user = userService.getUser(request);
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/save-user")
    public ResponseEntity<UserEntity> createUser(@RequestBody @Valid UpdateUserRequest request) {
        UserEntity user = userService.insertUser(request);
        return ResponseEntity.ok().body(user);
    }

    @PutMapping("/update-user")
    public ResponseEntity<UserEntity> updateUser(@RequestBody @Valid UpdateUserRequest request) {
        UserEntity user = userService.updateUser(request);
        return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("/delete-user")
    public ResponseEntity<UserEntity> deleteUser(@RequestBody @Valid UpdateUserRequest request) {
        UserEntity user = userService.updateUser(request);
        return ResponseEntity.ok().body(user);
    }

//    public PersonController(PersonService personService) {
//        this.personService = personService;
//    }
//
//    public UserEntity postPerson(@RequestBody UserEntity user) {
//        return personService.save(user);
//    }
//
//    @PostMapping("persons")
//    @ResponseStatus(HttpStatus.CREATED)
//    public List<PersonDTO> postPersons(@RequestBody List<PersonDTO> personEntities) {
//        return personService.saveAll(personEntities);
//    }
//
//    @GetMapping("persons")
//    public List<PersonDTO> getPersons() {
//        return personService.findAll();
//    }
//
//    @GetMapping("person/{id}")
//    public ResponseEntity<PersonDTO> getPerson(@PathVariable String id) {
//        PersonDTO PersonDTO = personService.findOne(id);
//        if (PersonDTO == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        return ResponseEntity.ok(PersonDTO);
//    }
//
//    @GetMapping("persons/{ids}")
//    public List<PersonDTO> getPersons(@PathVariable String ids) {
//        List<String> listIds = List.of(ids.split(","));
//        return personService.findAll(listIds);
//    }
//
//    @GetMapping("persons/count")
//    public Long getCount() {
//        return personService.count();
//    }
//
//    @DeleteMapping("person/{id}")
//    public Long deletePerson(@PathVariable String id) {
//        return personService.delete(id);
//    }
//
//    @DeleteMapping("persons/{ids}")
//    public Long deletePersons(@PathVariable String ids) {
//        List<String> listIds = List.of(ids.split(","));
//        return personService.delete(listIds);
//    }
//
//    @DeleteMapping("persons")
//    public Long deletePersons() {
//        return personService.deleteAll();
//    }
//
//    @PutMapping("person")
//    public PersonDTO putPerson(@RequestBody PersonDTO PersonDTO) {
//        return personService.update(PersonDTO);
//    }
//
//    @PutMapping("persons")
//    public Long putPerson(@RequestBody List<PersonDTO> personEntities) {
//        return personService.update(personEntities);
//    }
//
//    @GetMapping("persons/averageAge")
//    public Double averageAge() {
//        return personService.getAverageAge();
//    }
//
//    @ExceptionHandler(RuntimeException.class)
//    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//    public final Exception handleAllExceptions(RuntimeException e) {
//        LOGGER.error("Internal server error.", e);
//        return e;
//    }
}
