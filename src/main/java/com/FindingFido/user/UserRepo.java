package com.FindingFido.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepo extends JpaRepository<Users, Long>{

	List<Users> findByusername(String username);
	List<Users> saveAll();
}