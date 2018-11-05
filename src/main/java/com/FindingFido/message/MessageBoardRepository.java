//package com.FindingFido.message;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import com.FindingFido.message.Messages;
//
//
//public interface MessageBoardRepository extends JpaRepository<Messages, Integer> {
//
//	@Query("SELECT m FROM Messages m LEFT JOIN FETCH m.author ORDER BY p.date DESC")
//	List<Post> findLatest5();
//	
//	List<Messages> findOne(Integer id);
//	List<Messages> findAll();
//	Messages findById(Long id);
//	Messages create(Messages messages);
//	Messages edit(Messages messages);
//	void deleteById(Long id);
//
//}
