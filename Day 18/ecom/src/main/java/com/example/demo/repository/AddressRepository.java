package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
