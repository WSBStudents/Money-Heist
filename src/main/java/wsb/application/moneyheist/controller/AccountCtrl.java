package wsb.application.moneyheist.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
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
        return accountService.getAccounts();
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
