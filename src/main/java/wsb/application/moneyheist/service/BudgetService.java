package wsb.application.moneyheist.service;

import wsb.application.moneyheist.dto.BudgetDto;

import java.math.BigDecimal;
import java.util.List;

public interface BudgetService {

    BigDecimal getAmountAllBudgets();

    void addBudget(BudgetDto budgetDto);

    void deleteBudget(Long id);

    List<BudgetDto> getAllBudgets();
}
