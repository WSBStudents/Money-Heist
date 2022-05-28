package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.glasnost.orika.MapperFacade;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import wsb.application.moneyheist.dto.TransactionDto;
import wsb.application.moneyheist.jpa.model.Transaction;
import wsb.application.moneyheist.jpa.repository.TransactionRepository;
import wsb.application.moneyheist.service.TransactionService;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@Service
public class TransactionServiceImpl implements TransactionService {

    private TransactionRepository transactionRepository;
    private MapperFacade mapper;

    @Override
    public List<TransactionDto> getAllTransaction(final Long budgetId) {
        return mapper.mapAsList(transactionRepository.findAllByBudgetId(budgetId), TransactionDto.class);
    }

    @Override
    public void addTransaction(final TransactionDto transactionDto) {
        transactionRepository.save(mapper.map(transactionDto, Transaction.class));
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

