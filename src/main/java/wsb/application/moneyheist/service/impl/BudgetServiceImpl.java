package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.glasnost.orika.MapperFacade;
import org.springframework.stereotype.Service;
import wsb.application.moneyheist.dto.BudgetDto;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.jpa.repository.BudgetRepository;
import wsb.application.moneyheist.service.BudgetService;

import java.math.BigDecimal;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Data
@AllArgsConstructor
@Service
public class BudgetServiceImpl implements BudgetService {

    private BudgetRepository budgetRepository;
    private MapperFacade mapper;

    @Override
    public BigDecimal getAmountAllBudgets() {
        final List<BudgetDto> budgets = mapper.mapAsList(budgetRepository.findAll(), BudgetDto.class);
        return budgets.stream()
                .map(BudgetDto::getAmount)
                .collect(toList())
                .stream()
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    @Override
    public void addBudget(BudgetDto budgetDto) {
        budgetRepository.save(mapper.map(budgetDto, Budget.class));
    }

    @Override
    public void deleteBudget(Long id) {
        budgetRepository.deleteById(id);
    }

    @Override
    public List<BudgetDto> getAllBudgets() {
        return mapper.mapAsList(budgetRepository.findAll(), BudgetDto.class);
    }

}
