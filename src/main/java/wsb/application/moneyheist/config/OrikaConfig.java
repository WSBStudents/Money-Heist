package wsb.application.moneyheist.config;

import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import wsb.application.moneyheist.dto.BudgetDto;
import wsb.application.moneyheist.dto.TransactionDto;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.jpa.model.Agreement;

@Configuration
public class OrikaConfig {

    private final MapperFactory mapperFactory = new DefaultMapperFactory.Builder().build();

    @Bean
    public MapperFacade mapperFacade() {
        mapperFactory.classMap(TransactionDto.class, Agreement.class)
                .field("budgetId", "budget.id")
                .byDefault()
                .register();

        mapperFactory.classMap(BudgetDto.class, Budget.class)
                .byDefault()
                .register();

        return mapperFactory.getMapperFacade();
    }

}
