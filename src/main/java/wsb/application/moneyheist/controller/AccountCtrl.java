package wsb.application.moneyheist.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import wsb.application.moneyheist.dto.AccountDto;
import wsb.application.moneyheist.service.AccountService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/account")
public class AccountCtrl {

    private AccountService accountService;

    @GetMapping("/all")
    public List<AccountDto> getAccounts() {
        return accountService.getAllAccounts();
    }

    @PostMapping("/add")
    public void addAccount(@RequestBody final AccountDto accountDto) {
        accountService.updateAccount(accountDto);
    }

    @DeleteMapping("/delete")
    public void deleteAccount(@RequestParam final Long id) {
        accountService.deleteAccount(id);
    }

}
