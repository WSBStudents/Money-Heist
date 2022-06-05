package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.glasnost.orika.MapperFacade;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wsb.application.moneyheist.dto.BudgetDto;
import wsb.application.moneyheist.dto.TransactionDto;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.jpa.model.Transaction;
import wsb.application.moneyheist.jpa.repository.BudgetRepository;
import wsb.application.moneyheist.jpa.repository.TransactionRepository;
import wsb.application.moneyheist.service.TransactionService;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@Service
public class TransactionServiceImpl implements TransactionService {

    private static final String INCOME_TYPE = "INCOME";

    private TransactionRepository transactionRepository;
    private BudgetRepository budgetRepository;
    private MapperFacade mapper;

    @Override
    public List<TransactionDto> getAllTransaction(final Long budgetId) {
        return mapper.mapAsList(transactionRepository.findAllByBudgetId(budgetId), TransactionDto.class);
    }

    @Override
    @Transactional
    public void addTransaction(final TransactionDto transactionDto) {
        final BudgetDto budgetDto = mapper.map(budgetRepository.getById(transactionDto.getBudgetId()), BudgetDto.class);

        final BigDecimal amount = transactionDto.getAmount();
        budgetDto.setAmount(calculateBudget(budgetDto.getAmount(), amount, transactionDto.getType(), false));

        final Budget budget = mapper.map(budgetDto, Budget.class);
        budgetRepository.save(budget);

        final Transaction transaction = mapper.map(transactionDto, Transaction.class);
        transaction.setBudget(budget);
        transactionRepository.save(transaction);
    }

    @Override
    public void deleteTransaction(final Long id) {
        final Transaction transaction = transactionRepository.findById(id).get();
        transactionRepository.deleteById(id);
        refreshBudgetAmount(transaction);
    }

    private void refreshBudgetAmount(final Transaction transaction) {
        final Budget budget = transaction.getBudget();
        budget.setAmount(calculateBudget(budget.getAmount(), transaction.getAmount(), transaction.getType(), true));
        budgetRepository.save(budget);
    }

    @Override
    public List<TransactionDto> getTransaction(final Integer count) {
        List<Transaction> transactions;
        if (count != null) {
            transactions = transactionRepository.findAll(PageRequest.of(0, count)).getContent();
        } else {
            transactions = transactionRepository.findAll();
        }

        return mapper.mapAsList(transactions, TransactionDto.class);
    }

    private BigDecimal calculateBudget(final BigDecimal budgetAmount,
                                       final BigDecimal transactionAmount,
                                       final String type,
                                       final boolean reverse) {
        switch (type) {
            case "EXPENSE":
                if (reverse) {
                    return budgetAmount.add(transactionAmount);
                } else {
                    return budgetAmount.subtract(transactionAmount);
                }
            case "INCOME":
                if (reverse) {
                    return budgetAmount.subtract(transactionAmount);
                } else {
                    return budgetAmount.add(transactionAmount);
                }
        }
        return budgetAmount;
    }

}

