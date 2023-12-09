package com.csit321.Espanot.Service;

import com.csit321.Espanot.Entity.QuoteEntity;
import com.csit321.Espanot.Repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class QuoteService {

    @Autowired
    private QuoteRepository quoteRepository;
    
    public QuoteEntity saveQuote(QuoteEntity quote) {
        return quoteRepository.save(quote);
    }

    public void deleteQuote(Long id) {
        quoteRepository.deleteById(id);
    }

    public List<QuoteEntity> getAllQuotes() {
        return quoteRepository.findAll();
    }

    public QuoteEntity getQuoteById(Long id) {
        Optional<QuoteEntity> quote = quoteRepository.findById(id);
        return quote.orElse(null);
    }

    public QuoteEntity toggleFavorite(Long id) {
        Optional<QuoteEntity> quote = quoteRepository.findById(id);
        if (quote.isPresent()) {
            QuoteEntity updatedQuote = quote.get();
            updatedQuote.setIsFavorite(!updatedQuote.getIsFavorite());
            return quoteRepository.save(updatedQuote);
        }
        return null;
    }
}
