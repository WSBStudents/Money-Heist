package wsb.application.moneyheist.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import wsb.application.moneyheist.dto.BudgetDto;
import wsb.application.moneyheist.service.BudgetService;

import java.math.BigDecimal;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/budget")
public class BudgetCtrl {

    private BudgetService budgetService;

    @PostMapping
    public void addBudget(@RequestBody final BudgetDto budgetDto) {
        budgetService.addBudget(budgetDto);
    }

    @DeleteMapping("/{id}")
    public void deleteBudget(@PathVariable final Long id) {
        budgetService.deleteBudget(id);
    }

    @GetMapping("/all")
    public List<BudgetDto> getAllBudgets() {
        return budgetService.getAllBudgets();
    }

    @GetMapping("/all/amount")
    public BigDecimal getAmountAllBudgets() {
        return budgetService.getAmountAllBudgets();
    }

}
