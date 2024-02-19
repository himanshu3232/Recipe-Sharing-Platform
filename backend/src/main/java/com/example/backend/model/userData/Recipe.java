package com.example.backend.model.userData;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="recipe")
public class Recipe {
    @Id
    private String username;
    @Column(name="header")
    private String header;
    @Column(name="body")
    private String body;
}
