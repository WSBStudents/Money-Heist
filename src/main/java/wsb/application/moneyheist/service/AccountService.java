package wsb.application.moneyheist.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.glasnost.orika.MapperFacade;
import org.springframework.stereotype.Service;
import wsb.application.moneyheist.dto.AccountDto;
import wsb.application.moneyheist.jpa.model.Account;
import wsb.application.moneyheist.jpa.repository.AccountRepository;

import java.util.List;

@Data
@AllArgsConstructor
@Service
public class AccountService {

    private AccountRepository accountRepository;
    private MapperFacade mapper;

    public List<AccountDto> getAccounts() {
        return mapper.mapAsList(accountRepository.findAll(), AccountDto.class);
    }

    public void updateAccount(final AccountDto accountDto) {
        accountRepository.save(mapper.map(accountDto, Account.class));
    }

    public void deleteAccount(final Long id) {
        accountRepository.deleteById(id);
    }

}

