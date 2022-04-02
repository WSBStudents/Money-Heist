package wsb.application.moneyheist.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/test")
public class Main {

    @GetMapping
    public String getMain() {
        return "Hi!";
    }
}
