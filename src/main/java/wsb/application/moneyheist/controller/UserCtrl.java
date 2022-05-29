package wsb.application.moneyheist.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import wsb.application.moneyheist.dto.UserDto;
import wsb.application.moneyheist.service.UserService;


@AllArgsConstructor
@RestController
@RequestMapping(value = "/user")
public class UserCtrl {

    private UserService userService;

    @GetMapping
    public UserDto getUserInfo() {
        return userService.getUserInfo();
    }

    @PostMapping
    public void addUser() {
        userService.addUser(null);
    }

}
