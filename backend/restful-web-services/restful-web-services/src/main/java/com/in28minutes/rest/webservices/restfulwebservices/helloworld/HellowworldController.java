package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.rest.webservices.restfulwebservices.helloworld.HelloWorldBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HellowworldController {
	
	
	//return string
	@GetMapping(path="/hello-world")
	public String helloworld() {
		return "Hello World";
	}
	
	//returning json object
	
	  @GetMapping(path="/hello-world-bean")
	  public HelloWorldBean helloworldBean(){ 
		  return new HelloWorldBean( "Hello World from Bean"); 
	   }
	  
	  @GetMapping(path="/hello-world/path-variable/{name}")
	  public HelloWorldBean helloworldPathvariable(@PathVariable String name){ 
		  return new HelloWorldBean(String.format("Hello World path, %s",name)); 
	   }
	 
}
