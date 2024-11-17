package jwt.Authentication.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jwt.Authentication.auth.entity.LoginResponse;
import jwt.Authentication.auth.entity.LoginUserDto;
import jwt.Authentication.auth.entity.RegisterUserDto;
import jwt.Authentication.auth.entity.User;
import jwt.Authentication.auth.service.AuthenticationService;
import jwt.Authentication.auth.service.JwtService;

//@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/jwtAuthen")
@RestController
public class UserController {

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AuthenticationService authenticationService;

//		    public void AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
//		        this.jwtService = jwtService;
//		        this.authenticationService = authenticationService;
//		    }

//		    @PostMapping("/signup")
//		    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
//		    	System.out.println("registerUserDto"+ registerUserDto.getPassword());
//		        User registeredUser = authenticationService.signup(registerUserDto);
//
//		        return ResponseEntity.ok(registeredUser);
//		    }

	@PostMapping("/login")
	public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {

		System.out.println("loginUserDto--" + loginUserDto.getPassword() + "username" + loginUserDto.getUsername());

		User authenticatedUser = authenticationService.authenticate(loginUserDto);

		String jwtToken = jwtService.generateToken(authenticatedUser);

		LoginResponse loginResponse = new LoginResponse().setToken(jwtToken)
				.setExpiresIn(jwtService.getExpirationTime());

		return ResponseEntity.ok(loginResponse);
	}

	@PostMapping("/HomePage")
	public String loginPage() {
		System.out.println("login page here");
		return "login successfully";
	}

}
