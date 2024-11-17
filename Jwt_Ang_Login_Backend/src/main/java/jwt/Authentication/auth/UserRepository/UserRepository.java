package jwt.Authentication.auth.UserRepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import jwt.Authentication.auth.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User ,Integer>{
	
	Optional<User> findByUsername(String password);

}
