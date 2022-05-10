package wsb.application.moneyheist.config;

import ma.glasnost.orika.CustomMapper;
import ma.glasnost.orika.MapperBase;
import ma.glasnost.orika.MappingContext;
import wsb.application.moneyheist.dto.AccountDto;
import wsb.application.moneyheist.dto.TransactionDto;
import wsb.application.moneyheist.jpa.model.Account;
import wsb.application.moneyheist.jpa.model.Transaction;

public class TransactionCustomMapper extends CustomMapper<TransactionDto, Transaction> {

    @Override
    public void mapAtoB(TransactionDto transactionDto, Transaction transaction, MappingContext context) {
        AccountDto accountDto = transactionDto.getAccountDto();
        transaction.setAccount(new Account(accountDto.getId(), accountDto.getName(), accountDto.getType(), accountDto.getAmount()));
    }

    @Override
    public void mapBtoA(Transaction transaction, TransactionDto transactionDto, MappingContext context) {
        Account account = transaction.getAccount();
        transaction.setAccount(new Account(account.getId(), account.getName(), account.getType(), account.getAmount()));
    }
}
