//package com.FindingFido;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
// 
//	 @Override
//	    protected void configure(HttpSecurity http) throws Exception {
//	        http
//	            .authorizeRequests()
//		            .antMatchers("/", "/home", "/login","/userServ/login", "/register", "/msgBoard", "/css/**.css", "/js/**").permitAll()
//		            .anyRequest().authenticated() 
//		            .and()
//	            .formLogin()
//		            .loginPage("/login")
//		            .loginProcessingUrl("/userServ/login") //the URL on which the clients should post the login information
//		            .usernameParameter("testuser") //the username parameter in the queryString, default is 'username'
//		            .passwordParameter("password") //the password parameter in the queryString, default is 'password'
//	                .and()
//		         .logout()
//		            .permitAll();
//         	    }
//}