package com.loyaltyapp.repository;

import com.loyaltyapp.model.LoyaltyCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoyaltyRepository extends JpaRepository<LoyaltyCustomer, Long> {
    // additional query methods if needed
}
