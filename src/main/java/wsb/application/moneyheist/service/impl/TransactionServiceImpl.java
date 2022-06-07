package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.glasnost.orika.MapperFacade;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wsb.application.moneyheist.dto.BudgetDto;
import wsb.application.moneyheist.dto.TransactionDto;
import wsb.application.moneyheist.jpa.model.Agreement;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.service.ManagerService;
import wsb.application.moneyheist.service.TransactionService;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@Service
public class TransactionServiceImpl implements TransactionService {

    private static final String INCOME_TYPE = "INCOME";
    private static final String EXPENSE_TYPE = "EXPENSE";

    private ManagerService managerService;
    private MapperFacade mapper;

    @Override
    public List<TransactionDto> getAllTransaction(final Long budgetId) {
        return mapper.mapAsList(managerService.getAllTransactionForBudgetId(budgetId), TransactionDto.class);
    }

    @Override
    @Transactional
    public void addTransaction(final TransactionDto transactionDto) {
        final BudgetDto budgetDto = mapper.map(managerService.getBudgetById(transactionDto.getBudgetId()), BudgetDto.class);

        final BigDecimal amount = transactionDto.getAmount();
        budgetDto.setAmount(calculateBudget(budgetDto.getAmount(), amount, transactionDto.getType(), false));

        final Budget budget = mapper.map(budgetDto, Budget.class);
        managerService.addBudget(budget);

        final Agreement agreement = mapper.map(transactionDto, Agreement.class);
        agreement.setBudget(budget);
        managerService.addAgreement(agreement);
    }

    @Override
    public void deleteTransaction(final Long id) {
        final Agreement agreement = managerService.getTransactionById(id);
        managerService.deleteTransaction(id);
        refreshBudgetAmount(agreement);
    }

    private void refreshBudgetAmount(final Agreement agreement) {
        final Budget budget = agreement.getBudget();
        budget.setAmount(calculateBudget(budget.getAmount(), agreement.getAmount(), agreement.getType(), true));
        managerService.addBudget(budget);
    }

    @Override
    public List<TransactionDto> getTransaction(final Integer count) {
        List<Agreement> agreements;
        if (count != null) {
            agreements = managerService.getAllTransaction(PageRequest.of(0, count));
        } else {
            agreements = managerService.getAllTransaction(null);
        }

        return mapper.mapAsList(agreements, TransactionDto.class);
    }

    private BigDecimal calculateBudget(final BigDecimal budgetAmount,
                                       final BigDecimal transactionAmount,
                                       final String type,
                                       final boolean reverse) {
        switch (type) {
            case EXPENSE_TYPE:
                if (reverse) {
                    return budgetAmount.add(transactionAmount);
                } else {
                    return budgetAmount.subtract(transactionAmount);
                }
            case INCOME_TYPE:
                if (reverse) {
                    return budgetAmount.subtract(transactionAmount);
                } else {
                    return budgetAmount.add(transactionAmount);
                }
        }
        return budgetAmount;
    }

}

