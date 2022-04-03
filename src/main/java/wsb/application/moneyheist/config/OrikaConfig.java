package wsb.application.moneyheist.config;

import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;
import ma.glasnost.orika.metadata.ClassMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import wsb.application.moneyheist.dto.AccountDto;
import wsb.application.moneyheist.jpa.model.Account;

@Configuration
public class OrikaConfig {

    private final MapperFactory mapperFactory = new DefaultMapperFactory.Builder().build();

    @Bean
    public MapperFacade mapperFacade() {
        return mapperFactory.getMapperFacade();
    }

    @Bean
    public ClassMap<AccountDto, Account> accountDtoAccountClassMap() {
        return mapperFactory.classMap(AccountDto.class, Account.class).byDefault().toClassMap();
    }

}
