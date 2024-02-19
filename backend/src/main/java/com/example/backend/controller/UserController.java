package com.example.backend.controller;

import com.example.backend.model.user.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("http://localhost:")
@RestController
public class UserController {
    @PostMapping("/register")
    public ResponseEntity<Boolean> addUser(@RequestBody User user){
    }
    @DeleteMapping("/{username}/remove-user")
    public ResponseEntity<Boolean> removeUser(@PathVariable String username){}
    @PutMapping("/{username}/update-password")
    public ResponseEntity<Boolean> updatePassword(@RequestBody User user, @PathVariable String username){}
    @PostMapping("/login")
    public ResponseEntity<Boolean> loginAuth(@RequestBody User user){}
}
