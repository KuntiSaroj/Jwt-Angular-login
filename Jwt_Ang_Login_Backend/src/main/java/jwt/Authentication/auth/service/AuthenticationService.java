package jwt.Authentication.auth.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jwt.Authentication.auth.UserRepository.UserRepository;
import jwt.Authentication.auth.entity.LoginUserDto;
import jwt.Authentication.auth.entity.RegisterUserDto;
import jwt.Authentication.auth.entity.User;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AuthenticationService {
	
	 private final UserRepository userRepository;
	    
	    private final PasswordEncoder passwordEncoder;
	    
	    private final AuthenticationManager authenticationManager;

	    public AuthenticationService(
	        UserRepository userRepository,
	        AuthenticationManager authenticationManager,
	        PasswordEncoder passwordEncoder
	    ) {
	        this.authenticationManager = authenticationManager;
	        this.userRepository = userRepository;
	        this.passwordEncoder = passwordEncoder;
	    }

	    public User signup(RegisterUserDto input) {
	    	System.out.println("passord--" + input.getPassword());
	    	System.out.println("passord--" + input.getFullName());
	        User user = new User();
	        user.setUsername("Ksaroj08@gmail.com");
	        user.setPassword(passwordEncoder.encode("ksaroj"));
	        user.setFullName("Kunti Saroj");
	        
//	                .setFullName(input.getFullName())
//	                .setEmail(input.getEmail())
//	                .setPassword(passwordEncoder.encode(input.getPassword()));

	        return userRepository.save(user);
	    }

	    public User authenticate(LoginUserDto input) {
	    	User u = new User();
	    	u.setFullName("");
	    	u.setUsername("ksaroj");
	    	return u;
//	        authenticationManager.authenticate(
//	                new UsernamePasswordAuthenticationToken(
//	                        "ksaroj",
//	                        "ksaroj123"
//	                )
//	        );

//	        return userRepository.findByUsername("ksaroj123")
//	                .orElseThrow();
	    }

}
