package com.loyaltyapp.model;

import javax.persistence.*;

@Entity
@Table(name = "LOYALTY_CUSTOMER")
public class LoyaltyCustomer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private Integer points;

    public LoyaltyCustomer() {}

    public LoyaltyCustomer(String name, String email, Integer points) {
        this.name = name;
        this.email = email;
        this.points = points;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }
}
