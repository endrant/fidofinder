//package com.FindingFido.message;
//
//import java.util.Date;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//import com.FindingFido.user.Users;
//
//@Entity
//@Table(name="messages")
//public class Messages {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    private String title;
//    private String content;
//    private Users author;
//    private Date date = new Date();
//    
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return content;
//    }
//
//    public void setName(String name) {
//        this.content = name;
//    }
//
//    public String getContent() {
//        return content;
//    }
//
//    public void setContent(String content) {
//        this.content = content;
//    }
//    
//    public Date getDate() {
//    	return date;
//    }
//    
//    public void setDate(Date date) {
//    	this.date = date;
//    }
//
//
//	public String getTitle() {
//		return title;
//	}
//
//	public void setTitle(String title) {
//		this.title = title;
//	}
//
//	public Users getAuthor() {
//		return author;
//	}
//
//	public void setAuthor(Users author) {
//		this.author = author;
//	}
//    
//	public Messages(Long id, String title, String content, Users author, Date date) {
//		super();
//		this.id = id;
//		this.setTitle(title);
//		this.content = content;
//		this.setAuthor(author);
//		this.date = date;
//	}
//    
//    public Messages() {
//    }
//
//    
//}