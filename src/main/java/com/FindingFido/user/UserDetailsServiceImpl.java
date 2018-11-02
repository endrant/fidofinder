package com.FindingFido.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
 
    @Autowired
    private UserRepo userRepo;
 
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<Users> users = this.userRepo.findByusername(username);
 
        if (users == null) {
            System.out.println("User not found! " + username);
            throw new UsernameNotFoundException("User " + username + " was not found in the database");
        }
 
        System.out.println("Found User: " + users);
 
        UserDetails userDetails = (UserDetails) new Users(getUser());
        System.out.println(username);
        
        return userDetails;
    }

	private Object getUser() {
		// TODO Auto-generated method stub
		return null;
	}
 
}