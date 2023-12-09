package com.csit321.Espanot.Repository;

import com.csit321.Espanot.Entity.QuoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuoteRepository extends JpaRepository<QuoteEntity, Long> {
}
