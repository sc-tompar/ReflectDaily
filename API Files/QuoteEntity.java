package com.csit321.Espanot.Entity;

import javax.persistence.*;

@Entity
@Table(name = "tblQuote")
public class QuoteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quote_id")
    private Long id;

    @Column(name = "quote_text", columnDefinition = "TEXT")
    private String quote;

    @Column(name = "author", length = 255)
    private String author;

    @Column(name = "is_favorite")
    private Boolean isFavorite;

    public QuoteEntity() {
    }

    public QuoteEntity(String quote, String author, Boolean isFavorite) {
        this.quote = quote;
        this.author = author;
        this.isFavorite = isFavorite;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Boolean getIsFavorite() {
        return isFavorite;
    }

    public void setIsFavorite(Boolean isFavorite) {
        this.isFavorite = isFavorite;
    }
}
