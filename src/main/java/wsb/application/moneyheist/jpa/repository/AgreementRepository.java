package wsb.application.moneyheist.jpa.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wsb.application.moneyheist.jpa.model.Agreement;

import java.util.List;

@Repository
public interface AgreementRepository extends JpaRepository<Agreement, Long> {

    List<Agreement> findAllByBudgetId(Long budgetId);

    Page<Agreement> findAll(Pageable pageable);

    void deleteByBudget_Id(Long budgetId);

}
