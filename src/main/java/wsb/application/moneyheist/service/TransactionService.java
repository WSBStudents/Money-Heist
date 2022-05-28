package wsb.application.moneyheist.service;

import wsb.application.moneyheist.dto.TransactionDto;

import java.util.List;

public interface TransactionService {
    List<TransactionDto> getAllTransaction(Long budgetId);

    void addTransaction(TransactionDto transactionDto);

    void deleteTransaction(Long id);

    List<TransactionDto> getTransaction(Integer count);
}
