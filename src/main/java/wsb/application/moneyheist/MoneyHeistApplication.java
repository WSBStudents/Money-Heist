package wsb.application.moneyheist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = {"wsb.application.moneyheist.jpa.repository", "wsb.application.moneyheist.auth"})
public class MoneyHeistApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoneyHeistApplication.class, args);
	}

}
