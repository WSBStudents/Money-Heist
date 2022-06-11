package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wsb.application.moneyheist.auth.service.impl.UserDetailsImpl;
import wsb.application.moneyheist.jpa.model.Agreement;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.jpa.repository.BudgetRepository;
import wsb.application.moneyheist.jpa.repository.AgreementRepository;
import wsb.application.moneyheist.service.ManagerService;

import java.util.Collections;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Data
@AllArgsConstructor
@Service
public class ManagerServiceImpl implements ManagerService {

    private AgreementRepository agreementRepository;
    private BudgetRepository budgetRepository;

    @Override
    public void addBudget(final Budget budget) {
        final Long userId = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        budget.setUserId(userId);
        budgetRepository.save(budget);
    }

    @Override
    @Transactional
    public void deleteBudget(final Long id) {
        final Long userId = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        final Budget budget = budgetRepository.findByIdAndUserId(id, userId);
        agreementRepository.deleteByBudget_Id(budget.getId());
        budgetRepository.deleteById(budget.getId());
    }

    @Override
    public List<Budget> getAllBudgets() {
        final Long userId = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        return budgetRepository.findByUserId(userId);
    }

    @Override
    public Budget getBudgetById(final Long id) {
        final Long userId = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        return budgetRepository.findByIdAndUserId(id, userId);
    }

    @Override
    public void addAgreement(final Agreement agreement) {
        agreementRepository.save(agreement);
    }

    @Override
    public void deleteTransaction(final Long id) {
        final Long userId = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        final Budget budget = agreementRepository.getById(id).getBudget();

        if (userId.equals(budget.getUserId())) {
            agreementRepository.deleteById(id);
        }
    }

    @Override
    public List<Agreement> getAllTransactionForBudgetId(final Long budgetId) {
        final Long userId = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        final Budget budget = budgetRepository.findByIdAndUserId(budgetId, userId);

        return budget != null ? agreementRepository.findAllByBudgetId(budgetId) : Collections.emptyList();
    }

    @Override
    public Agreement getTransactionById(final Long id) {
        final Long userId = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        final Agreement agreement = agreementRepository.getById(id);

        return userId.equals(agreement.getBudget().getUserId()) ? agreement : null;
    }

    @Override
    public List<Agreement> getAllTransaction(final PageRequest pageRequest) {
        final Long userId = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();

        List<Agreement> agreements;
        if (pageRequest != null) {
            agreements = agreementRepository.findAll(pageRequest).getContent();
        } else {
            agreements = agreementRepository.findAll();
        }
        return agreements.stream()
            .filter(agreement -> userId.equals(agreement.getBudget().getUserId()))
            .collect(toList());
    }

}
