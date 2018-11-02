package com.FindingFido.homepage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class HomepageController {

	@Autowired
	HomepageRepo homepageRepo;
	
	@GetMapping("/home")
	public List<Homepage> getHomeData(){
		List<Homepage> foundData = homepageRepo.findAll();
		return foundData;
	}
	
//	@PostMapping("/api/home")
//	public ResponseEntity<Homepage> postMessage(@RequestBody Homepage homepage){
//
//	    // Saving to DB using an instance of the repo Interface.
//	    Homepage createdHome = homepageRepo.save(homepage);
//
//	    // RespEntity crafts response to include correct status codes.
//	    return ResponseEntity.ok(createdHome);
//	}
//	
//	
}
