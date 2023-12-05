package com.csit321.Espanot.Controller;


import com.csit321.Espanot.Service.ReflectionService;
import com.csit321.Espanot.Entity.ReflectionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/reflections")
public class ReflectionController {
    private final ReflectionService reflectionService;

    @Autowired
    public ReflectionController(ReflectionService reflectionService) {
        this.reflectionService = reflectionService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ReflectionEntity>> getAllReflections() {
        return ResponseEntity.ok(reflectionService.getAllReflections());
    }

    @PostMapping("/add")
    public ResponseEntity<ReflectionEntity> saveReflection(@RequestBody ReflectionEntity reflection) {
        return ResponseEntity.ok(reflectionService.saveReflection(reflection));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteReflection(@PathVariable Long id) {
        reflectionService.deleteReflection(id);
        return ResponseEntity.noContent().build();
    }
}