package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.glasnost.orika.MapperFacade;
import org.springframework.stereotype.Service;
import wsb.application.moneyheist.dto.BudgetDto;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.service.BudgetService;
import wsb.application.moneyheist.service.ManagerService;

import java.math.BigDecimal;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Data
@AllArgsConstructor
@Service
public class BudgetServiceImpl implements BudgetService {

    private ManagerService managerService;
    private MapperFacade mapper;

    @Override
    public BigDecimal getAmountAllBudgets() {
        final List<BudgetDto> budgets = mapper.mapAsList(managerService.getAllBudgets(), BudgetDto.class);
        return budgets.stream()
                .map(BudgetDto::getAmount)
                .collect(toList())
                .stream()
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    @Override
    public void addBudget(final BudgetDto budgetDto) {
        managerService.addBudget(mapper.map(budgetDto, Budget.class));
    }

    @Override
    public void deleteBudget(final Long id) {
        managerService.deleteBudget(id);
    }

    @Override
    public List<BudgetDto> getAllBudgets() {
        return mapper.mapAsList(managerService.getAllBudgets(), BudgetDto.class);
    }

    @Override
    public BudgetDto getBudgetById(final Long id) {
        return mapper.map(managerService.getBudgetById(id), BudgetDto.class);
    }

}
