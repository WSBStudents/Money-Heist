package wsb.application.moneyheist.service;

import wsb.application.moneyheist.dto.AccountDto;

import java.util.List;

public interface AccountService {
    List<AccountDto> getAllAccounts();

    void updateAccount(AccountDto accountDto);

    void deleteAccount(Long id);
}
