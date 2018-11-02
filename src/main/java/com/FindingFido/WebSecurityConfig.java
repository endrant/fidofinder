package com.FindingFido;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.FindingFido.user.UserDetailsServiceImpl;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	UserDetailsServiceImpl userDetailsService;
	
	@Autowired
    public void configureGlobalAuth(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
            //pages not requiring login
                .antMatchers("/api/home", "/login/", "/api/userServ/login", "/userServ/register", "/css/**", "/js/**").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/userServ/login")
                .defaultSuccessUrl("/userServ/getUser")
                .usernameParameter("username")
                .passwordParameter("password")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }

    
    
}