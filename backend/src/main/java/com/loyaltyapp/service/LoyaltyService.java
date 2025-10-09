package com.loyaltyapp.service;

import com.loyaltyapp.model.LoyaltyCustomer;
import com.loyaltyapp.repository.LoyaltyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoyaltyService {

    private final LoyaltyRepository repo;

    public LoyaltyService(LoyaltyRepository repo) {
        this.repo = repo;
    }

    public List<LoyaltyCustomer> findAll() {
        return repo.findAll();
    }

    public Optional<LoyaltyCustomer> findById(Long id) {
        return repo.findById(id);
    }

    public LoyaltyCustomer save(LoyaltyCustomer c) {
        return repo.save(c);
    }

    public void deleteById(Long id) {
        repo.deleteById(id);
    }
}
