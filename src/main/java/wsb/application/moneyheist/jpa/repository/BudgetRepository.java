package wsb.application.moneyheist.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wsb.application.moneyheist.jpa.model.Budget;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {

}
