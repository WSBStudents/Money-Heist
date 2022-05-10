package wsb.application.moneyheist.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wsb.application.moneyheist.jpa.model.Account;
import wsb.application.moneyheist.jpa.model.Transaction;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findAllByAccountId(Long accountId);

}
