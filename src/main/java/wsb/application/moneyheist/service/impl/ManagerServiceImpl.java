package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.jpa.model.Transaction;
import wsb.application.moneyheist.jpa.repository.BudgetRepository;
import wsb.application.moneyheist.jpa.repository.TransactionRepository;
import wsb.application.moneyheist.service.ManagerService;

import java.util.List;

@Data
@AllArgsConstructor
@Service
public class ManagerServiceImpl implements ManagerService {

    private TransactionRepository transactionRepository;
    private BudgetRepository budgetRepository;

    @Override
    public void addBudget(final Budget budget) {
        budgetRepository.save(budget);
    }

    @Override
    public void deleteBudget(final Long id) {
        budgetRepository.deleteById(id);
    }

    @Override
    public List<Budget> getAllBudgets() {
        return budgetRepository.findAll();
    }

    @Override
    public Budget getBudgetById(final Long id) {
        return budgetRepository.getById(id);
    }

    @Override
    public void addTransaction(Transaction transaction) {
        transactionRepository.save(transaction);
    }

    @Override
    public void deleteTransaction(final Long id) {
        transactionRepository.deleteById(id);
    }

    @Override
    public List<Transaction> getAllTransactionForBudgetId(Long budgetId) {
        return transactionRepository.findAllByBudgetId(budgetId);
    }

    @Override
    public Transaction getTransactionById(final Long id) {
        return transactionRepository.findById(id).get();
    }

    @Override
    public List<Transaction> getAllTransaction(final PageRequest pageRequest) {
        if (pageRequest != null) {
            return transactionRepository.findAll(pageRequest).getContent();
        }
        return transactionRepository.findAll();
    }

}
