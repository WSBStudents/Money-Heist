package wsb.application.moneyheist.config;

import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import wsb.application.moneyheist.dto.AccountDto;
import wsb.application.moneyheist.dto.TransactionDto;
import wsb.application.moneyheist.jpa.model.Account;
import wsb.application.moneyheist.jpa.model.Transaction;

@Configuration
public class OrikaConfig {

    private final MapperFactory mapperFactory = new DefaultMapperFactory.Builder().build();

    @Bean
    public MapperFacade mapperFacade() {
        mapperFactory.classMap(TransactionDto.class, Transaction.class)
                .field("accountDto", "account")
                .byDefault()
                .register();
        mapperFactory.classMap(AccountDto.class, Account.class)
                .byDefault()
                .register();

        return mapperFactory.getMapperFacade();
    }

}
