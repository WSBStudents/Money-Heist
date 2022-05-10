package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.glasnost.orika.MapperFacade;
import org.springframework.stereotype.Service;
import wsb.application.moneyheist.dto.AccountDto;
import wsb.application.moneyheist.jpa.model.Account;
import wsb.application.moneyheist.jpa.repository.AccountRepository;
import wsb.application.moneyheist.service.AccountService;

import java.util.List;

@Data
@AllArgsConstructor
@Service
public class AccountServiceImpl implements AccountService {

    private AccountRepository accountRepository;
    private MapperFacade mapper;

    @Override
    public List<AccountDto> getAllAccounts() {
        return mapper.mapAsList(accountRepository.findAll(), AccountDto.class);
    }

    @Override
    public void updateAccount(final AccountDto accountDto) {
        accountRepository.save(mapper.map(accountDto, Account.class));
    }

    @Override
    public void deleteAccount(final Long id) {
        accountRepository.deleteById(id);
    }

}

