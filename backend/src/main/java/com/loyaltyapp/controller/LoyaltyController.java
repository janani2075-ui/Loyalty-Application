package com.loyaltyapp.controller;

import com.loyaltyapp.model.LoyaltyCustomer;
import com.loyaltyapp.service.LoyaltyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:3000") // allow React dev server
public class LoyaltyController {

    private final LoyaltyService service;

    public LoyaltyController(LoyaltyService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<LoyaltyCustomer>> getAll() {
        List<LoyaltyCustomer> all = service.findAll();
        return ResponseEntity.ok(all);
    }

    @PostMapping
    public ResponseEntity<LoyaltyCustomer> create(@RequestBody LoyaltyCustomer customer) {
        LoyaltyCustomer saved = service.save(customer);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LoyaltyCustomer> update(@PathVariable Long id, @RequestBody LoyaltyCustomer payload) {
        return service.findById(id)
                .map(existing -> {
                    existing.setName(payload.getName());
                    existing.setEmail(payload.getEmail());
                    existing.setPoints(payload.getPoints());
                    LoyaltyCustomer updated = service.save(existing);
                    return ResponseEntity.ok(updated);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
