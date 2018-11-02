package com.FindingFido.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders="*")
@RequestMapping("/api/userServ")
public class UserController {
	
	@Autowired
	private UserRepo userRepo;
	
	@GetMapping("/login")
	public String loginPage(Model Model) {
	return "loginPage";}
	
	@GetMapping("/getUser/{username}")
	public List<Users> getUser(@PathVariable("username")String username){
		List<Users> users = userRepo.findByusername(username);
		return users;
	}
	
	@PostMapping("/register")
	public @ResponseBody String registerUser(@RequestParam String username, @RequestParam String password, @RequestParam String firstName, @RequestParam String lastName,@RequestParam String streetAddress, @RequestParam String state, @RequestParam(required=false) int zipCode, @RequestParam String city, @RequestParam String email, @RequestParam String phone) {
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
		userRepo.save(u);
		return "Saved";
	}
}
