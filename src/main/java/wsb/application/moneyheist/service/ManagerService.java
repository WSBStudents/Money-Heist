package wsb.application.moneyheist.service;

import org.springframework.data.domain.PageRequest;
import wsb.application.moneyheist.jpa.model.Agreement;
import wsb.application.moneyheist.jpa.model.Budget;

import java.util.List;

public interface ManagerService {

    void addBudget(Budget budget);

    void deleteBudget(Long id);

    List<Budget> getAllBudgets();

    Budget getBudgetById(Long id);

    void addAgreement(Agreement agreement);

    void deleteTransaction(Long id);

    List<Agreement> getAllTransactionForBudgetId(Long budgetId);

    Agreement getTransactionById(Long id);

    List<Agreement> getAllTransaction(PageRequest pageRequest);
}
