package com.FindingFido.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders="*")
@RequestMapping("/api/userServ")
public class UserController {
	
	@Autowired
	private UserRepo userRepo;
	

	@GetMapping("/getUser/{username}")
	public List<Users> getUser(@PathVariable("username")String username){
		List<Users> users = userRepo.findByusername(username);
		System.out.println(users);
		return users;
	}
	
	@RequestMapping(value="/register", method= {RequestMethod.POST,RequestMethod.GET})
	public @ResponseBody String registerUser(String username, String password, String firstName, String lastName, String streetAddress, String state, Integer zipCode, String city, String email, String phone) {
		Users u = new Users();
		
		u.setUsername(username);
		u.setPassword(password);
		u.setFirstName(firstName);
		u.setLastName(lastName);
		u.setStreetAddress(streetAddress);
		u.setCity(city);
		u.setState(state);
		u.setZip(zipCode);
		u.setEmail(email);
		u.setPhone(phone);
		userRepo.saveAll();
		return "Saved";
	}
}
