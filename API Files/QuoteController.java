package com.csit321.Espanot.Controller;

import com.csit321.Espanot.Entity.QuoteEntity;
import com.csit321.Espanot.Service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quote")
@CrossOrigin
public class QuoteController {

    @Autowired
    private QuoteService quoteService;
    
    @PostMapping("/create")
    public ResponseEntity<QuoteEntity> createQuote(@RequestBody QuoteEntity quoteEntity) {
        QuoteEntity savedQuote = quoteService.saveQuote(quoteEntity);
        if (savedQuote != null) {
            return ResponseEntity.ok(savedQuote);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<QuoteEntity> updateQuote(@PathVariable Long id, @RequestBody QuoteEntity quoteDetails) {
        QuoteEntity quote = quoteService.getQuoteById(id);
        if (quote != null) {
            quote.setQuote(quoteDetails.getQuote());
            quote.setAuthor(quoteDetails.getAuthor());
            QuoteEntity updatedQuote = quoteService.saveQuote(quote);
            return ResponseEntity.ok(updatedQuote);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteQuote(@PathVariable Long id) {
        QuoteEntity quote = quoteService.getQuoteById(id);
        if (quote != null) {
            quoteService.deleteQuote(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
    
    @GetMapping("/getAll")
    public ResponseEntity<List<QuoteEntity>> getAllQuotes() {
        return ResponseEntity.ok(quoteService.getAllQuotes());
    }

    @PutMapping("/toggleFavorite/{id}")
    public ResponseEntity<QuoteEntity> toggleFavorite(@PathVariable Long id) {
        QuoteEntity updatedQuote = quoteService.toggleFavorite(id);
        if (updatedQuote != null) {
            return ResponseEntity.ok(updatedQuote);
        }
        return ResponseEntity.notFound().build();
    }
}
