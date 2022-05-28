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

    public static final String INCOME_TYPE = "INCOME";
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
        budgetDto.setAmount(calculateAmount(budgetDto, amount, transactionDto.getType()));

        final Budget budget = mapper.map(budgetDto, Budget.class);
        budgetRepository.save(budget);

        final Transaction transaction = mapper.map(transactionDto, Transaction.class);
        transaction.setBudget(budget);
        transactionRepository.save(transaction);
    }

    private BigDecimal calculateAmount(final BudgetDto budgetDto, final BigDecimal amount, final String type) {
        if (INCOME_TYPE.equals(type)) {
            return budgetDto.getAmount().add(amount);
        } else {
            return budgetDto.getAmount().subtract(amount);
        }
    }

    @Override
    public void deleteTransaction(final Long id) {
        transactionRepository.deleteById(id);
    }

    @Override
    public List<TransactionDto> getTransaction(Integer count) {
        List<Transaction> transactions;
        if (count != null) {
            transactions = transactionRepository.findAll(PageRequest.of(0, count)).getContent();
        } else {
            transactions = transactionRepository.findAll();
        }

        return mapper.mapAsList(transactions, TransactionDto.class);
    }

}

