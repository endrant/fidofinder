package com.FindingFido;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FindingFidoApplication {

	public static void main(String[] args) {
		SpringApplication.run(FindingFidoApplication.class, args);
		
		
		Connection con;
		
		try {
			con = DriverManager.getConnection("jdbc:sqlite:./fidofinder.db", "", "");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        
		
	}
}
