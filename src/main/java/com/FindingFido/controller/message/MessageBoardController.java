//package com.FindingFido.controller.message;
//
//import java.util.List;
//
//import org.apache.logging.log4j.message.Message;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping({"/","/messageboard"})
//public class MessageBoardController {
//
//    @Autowired
//    MessageBoardRepository dao;
//    
//    @GetMapping("/")
//	public String index() {
//		return "index";
//	}
//		
//	@GetMapping("/login")
//	public String getLogin() {
//	   return "login";
//	    }
//
//    @GetMapping("/messageboard")
//    public List<Message> getMessages(){
//        List<Message> foundMessages = dao.findAll();
//        return foundMessages;
//    }
//
//    @GetMapping("/messageboard/{id}")
//    public ResponseEntity<Message> getMessage(@PathVariable(value="id") Integer id){
//        Message foundMessage = dao.findOne(id);
//
//        if(foundMessage == null) {
//            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
//        }
//        return ResponseEntity.ok(foundMessage);
//    }
//
//    @PostMapping("/messageboard")
//    public ResponseEntity<Message> postMessage(@RequestBody Message message){
//
//     
//        Message createdMessage = dao.save(message);
//
//        return ResponseEntity.ok(createdMessage);
//    }
//
//    @DeleteMapping("/messageboard/{id}")
//    public ResponseEntity<Message> deleteMessage(@PathVariable(value="id") Integer id){
//        Message foundMessage = dao.findOne(id);
//
//        if(foundMessage == null) {
//            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
//        }else {
//            dao.delete(foundMessage);
//        }
//        return ResponseEntity.ok().build();
//    }
//}