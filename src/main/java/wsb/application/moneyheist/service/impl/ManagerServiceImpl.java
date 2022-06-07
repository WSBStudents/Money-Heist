package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wsb.application.moneyheist.jpa.model.Agreement;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.jpa.repository.BudgetRepository;
import wsb.application.moneyheist.jpa.repository.AgreementRepository;
import wsb.application.moneyheist.service.ManagerService;

import java.util.List;

@Data
@AllArgsConstructor
@Service
public class ManagerServiceImpl implements ManagerService {

    private AgreementRepository agreementRepository;
    private BudgetRepository budgetRepository;

    @Override
    public void addBudget(final Budget budget) {
        budgetRepository.save(budget);
    }

    @Override
    @Transactional
    public void deleteBudget(final Long id) {
        agreementRepository.deleteByBudget_Id(id);
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
    public void addAgreement(final Agreement agreement) {
        agreementRepository.save(agreement);
    }

    @Override
    public void deleteTransaction(final Long id) {
        agreementRepository.deleteById(id);
    }

    @Override
    public List<Agreement> getAllTransactionForBudgetId(final Long budgetId) {
        return agreementRepository.findAllByBudgetId(budgetId);
    }

    @Override
    public Agreement getTransactionById(final Long id) {
        return agreementRepository.findById(id).get();
    }

    @Override
    public List<Agreement> getAllTransaction(final PageRequest pageRequest) {
        if (pageRequest != null) {
            return agreementRepository.findAll(pageRequest).getContent();
        }
        return agreementRepository.findAll();
    }

}
