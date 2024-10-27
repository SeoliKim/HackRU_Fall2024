package com.hackru.harmonihealth.controller;

import com.hackru.harmonihealth.models.UserEntity;

public class userController {
    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    public UserEntity postPerson(@RequestBody UserEntity user) {
        return personService.save(user);
    }

    @PostMapping("persons")
    @ResponseStatus(HttpStatus.CREATED)
    public List<PersonDTO> postPersons(@RequestBody List<PersonDTO> personEntities) {
        return personService.saveAll(personEntities);
    }

    @GetMapping("persons")
    public List<PersonDTO> getPersons() {
        return personService.findAll();
    }

    @GetMapping("person/{id}")
    public ResponseEntity<PersonDTO> getPerson(@PathVariable String id) {
        PersonDTO PersonDTO = personService.findOne(id);
        if (PersonDTO == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return ResponseEntity.ok(PersonDTO);
    }

    @GetMapping("persons/{ids}")
    public List<PersonDTO> getPersons(@PathVariable String ids) {
        List<String> listIds = List.of(ids.split(","));
        return personService.findAll(listIds);
    }

    @GetMapping("persons/count")
    public Long getCount() {
        return personService.count();
    }

    @DeleteMapping("person/{id}")
    public Long deletePerson(@PathVariable String id) {
        return personService.delete(id);
    }

    @DeleteMapping("persons/{ids}")
    public Long deletePersons(@PathVariable String ids) {
        List<String> listIds = List.of(ids.split(","));
        return personService.delete(listIds);
    }

    @DeleteMapping("persons")
    public Long deletePersons() {
        return personService.deleteAll();
    }

    @PutMapping("person")
    public PersonDTO putPerson(@RequestBody PersonDTO PersonDTO) {
        return personService.update(PersonDTO);
    }

    @PutMapping("persons")
    public Long putPerson(@RequestBody List<PersonDTO> personEntities) {
        return personService.update(personEntities);
    }

    @GetMapping("persons/averageAge")
    public Double averageAge() {
        return personService.getAverageAge();
    }

    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public final Exception handleAllExceptions(RuntimeException e) {
        LOGGER.error("Internal server error.", e);
        return e;
    }
}
