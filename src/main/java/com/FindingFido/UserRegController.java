package com.FindingFido.controllers;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import org.hibernate.boot.model.relational.Database;
import com.fido.UserReg;


	public class UserRegController extends UserReg{
	    
	    Database db;
	    Connection con;
	    PreparedStatement pst;
	    
	    public UserRegController() throws SQLException {
	        super();
	        db = new Database(null, null);
	        con = ((Statement) db).getConnection();
	    }
	    
	    public int createAccount(UserReg u) {
	        int res = 0;
	        String sql = "";
	        
	        try {
	            sql = "INSERT INTO user(`id`,`name`,`email`,`password`) VALUES(NULL, ?, ?, ?)";
	            pst = con.prepareStatement(sql);
	            
	            pst.setString(1, u.getName());
	            pst.setString(2, u.getEmail());
	            pst.setString(3, u.getPassword());
	            
	            res = pst.executeUpdate();
	            
	        } catch (SQLException e) {
	            System.out.println(e.getMessage());
	        }
	        
	        return res;
	    }
	    
	    public boolean checkLogin(UserReg u) {
	        
	        String sql = "";
	        ResultSet rs = null;
	        
	        try {
	            sql = "SELECT * FROM user WHERE email = ? and password = ?";
	            pst = con.prepareStatement(sql);
	            
	            pst.setString(1, u.getEmail());
	            pst.setString(2, u.getPassword());
	            
	            rs = pst.executeQuery();
	            
	            if (rs.next()) {
	                return true;
	            } else {
	                return false;
	            }
	            
	            
	        } catch(SQLException e) {
	            System.out.println(e.getMessage());
	        }
	        
	        
	        return false;
	    }
	}
	

