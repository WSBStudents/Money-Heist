package wsb.application.moneyheist.service;

import org.springframework.data.domain.PageRequest;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.jpa.model.Transaction;

import java.util.List;

public interface ManagerService {

    void addBudget(final Budget budget);
    void deleteBudget(Long id);

    List<Budget> getAllBudgets();

    Budget getBudgetById(Long id);

    void addTransaction(Transaction transaction);

    void deleteTransaction(Long id);

    List<Transaction> getAllTransactionForBudgetId(Long budgetId);

    Transaction getTransactionById(Long id);

    List<Transaction> getAllTransaction(PageRequest pageRequest);
}
