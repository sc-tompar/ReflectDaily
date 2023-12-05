package com.csit321.Espanot.Repository;
import com.csit321.Espanot.Entity.ReflectionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReflectionRepository extends JpaRepository<ReflectionEntity, Long> {
    // You can add custom queries here if needed
}