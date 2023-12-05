package com.csit321.Espanot.Service;


import com.csit321.Espanot.Entity.ReflectionEntity;
import com.csit321.Espanot.Repository.ReflectionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReflectionService {
    private final ReflectionRepository reflectionRepository;

    @Autowired
    public ReflectionService(ReflectionRepository reflectionRepository) {
        this.reflectionRepository = reflectionRepository;
    }

    public List<ReflectionEntity> getAllReflections() {
        return reflectionRepository.findAll();
    }

    public ReflectionEntity saveReflection(ReflectionEntity reflection) {
        return reflectionRepository.save(reflection);
    }

    public void deleteReflection(Long id) {
        reflectionRepository.deleteById(id);
    }
}